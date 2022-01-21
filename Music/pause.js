const { canModifyQueue } = require("../util/MilratoUtil");
const { Client, Collection, MessageEmbed } = require("discord.js");

const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);
module.exports = {
  name: "pause",
  aliases: [''],
  description: "(pe)Pause the currently playing music",
  cooldown: 5,
  edesc: `Type this command to pause the Song!\nUsage: ${PREFIX}pause`,
  execute(message) {
    //If not in a guild return
    if(!message.guild) return;
    //get the queue
    const queue = message.client.queue.get(message.guild.id);
    //if no queue return error
    if (!queue) return attentionembed(message, " <a:ehdgsisagreatplace:915408203309809684> There is nothing playing").catch(console.error);
    //If not in the same channel return
    if (!canModifyQueue(message.member)) return;
    //If its playing
    if (queue.playing) {
      //set playing to false
      queue.playing = false;
      //pause the music
      queue.connection.dispatcher.pause(true);
      //define the pause embed
      const pausemebed = new MessageEmbed().setColor("#FF0000")
      .setTitle(`<:cycs4cuv7d6f7uf7d6f7guf6emoji_77:921024813622001685>paused the music.`)
      //react with approve emoji
      message.react("<:emoji_4:815583574983966720>")
      //return message
      return queue.textChannel.send(pausemebed).catch(console.error);
    }
  }
};
