const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let codeword = new Discord.MessageEmbed()  
.setAuthor(`Ottoman | Yardım Menüsü!`, client.user.avatarURL())
.setColor('BLUE')
.setDescription(`Botumuzu Sunucunuza Davet Edebilirsiniz -davet `)  
.addField(`__Moderasyon__`,`-moderasyon | Moderasyon Komutlarını Görüntülersiniz`)
.addField(`__Yetkili__`,`-yetkili | Yetkili Komutlarını Görüntülersiniz`)
.addField(`__Sunucu__`,`-sunucu | Sunucu Komutlarını Görüntülersiniz`)
.addField(`__Koruma__`,`-koruma | Koruma Komutlarını Görüntülersiniz`)
.addField(`__Kullanıcı__`,`-kullanıcı | Kullanıcı Komutlarını Görüntülersiniz`)
.addField(`__Uyarı__`,`-yardımuyarı | Uyarı Komutlarını Görüntülersiniz`)
.addField(`__Logo__`,`-logo | Logo Komutlarını Görüntülersiniz`)
.addField(`__Eğlence__`,`-eğlence | Eğlence Komutlarını Görüntülersiniz`)
.addField(`__Linkler__`,`[Davet Et](https://discord.com/oauth2/authorize?client_id=757701383720927322&scope=bot&permissions=8) | [Destek Sunucusu](https://discord.gg/dusaEnJ) `)
  .setImage(``)
 message.channel.send(codeword) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["help","y","h"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 