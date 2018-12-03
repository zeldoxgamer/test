
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

 client.on('guildMemberAdd', (member) => {
let channel = client.channels.get('519210555081490442')
if(member.user.bot) {
channel.send(`بكتابة انا انسان  ${membe} اتبت نفسك يا`)
}
})
client.on('message', message => {
if(message.content == 'انا انسان') {
message.guild.roles.find('name', 'هنا اسم رتبة الانسان بعد الاختبار`);
}
});


client.login(process.env.BOT_TOKEN);
 
