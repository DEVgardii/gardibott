const Discord = require("discord.js");
const fs = require("fs");
const devs = "681553671364018196";
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
client.login("NzY1Mzk2ODQ3Mzc5NDgwNjYw.X4UNXA.xVTomm-LEbD3oH87ioVjUFxXoXI");
const prefix = ".";
////////////////////////
client.on("message", message => {
if (message.content === prefix +"help") {
const embed = new Discord.MessageEmbed()
.setColor("BLACK")
    .setDescription(`
🌙 ┇ **Everyone**
> \`invite\` - \`support\` - \`about\` - \`about owner\`
> \`uptime\` - \`ping\` - \`user\`  -  \`srever\`
> \`avatar\` - \`icon\` - \`date\` - \`se\`
> \`allbots\` - \`prefix\`
**⚙️┇Moderator**
> \`mute\` - \`unmute\` - \`vmute\` - \`unvmute\`
> \`move\` - \`move all\` - \`kick\` - \`vkick\`
> \`vban\` - \`unvban\` - \`ban\` - \`unban\`
> \`lock\` - \`unlock\` - \`lock all\` - \`unlock all\`
> \`clear\` - \`open\` - \`close\` - \`open all\`
> \`close all\` - \`role add\` - \`role remove\` - \`nick\`
> \`slowmode\` - \`sug\`
**💎┇Link**
[**Support**](https://discord.gg/5cRNwVX89x)   **|**   [**Invite**](https://discord.com/api/oauth2/authorize?client_id=925840229443731487&permissions=8&scope=bot)
`)

    .setFooter(` System bot ✨ | Coded by , JANO`, client.user.avatarURL)
    .setURL("https://images-ext-2.discordapp.net/external/4RET2OBD1PTYwUo-cgDNkj6szsR2CxU3_JMWi1MbwyQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/765396847379480660/e6eeb6d68aa374138b5862a8b674818c.png")
      
    message.channel.send(embed);
    message.react("<a:jano_27:799630916820795422>");
  }
});


/////////////////////
/////////////
client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@everyone")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send everyone```");
  }
});
/////////////
client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@here")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send here ```");
  }
});
//////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "slowmode")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("🧐 - Please Check Your Permission");
    if (
      !message.guild
        .member(message.client.user)
        .hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send(
        "🧐 - Please Check My Permission to can edit in this channel."
      );

    let time = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (isNaN(time)) return message.channel.send("**🧐 - Its not a time**");
    if (!time)
      return message.channel.send("**🧐 - Please Type a New SlowMode**");
    message.channel.setRateLimitPerUser(time);
    message.channel.send("**Done Changed A SlowMode To: " + time + "**");
  }
});
////////////////
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong | <a:jano_24:799630717507862558> ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\`\`\``);
    });
  }
});
/////////////
client.on("message", message => {
  if (message.content.includes("discord.gg")) {
    if (!message.member.hasPermission("MANAGE_MESSAGE")) {
      message.delete();
      message.reply("```you can send partner``` <a:jano_11:799293444136108084>");
      message.react("🚫");
    }
  }
});

//////////////////////////////////////////////

