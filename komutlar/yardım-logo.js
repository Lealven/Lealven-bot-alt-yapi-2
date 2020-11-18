const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Ottoman | Logo Menüsü',`
**-ascii** : Ascii Logo Tasarlar
**-banner** : Banner Yazı Yazarsınız
**-alev** : Alev Li Logo Tasarlar
**-altın** : Altın Logo Tasarlar
**-anime** : Anime Tarzı Logo Tasarlar
**-basit** : Basit Logo Tasarlar`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["logo"], 
  permLevel: 0
};
exports.help = {
  name: 'logo'
};