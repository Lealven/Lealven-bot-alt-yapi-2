const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  var bot = "755012447626330233";
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      "**Bu Komutu Kullanabilmek İçin `Rolleri Yönet` Yetkisine Sahip Olmalısın!**"
    );
  let rol =
    message.mentions.roles.first() ||
    message.guild.roles.cache.get(args[0]) ||
    message.guild.roles.cache.find(rol => rol.name === args[0]);
  if (!rol)
    return message.channel.sendd(
      "**Herkese Rol Verebilmem İçin Bir Rol Etiketlemelisin!**"
    );

  const embed = new Discord.MessageEmbed()
    .setDescription(` **Herkese ${rol} Adlı Rol Verildi!**`)
    .setColor(rol.hexColor);

  message.guild.members.cache.forEach(u => {
    u.roles.add(rol);
  });
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["toplurolver", "herkeserolver"],
  permLevel: 3
};

exports.help = {
  name: "toplurolver",
  description: "Belirlenen Rolü Herkese Verir!",
  usage: "toplurolver <rol>"
};