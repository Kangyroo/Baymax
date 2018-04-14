const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Baymax has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 

  client.user.setGame('Test.');

});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply('Pong!');
  }
});

client.on("message", msg => {
    if (msg.content === "THE TING GOES") {
      msg.reply('SKRAAA');
    }
  });
 
  client.on("message", msg => {
    if (msg.content === "Is Zen gay?") {
      msg.reply('Yes.');
    }  
  });

  client.on("message", msg => {
    if (msg.content === "Blox") {
      msg.reply('Blox The Rebel.');
    }  
  });

  client.on("message", msg => {
    if (msg.content === "Baymax") {
      msg.reply('Yes my friend?');
    }  
  });

  client.on("message", msg => {
    if (msg.content === "Say something") {
      msg.reply('IM GIVING UP ON YOU!!');
    }  
  });

  client.on("message", msg => {
    if (msg.content === "Pray your gay away") {
      msg.reply("https://queerty-prodweb.s3.amazonaws.com/wp/docs/2012/10/pray-your-gay-away.jpg");
    }
  })

client.login(process.env.BOT_TOKEN);
