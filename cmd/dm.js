exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Redmod");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
};
    let kiddmsg = args.join(" ")
    let kidd = message.guild.member(message.mentions.users.first());
    kidd.sendMessage(kiddmsg)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: "dm",
  description: "Ban member from discord",
  usage: "dm <user> <message",
};
