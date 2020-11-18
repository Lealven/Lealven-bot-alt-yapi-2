const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Ottoman | Moderasyon Menüsü',`
**-sayaç** : Sunucunuza Sayaç Ayarlarsınız.
**-sayaç-kapat** : Sayaç Sitemini Kapatırsınız.
**-yavaşmod** : Yavaş Modu Açarsınız.
**-sa-as** : Biri Sa Diyince Bot Aleyküm Selam"der.
**-modlog** : Sunucunuza Log Kanalı Ayarlarsınız
**-banlimit** : Banlimitini Ayarlarsınız
**-kicklimit** : Kicklimitini Ayarlarsınız
**-hgbbkanalayarla** : HG-BB Kanalı Ayarlarsınız`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["moderasyon"], 
  permLevel: 0
};
exports.help = {
  name: 'moderasyon'
};