const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES , Intents.FLAGS.DIRECT_MESSAGE_REACTIONS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {




  interaction.user.createDM().then(function (channel) {
    channel.send('Hello World !')
  })
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }

});

client.on('messageCreate', function (message) {
  console.log(message.author.avatar)
})

client.login(process.env.DISCORD_BOT_TOKEN);

