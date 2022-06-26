const Discord = require("discord.js");
const fs = require("fs");
const devs = "888125940318765146";
const moment = require("moment");
const client = new Discord.Client();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server Started.');
});
client.login("OTgyMDI5NDA2NjE4OTIzMTA5.G5dCX2.AwoTW8udnnZ9FDEhmmn83qtQ3MR-qmnNJn5Ym8");
const prefix = ".";
const PREFIX = ".";
////////////////

client.on('message', id441 => {
  const madara = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (id441.content.match(madara)) {
    id441.channel.send(`Bot prefix is ==> <  **${prefix}**  >`);
  }
})

////////////////////
let owner = ['888125940318765146' ]
client.on('message', message => {
let guildID = message.content.split(' ')[1]
let guild = client.guilds.cache.get(guildID)
if(message.content.startsWith(PREFIX + 'left')) {
  if(!owner.includes(message.author.id)) return message.reply("AEKAY AEKAY")
  
if(!guild)return message.channel.send('**Send The Server ID**')
message.channel.send(`I am gonna leave => [${guild.name}]`)
guild.leave()
}
}) 
///////////
client.on('message', message => {
  
  
  
    if(message.content.startsWith(prefix + 'ava-server')) {
  
    
      var embed = new Discord.MessageEmbed()
      
  .setDescription(`**[Avatar Link](${message.guild.iconURL()})**`)
  .setImage(message.guild.iconURL({dynamic : true, size : 1024}))
  
  
  message.channel.send(embed)
    }
  });
  
////////
client.on("message",message=>{
    if(message.content.startsWith(prefix+"setnick")){
      if(!message.member.hasPermission("CHANGE_NICKNAME")) return message.reply("❌ | You Dont Have Permission")
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let member = message.mentions.users.first() || message.guild.members.cache.get(args[1])||message.guild.members.cache.find(r => r.user.username === args[1])
      if(!member) return message.channel.send(`❓ | Type User Example: => **${prefix}setnick @TAG __Nickname New__**`)
      let nick = message.content.split(" ").slice(2).join(" ")
      let g = message.guild.members.cache.get(member.id)
      if(!nick){
g.setNickname(member.username)
      }
g.setNickname(nick)
const l = g.nickname|| member.username
let embed = new Discord.MessageEmbed()
.setAuthor(message.member.user.username,message.member.user.avatarURL({dynamic:true}))
.setThumbnail(message.member.user.avatarURL({dynamic:true}))
.setTitle("📇"+"New NickName:"+"📇")
.addField(`👨‍🏫 | User Nick Change`,`${member}`,true)
.addField(`🔍 | Befor:`,`**${l}**`,true)
.addField(`🔎 | After:`,`**${nick}**`,true)
.setFooter(message.member.user.username,message.member.user.avatarURL({dynamic:true}))
.setTimestamp()
message.channel.send(embed)
    }
  })

//////////////


