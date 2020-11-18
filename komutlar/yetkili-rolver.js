const Discord = require('discord.js');
exports.run = (client, message, args) => {
 
    if (!message.guild) {
        const ozelmesajuyari = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL())
            .addField(':warning: **Uyarı** :warning:', '`rolver` **adlı komutu özel mesajlarda kullanamazsın.**')
        return message.author.send(ozelmesajuyari);
    }
    let guild = message.guild
    let rol = message.mentions.roles.first()
    let user = message.mentions.members.first()
 
    if (!user) return message.reply('**Kime rol verileceğini yazmadın!**').catch(console.error);
    if (rol.length < 1) return message.reply('**Rolü belirtmedin**');
    user.roles.add(rol);
 
    const embed = new Discord.MessageEmbed()
        .setDescription(`${user} kullanıcısına ${rol} rolü verildi!`)
        .setFooter('Rol sistemi', client.user.avatarURL())
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({ embed })
};
 
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['rolver'],
    permLevel: 0
};
 
exports.help = {
    name: 'rolver',
    description: 'İstediğiniz kişiden istediğiniz rolü alır.',
    usage: 'rolver [kullanıcı] [@rol]'
};