client.on('ready', () => {
	console.log(`${client.user.tag}`);
	console.log(`${client.guilds.cache.size} Servers`);
	console.log(`${client.users.cache.size} Members`);
	console.log(`${client.channels.cache.size} Channels`);
	console.log(`[ ${client.guilds.cache.map(g => g.name).join(', \n ')} ]`);
	client.user.setActivity(`${prefix}help  Server ${client.guilds.cache.size} , Users ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, { type: 'PLAYING' });
});
/////////////////


///////////////////////////////////////////////
   client.on('message', message => {
    if (message.content.startsWith(prefix + "id")) {
    let user = message.mentions.users.first();
    if (!user) return message.channel.send('**id A member User**');
      message.channel.send(`<a:jano_28:840493514244751400>** [ ${user.username} ] Id :**<a:jano_28:840493514244751400>`);
      message.channel.send(`${user.id}`);
}
}); 
   ///////////////////////////
   client.on("message", JANO => {
    if (JANO.content.startsWith(prefix + "avatar")) {
  var embed = new Discord.MessageEmbed()
         .setAuthor(`${JANO.author.username}`, JANO.author.avatarURL({dynamic: true}))
         .setColor('#0000ff')
         .setDescription(`**[Avatar Link](${JANO.author.avatarURL({dynamic: true, format: 'png', size: 1024})})**`)
         .setImage(JANO.author.avatarURL({dynamic: true, format: 'png', size: 1024}))
         .setFooter(`Requsted by ${JANO.author.tag}`, JANO.author.avatarURL({dynamic: true}))
    JANO.channel.send(embed);
}
});

////////////////////////////
client.on("message", message => {
  let commands = message.content.split(" ");
  if (commands[0] == prefix + "say") {
    if (!message.guild) return;
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.reply("**You Dont Have `ADMINISTRATOR` Permission ** <a:jano_11:799293444136108084>");
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
      return message.reply(
        "Please Check My Role Permission To `ADMINISTRATOR <a:jano_11:799293444136108084>"
      );
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      return message.channel.send("`Usage : " + prefix + "say <message>`");
    }
    message.delete();
    var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${args}`)
      .setFooter(`By ${message.author.tag}`);
    message.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let args = message.content.split(" ");
  let command = args[0].toLowerCase();
  if (command === prefix + "clear") {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ You are missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ I Am missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!args[1]) {
      message.channel
        .bulkDelete(100)
        .then(m =>
          message.channel
            .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
            .then(p => p.delete({ timeout: 3000 }))
        );
    } else {
      message.delete().then(n => {
        message.channel
          .bulkDelete(args[1])
          .then(m =>
            message.channel
              .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
              .then(p => p.delete({ timeout: 3000 }))
          );
      });
    }
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "stats")) {
    message.channel.send({
      embed: new Discord.MessageEmbed()
        .addField("Uptime", timeCon(process.uptime()), true)
       .setColor("#0000ff")
	    .addField(
          "RAM Usage",
          `${(process.memoryUsage().rss / 1048576).toFixed()}MB`,
          true
        )
        .addField("Guild Count", client.guilds.cache.size, true)
    });
  }
});

function timeCon(time) {
  let days = Math.floor((time % 31536000) / 86400);
  let hours = Math.floor(((time % 31536000) % 86400) / 3600);
  let minutes = Math.floor((((time % 31536000) % 86400) % 3600) / 60);
  let seconds = Math.round((((time % 31536000) % 86400) % 3600) % 60);
  days = days > 9 ? days : "0" + days;
  hours = hours > 9 ? hours : "0" + hours;
  minutes = minutes > 9 ? minutes : "0" + minutes;
  seconds = seconds > 9 ? seconds : "0" + seconds;
  return `${days > 0 ? `${days}:` : ""}${
    (hours || days) > 0 ? `${hours}:` : ""
  }${minutes}:${seconds}`;
}
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content === prefix + "time") {
    var currentTime = new Date(),
      Year = currentTime.getFullYear(),
      Month = currentTime.getMonth() + 1,
      Day = currentTime.getDate();

    var clinet = new Discord.MessageEmbed()
      .setTitle("[ TODAY]  ")
      .setColor("BLACK")
      .setTimestamp()
      .setDescription("" + Day + "-" + Month + "-" + Year + "");
    message.channel.send(clinet);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content === prefix + "support") {
    if (!message.channel.guild)
      return message.reply("**this command only for server**");
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(client.user.avatarURL())
      .setDescription(`
 
[support](https://discord.gg/9n6dj99ZEN)`);
    message.channel.send(embed);
  }
});
////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content === prefix + "invite") {
    if (!message.channel.guild)
      return message.reply("**this command only for server**");
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(client.user.avatarURL())
      .setDescription(`
[invite](https://discord.com/api/oauth2/authorize?client_id=867208331659706379&permissions=8&scope=bot)
`);
    message.channel.send(embed);
  }
});