client.on("message", async message => {
  if (
    message.content.includes(
      "@everyon",
      "@here",
    )
  ) {
 if(message.member.hasPermission("MENTION_EVERYONE")) return;
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.cache.find(
      role => role.name === `Muted`
    );
    if (!muterole) {
      try {
        muterole = await message.guild.roles.create({
          name: "Muted",
          color: "#000001",
          permissions: []
        });
        message.guild.channels.cache.forEach(async (channel, id) => {
          await channel.updateOverwrite(muterole, {
            SEND_TTS_MESSAGES: false,
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            
            SPEAK: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    message.member.roles.add(muterole);
    const embed500 = new Discord.MessageEmbed()
      .setTitle("🔕"+"Muted Ads"+"🔕")
      .addField(`**  You Have Been Muted **`, `**Reason : Uses mention Everyone Or Here**`)
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL())
      .setAuthor(message.author.username, message.author.avatarURL())
      .setFooter(`${message.guild.name} `);
    message.channel.send(embed500);
  }
});

///////////////
client.on("message", message => {
  if (message.content === PREFIX + "close") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("❌ | You Dont Have Perms `MANAGE CHANNELS` :x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: false
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("🙈"+"**Channel Hide**"+"🙈")
      .addField("〽 | **Server name**", message.guild.name)
      .addField("#️⃣ | **Channel**", message.channel.name)
      .addField("👑 | **Moderation**", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(bj => {
      bj.react("");
    });
  }
});
client.on("message", message => {
  if (message.content === PREFIX + "open") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("❌ | You dont have Perms `MANAGE CHANNELS`:x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: true
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("🙉"+"**Channel Unhide**"+"🙉")
      .addField("〽 | **Server name**", message.guild.name)
      .addField("#️⃣ | **Channel**", message.channel.name)
      .addField("👑 | **Moderation**", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(bj => {
      bj.react("");
    });
  }
});
//////////
client.on("message", msg => {
  if (msg.content === prefix + "closeall") {
    if (!msg.member.hasPermission("MANAGE_CHANNELS"))  return;
    msg.guild.channels.cache.forEach(c => {
      c.createOverwrite(msg.guild.id, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false
      });
    });
    msg.channel.send("🙈 | **Done check hide all**");
  }
});
 
client.on("message", msg => {
  if (msg.content === prefix + "openall") {
    if (!msg.member.hasPermission("MANAGE_CHANNELS"))   return;
    msg.guild.channels.cache.forEach(c => {
      c.createOverwrite(msg.guild.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
      });
    });
    msg.channel.send("🙉 | **done check unhide all**");
  }
});








/////////////////////////


client.on("message", message => {
  if (message.content.startsWith(PREFIX + "lock")) {
    let blackjack = "created by black jack";
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("🔒 | **Please Check Your Permissions**");
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: false })
      .then(() => {
        
          
          
        return message.reply(`**:lock: <#${message.channel.id}> has been locked.**`);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "unlock")) {
    let blackjack = "created by black jack";
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("🔓 | **Please Check Your Permission**");
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: true })
      .then(() => {
        return message.reply(`**:unlock: <#${message.channel.id}> has been unlocked.**`);
      });
  }
});
//////


client.on('message',message => {

if(message.content.startsWith(PREFIX + 'ban')) {
let args = message.content.split(" ").slice(1)
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("❌ | I'm sorry, you don't have permission.")
   
let Ban = message.mentions.members.first();
let hokar = args.slice(1).join(" ");
if(!args[0]) return message.channel.send('✈️ | select member')
if(!Ban) return message.channel.send(`${args[0]} is not a member - member tag`)

if(!Ban.bannable) {
return message.channel.send('❌ | I cannot ban someone that is mod/admin.')

}

if(Ban.bannable) {

const embed = new Discord.MessageEmbed()
          .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
          .setFooter(`${client.user.username}`)
          .setTitle("✈️"+"BAN Member "+"✈️")
          .addField("〽️ | **Server Name **", message.guild.name)
          .addField("#️⃣ | **Channel**", `${message.channel.name}`) 
          .addField("✈️ | **Member ban**", Ban)
          .addField("👑 | **Moderation**", `<@${message.author.id}>`, true)
          .addField("🆔 | **Moderation Id** ", `${message.author.id}`, true)
          .setColor("RANDOM");
message.channel.send(embed)

Ban.ban();
}}})


      client.on('message', async message=>{
  
  if(message.content.startsWith(PREFIX + 'unban')){
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("❌ | I'm sorry, you don't have permission.")
    let args = message.content.split(" ").slice(1)
if(!args[0]) return message.channel.send('🤗 | select member')
const reason = args[1] || "dont reason"
let unban = await client.users.fetch(args[0])

message.guild.members.unban(unban,reason)
const embed = new Discord.MessageEmbed()
     .setFooter(`${client.user.username}`)
          .setTitle("**__UNBAN Member__**")
          .addField("〽️ | **Server Name**", message.guild.name)
          .addField("#️⃣ | **Channel**", `${message.channel.name}`) 
          .addField("🤗 | **Member unban**", unban)
          .addField("👑 | **Moderation**", `<@${message.author.id}>`, true)
          .addField("🆔 | **Moderation Id**", `${message.author.id}`, true)
          .setColor("RANDOM");
    
message.channel.send(embed)

  }})

//////////

  client.on("message", message => {
        switch(message.content.toLowerCase()) {
            case (prefix + "uban-all"):
                if (message.member.hasPermission("ADMINISTRATOR")) {
                    message.guild.fetchBans().then(bans => {
                        if (bans.size == 0) {message.reply("🔎 | There are no banned users."); throw "No members to unban."};
                        bans.forEach(ban => {
                            message.guild.members.unban(ban.user.id);
                        });
                    }).then(() => message.reply("🤗 | Unbanned all users.")).catch(e => console.log(e))
                } else {message.reply("❌ | You do not have enough permissions for this command.")}
            break;
        }
      });


///////////////
client.on('message', rw => {
  if (rw.content.startsWith(prefix + 'vban')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
let men = rw.mentions.users.first()
let mas = rw.author
if(!men) return rw.channel.send('🔎 | `MANTION THE MEMBER `'); 
rw.guild.channels.cache.forEach(c => {
c.createOverwrite(men.id, { 
          CONNECT: false
})
    })
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${rw.guild.name}`)
.setDescription(`**
 🎤 | <@${men.id}>
YOU CANT JOIN THE VOICE ROOM
👑 | BANNER : <@${rw.author.id}> **`)
.setThumbnail("")
          
client.users.cache.get(men.id).send(embed)
const Embed11 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL())
.setDescription(` 
🎤 | **Voice Bannded**
<@${men.id}>

👑 | BANNER : <@${rw.author.id}> `)
.setThumbnail("")
rw.channel.send(Embed11).then(rw => {rw.delete(10000)})
    }
})
 
 //فكه 
client.on('message', rw => {
  if (rw.content.startsWith(prefix + 'unvban')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
 let men = rw.mentions.users.first()
 let mas = rw.author
 if(!men) return rw.channel.send('🔎 | `MANTION THE MEMBER `');
 rw.guild.channels.cache.forEach(c => { 
 c.createOverwrite(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${rw.guild.name}`)
.setDescription(`**
 🔊 | <@${men.id}>
 Welcome Back To Voice
👑 | Back With : <@${rw.author.id}> **`) 
.setThumbnail("")
          
client.users.cache.get(men.id).send(embed)
const Embed11 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL())
.setDescription(` 
❤️ | GO FOR VOICE NOW
<@${men.id}>
👑 | With : <@${rw.author.id}>
`)
.setThumbnail("")
rw.channel.send(Embed11).then(rw => {rw.delete(15000)})
    } 
})

