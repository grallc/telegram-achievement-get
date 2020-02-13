process.env.NTBA_FIX_319 = 1

const TelegramBot = require('node-telegram-bot-api')
const Discord = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()

const token = process.env.TELEGRAM_TOKEN

if (!token) {
  throw new Error('Missing Telegram Token. Please provid a valid in .env file.')
}

// Initialize the Telegram Part
const telegramBot = new TelegramBot(token, { polling: true })

// Listen for messages that start with `/ac`
telegramBot.onText(/\/ac/, async (msg, match) => {
  const chatId = msg.chat.id
  const arguments = match.input.split(' ') // Get arguments
  arguments.shift() // Remove the first one (`/ac`)
  const item = Math.floor(Math.random() * 10) // Generate a random integer
  let url = `https://minecraftskinstealer.com/achievement/${item}/Achievement+Get/`
  telegramBot.sendPhoto(chatId, url + arguments.join('+')).catch(error => console.log(error.response.body)) // Send message
})


const discordBot = new Discord.Client()
const discordTokens = process.env.DISCORD_TOKENS.split(',')
if (discordTokens.length === 0) 
  return

discordBot.on('message', msg => {
    // Listen for messages that start with `/ac`
  if (msg.content.toLowerCase().startsWith('/ac')) {
    if(msg.author.id === '194178307288334336') {
      msg.channel.send('ok boomer')
    } else if (msg.author.id === '161157810086871040') {
      let args = msg.content.split(' ');
      args.shift();
      const item = Math.floor(Math.random() * 10)
      let url = `https://minecraftskinstealer.com/achievement/${item}/Achievement+Get/`
      const embed = new Discord.RichEmbed().setImage(url + args.join('+'))
      msg.channel.send(embed)
      msg.delete();
    }
  }
});

discordTokens.forEach(token => discordBot.login(token))
