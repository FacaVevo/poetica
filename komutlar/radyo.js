const db = require("quick.db");
const Discord = require("discord.js");
const client = new Discord.Client();

const radyo = {
  worldhit: "http://37.247.98.8/stream/34/ ",
  damarfm: "http://yayin.damarfm.com:8080/; ",
  kralfm: "http://kralwmp.radyotvonline.com/;?type=http&nocache=73690",
  vergın: "https://playerservices.streamtheworld.com/api/livestream-redirect/VIRGIN_RADIOAAC.aac?dist=onlineradiobox ",
  fenomenakustik: "http://fenomenakustik.listenfenomen.com/fenomenakustik/128/icecast.audio",
  powertürk: "http://powerturkakustik.listenpowerapp.com/powerturkakustik/mpeg/icecast.audio",
  superfm: "https://17733.live.streamtheworld.com/SUPER_FM.mp3",
  seymen: "https://yayin.radyoseymen.com.tr:1070/stream",
  powerfm: "http://powerfm.listenpowerapp.com/powerfm/mpeg/icecast.audio",
  doksan: "http://37.247.98.8/stream/166/",
  bestfm: "http://46.20.7.126/;stream.mp3",
  slowRadyo: "http://yayindaslowradyo.net:5050/stream?type=http&nocache=208949",
  joytürkrock: "https://17703.live.streamtheworld.com/JOYTURK_ROCK.mp3",
  arabesk :"http://37.59.205.232:6688/;stream.mp3",
  showradyo: "http://46.20.3.229/;?type=http&nocache=103533",
  Pop90:"https://17733.live.streamtheworld.com/POP90.mp3",
  taksimclup:"http://www.canliradyolar.org/wp-content/themes/shopstudio/player/taksim-fm.html",
  İstanbulFM:"http://45.32.154.169:9300/stream?type=http&nocache=53954",
  powerpop:"http://powerpop.listenpowerapp.com/powerpop/mpeg/icecast.audio",
  fenomenturk:"http://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio",
  fenomenpop:"http://fenomenoriental.listenfenomen.com/fenomenpop/128/icecast.audio",
  radioarabesk:"http://radyoarabesk.info:9700/stream?type=http&nocache=69",
  arabeskvadi:"http://95.173.179.154:9998/stream?type=http&nocache=15727",
  slowkaradeniz:"http://dinle.slowkaradenizfm.com:9578/stream?type=http&nocache=46043",
  SlowHome:"http://37.247.98.8/stream/27/;?type=http&nocache=314213",
  babaradyo:"http://46.20.7.116",
  ArabeskFm:"http://arabeskmelodi.kesintisizyayin.com:8888/;",
  RelaxHome:"http://37.247.98.8/stream/26/;?type=http&nocache=314212",
  fenomenyabancı:"http://fenomen.listenfenomen.com/fenomen/128/icecast.audio",
  fenomenclup:"http://fenomenclubbin.listenfenomen.com/fenomenclubbin/128/icecast.audio",
  fenomenrap:"http://fenomenoriental.listenfenomen.com/fenomenrap/128/icecast.audio",
  powertürkakustik:"http://powerturkakustik.listenpowerapp.com/powerturkakustik/mpeg/icecast.audio",
  efkarfm:"http://www.arabeskinsesi.net:9958/;",
  arabeskalemi:"http://37.247.101.101:5934/;",
};

