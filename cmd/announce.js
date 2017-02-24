exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Redmod");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
};

  let news = args.join(" ")
  client.channels.get("168763511780933632").sendMessage(news).then(news => message.reply(`Sent ${news} to `)).catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: "announce",
  description: "Announce announcements in announce channel.",
  usage: "announce <new>",
};
