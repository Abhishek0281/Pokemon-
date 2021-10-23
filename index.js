const path = require('path')
const fs = require('fs')
const { Client, Intents, MessageEmbed } = require('discord.js');

const config = require('./config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', async () => {
  console.log('The client is ready!')
  client.user.setActivity(`Testing`)
  const baseFile = 'command-base.js'
  const commandBase = require(`./commands/${baseFile}`)
  
  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }





  readCommands('commands')
})

client.login(config.token)