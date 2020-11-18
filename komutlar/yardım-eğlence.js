const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Ottoman | Eğlence Menüsü',`
**-duello** : İstediğiniz Kişiyle 1VS1 Oynarsınız
**-wasted** : Avatarınıza Wasted Efekti Ekler
**-pixel** : Avatarınızı Pixelleştirir
**-rip** : Avatarınıza Rip Efekti Ekler
**-zarat** : Zar Atarsınız
**-tkm** : Taş Kağıt Makas Oynarsınız
**-espri** : Bot Rastgele Bir Espri Yapar
**-fbi** : Fbi Baskını Yersin`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["eğlence"], 
  permLevel: 0
};
exports.help = {
  name: 'eğlence'
};