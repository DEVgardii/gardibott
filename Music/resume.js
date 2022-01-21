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
  name: "resume",
  aliases: [""],
  description: "(r)Resume currently playing music",
  cooldown: 5,
  edesc: `Type this command to resume the paused Song!\nUsage: ${PREFIX}resume`,

execute(message) {
    //if not a guild return
    if(!message.guild) return;
    //react with approve emoji
    message.react("<:emoji_4:815583574983966720>").catch(console.error);
    //get the Server Queue
    const queue = message.client.queue.get(message.guild.id);
    //if no queue return error
    if (!queue) return attentionembed(message,"<a:ehdgsisagreatplace:915408203309809684>There is nothing playing!").catch(console.error);
    //if user not in the same channel as the bot retunr
    if (!canModifyQueue(message.member)) return;
    //if its paused
    if (!queue.playing) {
      //set it to true
      queue.playing = true;
      //resume the Bot
      queue.connection.dispatcher.resume();
      //Create approve embed
      const playembed = new MessageEmbed().setColor("#FF0000")
      .setTitle(`<:cycs4cuv7d6f7uf7d6f7guf6emoji_77:921024813622001685> ${message.author.username} resumed the music!`)
      //send the approve
      return queue.textChannel.send(playembed).catch(console.error);
    }
    //if its not paused return error
    return  attentionembed(message, "<a:cycycydtd6xyc6d6r6r6r6d6emoji_53:918260430470774855> The Queue is not paused!").catch(console.error);
  }
};
