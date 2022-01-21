////////////////////////////
////////CONFIG LOAD/////////
////////////////////////////
const { canModifyQueue } = require("../util/MilratoUtil");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "skipto",
  aliases: ["st", "jump"],
  description: "(st)Skip to the selected queue number",
  cooldown: 5,
  edesc: `Type the Command, to skip a specific amount of songs to the wanted song.\nUsage: ${PREFIX}skipto`,

execute(message, args) {
    //if not in a guild return
    if (!message.guild) return;
    //react with approve
    message.react("<:emoji_4:815583574983966720>").catch(console.error);
    //if no args return error
    if (!args.length)
      return attentionembed(message, `<a:ehdgsisagreatplace:915408203309809684> ${message.client.prefix}${module.exports.name} <Queue Number>`)
    //if not a number return error
    if (isNaN(args[0]))
      return attentionembed(message, `<a:ehdgsisagreatplace:915408203309809684> ${message.client.prefix}${module.exports.name} <Queue Number>`)
    //get the queue
    const queue = message.client.queue.get(message.guild.id);
    //if no Queue return error
    if (!queue) return attentionembed(message, "<a:cycycydtd6xyc6d6r6r6r6d6emoji_53:918260430470774855> There is no Queue");
    //if member not in the same voice channel as the Bot return
    if (!canModifyQueue(message.member)) return;
    //if args bigger then the Server Queue return error
    if (args[0] > queue.songs.length)
      return attentionembed(message, `<a:eudgw8hshe:915200455943028776>The Queue is just ${queue.songs.length} long!`);
    //set playing to true
    queue.playing = true;
    //if the queue is loop
    if (queue.loop) {
      //make a loop for all songs to skip and add them at the end again
      for (let i = 0; i < args[0] - 1; i++)
        queue.songs.push(queue.songs.shift());
    //if not a loop
    } else {
      //remove all songs including the args
      queue.songs = queue.songs.slice(args[0] - 1);
    }
    //end current song
    queue.connection.dispatcher.end();
    //Send approve
    queue.textChannel.send(
      new MessageEmbed()
        .setColor("#FF0000")
        .setFooter(`${message.author.username}#${message.author.discriminator}  S͟K͟I͟P͟E͟D͟ T͟O͟ ${args[0]}`, message.member.user.displayAvatarURL({ dynamic: true }))
    ).catch(console.error);
  }
};