exports.run = function(bot, message, args) {
  message.delete(10000).catch(console.error);

  if (message.guild.me.voiceChannelID && (message.guild.me.voiceChannelID !== message.member.voiceChannelID)) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setDescription(`**:bangbang: Üzgünüm şuan başka kanala bağlıyım :/ :bangbang:**`))
      .then(m => m.delete(15000))
      .catch(console.error);
  if (!message.member.voiceChannel)
    return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLAACK').setDescription("**<a:renkli:734600754668634233> Önce Ses Kanalına Bağlanman Gerek. !**"))
      
      
      .then(m => m.delete(15000))
      .catch(console.error);
  else {
    if (!args[0] || args[0] === "help" || args[0] === "yardım") {
    } else if (args[0].toLowerCase() === "fenomen" || args[0] === "1") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.worldhit);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLAACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `WorldHitFM` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "BestFm " || args[0] === "2") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.bestfm);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `BestFm Radio` çalıyor.**"))
        .then(m => m.delete(10000))
        .catch(console.error);
      });
    } else if (
      args[0].toLowerCase() === "kapat" ||
      args[0].toLowerCase() === "bitir"
    ) {
      message.member.voiceChannel.leave();
      return message.channel.send(
        `Bu kanaldan ayrıldım ${message.member.voiceChannel}.`
      );
    } else if (args[0].toLowerCase() === "Pop90" || args[0] === "3") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.Pop90);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `Pop90 Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "Show Radio" || args[0] === "4") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.showradyo);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `Show Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "TaksimClup Radio" || args[0] === "5") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.taksimclup);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `TaksimClup Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (
      args[0].toLowerCase() === "PowerTürk Radio" ||
      args[0] === "6"
    ) {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.powertürk);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `PowerTürk Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (
      args[0].toLowerCase() === "İstanbulFM Radio" ||
      args[0] === "7"
    ) {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.İstanbulFM);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `İstanbulFm  Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "PowerPop Radio" || args[0] === "8") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.powerpop);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `PowerPop Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "FenomenTÜRK Radio" || args[0] === "9") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.fenomenturk);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `FenomenTÜRK Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "FenomenPOP Radio" || args[0] === "10") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.fenomenpop);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `FenomenPop Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "Slow Radio" || args[0] === "11") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.slowRadyo);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Slow  Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "RadioArabesk " || args[0] === "12") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.radioarabesk);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `RadioArabesk` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
});
} else if (
      args[0].toLowerCase() === "ArabeskVadisi Radio" ||
      args[0] === "13"
    ) {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.arabeskvadi);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `ArabeskVadisi Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "SlowHome Radio" || args[0] === "14") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.SlowHome);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `SlowHome Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
 
 } else if (args[0].toLowerCase() === "SlowKaradeniz Radio" || args[0] === "15") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.slowkaradeniz);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `SlowKaradeniz Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (
      args[0].toLowerCase() === "BabaRadyo Radio" ||
      args[0] === "16"
    ) {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.babaradyo);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `BabaRadyo Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "RelaxHome Radio" || args[0] === "17") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.RelaxHome);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `RelaxHome Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "ArabeskAlemi Radio" || args[0] === "18") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.arabeskalemi);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `ArabeskAlemi Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "ArabeskDamar Radio" || args[0] === "19") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.damarfm);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `ArabeskDamar Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "ArabeskFm Radio" || args[0] === "20") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.ArabeskFm);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `ArabeskFm Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "FenomenYabancı" || args[0] === "21") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.fenomenyabancı);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `FenomenYabancı Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "PowerFm" || args[0] === "22") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.powerfm);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `PowerFm Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "WorldHitFm" || args[0] === "23") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.worldhit);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLAACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `WorldHitFM` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "FenomenClup" || args[0] === "24") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.fenomenclup);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLAACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `FenomenClup` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "FenomenRap" || args[0] === "25") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.fenomenrap);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLAACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `FenomenRap` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "PowerTürkAkustik" || args[0] === "26") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.powertürkakustik);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLAACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `PowerTürkAkustik` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "EfkarFm" || args[0] === "27") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.efkarfm);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLAACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `EfkarFm` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "KralFm" || args[0] === "28") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.kralfm);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLAACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `KralFm` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "SeymenFm" || args[0] === "29") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.seymen);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLAACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `SeymenFm` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "SuperFm" || args[0] === "30") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.superfm);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLAACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `SuperFm` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "90'LAR " || args[0] === "31") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.doksan);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLAACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `90'LAR Radio` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
    } else if (args[0].toLowerCase() === "JoyTürkRock " || args[0] === "32") {
      message.member.voiceChannel.join().then(connection => {
        var dispatcher = connection.playStream(radyo.joytürkrock);
        return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLAACK').setDescription("<a:dng:734600754668634233> | **Başarılı! `JoyTürkRock` çalıyor.**"))
          .then(m => m.delete(10000))
          .catch(console.error);
      });
      
      
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "çal",
  description: "",
  usage: "çal"
};
