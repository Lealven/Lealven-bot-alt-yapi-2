const Discord = require('discord.js'); 

exports.run = (client, message, args) => {

   message.channel.send('🔒 **İşlem Başarılı!\n Sunucudaki Tüm Yasakları Kaldırdım**')

  message.guild.fetchBans().then(bans => {
      bans.cache.forEach(user => {
        message.guild.unban(user)
      });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tyk","kaldır"],
  permLevel: 5
};

exports.help = {
  name: 'banaffı',
  description: '',
  usage: ''
};