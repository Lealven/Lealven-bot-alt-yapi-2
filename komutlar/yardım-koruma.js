const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Ottoman | Koruma Menüsü',`
**-kanal-koruma** : Kanal Koruma Sistemi
**-emoji-koruma** : Emoji Koruma Sistemi
**-rol-koruma** : Rol Koruma Sistemi
**-bot-koruma** : Bot Koruma Sistemi.
**-küfür-engel** : Küfür Engel Sistemi
**-reklam-engel** : Reklam Engel Sistemi`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["koruma"], 
  permLevel: 0
};
exports.help = {
  name: 'koruma'
};