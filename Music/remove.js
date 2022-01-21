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
  name: "remove",
  description: "(delete)Remove song from the queue",
  aliases: [""],
  cooldown: 1.5,
  edesc: `Type this command to remove a specific song from the queue.\nUsage: ${PREFIX}remove <Queue num.>`,

execute(message, args) {
  //if its not a guild return
    if(!message.guild) return;
    //get the queue
    const queue = message.client.queue.get(message.guild.id);
    //if there is no queue return error
    if (!queue) return attentionembed(message,"<a:cycycydtd6xyc6d6r6r6r6d6emoji_53:918260430470774855>There is no Queue");
    //if he isnt in the same voice channel as the bot
    if (!canModifyQueue(message.member)) return;
    //if no args then return error
    if (!args.length) return attentionembed(message,`<a:ehdgsisagreatplace:915408203309809684> ${message.client.prefix}remove <Queue Number>`);
    //If not a number then return error
    if (isNaN(args[0])) return attentionembed(message,`<a:ehdgsisagreatplace:915408203309809684> ${message.client.prefix}remove <Queue Number>`);
    //get the song
    const song = queue.songs.splice(args[0], 1);
    //react with approve
    message.react("<:emoji_4:815583574983966720>")
    //send approve
    queue.textChannel.send(new MessageEmbed()
    .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))  
    .setDescription(` <:cycs4cuv7d6f7uf7d6f7guf6emoji_77:921024813622001685> ${message.author} **__\`\`removed\`\`__** 
**${song[0].title}** **__\`\`from the Queue\`\`__**`)
    .setColor("#FF0000")
    );
  }
};
