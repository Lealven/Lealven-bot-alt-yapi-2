const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Ottoman | Uyarı Menüsü`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(` Mizzy Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Uyar__`,` \`${prefix}uyar\`Belirtilen Kişiyi Uyarır`,true)
.addField(`__Uyarı Sil__`,` \`${prefix}uyarısil\` Belirtilen Kişinin Uyarısını Siler`,true)
.addField(`__Uyarılar__`,` \`${prefix}uyarılar\` Belirtilen Kişinin Uyarılarını Gösterir `,true)
.addField(`__Bilgilendirme__`,` \`${prefix}davet\` | Einstein'i Sunucunuza Davet Edersiniz\n \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(``)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardımuyar","helpuyar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardımuyarı'
  }; 