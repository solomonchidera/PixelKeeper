const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with whatsup amigo!'),
  async execute (interaction) {
    await interaction.reply('Hey whatsup amigo!');
  }
};