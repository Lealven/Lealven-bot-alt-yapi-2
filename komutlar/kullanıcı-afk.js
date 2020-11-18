const Discord = require('discord.js');
const db = require("quick.db");

exports.run = (client, message, args) => {

      let sebep = args.slice(0).join(" ");
      if (!sebep) return message.reply("AFK Olma Nedenini Yazmalısın!");

      db.set(`afks_${message.author.id}`, sebep)
  message.member.setNickname("[AFK] " + message.member.displayName)

        message.reply(`__Artık **${sebep}** Yüzünden **AFK** Modundasın!__`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Genel",
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'AFK olursunuz. (Birisi sizi etiketlediğinde AFK olduğunuzu söyler.)',
  usage: 'afk <sebep>'
};