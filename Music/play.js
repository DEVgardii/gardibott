////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const { play } = require("../include/play");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);
const ytsr = require("youtube-sr")

////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "play",
  aliases: [""],
  description: "\`(p)Plays song from YouTube/Stream\`",
  cooldown: 1.5,
  edesc: `Type this command to play some music.\nUsage: ${PREFIX}play <TITLE | URL>`,

async execute(message, args, client) {
    //If not in a guild return
    if (!message.guild) return;
    //define channel
    const { channel } = message.member.voice;
    //get serverqueue
    const serverQueue = message.client.queue.get(message.guild.id);
    //If not in a channel return error
    if (!channel) return attentionembed(message, "<a:sugeditidhw8hd72duheufduh3duhe:919238876608987188> **__\`First, go to The Voice Channel\`__**");
    //If not in the same channel return error
    if (serverQueue && channel !== message.guild.me.voice.channel)
      return attentionembed(message, `<:eieh38su:915200640773410828> **__\`You have to be on my voice channel\`__**`);
    //If no args return
    if (!args.length)
      return attentionembed(message, `<a:ehdgsisagreatplace:915408203309809684> ${PREFIX} play >>> Name Video - URL Video`);
    //react with approve emoji
    message.react("769665713124016128").catch(console.error);
    //get permissions and send error if bot doesnt have enough
    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return attentionembed(message, "<a:cycycydtd6xyc6d6r6r6r6d6emoji_53:918260430470774855>I need permissions to join your channel!");
    if (!permissions.has("SPEAK"))
      return attentionembed(message, "<a:cycycydtd6xyc6d6r6r6r6d6emoji_53:918260430470774855>I need permissions to speak in your channel");

    //define some url patterns
    const search = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const urlValid = videoPattern.test(args[0]);

    //define Queue Construct
    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      filters: [],
      realseek: 0,
      playing: true
    };
    //get song infos to null
    let songInfo = null;
    let song = null;
    //try catch for errors
    try {
      //If something is playing
      if (serverQueue) {
        //if its an url
        if (urlValid) { //send searching link
          message.channel.send(new MessageEmbed().setColor("#FF0000")
            
            .setDescription(``))
        //if not
        }
        else { //send searching TITLE
          message.channel.send(new MessageEmbed().setColor("#FF0000")
            
            .setDescription(``))
        }
      } else {
        //If nothing is playing join the channel
        queueConstruct.connection = await channel.join();
        //send join message
        message.channel.send(new MessageEmbed().setColor("")
          .setAuthor(``)
          .setDescription(``)
          .setFooter(``))
        //if its an url
        if (urlValid) { //send searching link
          message.channel.send(new MessageEmbed().setColor("#FF0000")
            
            .setDescription(``))
          //if not
        }
        else { //send searching TITLE
          message.channel.send(new MessageEmbed().setColor("#FF0000")
            
            .setDescription(``))
        }
        //Set selfdeaf and serverdeaf true
        queueConstruct.connection.voice.setSelfDeaf(true);
        queueConstruct.connection.voice.setDeaf(true);
      }
    }
    catch {
    }
    //if its a valdi youtube link
    if (urlValid) {
      try {
        songInfo = await ytsr.searchOne(search) ;
        song = {
          title: songInfo.title,
          url: songInfo.url,
          thumbnail: songInfo.thumbnail,
          duration: songInfo.durationFormatted,
       };
      } catch (error) {
        if (error.statusCode === 403) return attentionembed(message, "Max. uses of api Key, please refresh!");
        console.error(error);
        return attentionembed(message, error.message);
      }
    }
    //else try to find the song via ytsr
    else {
      try {
       //get the result
        songInfo = await ytsr.searchOne(search) ;
        song = {
          title: songInfo.title,
          url: songInfo.url,
          thumbnail: songInfo.thumbnail,
          duration: songInfo.durationFormatted,
       };
      } catch (error) {
        console.error(error);
        return attentionembed(message, error);
      }
    }
    //get the thumbnail
    let thumb = "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png"
    if (song.thumbnail === undefined) thumb = "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png";
    else thumb = song.thumbnail.url;
    //if there is a server queue send that message!
    if (serverQueue) {
      //Calculate the estimated Time
      let estimatedtime = Number(0);
      for (let i = 0; i < serverQueue.songs.length; i++) {
        let minutes = serverQueue.songs[i].duration.split(":")[0];
        let seconds = serverQueue.songs[i].duration.split(":")[1];
        estimatedtime += (Number(minutes)*60+Number(seconds));
      }
      if (estimatedtime > 60) {
        estimatedtime = Math.round(estimatedtime / 60 * 100) / 100;
        estimatedtime = estimatedtime + " Minutes"
      }
      else if (estimatedtime > 60) {
        estimatedtime = Math.round(estimatedtime / 60 * 100) / 100;
        estimatedtime = estimatedtime + " Hours"
      }
      else {
        estimatedtime = estimatedtime + " Seconds"
      }
      //Push the ServerQueue
      serverQueue.songs.push(song);
      //the new song embed
      const newsong = new MessageEmbed()
        .setTitle("<:yputubehehdgeudgeuhduehdueudhheu:919454734111359006>" + song.title + "<:yputubehehdgeudgeuhduehdueudhheu:919454734111359006>")
        .setColor("#FF0000")
        .setThumbnail(thumb)
        .setURL(song.url)
        .setDescription(`\`\`\`Has been added to the Queue.\`\`\``)
        .addField("<a:4images:915185607075061770> TIME:", `\`${estimatedtime}\``, true)
        .addField("<:oonline:918260106058145862>Position in queue", `**\`${serverQueue.songs.length - 1}\`**`, true)
        .setTimestamp()
      //send the Embed into the Queue Channel
        return serverQueue.textChannel
        .send(newsong)
        .catch(console.error);

    }
    //push the song list by 1 to add it to the queu
    queueConstruct.songs.push(song);
    //set the queue
    message.client.queue.set(message.guild.id, queueConstruct);
    //playing with catching errors
    try {

      //try to play the song
      play(queueConstruct.songs[0], message, client);
    } catch (error) {
      //if an error comes log
      console.error(error);
      //delete the Queue
      message.client.queue.delete(message.guild.id);
      //leave the channel
      await channel.leave();
      //sent an error message
      return attentionembed(message, `Could not join the channel: ${error}`);
    }
  }
};

//////////////////////////////////////////
//////////////////////////////////////////
/////////////by darkman#2021///////////////
