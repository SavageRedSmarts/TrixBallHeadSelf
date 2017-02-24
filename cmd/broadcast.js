exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Redmod");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
};

  let news = args.join(" ")
  client.channels.get("275349933454786560").sendMessage(news).catch(console.error);
  client.channels.get("278024997510053889").sendMessage(news).catch(console.error);
  client.channels.get("275411958738452481").sendMessage(news).catch(console.error);
  client.channels.get("269634427829747712").sendMessage(news).catch(console.error);
  client.channels.get("264622721160314880").sendMessage(news).catch(console.error);
  client.channels.get("280808410138542080").sendMessage(news).catch(console.error);
  client.channels.get("168763511780933632").sendMessage(news).catch(console.error);
  client.channels.get("168763544811208705").sendMessage(news).catch(console.error);
  client.channels.get("275782634125131776").sendMessage(news).catch(console.error);
  client.channels.get("275843383283679233").sendMessage(news).catch(console.error);
  client.channels.get("280885860759764994").sendMessage(news).catch(console.error);
  client.channels.get("275845777870422016").sendMessage(news).catch(console.error);
  client.channels.get("275845860418387969").sendMessage(news).catch(console.error);
  client.channels.get("275846209057325056").sendMessage(news).catch(console.error);
  client.channels.get("275846007970070528").sendMessage(news).catch(console.error);
  client.channels.get("276179262862524427").sendMessage(news).catch(console.error);
  client.channels.get("280886255888236544").sendMessage(news).catch(console.error);
  client.channels.get("280172876714475522").sendMessage(news).catch(console.error);
  client.channels.get("275466301454024704").sendMessage(news).catch(console.error);
  client.channels.get("281243355277557761").sendMessage(news).catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['alert','important','sendall'],
  permLevel: 2,
};

exports.help = {
  name: "broadcast",
  description: "Announce to almost all the channels",
  usage: "broadcast <announcement>",
};