////////////

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "kick")) {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("❌ | I'm sorry, you don't have permission. ")
    let tag = message.mentions.members.first();
    if(!tag) return message.reply('🦵 | select member')
    let args = message.content.split(" ").slice(1); 
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!args) return message.reply('🦵 | select member')
 
    var blackjack = 'Gardi Bot'
    const kick = new Discord.MessageEmbed()
    .setTitle("🦵"+'**Kicked In a Server**'+"🦵")
    .addField('〽 | Server', message.guild.name)
    .addField('👤 | Name member ', tag)
    .addField('👑 | Moderation', message.author.tag)
    .setFooter(`${client.user.username}`) 
    .setColor("RANDOM")
    message.channel.send(kick)
    tag.kick();
  }})


client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "vkick")) { 
	  var mention = message.mentions.members.first();
   if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("❌ | I'm sorry, you don't have permission. ");
    }
 
    if (!message.mentions.members.first())
      return message.channel.send(
        `🗣 | select member`
      );
 
    let { channel} = message.mentions.members.first().voice;
 
    if (!channel)
      return message.channel.send(`🔎 | This person is not in the voice.`);
 
    message.mentions.members.first().voice.kick();
    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL())
        .setAuthor(message.author.username,message.author.avatarURL()) 
        .addField("👑 | Moderation", message.author.tag)
        .addField("🗣 | Member vkick", mention)
        .setFooter(`${client.user.tag}`)
        .setTimestamp()
    message.channel.send(embed)
  }
}) 





////////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "movall")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**❌ |  You Dont Have Perms `MOVE_MEMBERS`**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**❌ |  I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voice.channel == null)
      return message.channel.send(`🔎 | **You Have To Be In Room Voice**`);
    var author = message.member.voice.channel.id;
    var m = message.guild.members.cache.filter(m => m.voice.channel);
    message.guild.members.cache.filter(m => m.voice.channel).forEach(m => {
        m.voice.setChannel(author);
      })
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.avatarURL())
        .setAuthor(message.author.username,message.author.avatarURL())
        .setTitle("✅ | **Done Chek Move all**")
        .addField("👑 | Moderation", message.author.tag)
        message.channel.send(embed);
  }
});

