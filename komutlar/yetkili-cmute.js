  const Discord = require("discord.js");
  const ms = require("ms");

  exports.run = async (client, message, args) => {
      if (!message.member.hasPermission("ADMINISTRATOR"))
    if (!message.member.roles.has("760858830250049547",))//Bu komutu kullanıcak kişinin ıdsini yazın.
         return message.channel.send(
        `Bu komutu kullanmaya yetkin yok.`
      );

   let worldüye = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!worldüye) return message.channel.send("Lütfen susturulacak kişiyi etiketleyiniz.");
    if(worldüye.hasPermission("ADMINISTRATOR")) return message.channel.send("Yetkili birini susturamam.");
    if (worldüye.id === message.author.id) return message.channel.send("Kendinizi susturamazsınız.");
    let worldrol = message.guild.roles.cache.find(`name`, "• Muteli");

    if(!worldrol){
      try{
        worldrol = await message.guild.roles.create({
          name: "• Muteli",
          color: "#666666",
          permissions:[]
        })
        message.guild.channels.cache.forEach(async (channel, id) => {
          await channel.overwritePermissions(worldrol, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }

    let worldzaman = args[1];
    if(!worldzaman) return message.channel.send("Lütfen doğru bir zaman dilimi giriniz. Örneğin: **-cmute @kişi 1s/m/h/d sebep**");
    let sebep = args[2]
    if(!sebep) return message.channel.send("Lütfen bir sebep giriniz. Örneğin: **-cmute @kişi 1s/m/h/d sebep**");

    await(worldüye.roles.add(worldrol.id));
    const kod = "```fix";
    const kod2 = "```";
     let embed = new Discord.MessageEmbed()
                .setTitle("Kullanıcı Chat Cezası Aldı")
                  .setDescription(`
  **Susturulan Üye:** ${worldüye}
  **Susturan Yetkili:** ${message.author}

  **Susturulma Sebebi:** ${kod}
  ${sebep} ${kod2}
  **Verilen Süre:** ${kod}
  ${worldzaman} ${kod2}`)
                  .setColor("RANDOM");
    message.channel.send(`${message.author} Başarılı Bir Şekilde ${worldüye} Susturuldu.`);
    let onay = message.guild.channels.cache.find(`name`, "「⚙」log-kanalı")
    message.guild.channels.get(onay.id).send(embed)

    setTimeout(function(){
      worldüye.roles.remove(worldrol.id);
      let sembed =  new Discord.MessageEmbed()
                .setTitle("Kullanıcı Chat Cezası Kalktı")
                  .setDescription(`
  **Susturulması Kalkan Üye:** ${worldüye}
  **Susturulmasını Kaldıran Yetkili:** ${message.author}

  **Susturulma Sebebi:** ${kod}
  ${sebep} ${kod2}
  **Dolan Süre:** ${kod}
  ${worldzaman} ${kod2}`)
                  .setColor("RANDOM");
    let onay = message.guild.channels.cache.find(`name`, "「⚙」log-kanalı")
    message.guild.channels.get(onay.id).send(sembed)
    }, ms(worldzaman));

    message.delete();

  }

  exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ["chat-mute","süreli-sustur"],
      permLevel: 0
  };

  exports.help = {
      name: 'cmute',
      description: 'sustur',
      usage: 'cmute'
  };