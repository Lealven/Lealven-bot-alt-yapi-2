const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Ottoman | Sunucu Menüsü',`
**-emojikur** : Sunucuya 50+ Emoji Kurar
**-panel-kur** : Sunucuya İstatistik Paneli Kurar`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["sunucu"], 
  permLevel: 0
};
exports.help = {
  name: 'sunucu'
};