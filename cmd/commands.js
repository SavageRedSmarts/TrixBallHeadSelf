exports.run = function(client, message, args) {

  message.author.sendMessage(`**Commands:**
  **Everyone Commands**
S!add {number, numbers, and more numbers}
S!creator --Tells you who the creator is ScientificRedWayz.
S!description -- Get's group description. **Might be outdated.**
S!ping --Replys pong.
S!website --Get's SSM official website.

**RedModerator Commands**
S!announce {news}
S!app1 {user}
S!app2 {user}
S!ban {user}
S!BOD {user} --Gives Board of Director
S!CAO {user} --GIve Chief Administrative Officer
S!CEO {user} -- Give user Chief Executive Officer
S!cmds -- Leads you here.
S!createChannel {name}
S!developer {user}
S!em {user}
S!fire {user} --remove all staff roles
S!foo --replys bar
S!general {text}
S!help <cmd>
S!internadmin {user} --Gives Intern Administrative
S!interview {HostName}
S!info
S!kick {user}
S!mute {user}
S!notedsupporter {user}
S!nmoderator {user}
S!say {text} --Says text in that channel
S!setGroupName {text} -- Trix only command.
S!setTopic {text} --Sets channel topic
S!staff {user}
S!staffannounce {new}
S!supervisor {user}
S!supporter {user}
S!suspend {user}
S!training {HostName}
S!trustedmoderator {user}
S!unDeveloper {user}
S!unmute {user}
S!unsuspend {user}

**STAFF Commands**
S!onduty
S!offduty

**UnVerified People Commands**
S!verify

**Creator Commands**
S!eval {"text"}
S!setGame {statuspost}
S!setStatus {dnd/online/invisible/idle}

**Club Commands**
S!clubmember <user>
S!bounce <user>
S!clubvip <user>
Done.`);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cmd'],
  permLevel: 0
};

exports.help = {
  name: "commands",
  description: "Give Commands.",
  usage: "info"
};
