const discord = require('discord.js')
module.exports = {
    commands: ['ping'],
    callback: (message, arguments, text) => {

      
        message.channel.send('Pong!')
    
      
    },
    permissions: '',
    requiredRoles: [],
  }