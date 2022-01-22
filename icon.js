const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../index.js`);

  


module.exports = {
  name: "icon",
  aliases: ["ic","IC","Ic","Icon","ICON"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle("_Icon Server_")
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setColor("FF0000")
    .setImage(message.guild.iconURL())
    .setFooter(message.author.username,message.author.avatarURL())
    .setTimestamp()

    return message.channel.send(helpEmbed).catch(console.error);

  }
};
