const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Ottoman | Kullanıcı Menüsü',`
**-öneri** : Şikayet Ve Önerilerinizi Belirtebilirsiniz.
**-profil** : Kendinizin Veya Bir Başkasının Profiline Bakabilirsiniz.
**-başvur** : #başvur Kanalından Yetkili Başvurusu Yapabilirsiniz
**-avatar** : Avatarınızı Görüntülersiniz.
**-radyo** : Radyo Dinlersiniz.
**-kısalt** : Link Kısaltabilirsiniz.
**-çevir** : Yazıyı Herangi Bir Dile Çevirir
**-bulanık** : Avatarınızı Bulanıklaştırır
**-hesapla** : İstediğiniz Matematik Sorusunu Hesaplar.
**-korona** : Korona İstatistiklerine Bakabilirsiniz.
**-spotify** : Bir Üyenin Spotfiy"dan Dinlediği Müziğin Bilgilerini Görüntülersiniz
**-steam** : Steam"dan Oyunun Bilgilerine Ve Fiyatına Bakarsınız.
**-afk** : Afk Moduna Geçersiniz.
**-zamanlayıcı** : Zamanlayıcı Sistemi.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["kullanıcı"], 
  permLevel: 0
};
exports.help = {
  name: 'kullanıcı'
};