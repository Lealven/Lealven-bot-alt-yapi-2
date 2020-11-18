const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let codeword = new Discord.MessageEmbed()  
.setAuthor(``, client.user.avatarURL())
.setColor('BLUE')
.setDescription(``)  
.addField(`__Linkler__`,`[**__Davet Et__**](https://discord.com/oauth2/authorize?client_id=757701383720927322&scope=bot&permissions=8) | [**__Destek Sunucusu__**](https://discord.gg/dusaEnJ) | [**__YouTube__**](https://www.youtube.com/channel/UCIuxmLItBs2P7Ydy_PAfOSA?view_as=subscriber)`)
  .setImage(``)
 message.channel.send(codeword) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["davet"], 
    permLevel: 0
  };
  exports.help = {
    name: 'davet'
  }; 