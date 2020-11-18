const Discord = require('discord.js');

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Lealtek",
              icon_url: ""
            },
			    "thumbnail": {
				 "url": ""
			},
            title: "",
            description: ` [Passed]  \nKişi Kontrol Ediliyor Bekleyiniz...`,
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "By Lealtek"
            }
          }
        });
	    message.react("💀")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p', 'pong', 'uptime',],
  permLevel: 0
};

exports.help = {
  name: 'kontrol',
  description: 'Botun Pingini Gösterir !',
  usage: 'kontrol'
};