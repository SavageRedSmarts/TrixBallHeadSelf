exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Redmod");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
};

  let news = args.join(" ")
  client.channels.get("275782634125131776").sendMessage(news).then(news => message.reply(`Sent ${news} to <#275782634125131776>`)).catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['staffnews','tostaff','alertstaff'],
  permLevel: 2,
};

exports.help = {
  name: "staffannounce",
  description: "Announce to staff announcements channel",
  usage: "staffannounce <announcement>",
};
