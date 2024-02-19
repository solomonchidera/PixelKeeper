const Discord = require('discord.js');
require('dotenv').config();
const token = process.env.TOKEN; // You'll store your token here

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages] });

client.once('ready', () => {
  console.log(`Ready! Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
  if (message.author.bot) return; // Prevent the bot from responding to itself

  // Add your command handling and moderation logic here
});

client.login(token);