//////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "move")) {
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("❌ | Please Check Your Permission");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("❌ | Please Check My Permission");
    if (!message.member.voice.channel)
      return message.channel.send("🔎 | Your are not in voice channel");
    if (!user) return message.channel.send(`🔎 | **>>> ${prefix}move <@mention or id>**`);
    if (!message.guild.member(user.id).voice.channel)
      return message.channel.send(
        `❌ | **${user.user.username}** Has not in Voice channel`
      );
    message.guild
      .member(user.id)
      .voice.setChannel(message.member.voice.channel.id)
      .then(() => {
      message.channel.send(
          `👨‍🏫**${user.user.username}** \nhas been moved to \n👑**${
            message.guild.member(message.author).voice.channel.name
          }**`
        );
      });
  }
});

/////////////
client.on("message", message => {
if(message.content.startsWith(PREFIX + "vmute")) {
var mention = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mention) return message.channel.send(`🔇 | **.**vmute @user`);
if(!mention.voice.channel) return message.channel.send(`🔎 | This person is not in the voice.`);
mention.voice.setMute(true).then(() => {
const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL())
        .setAuthor(message.author.username,message.author.avatarURL()) 
        .addField("👑 | Moderation", message.author.tag)
        .addField("🔇 | Member vmute", mention)
        .setFooter(`${client.user.tag}`)
        .setTimestamp()
        message.channel.send(embed);    
}).catch(console.error);
}
if(message.content.startsWith(PREFIX + "unvmute")) {
var mention = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mention) return message.channel.send(`🔈 | **.**unvmute @user`);
if(!mention.voice.channel) return message.channel.send(`🔎 | This person is not in the voice.`);
mention.voice.setMute(false).then(() => {
const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.avatarURL())
        .setAuthor(message.author.username,message.author.avatarURL())
        .addField("👑 | Moderation", message.author.tag)
        .addField("🔈 | Member unvmute", mention)
        .setFooter(`${client.user.username}`)
        .setTimestamp()
        message.channel.send(embed);   
}).catch(console.error);
}
});

//////
client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(PREFIX + "unmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "❌ | I'm sorry, you don't have permission. "
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "❌ | I'm sorry, you don't have permission. "
      );
    if (!user)
      return message.channel.send(`🔔 | **.**unmute @user`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
	  const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
          .setFooter(`${client.user.username}`)
          .setTitle("🔔"+"Unmute Member"+"🔔")
          .addField("〽️ | **Server Name**", message.guild.name)
          .addField("#️⃣ | **Channel**", `${message.channel.name}`) 
          .addField("🔔 | **Member Unmute**", `${user.username}`)
          .addField("👑 | **Moderation**", `<@${message.author.id}>`, true)
          .addField("🆔 | **Moderation Id** ", `${message.author.id}`, true)
          .setColor("RANDOM");
    message.channel.send(embed);
  }
});

