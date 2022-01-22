const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `#FF0000`;

module.exports = {
  name: "se",
  category: "fun",
  description: "```Converting Server emoji to PNG/GIF!```",
  async execute(message, args) {

    const emoji = args[0];
    if (!emoji) return message.channel.send(`<a:eudgw8hshe:915200455943028776>Emoji, give me one.`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      
      const Added = new MessageEmbed()
        .setTitle("Emoji Show")
        .setColor("FF0000")
        .addField('<a:ieh2u2h:915186344190435328>```Link```', `[Click Me](${Link})`)
        .setImage(Link
        );
      return message.channel.send(Added);
    } else {
      let CheckEmoji = (emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`<a:eudgw8hshe:915200455943028776>Please Give Me A Valid Emoji!`);
      message.channel.send(
        `<a:eudgw8hshe:915200455943028776>You Can Use Normal Emoji Without Adding In Server!`
      );
    }
  }
};