//////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (!message.channel.guild)
      return message.channel.send(
        "**❌ | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
     const lock = new Discord.MessageEmbed()
     
      .setColor("#00000")
      .setDescription(
        `<:emoji_50:861993564389244988> | **Locked Channel**
**Channel Name** : <#${message.channel.id}>
**Locked By** : <@${message.author.id}>
`
      )
      .setThumbnail(message.author.avatarURL())
     .setFooter(`${message.author.tag}`, message.author.avatarURL())
          .setTimestamp()

    message.channel.send(lock);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (!message.channel.guild)
      return message.channel.send(
         "**❌ | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    const unlock = new Discord.MessageEmbed()
      .setColor("#00000")
      .setDescription(
        `<:emoji_44:861993374898454551> | **UnLocked Channel**
**Channel Name** : <#${message.channel.id}>
**Locked By** : <@${message.author.id}>
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(unlock);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "emoji")) {
    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach(emoji => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    let Embed = new Discord.MessageEmbed()
      .setTitle(`Emojis in ${message.guild.name}.`)
      .setDescription(
        `**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**All Emoji [${OverallEmojis}]**`
      )
      .setColor(`RANDOM`);
    message.channel.send(Embed);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "slap")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("%slap <@USER>");
    let slaps = [
      "https://media.discordapp.net/attachments/738277612039962688/775009108402372608/image0.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009109166522428/image1.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009109383577621/image2.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009109585821746/image3.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009109749006406/image4.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009110177349692/image6.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009110373433364/image7.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009110525345797/image8.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009110663233576/image9.gif"
    ];
    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} Slap ${user.username}!`)
      .setColor(`RANDOM`)
      .setImage(slaps[Math.floor(Math.random() * slaps.length)]);
    message.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "love")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("%love <@USER>");
    let loves = [
      "https://media.discordapp.net/attachments/738277612039962688/775017084848439296/image0.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017085545086996/image2.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017085721116732/image3.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017085948133406/image4.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017086127702047/image5.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017086300717068/image6.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017086522228766/image7.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017086757634128/image8.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017087004442634/image9.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017087004442634/image9.gif"
    ];

    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} Love ${user.username}!`)
     .setColor(`RANDOM`)
      .setImage(loves[Math.floor(Math.random() * loves.length)]);
    message.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "hug")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("%Hug <@USER>");

    let hugs = [
      "https://media.discordapp.net/attachments/738277612039962688/775010008437096508/image0.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010008676433945/image1.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010008823103508/image2.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010008982224896/image3.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010009151045692/image4.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010009322094602/image5.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010009578340382/image6.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010009796575262/image7.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010009972867082/image8.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010010152566804/image9.gif"
    ];

    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} Hugs ${user.username}!`)
      .setColor(`RANDOM`)
      .setImage(hugs[Math.floor(Math.random() * hugs.length)])
      .setFooter("hug");
    message.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "kiss")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("%Kiss <@USER>");
    var kiss = [
      "https://media.discordapp.net/attachments/738277612039962688/775017819980431360/image0.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017820161179648/image1.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017820445868032/image2.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017820643262465/image3.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017820853239808/image4.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017821129932860/image5.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017821611753472/image7.gif",
      "https://media.discordapp.net/attachments/725046590242291763/775020613109678090/image0.gif"
    ];

    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} kiss ${user.username}!`)
      .setColor(`RANDOM`)
      .setImage(kiss[Math.floor(Math.random() * kiss.length)]);
    message.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "slot")) {
    let slot1 = ["🖤", "🤍", "❤️", "🖤", "💜", "💚", "💛", "🧡"];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let we;
    if (slots1 === slots2 && slots2 === slots3) {
      we = "Wain!";
    } else {
      we = "Lose!";
    }
    message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`);
  }
});
///////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "fruit")) {
    let slot1 = ["🍏", "🍇", "🍒", "🍍", "🍌", "🍋", "🍑", "🍓"];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let we;
    if (slots1 === slots2 && slots2 === slots3) {
      we = "Wain!";
    } else {
      we = "Lose!";
    }
    message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "boom")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("%boom <@USER>");

    let bombs = [
      "https://media.discordapp.net/attachments/738277612039962688/775016118678454282/image0.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016118938894407/image1.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016119148740608/image2.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016119328833566/image3.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016119588225094/image4.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016119778017290/image5.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016119966629928/image6.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016120393924698/image8.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016120577949706/image9.gif"
    ];

    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} boom ${user.username}!`)
      .setColor(`RANDOM`)
      .setImage(bombs[Math.floor(Math.random() * bombs.length)]);
    message.channel.send(embed);
  }
});

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (!message.channel.guild) return;

  if (message.content.startsWith(prefix + "bots")) {
    if (message.author.bot) return;
    let i = 1;
    const botssize = message.guild.members.cache
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setDescription(
        `**Found ${
          message.guild.members.cache.filter(m => m.user.bot).size
        } bots in this Server**