client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(PREFIX + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "❌ | I'm sorry, you don't have permission. "
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "❌ | I'm sorry, you don't have permission."
      );
    if (!user)
      return message.channel.send(`🔕 | **.**mute @user`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "RANDOM",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
          .setFooter(`${client.user.username}`)
          .setTitle("🔕"+"Mute Member"+"🔕")
          .addField("〽️ | **Server Name**", message.guild.name)
          .addField("#️⃣ | **Channel**", `${message.channel.name}`) 
          .addField("🔕 | **Member Mute**", `${user.username}`)
          .addField("👑 | **Moderation**", `<@${message.author.id}>`, true)
          .addField("🆔 | **Moderation Id** ", `${message.author.id}`, true)
          .setColor("RANDOM");
    message.channel.send(embed);
  }
  if (message.content.toLowerCase() === `${PREFIX}hmute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${PREFIX}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});
///////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "user")) {
    if (!message.channel.guild) return;
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
       
    const embed = new Discord.MessageEmbed()
        .setThumbnail(heg.avatarURL())
        .setTitle(`**User Info ${message.author.tag}**`)
        .addField("🆔 | **ID**", `${heg.id}`, true)
        .addField("🧑‍🏫 | **Name**", `${heg.username}`, true)
        .addField('#️⃣ | **Discrim Account**',"**#" +  `${heg.discriminator}**`,true)
        .addField("⏳ | **Created Account At**", `${heg.createdAt}`, true)
        .addField("⏱ | **Time Join Server**", message.member.joinedAt.toLocaleString())    
        .addField("🤖 | **Bot**", `${heg.bot}`, true)
        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
        .setColor("RANDOM")      
        .setTimestamp()
 
    message.channel.send(embed);
  }
});
//////////////////

const channelid = "990042207346098199"; //id channele vc
client.on("ready", () => {
  const channel = client.channels.cache.get(channelid);
  if (!channel) return console.error("The channel does not exist!");
  channel
    .join()
    .then((connection) => {
      console.log("Successfully connected.");
    })
    .catch((e) => {
      console.error(e);
    });
});
//////
client.on("message", message => {
if (message.content.startsWith(prefix + "about")) {
message.channel.send({
embed: new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
.setColor("RANDOM")
.setTitle("Info Bot")
.addField("👑``OWNER``", `<@888125940318765146>`, true)
.addField("👨‍🏫``My Name``", `${client.user.tag} `, true)
.addField("🆔``My ID``", `[ ${client.user.id} ]`, true)
.addField("🖇``Servers``", [client.guilds.cache.size], true)
.addField("⚠️``Users``", `[ ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} ]`, true)
.addField("#️⃣``Channels``", `[ ${client.channels.cache.size} ]`, true)
.addField("📶``My Ping``",[`${Date.now() - message.createdTimestamp}` + "MS"],true)
.addField("🔐``My Prefix``", `[ ${prefix} ]`, true)
});
}
});
///////////
let smsm = ['888125940318765146']
client.on('message', message=> {
  if(message.content.startsWith(prefix + "setavatar")){
  if(!smsm.includes(message.author.id))return
  const args = message.content.split(" ").slice(1).join(" ")
  if(!args) return message.reply(new Discord.MessageEmbed().setTitle(`Hi`))
  client.user.setAvatar(`${args}`)
  message.channel.send(`> Done SetAvatar To\n||${args}||`)
  }
}) 
/////////////////////
client.on("message", message => {
if (message.content === prefix +"help") {
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
    .setDescription(`
🌍𝑃𝑢𝑏𝑙𝑖𝑐
－－－
invite - support - about - ping - user - server - avatar  allbots - date - uptime

⚙️𝑀𝑜𝑑𝑒𝑟𝑎𝑡𝑜𝑟
－－－
mute - unmute
vmute - unvmute
move - moveall
kick - vkick
vban - unvban 
ban - unban - uban-all
lock - unlock
say - esay
open - close
openall - closeall
setnick - avatarServer

🖇𝐿𝑖𝑛𝑘
－－
👻[𝑆𝑛𝑎𝑝𝐶ℎ𝑎𝑡](https://www.snapchat.com/add/gardihub)
-
🖇[𝐼𝑛𝑣𝑖𝑡𝑒](https://discord.com/api/oauth2/authorize?client_id=982029406618923109&permissions=8&scope=bot)
-
✨[𝑆𝑢𝑝𝑝𝑜𝑟𝑡](comming soon)
-
❓[𝑊𝑒𝑏𝑠𝑖𝑡𝑒](cooming soon)
-
👨‍💻𝐷𝑒𝑣𝑙𝑜𝑝𝑒𝑟<@888125940318765146>   -   <@820702223847129138>
-
👑𝑂𝑤𝑛𝑒𝑟<@888125940318765146>
`)

    .setFooter("")
   .setURL("https://discord.gg/tHSKmGHt62")
      
    message.channel.send(embed);
    message.react("<a:jano_27:799630916820795422>");
  }
});


/////////////////////
/////////////

//////////////

////////////////
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("⏳Wait\`...\`").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.edit(`\`\`\`javascript\n⏳Time taken: \n📶${PinG} ms.\`\`\``);
    });
  }
});
/////////////


//////////////////////////////////////////////


