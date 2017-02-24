exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Redmod");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
};
  let role = message.guild.roles.find("name", "Chief Administrative Officer");
  let member = message.guild.member(message.mentions.users.first());
  member.addRole(role).then(role => message.reply(`Added!`))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: "CAO",
  description: "Add Chief Administrative Officer to user",
  usage: "CAO <user>",
};