${botssize.join("\n")}`
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
      `__Uptime:__\n${rozh}d ${katzhmer}h ${daqa}m ${chrka}s`
    );
  }
});
/////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "roleinfo")) {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args[0]) return message.channel.send("**Please Mention A Role!**");
    let role =
      message.mentions.roles.first() ||
      message.guild.roles.cache.get(args[0]) ||
      message.guild.roles.cache.find(
        r => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
      );
    if (!role) return message.channel.send("**Please Enter A Valid Role!**");
    const status = {
      false: "No",
      true: "Yes"
    };
    let roleembed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor("Role Info")
      .setThumbnail(message.guild.iconURL())
      .addField("**ID**", `\`${role.id}\``, true)
      .addField("**Name**", role.name, true)
      .addField("**Hex**", role.hexColor)
      .addField("**Members**", role.members.size)
      .addField("**Position**", role.position)
      .addField("**Mentionable**", status[role.mentionable])
      .addField("**Time Create**", role.createdAt.toLocaleString(), true)
      .setFooter(message.member.displayName, message.author.displayAvatarURL())
      .setTimestamp();

    message.channel.send(roleembed);
  }
});
/////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "channelinfo")) {
    let args = message.content.split(" ").slice(1);
    let channel =
      message.mentions.channels.first() ||
      client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) ||
      message.guild.channels.cache.find(
        r => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.channel;
    if (!channel) return message.channel.send("**Channel Not Found!**");
    let channelembed = new Discord.MessageEmbed()
      .setTitle(`Channel Information for ${channel.name}`)
      .setThumbnail(message.guild.iconURL())
      .addField("**NSFW**", channel.nsfw, true)
      .addField("**Channel ID**", channel.id, true)
      .addField("**Channel Type**", channel.type)
      .addField("**Channel Topic**", `${channel.topic || "No Description"}`)
      .addField("**Channel Created At**", channel.createdAt)
      .setFooter("CHANNEL INFO")
      .setColor("RANDOM");
    message.channel.send(channelembed);
  }
});
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
      .setTitle(`${message.guild.name} server Info`)
      .addFields(
        {
          name: "Owner: ",
          value: `${message.guild.owner}`,
          inline: true
        },
        {
          name: "All Members: ",
          value: ` ${message.guild.memberCount} users`,
          inline: true
        },
        {
          name: "Members Online: ",
          value: ` ${
            message.guild.members.cache.filter(
              m => m.user.presence.status == "online"
            ).size
          } users online`,
          inline: true
        },
        {
          name: "All Bots: ",
          value: ` ${
            message.guild.members.cache.filter(m => m.user.bot).size
          } bots`,
          inline: true
        },
        {
          name: "Creation Date: ",
          value: message.guild.createdAt.toLocaleDateString("en-us"),
          inline: true
        },
        {
          name: "Roles Number: ",
          value: ` ${message.guild.roles.cache.size} roles in this server.`,
          inline: true
        },
        {
          name: `🗺 Region: `,
          value: region,
          inline: true
        },
        {
          name: `Verified: `,
          value: message.guild.verified ? "Server is verified" : `Not verified`,
          inline: true
        },
        {
          name: "Boosters: ",
          value:
            message.guild.premiumSubscriptionCount >= 1
              ? ` ${message.guild.premiumSubscriptionCount} Boosters`
              : ` no boosters Found`,
          inline: true
        },
        {
          name: "Emojis: ",
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
client.on("message", message => {
  if (message.content === prefix + "channel all") {
    var channels = message.guild.channels.cache
      .map(channels => `${channels.name}, `)
      .join("\n ");
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("rooms:", `**[${channels}]**`);
    message.channel.send(embed);
  }
});

//////////////////////////
client.on("message", msg => {
  if (
    msg.content == prefix + "textarabic"
  ) {
    if (msg.author.bot) return;
    if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
 
    var x = [
"ألا بذكر الله تطمئن القلوب❤","يدرون بينـه شگد نودّهُـم ، مَرمرونة.🌷",
"نجمه وكتلني موادع الليل","💔وأستحيت من الله حيل ، وآنه سآجد مر ذكرهم والتهي🌷",
"مرت چم سنه وبعدك براسي تدگ","صح تنكتب عايش بالسجلات!! بس انت مجرد رقم ينعد",
"العفو ألذّ من الانتقام، والعمل أمتع من الفراغ، والقناعه اأعظم من المال، والصحّه خیرٌ من الثّروه!","ولا مكتوب تايه يندل عيوني",
"كُـن لطيفاً كــالغيم.. تُمطر خيراً وتمضي بسلام.","غُرب بعيونهُم صرنـه ونسونـه",
"عندما نفقد الشّیء نجعله ونرسمه خیالاً لا یُوصف، ونعمّم هذا الخیال فی کلّ شیء حتّى یصبح على شکل مسلّماتٍ لا فرار منها.","خلص كل الحچي و انساك بس شنساك..؟",
"العفو ألذّ من الانتقام، والعمل أمتع من الفراغ، والقناعه اأعظم من المال، والصحّه خیرٌ من الثّروه!","",
"و تترك حُزنك بين المقاعد، ترجوه يُسرق.. - مظفر النواب","حنّيتلك وادري اليحن.. تثگل عيونه من الحزن",
"عرفتك ما تحن.. من گتلي الله وياك! 🌷","كُـن لطيفاً كــالغيم.. تُمطر خيراً وتمضي بسلام",]
    var x3 = Math.floor(Math.random() * x.length);
    msg.channel.send(`${x[x3]}`)
  }
});
////////////////
client.on("message", msg => {
  if (
    msg.content == prefix + "textenglish"
  ) {
    if (msg.author.bot) return;
    if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
 
    var x = [
"best friends are siblings from anoher mother","In order to succeed, your desire for success should be greater than your fear of failure",
"be kind, not only to others, to yourself too!","Inspiration is some mysterious blessing which happens when the wheels are turning smoothly. - Quentin Blake",
"In order to succeed, your desire for success should be greater than your fear of failure","Love is some loving someone whom you will not reach to!",
".How amazing is it to find someone who wants to hear about all the things that go on in your head","Instead of success in a base I hate, I prefer to loose in a base I enjoy.",
"Never bend your head. Always hold it high. Look the world straight in the eye.","",
"A tree far away from the forest!","Be patient.sometimes you have to go through the worst to get to the best!",
"We have a situation here that we can't believe that we don't believe us anymore!","If size mattered the elephant would be the king of jungle",
"Be the change that you wish to see in the world","We overlooked They thought we were blind!",
"Each person must live their life as a model for others.","The losers find problem in every answer but the winners find an answer in every problem"]
    var x3 = Math.floor(Math.random() * x.length);
    msg.channel.send(`${x[x3]}`)
  }
});
////////
client.on("message", msg => {
  if (
    msg.content == prefix + "textturkish"
  ) {
    if (msg.author.bot) return;
    if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
 
    var x = [
"Güzel Şeyler Hiç Bitmesin Mesela Senin Sevgin","Ben o gözlerini dünyalara vermem ki kardeşim",
"Geceler yıldızlara ben sana muhtacım, unutma .","şimdi ! Bıçağın üstüne gidip şarkı söylerim Ölüm bile seni sevdiğimi biliyor ..",
"Yaşamak Istediğim Dünya Sensin","büyüdüm anne şimdi senden habersiz ağlıyorum...",
"Gözlerindeyim ben hala bir yere düşmedim..","Sen gel bide geceleri bana sor özlemek inan yaşamaktan daha zor..zap️",
"Yanakları annemin yemeklerinden daha lezzetli Ancak çok uzakta","Bitmeyen bir sekız yılık hasret..",
"Ben bu kadar çok şey öğrendim ve sen yoksun","Yalancının mumu yatsayıa kadar..",
"İnsanlar incinecek ve mutlu ol diyecekler.","Gözlerindeyim ben hala bir yere düşmedim..",
"Ay dünyaya, ben sana tutulmuşum..","Önle Kolaysa Gel Başimdan , Kaldir At Sevdani",]
    var x3 = Math.floor(Math.random() * x.length);
    msg.channel.send(`${x[x3]}`)
  }
});
//////////
client.on("message", msg => {
  if (
    msg.content == prefix + "textkurdish"
  ) {
    if (msg.author.bot) return;
    if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
 
    var x = ["بـمرێ ئـەو دڵەیی تەنھا بـەناو ھێنانت پڕ دەبێ","ڕەنگە ھیچ کات خۆشیان نەویستبین ڕەنگە تەنھا برینەکانی خۆیان بە ئێمە چاک کردبێتەوە ..",
"ئەبم بە خەون بۆ ھەمووان و خەو بە کەسەوە نابینم","هیچ شتێک ڕاست نیە جگە لەو نامایەی دەیسڕیەوە پێش ئەوەی  بینێری ..",
"جێت ناهێڵم، تەنها دوور ئەکەومەوە!",
"بە هەموو ئاقڵتەوە وا ئەزانی گرینگی لام، گوڵم ئەو زەمانە گوزەشت کە جێت هەبوو لە دڵم",
	     "پشتـم لە دونیا کرد روی نەبوو تا رووی تێکـەم لەناو خۆما گۆرێکم ھەلـکەند بۆ ھەموو ئومێدەکان تا ھەمیشە رووناك بمــے",
	     "ئــمڕۆ خــۆشترین پێـکەنی دنیا دڵــخۆشم نـاکات",
	     "دڵــخۆش بوون  بەپارە بێ زور بەی کەس دەتـوانی بیکڕێ بەڵام  داخـەکەم بەخـۆشـەویستیەکی پـاکـە",
	     "بەپێی دواین لێکۆڵینەوە کە خۆم کردومە، ئەو کوڕانەی کە ئیمۆجی زۆر بەکاردێنن، ئەندامی پەلکەزێڕینەن",
	     "خۆت خۆشبوێت تا ھەمووان ناچار بکەی نازی ھەبوونت بکێشن",
	     "تاکۆتایی تەمەن بە تەنیا بمێنیتەوە، باشترە لەوەی شەو ڕۆژ لەگەڵ کەسێك بیت کە هیچ هەستێکی نەبێ بۆت",
	     "لەناو هەموو برینەڪانی ژیانما تۆ ئەو برینەی بەمردن لەبیر ئەچیتەوە!",
	     "من ئەھلی منەت کێشان نیم دەمێنیتەوە باشە نامێنیتەوە باشتر",
	     "وەک ئەوەی دروست بووبم بۆئەوەی هەموو ئەو شتانەی خۆشم دەویست لەدەستی بدەم",
	     "تە‌مە‌نێك لە‌ ناو دڵم ھە‌ڵت دە‌گرم بە‌ بێ ماندوو بون",
"هیـوام وایــە جـەژنـی ئـێـوە خــۆش بـــێـــت",
	     "بەڵام ئەوەش گوناهێکی گەورەیە مرۆڤ خۆشبەخت نەبێت.",
	     "گریانم یەت بۆ ئەو وێنانەیی پێش ناسینی تۆ تیایدا پێکەنیووم",
	     "خـۆشـمـەوێـی'وە بـەڵـێـن بـێ خـۆمـان بـپـارێـزم",
	     "هۆگربوونم بە تۆجوانترین روداوی ژیانم",
	     "ئەژیم بەدڵێکی مردوو کەهیچ کەس بەرگەی وێران بونەکەم ناگرێت",
	     "ئەوانەی لە دونیا لەیەکتر توڕە دەبن لە قیامەت ڕوبەڕوی یەکتر دەکرێنەوە من لێت خۆشدەبم بۆ ئەوەی لە قیامەتش نەوبینمەوە... !",
	     "دەمەوێ بگەڕێمەوەئەو کاتەی کە مانای خواحافیزی تا بەیانی بوو",
	     "تــیــری دۆســتــەکــانــم نــەبــا دوژمن هــێــزی مــنــی نــەدەبــو",
	     "هەموو خەڵک لە خۆم دوور ئەخەمەوە ‏لەبەر ئەوەی تۆ نین ، وە هەرگیز ناتوانن ببن بە تۆ",
	     "گرینگ نیه‌ له‌ هه‌ر كوێیه‌ك بی ,چه‌نێك دوور بی ,تۆ'م بۆ هه‌میشه‌ له‌ دڵمدا هه‌ڵگرتوه‌",
	     "مانـگ بـە بـۆنـەی ئـەستـێـرەکـانـەوەدەژیــت منـیـش بـە بـۆنـەی تـۆ",
	     "بــۆ هـەمیشـە وەک نهێنیەکی جوان لە دڵما دەمێنیتەوە",
	     "لێیان حەرام بێت گرتنی دەستەکانت ",
	     "مڕوڤەكان بە چاوەروانی تاقی مەكەنەوە چاوەروانی مڕوڤەكان ئەگۆرێ",
	     "!...لەگەڵ تەنیایی راهاتووم عادەتم پی کردوە .بەڵام هەنێک جار زۆر حەزم لیە ئەزیزی دڵی کەسێک بم ",
	     "خراپ بووی ...!بەڵام هەر ئەویشە باش بوو ",
	     "خەمبار مەبە ئەوەتەنها ڕۆژێکی خراپە نەک ژیانێکی خراپ",
	     "بيرت ئه كه م به لام ئه وه نده به سه كه باشيت وبيوست به من نيه",
"دەرەوە ساردە حەزم لەنێو دڵی تۆیە...!",
"ھۆگری کەس مەبن لێرە مرۆڤەکان ناگەن بە یەکتری تەنھا دەبنـە خاوەنی دڵی یەکتری :)...",
"کاتێک شتێک ڕاستەقینە بێت بۆ هەمیشە دەمێنێتەوە","وەفـا لـە ئەخلاق دای جـوانیش  لە ناخدایـە.!","گـیانـی منـە ھێـشـتا گـەرچـی دڵـی دا بە کـەسێکی دی","بۆت دوبارە نابمەوە ئەمە بەڵێنە","بۆ کەسانێک دەنوسین کە گرینگ نین لایان","درەنگ تر دەمرن ئەوانەی کەسێک خۆشی دەوێن","ژیان وەک دەریایەکی بێ ئاوە:)","لـە من غافل مەبـە ، کە من بـۆ تـۆ لە جیھـان غافلم...","لەگەڵ تۆ بـوون تەنھا لە من دێ","گـوێ بـۆ هــەمــوو کــەسـیــک بــگـرە بــەڵام قـســە بــۆ هــەمـوو کــەس مـەکــە...","جێت ناهێڵم، تەنها دوور ئەکەومەوە!","خـەڵک بۆ یەکتری وتـۆش بۆ من","ئەمجارە ماڵئاوای ناکەم دڵت ئەبێ وردە وردە ھەست بە نەبوونیم بکات","دەستم دەست نییە شوێنی بینینی ئازاردانەکانی تۆیە","چیرۆکەکە کۆتایی ھات من و تۆ نەبووین بە ئێمە","میھرەبان بن ڕۆژێک دێ ھەرگیز یەکتری نابینەوە","دڵم بۆ باوەشێك تەنگە كە كەسێكى تر تيایدا ئارامە..","لە دڵی ھەموو ماندا مرۆڤێک ھەیە ھەرگیز نامرێ ئەگەر بوونیشی نەمابێ","لێم زویر مەبە ھەر تۆم ھەیە شەڕی پێ بفرۆشم","خۆزگە ئەو توانایەم ھەبوایە بمتوانیایە پێت بڵێم خۆت داپۆشە نەوەك سەرمات بێت","بەڵێنێکی بچوکت پێ دەدەم ڕۆژێک لە ھەموو کەسێکدا دەگەڕێی بۆ منێکی تر بەڵام نای دۆزیەوە","ئەگەر ئەو ئاشقت بایە جگە لەتۆ دڵی نەدەدا بەکەسێکی تر!.", "چیرۆکەکە کۆتایی ھات من و تۆ نەبووین بە ئێمە", "دەرەوە ساردە حەزم لەنێو دڵی تۆیە...!", "شـەو وەرە خـەونـم دڵـم بـۆت تـەنـگ بـووە..)!", "تۆ لە کۆتای نامەی خۆ کوشتن ئەچی", "من یارو پەرستارو ھاوسەفەرت بۆ کێم دەڕەنجێنی", "نـەمـزانـۍ ڕۆژێـــڪٮ دێـــت..لـــەپــــۆســتەکــــانم بــــاسی نەبونـــیت بــــڪـەم"];
    var x3 = Math.floor(Math.random() * x.length);
    msg.channel.send(`${x[x3]}`)
  }
});


