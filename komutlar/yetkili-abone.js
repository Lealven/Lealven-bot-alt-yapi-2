const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const abone = message.guild.roles.cache.find(r => r.id === "758572137509945345");
  if(!message.member.roles.array().filter(r => r.id === "755008614447710208")[0]) { //buraya Abone Rolü Verebilecek Kişi rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("**Abone Vermeyi Sadece <@&755008614447710208> Kullana Bilir**");//metin değiştirilebilir
  } else {
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    c.roles.add(abone)
    const embed = new Discord.MessageEmbed()
    .setAuthor("Abone Verildi")
    .addField(`Abone Verilen\n`, `${c.user.tag}`, true)
    .addField(`Abone Veren\n`, `${message.author.tag}`, true)
    .setColor("#GOLD")
    .setTimestamp()
    message.channel.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["a"],
  permLevel: 0
};
exports.help = {
  name: "abone",
  description: "abone",
  usage: "abone"
}; 