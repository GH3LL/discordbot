const { client } = require('discord.js');
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.channel.send("Pong!");
    //avec la mention @everyone
  if (msg.content === "everyone") msg.channel.send("@everyone!, salut à tous !",{ disableEveryone: false });
   //sans la mention @everyone
  if (msg.content === "noteveryone") msg.channel.send("@everyone , salut à tous !");
});

client.login("NjIxMTIzNDE0MTc4MTM2MDc0.XX-aEg.E0UGaHDHoDAgOp6mbdiRW2b5yxo");