const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {
  const emoji3 = client.emojis.find(emoji => emoji.name === "poetica");
  
const clerancetouch = new Discord.RichEmbed()
   .setColor("PURPLE")
.setAuthor(client.user.username , client.user.avatarURL)
    .setDescription("<a:poetica2:738015042544336896> **Bu botu sende kullanmak istiyorsan buraya tıklayarak ekleyebilirsin!** [Davet Et](https://discord.com/oauth2/authorize?client_id=733764591431188555&scope=bot&permissions=0)\n\n** Poetica Bot Yardım Sistemi **")
   .setTimestamp()
  .addField(`${emoji3} p!çal `,'\`Olduğunuz Odada Radio Çalmaya Başlar.\`')
.addField(`${emoji3} p!radyo `,'\`Radyo Listelerini Gösterir.\`')
.addField(`${emoji3} p!ayrıl `,' \`Botu Odadan Çıkarır.\`')
.addField(`${emoji3} p!davet `,' \`Botun Davetini Gösterir.\`')
.setThumbnail("https://cdn.discordapp.com/avatars/733764591431188555/8ca1eed21a011f420062499d8a8479a5.png?size=2048")
  .setFooter(client.user.username, client.user.avatarURL)
.setTimestamp()
message.channel.send(clerancetouch).then(msg => msg.delete(20000));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'Komut kategorilerini gösterir.',
  usage: 'yardım'
};