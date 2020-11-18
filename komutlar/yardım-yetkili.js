const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Ottoman | Yetkili Menüsü',`
**-temizle** : Sohbetten Belirttiğiniz Miktar Kadar Mesaj Silersiniz.
**-ban** : Sunucudan Birini Yasaklarsınız.
**-kick** : Sunucudan Birini Atarsınız.
**-unban** : Sunucudan Yasaklanan Kişinin Yasağını Kaldırırsınız
**-banlist** : Sunucudan Banlanan Kişileri Görüntülersiniz
**-jail** : Etiketlediğiniz Üyeyi Hapise Atarsınız
**-isim** : Üyelerin İsmini Değiştirirsiniz
**-toplurolver** : Herkese Rol Verirsiniz
**-toplurolal** : Herkesten Rol Alırsınız
**-yaz** : Bota Herhangi Birşey Yazdırırsınız
**-tag-taraması** : Sunucuda Tagları Tararsınız
**-id** : Etiketlediğiniz Kişinin İd"sine Bakarsınız
**-idban** : Bir Kişiye İd Banı Atarsınız
**-taşı** : Seslide Üyeleri Taşırsınız
**-bansorgu** : Banlanan Kişiye Ban Sorgu Yaparsınız
**-rolver** : Belirttiğiniz Kişiye Rol Verirsiniz
**-oylama** : Oylama Yaparsınız
**-duyuru** : Duyuru Yaparsınız
**-çekiliş** : Çekiliş Yaparsınız
**-banaffı** : Sunucudaki Herkezin Banını Açar (Sunucu Sahibi)`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["yetkili"], 
  permLevel: 0
};
exports.help = {
  name: 'yetkili'
};