const developers = ["888125940318765146"];
client.on("message", (message) => {
  if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(prefix + "watch")) {
    client.user.setActivity(`${prefix}help ${client.guilds.cache.size} Server`, { type: "WATCHING" });
    message.reply("Done\n  Now Activity is WATCHING  ");
  }
if (message.content.startsWith(prefix + "watchuser")) {
    client.user.setActivity(`${prefix}help Server ${client.guilds.cache.size} USER ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, { type: "WATCHING" });
    message.reply("Done\n  Now Activity is WATCHING  ");
  }
  if (message.content == prefix + "listen") {
    client.user.setActivity(`${prefix}help ${client.guilds.cache.size} Server`, { type: "LISTENING" });
    message.reply("Done\n  Now Activity is LISTENING ");
  }
if (message.content == prefix + "listenuser") {
    client.user.setActivity(`${prefix}help Server ${client.guilds.cache.size} USER ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, { type: "LISTENING" });
    message.reply("Done\n  Now Activity is LISTENING ");
  }
  if (message.content == prefix + "play") {
    client.user.setActivity(`${prefix}help ${client.guilds.cache.size} Server`, { type: "PLAYING" });
    message.reply("Done\n  Now Activity is PLAYING  ");
  }
if (message.content == prefix + "playuser") {
    client.user.setActivity(`${prefix}help Server ${client.guilds.cache.size} USER ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, { type: "PLAYING" });
    message.reply("Done\n  Now Activity is PLAYING  ");
  }
  if (message.content == prefix + "stream") {
    client.user.setActivity(`${prefix}help ${client.guilds.cache.size} Server`, { type: "STREAMING", url: "https://www.twitch.tv/tapoze"});
    message.reply("Done\n  Now Activity is STREAMING ");
}
if (message.content == prefix + "streamuser") {
    client.user.setActivity(`${prefix}help Server ${client.guilds.cache.size} USER ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, { type: "STREAMING", url: "https://www.twitch.tv/tapoze"});
    message.reply("Done\n  Now Activity is STREAMING ");
}

if (message.content == prefix + "online") {
    client.user.setStatus(`online`);
    message.reply("Done\n  Now Status is online ");
}
if (message.content == prefix + "idle") {
    client.user.setStatus(`idle`);
    message.reply("Done\n  Now Status is idle ");
}
if (message.content == prefix + "dnd") {
    client.user.setStatus(`dnd`);
    message.reply("Done\n  Now Status is dnd ");
}
}); 




///////////////////////////////////////////////
   ///////////////////////////
client.on('message',async message => {
  if(message.content.startsWith(prefix + "avatar")) {
 
    let args = message.content.split(" ").slice(1).join(" ");   
   let member = message.mentions.users.first() || message.author
    let avatar = member.displayAvatarURL({size: 1024})
      const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")
        message.channel.send(embed);
    
  }})
////////////////////////////
client.on("message", message => {
  let commands = message.content.split(" ");
  if (commands[0] == prefix + "say") {
    if (!message.guild) return;
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.reply("❌ | **You Dont Have `ADMINISTRATOR` Permission ** ");
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
      return message.reply(
        "❌ | Please Check My Role Permission To `ADMINISTRATOR"
      );
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      return message.channel.send("`Usage : " + prefix + "say <message>`");
    }
    message.delete();
    message.channel.send(`**${args}**`);
  }
});

client.on("message", message => {
  let commands = message.content.split(" ");
  if (commands[0] == prefix + "esay") {
    if (!message.guild) return;
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.reply("❌ | **You Dont Have `ADMINISTRATOR` Permission ** ");
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
      return message.reply(
        "❌ | Please Check My Role Permission To `ADMINISTRATOR"
      );
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      return message.channel.send("`Usage : " + prefix + "esay <message>`");
    }
    message.delete();
const embed = new Discord.MessageEmbed()
       .setColor("random")
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription (`**${args}**`)
    .setFooter(`GARDI BOT ✨`)
    .setImage(``)
    .setThumbnail(client.user.avatarURL())
    message.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let args = message.content.split(" ");
  let command = args[0].toLowerCase();
  if (command === prefix + "clear")  {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ | You are missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ | I Am missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!args[1]) {
      message.channel
        .bulkDelete(100)
        .then(m =>
          message.channel
            .send(`\`\`\`\n✅ | Deleted ${m.size} messages\n\`\`\``)
            .then(p => p.delete({ timeout: 1500 }))
        );
    } else {
      message.delete().then(n => {
        message.channel
          .bulkDelete(args[1])
          .then(m =>
            message.channel
              .send(`\`\`\`\n✅ | Deleted ${m.size} messages\n\`\`\``)
              .then(p => p.delete({ timeout: 1500 }))
          );
      });
    }
  }
});
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content === prefix + "date") {
    var currentTime = new Date(),
      Year = currentTime.getFullYear(),
      Month = currentTime.getMonth() + 1,
      Day = currentTime.getDate();

    var clinet = new Discord.MessageEmbed()
      .setTitle("⏱Date Today⏱")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("" + Day + "/" + Month + "/" + Year + "🗓");
    message.channel.send(clinet);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content === prefix + "support") {
    if (!message.channel.guild)
      return message.reply("**this command only for server**");
    const embed = new Discord.MessageEmbed()
	  .setDescription(``)
	  message.channel.send(embed);
  }
});
////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content === prefix + "invite") {
    if (!message.channel.guild)
      return message.reply("**this command only for server**");
    const embed = new Discord.MessageEmbed()
	  .setDescription(`[INVITE](https://discord.com/api/oauth2/authorize?client_id=982029406618923109&permissions=8&scope=bot)`)
	  message.channel.send(embed);
  }
});

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

