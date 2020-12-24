const express = require("express");
const app = express();
const http = require("http");

app.set("port", process.env.PORT || 5000);

//For avoidong Heroku $PORT error
app
  .get("/", function (request, response) {
    var result = `App is running`;
    response.send(result);
  })
  .listen(app.get("port"), function () {
    console.log(
      "App is running, server is listening on port ",
      app.get("port")
    );
  });
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const ms = require('ms');
const moment = require('moment');
const Jimp = require('jimp');
const db = require('quick.db');
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const youtube = new YouTube("AIzaSyCvz1WwEzUfcRd2TEfi9DW1czFonxtfNgk");
const queue = new Map();
const { promisify } = require("util");
require('./util/eventLoader')(client);


var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};




client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);


async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  console.log(video);
  const song = {
    id: video.id,
    title: video.title,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
    durations: video.duration.seconds,
    views: video.views
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(msg.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(
        `❎ | **Şarkı Sisteminde Problem Var Hata Nedeni: ${error}**`
      );
      queue.delete(msg.guild.id);
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setTitle(
            `❎ | **Şarkı Sisteminde Problem Var Hata Nedeni: ${error}**`
          )
          .setColor("RANDOM")
      );
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    return msg.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`**\`${song.title}\` adlı şarkı kuyruğa eklendi!**`)
        .setColor("RANDOM")
    );
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection
    .playStream(ytdl(song.url))
    .on("end", reason => {
      if (reason === "**Yayın Akış Hızı yeterli değil.**")
        console.log("Şarkı Bitti.");
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

  serverQueue.textChannel.sendEmbed(
    new Discord.RichEmbed()
      .setColor("RANDOM")
      .setColor("RANDOM")
      .setTitle(
        `**Şarkı Başladı** 
Pingim: ${client.ping}`
      )
      .setThumbnail(
        `https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/645797096842199051/649361326992523274/efekt.gif"
      )

      .addField("Süre", `${song.durationm}:${song.durations}`, true)
      .setColor("#00ccff")
      .addField("Poetica Studio")

  );
  
}
client.on("guildDelete", guild => {
  let rrrsembed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle(" Bot Kickledi ")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.get("734544145951096885").send(rrrsembed);
});

client.on("guildCreate", guild => {
  if (guild.memberCount < 15) {
    let rrsembed = new Discord.RichEmbed()

      .setColor("GREEN")
      .setTitle(" Bot Eklendi ")
      .addField("Sunucu Adı:", guild.name)
      .addField("Sunucu sahibi", guild.owner)
      .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
      .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
      .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);
    client.channels.get(`734544133175246898`).send(rrsembed);
    guild.owner.send(
      `Sunucun 100'den düşük üyeye sahip olduğu için sunucundan ayrılıyorum.`
    );
    guild.leave();
  } else {
    let rrrsembed = new Discord.RichEmbed()

      .setColor("GREEN")
      .setTitle(" Bot Eklendi ")
      .addField("Sunucu Adı:", guild.name)
      .addField("Sunucu sahibi", guild.owner)
      .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
      .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
      .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);
    client.channels.get(`734544133175246898`).send(rrrsembed);
  }
});



let say = 0;

function refreshStatus() {
  say++;

  if (say === 1) {
    let servers = 0;

    servers = client.guilds.size;

    let members = client.guilds
      .reduce((a, b) => a + b.memberCount, 0)
      .toLocaleString();

    client.user.setActivity(
      `${servers} Adet Sunucuya ve ${members} Kullanıcıya Hizmet Veriyor`,
      { type: "PLAYING" }
    );
  } else {
    client.user.setActivity(`p!yardım | © Poetica 2020  Radyo #FAÇA`, { type: "WATCHING" });
    say = 0;
  }

  setTimeout(refreshStatus, 10000);
}
client.on("ready", () => {
  refreshStatus();
  
  
  
  
  
});