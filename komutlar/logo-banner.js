const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let txt = args.join('+');
  if(!args[0]) return message.channel.send("Lütfen bi yazı yazın!");

  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor("Banneriniz...")
  .setImage("https://dummyimage.com/2000x500/33363c/ffffff&text=" + txt)
  .setFooter("Banner Olusturuldu!");

  message.channel.send(embed);
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banneryazi","yazıbanner","banner-yaz"],
  permLevel: 0
};

module.exports.help = {
  name: 'banner',
  description: 'Yazdığınız yazıyı banner olarak atar',
  usage: 'banner <yazdırmak istediğiniz yazı>'
};