let rolid = "756091261534077008"; // BURAYA KULLANICININ TÜM ROLLERİ ALINDIKTAN SONRA VERİLECEK ROLÜN İDSİNİ YAZIN , YAZMAZSANIZ TÜM ROLLERİ ALIR SADECE. 
///////////////////////////////////////////
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
  if (!message.member.roles.has("760858686485823520"))//Bu komutu kullanıcak kişinin ıdsini yazın.
    return message.channel.send(
      `Bu komutu kullanmaya yetkin yok..`
    );
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**Yetkin yok.**");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member) return message.channel.send("**Jail Atılacak Üyeyi Etiketleyin**");
    if(rolid.match(/(\d{17,19})/g)) {
        member.roles.cache.forEach(role => member.roles.remove(role));
        member.roles.add(rolid);
    }
    else member.roles.cache.forEach(role => member.roles.remove(role));
    return message.channel.send(`**Kullanıcının tüm rolleri ${rolid.match(/(\d{17,19})/g) ? `alınıp \`${message.guild.roles.cache.get(rolid).name}\` rolü verildi.**` : 'alındı.**'}`);
    let log = message.guild.channels.cache.find(`name`, "jail-log");  
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["jail"],
    permLevel: 0
};

exports.help = {
    name: "jail",
    description: 'Kullanıcıyı jaillersiniz.',
    usage: 'jail <kullanıcı>'
};