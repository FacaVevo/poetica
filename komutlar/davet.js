const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
    .setTitle("Davet")
    .setDescription("")
    .setColor(0x00ffff)
    .addField(
      "» Linkler",
      `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=733764591431188555&scope=bot&permissions=0)` +
        "**\n**" ,
      false
    )
    .setFooter("Poetica | Bot");

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(
        "asciidoc",
        `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` +
          prefix +
          `${command.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dvt"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Botun Daveti",
  usage: "davet "
};
