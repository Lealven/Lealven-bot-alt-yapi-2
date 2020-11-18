const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Lealven | Youtube Channel");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.cache.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.cache.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.cache.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.cache.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.cache.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.cache.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   l0RDconsole.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// }); //DEVİLHOUSE//

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\


//----------------7/24------------//
const kontrol = require('node-fetch');
setInterval(() => {
kontrol("https://mizzy-bot.glitch.me/")
kontrol("https://mizzy-bot.glitch.me/")
kontrol("https://mizzy-bot.glitch.me/")
console.log(`Bot Tekrar Aktif Edildi } `)
}, 10000)//1 Dakika 


//-----------------------------------------------//






//---------------------------------------------------------------------------SES-LOG---------------------------------------------------------------------------//
client.on("voiceStateUpdate", async (thrones, sanal) => {
  let voiceLog = thrones.guild.channels.cache.find(c => c.name === "「⚙」log-kanalı");
  if (thrones.voiceChannel === sanal.voiceChannel) return;
  //if()
  if (thrones.voiceChannel && !sanal.voiceChannel)
    return voiceLog
      .send({
        embed: {
          description:
            "<@" +
            thrones.id +
            "> adlı kullanıcı " +
            thrones.voiceChannel +
            " kanalından çıkış yapdı.",
          color: Math.floor(Math.random() * (0xffffff + 1)),
          timestamp: new Date()
        }
      })
      .catch(console.error);

  if (!thrones.voiceChannel && sanal.voiceChannel)
    return voiceLog
      .send({
        embed: {
          description:
            "<@" +
            sanal.id +
            "> adlı kullanıcı " +
            sanal.voiceChannel +
            " kanalına giriş yapdı.",
          color: Math.floor(Math.random() * (0xffffff + 1)),
          timestamp: new Date()
        }
      })
      .catch(console.error);

  if (thrones.voiceChannel !== sanal.voiceChannel)
    return voiceLog
      .send({
        embed: {
          description:
            "<@" +
            thrones.id +
            "> adlı kullanıcı " +
            thrones.voiceChannel +
            " kanalından " +
            sanal.voiceChannel +
            " kanalına giriş yapdı.",
          color: Math.floor(Math.random() * (0xffffff + 1)),
          timestamp: new Date()
        }
      })
      .catch(console.error);
}); //--------------------SES-LOG------------------------//



//-------------------SA-AS-------------------//
client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa') {
        msg.reply('__Aleyküm Selam Hoşgeldin__');      
      } 
      }
    });//---------------SA-AS---------------//





//////////////////////////MODLOG///////////////////
client.on('messageDelete', async message   => { // mod-log
      let modlogs = db.get(`log_${message.guild.id}`)
    const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
  const embed = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .setTitle("MESAJ SİLİNDİ")
.setDescription(` <@!${message.author.id}> adlı kullanıcı tarafından <#${message.channel.id}> kanalına gönderilen mesaj silindi!\n\nSilinen Mesaj: **${message.content}**`)
  .setFooter("Ottoman Bot | Log Sistemi")
  modlogkanal.send(embed);
  })

client.on('guildBanAdd', async message  => {
      let modlogs = db.get(`log_${message.guild.id}`)
    const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
  const embed = new Discord.MessageEmbed()
  .setColor("#ffd100")

    .setDescription(` Üye Sunucudan Yasaklandı! \n<@!${message.user.id}>, ${message.user.tag}`)
        .setThumbnail(message.user.avatarURL())
  .setFooter("Ottoman | Log Sistemi")
  modlogkanal.send(embed);
  })
