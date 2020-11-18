const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  var toplam = db.fetch(`toplamKayit_${message.author.id}`)
  const genelrol = message.guild.roles.cache.find(r => r.id === "755005064510177282"); 
  const kız = message.guild.roles.cache.find(r => r.id === "755003872128401462"); 
  const misafir = message.guild.roles.cache.find(r => r.id === "755005299445858374"); 
  const log = message.guild.channels.cache.find(c => c.id === "755015570029805618"); 
  const tag = "•";
  if(!message.member.roles.array().filter(r => r.id === "755007454235983882")[0]) { 
    return message.channel.send("**Bu İşlemi Gerçekleştirmek İçin Kayıt Sorumlusu Olman Gerekli!**");
  } else {
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    c.roles.add(genelrol)
    c.roles.add(kız)
    c.roles.remove(misafir)
    c.setNickname(`${tag} ${nick} | ${yas}`)
    db.add(`bayanKayit_${message.author.id}`, 1)
    db.add(`toplamKayit_${message.author.id}`, 1)
    const embed = new Discord.MessageEmbed()
    .setAuthor("Kız Kayıt Yapıldı")
    .addField(`<a:GifEmojiLexyArtz183:755772231434633336>  Kaydı yapılan\n`, `${c.user.tag}`)
    .addField(`<a:NitroBoost:755772253731422268>  Kaydı yapan\n`, `${message.author.tag}`)
    .addField(`<:V_CorretoTKF:755772236224397342>  Yeni isim\n`, `${tag} ${nick} , ${yas}`)
    .addField(`<a:GifEmojiLexyArtz158:755772280235360286>  Toplam Kayıt\n`, toplam || 0)
    .setFooter("Mizzy Kayıt Sistemi")
    .setColor("#ffcbdb")
    log.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};
exports.help = {
  name: "k",
  description: "k",
  usage: "k"
};