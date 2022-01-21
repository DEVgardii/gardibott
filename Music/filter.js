////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const ytsr = require("youtube-sr")
const { Client, Collection, MessageEmbed } = require("discord.js");
const { play } = require("../include/play")
const { attentionembed } = require("../util/attentionembed");
const { PREFIX, } = require(`../config.json`);
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "filter",
  description: "(fi)Set Audio - Effects",
  aliases: ["fi"],
  cooldown: 5,
  edesc: `Type this Command to change the current audio effect - style \nUsage: ${PREFIX}filter <Filtertype>`,

async execute(message, args, client) {
    //if its not in a guild return
    if (!message.guild) return;
    //define channel
    const { channel } = message.member.voice;
    //get serverqueue
    const queue = message.client.queue.get(message.guild.id);
    //react with approve emoji
    message.react("✉️").catch(console.error);
    //if the argslength is null return error
    //if there is already a search return error
    if (message.channel.activeCollector)
      return attentionembed(message, "\<:2ueyisagreatplacetoworkfo:915185934683738133>There is a search active!");
    //if the user is not in a voice channel return error
    if (!message.member.voice.channel)
      return attentionembed(message, "\<a:sugeditidhw8hd72duheufduh3duhe:919238876608987188>Please join a Voice Channel first")
    //If not in the same channel return error
    if (queue && channel !== message.guild.me.voice.channel)
      return attentionembed(message, `\<:eieh38su:915200640773410828>You must be in the same Voice Channel as me`);
    //Define all filters with ffmpeg    https://ffmpeg.org/ffmpeg-filters.html
    const filters = [
      'bass=g=20,dynaudnorm=f=200',//bassboost
      'apulsator=hz=0.08', //8D
      'aresample=48000,asetrate=48000*0.8',//vaporwave
      'aresample=48000,asetrate=48000*1.25',//nightcore
      'aphaser=in_gain=0.4',//phaser
      'tremolo',//tremolo
      'vibrato=f=6.5',//vibrato
      'surround',//surrounding
      'apulsator=hz=1',//pulsator
      'asubboost',//subboost
      "remove",
    ];
    //set some temporary variables
    let varforfilter; let choice;
    //get user input
    switch (args[0]) {
      case "bassboost":
        varforfilter = 0;

        break;
      case "8D":
        varforfilter = 1;
        break;
      case "vaporwave":
        varforfilter = 2;
        break;
      case "nightcore":
        varforfilter = 3;
        break;
      case "phaser":
        varforfilter = 4;
        break;
      case "tremolo":
        varforfilter = 5;
        break;
      case "vibrato":
        varforfilter = 6;
        break;
      case "surrounding":
        varforfilter = 7;
        break;
      case "pulsator":
        varforfilter = 8;
        break;
      case "subboost":
        varforfilter = 9;
        break;
      case "clear":
      varforfilter = 10;
      break;
      default:
        //fires if not valid input
        varforfilter = 404;
        message.channel.send(new MessageEmbed()
        .setColor("#FF0000")
        .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
        .setTitle("<a:dugeudgs:918167492315201588><a:dugeudgs:918167492315201588>No filters are used, you can use these filters<a:dugeudgs:918167492315201588><a:dugeudgs:918167492315201588>")
        .setDescription(`
<a:euebshbegs:915186870235824139>\`bassboost\`
<a:euebshbegs:915186870235824139>\`8D\`
<a:euebshbegs:915186870235824139>\`vaporwave\`
<a:euebshbegs:915186870235824139>\`nightcore\`
<a:euebshbegs:915186870235824139>\`phaser\`
<a:euebshbegs:915186870235824139>\`tremolo\`
<a:euebshbegs:915186870235824139>\`vibrato\`
<a:euebshbegs:915186870235824139>\`surrounding\`
<a:euebshbegs:915186870235824139>\`pulsator\`
<a:euebshbegs:915186870235824139>\`subboost\`
<a:euebshbegs:915186870235824139>\`clear\`   ---  removes all filters
`)
        .setFooter(`Example: ${PREFIX}filter name filter`)
        )
        break;
    }
    //set choice to zero
    choice = filters[varforfilter];
    if (varforfilter === 404) return;
    try {
      const song = queue.songs[0];
      //play the collected song song, message, client, filters
      message.channel.send(new MessageEmbed()
      .setColor("GREEN")
      .setAuthor("Applying: " + args[0], "")).then(msg =>{
        msg.delete({timeout: 2000});
      })
      play(song, message, client, choice);
      //catch any errors while searching
    } catch (error) {
      //log them
      console.error(error);
      //set collector false, just incase its still true
      message.channel.activeCollector = false;
    }
  }
};