client.on('channelCreate', async channel  => {
      let modlogs = db.get(`log_${channel.guild.id}`)
    const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
    if (channel.type === "text") {
                let embed = new Discord.MessageEmbed()
                    .setColor('#ffd100')
                .setDescription(` ${channel.name} adlı metin kanalı oluşturuldu.`)
                .setFooter(`Mizzy Bot | Log Sistemi Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            };
            if (channel.type === "voice") {
                let embed = new Discord.MessageEmbed()
                .setColor('#ffd100')
.setTitle("SES KANALI OLUŞTURULDU")
                .setDescription(` ${channel.name} adlı ses kanalı oluşturuldu!`)
                .setFooter(`Mizzy Bot | Log Sistemi Kanal ID: ${channel.id}`)

                modlogkanal.send({embed});
            }
        
    })
client.on('channelDelete', async channel  => {
      let modlogs = db.get(`log_${channel.guild.id}`)
    const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
    if (channel.type === "text") {
                let embed = new Discord.MessageEmbed()
                    .setColor('#ffd100')
                .setDescription(` ${channel.name} adlı metin kanalı silini!`)
                .setFooter(`Mizzy Bot | Log Sistemi Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            };
            if (channel.type === "voice") {
                let embed = new Discord.MessageEmbed()
                .setColor('#ffd100')
.setTitle("SES KANALI SİLİNDİ")
                .setDescription(` ${channel.name} adlı ses kanalı silindi`)
            .setFooter(`Mizzy Bot | Log Sistemi  Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            }
    })
client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (oldMsg.author.bot) return;
  var user = oldMsg.author;
  if (db.has(`log_${oldMsg.guild.id}`) === false) return;
  var kanal = oldMsg.guild.channels.get(db.fetch(`log_${oldMsg.guild.id}`).replace("<#", "").replace(">", ""))
  if (!kanal) return;
  const embed = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .addField("Kullanıcı", oldMsg.author.tag, true)
  .addField("Eski Mesaj",`  ${oldMsg.content}  `)
  .addField("Yeni Mesaj", `${newMsg.content}`)
  .setThumbnail(oldMsg.author.avatarURL())
  kanal.send(embed);  
        
    })
//////////////////////////////MODLOG///////////////////////////



//---------------------KAYIT-HG-------------------//
client.on('guildMemberAdd', async member => {
  await member.roles.add(`755005299445858374`) 
let member2 = member.user 
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 604800000) {
takizaman = '<a:GifEmojiLexyArtz139:755772256021381150>  Tehlikeli'
} else {
takizaman = `<a:4568_aVerified:755772279488512030>  Güvenli`}require("moment-duration-format");
 let zaman1 = new Date().getTime() - user.createdAt.getTime()
 const gecen = moment.duration(zaman1).format(` YY [Yıl,] DD [Gün,] HH [Saat,] mm [Dakika,] ss [Saniye]`) 
 let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`)
 let message = member.guild.channels.cache.find(x => x.id === `755015570029805618`)
  const taki = new Discord.MessageEmbed()
 .setTitle(
     "Ottoman'a Hoşgeldin"
   )
   .setDescription(`<a:GifEmojiLexyArtz158:755772280235360286>  **・** **Sunucumuza Hoş geldin** ${member} 
   
<a:GifEmojiLexyArtz180:755772246680666192> **・Seninle Beraber** ${message.guild.memberCount} **Kişiyiz**

<a:GifEmojiLexyArtz183:755772231434633336> **・** **Kaydının Yapılması İçin İsmini ve Yaşını Yaz**

<:V_CorretoTKF:755772236224397342> **・**<@&755007454235983882> **Rolündeki Yetkililer Seninle İlgilenecektir**

<a:NitroBoost:755772253731422268> **・** **Sunucumuzun Sınırsız Davet Bağlantısı** https://discord.gg/dusaEnJ

<a:ykleniyo:755772266574249984> **・** **Hesap Açılalı** ${gecen} **Olmuş**
<:VAC:755772240817160313> **・** **Bu Kullanıcı** **|** **${takizaman}**
`)
.setColor('BLACK')
message.send(taki)
 
         });//---------------------KAYIT-HG-------------------//

//-----------------EMOJİ-KORUMA-----------------//
  client.on("emojiDelete", async function(emoji, kisi) {
  const i = await db.fetch(`emojikoruma_${emoji.guild.id}`, true);
  if (i) {
    const entry = await emoji.guild
      .fetchAuditLogs({ type: "EMOJİ_DELETE" })
      .then(audit => audit.entries.first());

    let kisi = emoji.guild.member(entry.executor);
    kisi.roles
      .filter(a => a.hasPermission("ADMINISTRATOR"))
      .cache.forEach(x => kisi.roles.remove(x.id));
    kisi.roles
      .filter(a => a.hasPermission("MANAGE_EMOJIS"))
      .cache.forEach(x => kisi.roles.remove(x.id));
    kisi.roles
      .filter(a => a.hasPermission("MANAGE_ROLES"))
      .cache.forEach(x => kisi.roles.remove(x.id));
      kisi.kick(kisi);
    const deleter = emoji.executor;
    const id = emoji.executor.id;

    if (id === client.user.id || id === emoji.guild.ownerID) return;

    emoji.guild.members.cache.forEach(async function(members) {
      if (members.id !== id) return;
      members.roles.cache.forEach(role => {
        if (role.hasPermission(8) || role.hasPermission("MANAGE_EMOJIS")) {
          members.roles.remove(role.id);
        }
      });
    });
  }
});//---------EMOJİ-KORUMA--------------//


//-------------KANAL-KORUMA----------------//
client.on("channelCreate", async (channel, member, guild) => {
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (kanal == "acik") {
    channel.delete();
    const codeworld = new Discord.MessageEmbed()
      .setDescription(
        "Sunucunuzda yeni bir kanal oluşturuludu! fakat geri silindi! __Ottoman Kanal Koruma Sistemi__) "
      )
      .setColor("BLACK");
    channel.guild.owner.send(codeworld);
    return;
  } else {
    return;
  }
});//---------------KANAL-KORUMA-----------------//

//---------------ROL-KORUMA-------------------//
client.on("roleDelete", async(role , channel , message , guild) => {
  let rolkoruma = await db.fetch(`rolk_${role.guild.id}`);
    if (rolkoruma == "acik") {
  role.guild.roles.create({name: role.name, color: role.color,  permissions: role.permissions}) 
        role.guild.owner.send(` **${role.name}** Adlı Rol Silindi! Fakat Rol Koruma Sistemim Açık Olduğu İçin Geri Yükledim!`)

  
}
})//-----------ROL-KORUMA-------------//





//-------------BOT-KORUMA------------//
        client.on("guildMemberAdd", async member => {
          if (db.has(`botkoruma_${member.guild.id}`) === false) return;
          if (member.user.bot === false) return;
          if (db.has(`botİzinli_${member.id}`) === true) return;
          
          member.kick(member, `Bot Koruması Aktif!`)
          
          member.guild.owner.send(` Sunucunuza Bir Bot Eklendi ve Sunucudan Otomatik Olarak Atıldı, Sunucuya Eklenmesini Onaylıyor iseniz \`-giriş-izni ${member.id}\``)
          })
//-------------BOT-KORUMA--------------//



//-----------KÜFÜR-ENGEL----------------//
client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  let i = await db.fetch(`küfürFiltre_${msg.guild.id}`);
  if (i == "acik") {
    const küfür = [
      "amcık",
      "yarrak",
      "orospu",
      "piç",
      "sikerim",
      "sikik",
      "amına",
      "pezevenk",
      "yavşak",
      "ananı",
      "anandır",
      "orospu",
      "evladı",
      "göt",
      "pipi",
      "sokuk",
      "yarak",
      "bacını",
      "karını",
      "amk",
      "aq",
      "mk",
      "anaskm"
    ];
    if (küfür.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) {
          msg.delete();
          let embed = new Discord.MessageEmbed()
            .setColor(0xffa300)
            .setFooter("Ottoman Küfür Sistemi", client.user.avatarURL())
            .setAuthor(
              msg.guild.owner.user.username,
              msg.guild.owner.user.avatarURL()
            )
            .setDescription(
              "Ottoman Bot " +
                `**${msg.guild.name}**` +
                " adlı sunucunuzda küfür yakaladım."
            )
            .addField(
              "Küfür Eden Kişi",
              "Kullanıcı: " + msg.author.tag + "\nID: " + msg.author.id,
              true
            )
            .addField("Engellenen mesaj", msg.content, true)
            .setTimestamp();
          msg.guild.owner.user.send(embed);
          return msg.channel
            .send(
              `${msg.author}, Küfür Etmek Yasak! Senin Mesajını Özelden Kurucumuza Gönderdim.`
            )
            .then(msg => msg.delete(25000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});//-----------KÜFÜR-ENGEL------------------//



//--------------REKLAM-ENGEL----------------//
client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  let i = await db.fetch(`reklamFiltre_${msg.guild.id}`);
  if (i == "acik") {
    const reklam = [
      "discord.app",
      "discord.gg",
      "invite",
      "discordapp",
      "discordgg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az"
    ];
    if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
          msg.delete();
          let embed = new Discord.MessageEmbed()
            .setColor(0xffa300)
            .setFooter(
              "Ottoman |  Reklam engellendi.",
              client.user.avatarURL()
            )
            .setAuthor(
              msg.guild.owner.user.username,
              msg.guild.owner.user.avatarURL()
            )
            .setDescription(
              "Ottoman Reklam Engel Sistemi " +
                `**${msg.guild.name}**` +
                " Adlı Sunucuda Reklam Yakaladım."
            )
            .addField(
              "Reklamı yapan kişi",
              "Kullanıcı: " + msg.author.tag + "\nID: " + msg.author.id,
              true
            )
            .addField("Engellenen mesaj", msg.content, true)
            .setTimestamp();
          msg.guild.owner.user.send(embed);
          return msg.channel
            .send(`${msg.author.tag}, Reklam Yapmak Yasak!`)
            .then(msg => msg.delete(25000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});//----------------REKLAM-ENGEL--------------//


//-----------DAVET-İNVİTE-------------------//
const invites = {};

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildMemberRemove", async member => {
  let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
  if (!kanal) return;
  let veri = await db.fetch(`rol1_${member.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
  let veri2 = await db.fetch(`rol2_${member.guild.id}`);
  let d = await db.fetch(`bunudavet_${member.id}`);
  const sa = client.users.cache.get(d);
  const sasad = member.guild.members.get(d);
  let sayı2 = await db.fetch(`davet_${d}_${member.guild.id}`);
  db.add(`davet_${d}_${member.guild.id}`, -1);

  if (!d) {
    const aa = new Discord.MessageEmbed()
      .setColor("#d20b0d")
      .setDescription(
        `\`\`${member.user.tag}\`\` **Adlı Kullanıcı Aramızdan Ayrıldı\n Davet Eden** \`\`Bulunamadı!\`\``
      )
      .setFooter(client.user.username, client.user.avatarURL());
    client.channels.get(kanal).send(aa);
    return;
  } else {
    const aa = new Discord.MessageEmbed()
      .setColor("#d20b0d")
      .setDescription(
        `\`\`${member.user.tag}\`\` **Adlı Kullanıcı Aramızdan Ayrıldı\n Davet Eden** \`\`${sa.tag}\`\``
      )
      .setFooter(client.user.username, client.user.avatarURL());
    client.channels.get(kanal).send(aa);

    if (!veri) return;

    if (sasad.roles.has(veri)) {
      if (sayı2 <= veri12) {
        sasad.roles.remove(veri);
        return;
      }
    }
    if (sasad.roles.has(veri2)) {
      if (!veri2) return;
      if (sayı2 <= veri21) {
        sasad.roles.remove(veri2);
        return;
      }
    }
  }
});

client.on("guildMemberAdd", async member => {
  member.guild.fetchInvites().then(async guildInvites => {
    let veri = await db.fetch(`rol1_${member.guild.id}`);
    let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
    let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
    let veri2 = await db.fetch(`rol2_${member.guild.id}`);
    let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
    if (!kanal) return;
    const ei = invites[member.guild.id];

    invites[member.guild.id] = guildInvites;

    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const sasad = member.guild.members.get(invite.inviter.id);
    const davetçi = client.users.cache.get(invite.inviter.id);

    db.add(`davet_${invite.inviter.id}_${member.guild.id}`, +1);
    db.set(`bunudavet_${member.id}`, invite.inviter.id);
    let sayı = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);

    let sayı2;
    if (!sayı) {
      sayı2 = 0;
    } else {
      sayı2 = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);
    }

    const aa = new Discord.MessageEmbed()
      .setColor("#ffd100")
      .setDescription(
        `\`\`${member.user.tag}\`\` **Adlı Kullanıcı Sunucuya Katıldı\n Davet Eden** \`\`${davetçi.tag}\`\`\n**Toplam \`\`${sayı2}\`\` Daveti Oldu!**`
      )
      .setFooter(client.user.username, client.user.avatarURL());
    client.channels.get(kanal).send(aa);
    if (!veri) return;

    if (!sasad.roles.has(veri)) {
      if (sayı2 => veri12) {
        sasad.roles.add(veri);
        return;
      }
    } else {
      if (!veri2) return;
      if (sayı2 => veri21) {
        sasad.roles.add(veri2);
        return;
      }
    }
  });
});
 

