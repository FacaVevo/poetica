const Discord = require('discord.js');
exports.run = async function(client, message) {
  if(!message.member.voiceChannel)
    {
		 message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setDescription("<a:635151789838172197:734601413899845683> ** Bir sesli kanalda değilsiniz!**"))
    .then(m => m.delete(10000))
          .catch(console.error);
}
  else
    {
      if(!message.guild.me.voiceChannel)
        {
           message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setDescription("<a:635151789838172197:734601413899845683> ** Bir sesli kanalda değilsiniz!**"))
        .then(m => m.delete(10000))
          .catch(console.error);
}
      else
        {
          let bot = message.guild.me.voiceChannelID;
          let user = message.member.voiceChannelID;
          if(bot !== user)
            {
               message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setDescription("<a:635151789838172197:734601413899845683> **Seninle aynı sesli kanalda değilim!**"))
            .then(m => m.delete(10000))
          .catch(console.error);
}
          else
            {
               message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setDescription("<a:tik:734601424272490637> **Kanaldan başarıyla ayrıldım!**"))
              .then(m => m.delete(10000))
              .catch(console.error);
              message.guild.me.voiceChannel.leave();
            
}
        }
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['leave', 'dc', 'disconnect', 'l'], 
  permLevel: 0 
};

exports.help = {
  name: 'ayrıl',
  description: 'Bot kanaldan ayrılır.',
  usage: 'ayrıl'
};