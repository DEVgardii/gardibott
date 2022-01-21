////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const createBar = require("string-progressbar");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "nowplaying",
  aliases: [''],
  description: "(np)Show current song",
  cooldown: 5,
  edesc: `Type nowplaying in chat, to see which song is currently playing! As well as how long it will take until its finished\nUsage: ${PREFIX}nowplaying`,

execute(message) {
    //if not in a guild return
    if(!message.guild) return;
    //react with approve emoji
    message.react("<:emoji_4:822203026776391711>")
    //get Server Queue
    const queue = message.client.queue.get(message.guild.id);
    //if nothing playing error
    if (!queue) return attentionembed(message, "There is nothing playing.").catch(console.error);
    //Define the current song
    const song = queue.songs[0];
    //get current song duration in s
    let minutes = song.duration.split(":")[0];
    let seconds = song.duration.split(":")[1];
    let ms = (Number(minutes)*60+Number(seconds));
    //get thumbnail
    let thumb;
    if (song.thumbnail === undefined) thumb = "";
    else thumb = song.thumbnail.url;
    //define current time
    const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
    //define left duration
    const left = ms - seek;
    //define embed
    let nowPlaying = new MessageEmbed()
          .setTitle("**Now playing**")
          .addField("<:28uegsuhey2isagreatplaceto:915186293896511519>Requested by:", `\`${message.author.username}#${message.author.discriminator}\``, true)
          .addField("<a:4images:915185607075061770>TIME:", `\`${song.duration} Minutes\``, true)
          .setColor("#FF0000")
          
      //if its a stream
      if(ms >= 10000) {
        nowPlaying.addField("\u200b", "🔴 LIVE", true);
        //send approve msg
        return message.channel.send(nowPlaying);
      }
      //If its not a stream
      if (ms > 0 && ms<10000) {
       
        //send approve msg
        return message.channel.send(nowPlaying);
      }
  }
};
