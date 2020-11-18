const Discord = require('discord.js');
//Lealven#0001
exports.run = (client,message,args) => {


const isim = args[0]
if(!isim) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('RED')//Lealven#0001
    .setTitle(' **__Hata__** ')
    .setDescription('**Kullanım**: -başvur **İsim Yaş** > **Günlük Aktiflik** > **İstediğiniz Yetkiyi Etiketleyin** '))

const yaş = args[1]
if(!yaş) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('RED')//Lealven#0001
    .setTitle(':x: Hata :x:')
    .setDescription('Yaşını belirtmedin?'))
    
const aktiflik = args[2]
if(!aktiflik) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('RED')//Lealven#0001
    .setTitle(':x: Hata :x:')
    .setDescription('Günlük Aktiflik süreni belirtmedin?'))

const yetki = args.slice(3).join(' ')
if(!yetki) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('RED')//Lealven#0001
    .setTitle(':x: Hata :x:')
    .setDescription('Hangi yetkiyi istediğini belirtmedin?'))


message.channel.send(
    new Discord.MessageEmbed()
    .setColor('RED')//Lealven#0001
    .setTitle(' **__Başarılı__**')
    .setDescription('Başvurun başarıyla gönderildi!'))


client.channels.get('761240120904384572').send(
    new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Yeni Başvuru!')//Lealven#0001
    .setAuthor(message.guild.name, message.guild.userURL)
    .setThumbnail(message.author.avatarURL())
      .addField('Başvuruyu Yapan', `**${message.author.tag}**`)
      .addField('İsmi', isim)
      .addField('Yaşı', yaş)//Lealven#0001
      .addField('Günlük Aktiflik Süresi', aktiflik)
      .addField('Başvurduğu Yetki', yetki)
    .setFooter(`${message.author.username} Tarafından Başvuruldu`, message.author.avatarURL(), `${message.author.Date} Kanalında kullanıldı.`)
    )
    }////Lealven#0001


exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['başvur'],
	permLevel : 0
}//Lealven#0001

exports.help = {
	name : 'başvur',
	description : 'Yetkili Başvuru Sistemi',
	usage : 'başvur'
}//Lealven#0001