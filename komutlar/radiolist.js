const Discord = require('discord.js');  

exports.run = (client, message, args) => {

  let pages =
              [
       
              '**\n ♪ Radyo İstasyonları ♪ \n \n <a:yesilhype:770993305260654613> Pop Müzik <a:yesilhype:770993305260654613> \n \n <a:yesilhype:770954655442010122> 1 = KralPop  \n \n <a:yesilhype:770954655442010122> 2 = BestFm  \n \n <a:yesilhype:770954655442010122> 3 = Pop90  \n \n <a:yesilhype:770954655442010122> 4 = ShowRadio  \n \n <a:yesilhype:770954655442010122> 5 = TaksimClup  \n \n <a:yesilhype:770954655442010122> 6 = PowerTurk  \n \n <a:yesilhype:770954655442010122> 7 = IstanbulFM  \n \n <a:yesilhype:770954655442010122> 8 = PowerPop  \n \n <a:yesilhype:770954655442010122> 9 = FonemenTURK  \n \n <a:yesilhype:770954655442010122> 10 = FenomenPop  \n \n 🛠 Örnek Kullanım: p!çal <Radyo Numara> \n 🛠 Kapatmak İçin p!ayrıl \n \n Bir Sonraki Sayfaya Geçmek İçin ➯ Tepkisine Tıkla. **',
              '**\n ♪ Radyo İstasyonları ♪ \n \n  <a:yesilhype:770993305260654613> Slow & Arabesk <a:yesilhype:770993305260654613> \n \n <a:yesilhype:770956546448162858> 11 = Slow Radio  \n \n <a:yesilhype:770956546448162858> 12 = RadyoArabesk  \n \n <a:yesilhype:770956546448162858> 13 = ArabeskVadisi  \n \n <a:yesilhype:770956546448162858> 14 = Slow Home  \n \n <a:yesilhype:770956546448162858> 15 = SlowKaradeniz  \n \n <a:yesilhype:770956546448162858> 16 = BabaRadyo  \n \n <a:yesilhype:770956546448162858> 17 = RelaxHome  \n \n <a:yesilhype:770956546448162858> 18 = ArabeskAlemi  \n \n <a:yesilhype:770956546448162858> 19 = ArabeskDamar  \n \n <a:yesilhype:770956546448162858> 20 = ArabeskFM \n \n 🛠 Örnek Kullanım: p!çal <Radyo Numara> \n 🛠 Kapatmak İçin p!ayrıl \n \n Bir Sonraki Sayfaya Geçmek İçin ➡️ Tepkisine Tıkla. \n Önceki Sayfaya Geçmek İçin ⬅️ Tepkisine Tıkla .**',
              '**\n ♪ Radyo İstasyonları ♪ \n \n  <a:yesilhype:770993305260654613> Yabancı <a:yesilhype:770993305260654613> \n \n <a:yesilhype:734601387698028554> 21 = FenomenYabancı  \n \n <a:yesilhype:734601387698028554> 22 = PowerFm  \n \n <a:yesilhype:734601387698028554> 23 = WorldHitFm  \n \n <a:yesilhype:734601387698028554> 24 = FenomenClup  \n \n <a:yesilhype:734601387698028554> 25 = FenomenRap  \n \n 🛠 Örnek Kullanım: p!çal <Radyo Numara> \n 🛠 Kapatmak İçin p!ayrıl \n \n Bir Sonraki Sayfaya Geçmek İçin ➡️ Tepkisine Tıkla. \n Önceki Sayfaya Geçmek İçin ⬅️ Tepkisine Tıkla .**',
              '**\n ♪ Radyo İstasyonları ♪ \n \n  <a:yesilhype:770993305260654613> Extra   <a:yesilhype:770993305260654613> \n \n <a:yesilhype:771054466639855637> 26 = PowerTürkAkustik  \n \n <a:yesilhype:771054466639855637> 27 = EfkarFm  \n \n <a:yesilhype:771054466639855637> 28 = KralFm  \n \n <a:yesilhype:771054466639855637> 29 = SeymenFm  \n \n <a:yesilhype:771054466639855637> 30 = SuperFm  \n \n  <a:yesilhype:771054466639855637> 31 = 90 LAR \n \n <a:yesilhype:771054466639855637> 32 = JoyTürkRock \n \n🛠 Örnek Kullanım: p!çal <Radyo Numara> \n 🛠 Kapatmak İçin p!ayrıl \n \n Bir Sonraki Sayfaya Geçmek İçin ➡️ Tepkisine Tıkla. \n Önceki Sayfaya Geçmek İçin ⬅️ Tepkisine Tıkla .**',
              
               
             
              ];
              let page = 1;

              const embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setThumbnail('https://cdn.discordapp.com/avatars/523204555618516992/22c05dbbd5597812b3d2f9b8ae20e9fc.png?size=2048')
                .setFooter(`Sayfa ${page} / ${pages.length}`)
                .setDescription(pages[page-1])
              message.channel.send(embed).then(msg => {
            
              msg.react('⬅')
              .then(r => {
                msg.react('➡')
            
                  //Filter
                  const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
                  const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
            
                  const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
                  const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
            
                  forwards.on('collect', r => {
                    if(page === pages.length) return;
                    page++;
                    embed.setDescription(pages[page-1]);
                    embed.setColor('RANDOM')
                    embed.setFooter(`Sayfa ${page} / ${pages.length}`)
                    msg.edit(embed)
                  })
                  backwards.on('collect', r => {
                    if(page === 1) return;
                    page--;
                    embed.setColor('RANDOM')
                    embed.setDescription(pages[page-1]);
                    embed.setFooter(`Sayfa ${page} / ${pages.length}`)
                    msg.edit(embed)
                  
                  })
            
                })
              })
            };
            
            
            exports.conf = {
            enabled: true,
            guildOnly: false,
            aliases: ["list", "radio", "radyo", ],
            permLevel: 0
            };
            
            exports.help = {
            name: 'radio-list',
            description: 'Yardım Listesini Gösterir',
            usage: 'radio-list'
            };