//--------------DAVET-İNVİTE-------------------//





//-------------------SAYAÇ-----------------//
client.on("guildMemberAdd", async member => {
  let frenzysayı = await db.fetch(`FrenzyCode+SayaçSayı_${member.guild.id}`);
  let frenzykanal = await db.fetch(`FrenzyCode+SayaçKanal_${member.guild.id}`);
  if (!frenzysayı || !frenzykanal) return;
  let sonuç = frenzysayı - member.guild.memberCount;
  client.channels
    .get(frenzykanal)
    .send(
      ` | O Sunucumuza Yeni Biri Geldi Ve İsmi ${member}, Hoşgeldin  **${frenzysayı}** Kişiye Ulaşmak İçin  **${sonuç}** Kişi Kaldı.`
    );
});
client.on("guildMemberRemove", async member => {
  let frenzysayı = await db.fetch(`FrenzyCode+SayaçSayı_${member.guild.id}`);
  let frenzykanal = await db.fetch(`FrenzyCode+SayaçKanal_${member.guild.id}`);
  if (!frenzysayı || !frenzykanal) return;
  let sonuç = frenzysayı - member.guild.memberCount;

  client.channels
    .get(frenzykanal)
    .send(
      ` | Olamaz ${member}, Sunucudan Ayrıldı! **${frenzysayı}** Kişiye Ulaşmak İçin  **${sonuç}** Kişi Kaldı.`
    );
  return;
});//-------------------SAYAÇ-----------------//