///////////////////////

//////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (!message.channel.guild) return;

  if (message.content.startsWith(prefix + "allbots")) {
    if (message.author.bot) return;
    let i = 1;
    const botssize = message.guild.members.cache
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setDescription(
        `**All Bots Is ${
          message.guild.members.cache.filter(m => m.user.bot).size
        } In Server**
${botssize.join(" \n")}`
      )
      .setFooter(client.user.username, client.user.avatarURL())
      .setTimestamp();
    message.channel.send(embed);
  }
});

///////////////////////////////////////////////////////////////// /////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "uptime")) {
    let rozh = Math.floor(client.uptime / 86400000);
    let katzhmer = Math.floor(client.uptime / 3600000) % 24;
    let daqa = Math.floor(client.uptime / 60000) % 60;
    let chrka = Math.floor(client.uptime / 1000) % 60;

    return message.channel.send(
      `__Uptime:__\n\n☀️${rozh}day \n⏳${katzhmer}hour \n⏱${daqa}minute \n⏲${chrka}seconds`
    );
  }
});
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "server")) {
    if (message.author.bot) return;
    if (!message.channel.guild) return;

    let args = message.content.split(" ").slice(1);

    const os = require("os");

    let region;
    switch (message.guild.region) {
      case "europe":
        region = "🇪🇺 Europe";
        break;
      case "us-east":
        region = "🇺🇸 us-east";
        break;
      case "us-west":
        region = "🇺🇸 us-west";
        break;
      case "us-south":
        region = "🇺🇸 us-south";
        break;
      case "us-central":
        region = "🇺🇸 us-central";
        break;
    }

    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("RANDOM")
      .setTitle(`server Info`)
      .addFields(
        {
          name: "👑 | Owner: ",
          value: `${message.guild.owner}`,
          inline: true
        },
	      
	      
        {
          name: "🧑‍🏫 | All Members: ",
          value: `${message.guild.memberCount} users`,
          inline: true
        },
	      
	      
        
	      
	      
        {
          name: "🤖 | All Bots: ",
          value: ` ${
            message.guild.members.cache.filter(m => m.user.bot).size
          } bots`,
          inline: true
        },
	      
	      
        {
          name: "⏳ | Creation Date: ",
          value: message.guild.createdAt.toLocaleDateString("en-us"),
          inline: true
        },
	      
	      
        {
          name: "〽 | Roles Number: ",
          value: ` ${message.guild.roles.cache.size} roles in this server.`,
          inline: true
        },
	      
	      
        
        {
          name: "⁉️ | Boosters: ",
          value:
            message.guild.premiumSubscriptionCount >= 1
              ? ` ${message.guild.premiumSubscriptionCount} Boosters`
              : ` no boosters Found`,
          inline: true
        },
	      
	      
        {
          name: "⚠️ | Emojis: ",
          value:
            message.guild.emojis.cache.size >= 1
              ? `All emojis ${message.guild.emojis.cache.size} !`
              : " no emojis Found",
          inline: true
        }
	      
      );
    await message.channel.send(embed);
  }
});
/////////////////////////////////////////////////////////////////

//////////////////////////

////////////////

////////



