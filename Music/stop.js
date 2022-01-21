////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const { canModifyQueue } = require("../util/MilratoUtil");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "stop",
  description: "(leave)Stops the music",
  aliases: ["leave", "end"],
  cooldown: 5,
  edesc: `Type the Command, to stop playing and leave the channel.\nUsage: ${PREFIX}stop`,

async execute(message,args,client) {
  //if not in a guild retunr
  if (!message.guild) return;
  //react with approve emoji
  message.react("<:emoji_4:815583574983966720>").catch(console.error);
  const { channel } = message.member.voice;
  //get the serverQueue
  const queue = message.client.queue.get(message.guild.id);
  //if not a valid channel
  if (!channel) return attentionembed(message, "<a:sugeditidhw8hd72duheufduh3duhe:919238876608987188> Please join a Voice Channel first");
  //If not in the same channel return error
  if (queue && channel !== message.guild.me.voice.channel)
  return attentionembed(message, `<:eieh38su:915200640773410828> You must be in the same Voice Channel as me`);
  //if no Queue return error
  if (!queue)
    return attentionembed(message, "<a:cycycydtd6xyc6d6r6r6r6d6emoji_53:918260430470774855> There is nothing you can stop!");
  //if not in the same channel return
  if (!canModifyQueue(message.member)) return;
  //Leave the channel
  await channel.leave();
  //send the approve message
  message.channel.send(new MessageEmbed()
  .setColor("#FF0000")
  .setTitle(`<:cycs4cuv7d6f7uf7d6f7guf6emoji_77:921024813622001685> stopped the music!`))
  .catch(console.error);
  }
};
