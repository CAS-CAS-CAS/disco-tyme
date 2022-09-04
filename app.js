const {Client, GatewayIntentBits} = require('discord.js');
const {token} = require("./config.json")
let fs = require('fs');

const client = new Client({intents: GatewayIntentBits.Guilds});
let emoji;

client.on('ready', () => {
    console.log("Its Blammin' time!");
    //let myRole = client.guild.roles.cache.find(role => role.name === "Total Stud");
    fs.writeFile("channels.txt", JSON.stringify(client.channels.cache.find(chan=>chan.name==="bot-testing-grounds"), null, 3), err => {if(err){throw err}});
    emoji = client.emojis.cache.find(moji=>moji.name==="notahotdog");
    client.channels.cache.find(chan=>chan.name==="bot-testing-grounds").send("Get BLAMM'D loser");
});

client.on('messageCreate', function(message) {
	console.log("YOOU JUST GOT BLAMMED" + message);
});
client.on("messageDelete", (messageDelete) => {
    console.log("PLSZ");
    const channel = messageDelete.guild.channels.find(ch => ch.name === 'channel name here');
    channel.send(`The message : "${messageDelete.content}" by ${messageDelete.author} was deleted. Their ID is ${messageDelete.author.id}`);
  }); 

client.login(token);


