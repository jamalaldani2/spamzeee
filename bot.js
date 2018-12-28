
const Discord = require('discord.js');
const client = new Discord.Client();

 client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "515202282824925184"; // ايدي السررفر
var channel = "515206756201136130";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , ')
    },305);
})
	  
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