//-------------------------OTO-ROL-------------------//
client.on("guildMemberAdd", async (member, guild, message) => {
  let role = db.fetch(`otorolisim_${member.guild.id}`);
  let otorol = db.fetch(`autoRole_${member.guild.id}`);
  let i = db.fetch(`otorolKanal_${member.guild.id}`);
  if (!otorol || otorol.toLowerCase() === "yok") return;
  else {
    try {
      if (!i) return;
      if (!role) {
        member.roles.add(member.guild.roles.cache.get(otorol));
        var embed = new Discord.MessageEmbed()
          .setDescription(
            "**Sunucuya Yeni Katılan** @" +
              member.user.tag +
              " **Kullanıcısına** <@&" +
              otorol +
              ">  **Rolü verildi**"
          )
          .setColor("0x36393E")
          .setFooter(`wonders Otorol Sistemi`);
        member.guild.channels.get(i).send(embed);
      } else if (role) {
        member.roles.add(member.guild.roles.cache.get(otorol));
        var embed = new Discord.MessageEmbed()
          .setDescription(
            `**Sunucuya Yeni Katılan** \`${member.user.tag}\` **Kullanıcısına** \`${role}\` **Rolü verildi. **`
          )
          .setColor("0x36393E")
          .setFooter(`Ottoman Otorol Sistemi`);
        member.guild.channels.get(i).send(embed);
      }
    } catch (e) {
      console.log(e);
    }
  }
});
