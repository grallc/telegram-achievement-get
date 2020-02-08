process.env.NTBA_FIX_319 = 1

const TelegramBot = require('node-telegram-bot-api')
const Discord = require('discord.js')
const client = new Discord.Client()

const dotenv = require('dotenv')
dotenv.config()

const token = process.env.TELEGRAM_TOKEN

if (!token) {
  throw new Error('Missing Telegram Token. Please provid a valid in .env file.')
}

const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/ac/, async (msg, match) => {
  const chatId = msg.chat.id
  const arguments = match.input.split(' ')
  arguments.shift()
  const item = Math.floor(Math.random() * 10)
  let url = `https://minecraftskinstealer.com/achievement/${item}/Achievement+Get/`
  bot.sendPhoto(chatId, url + arguments.join('+'))
})


const discordTokens = process.env.DISCORD_TOKENS.split(',')
if (discordTokens.length === 0) 
  return

client.on('message', msg => {
  if (msg.content.toLowerCase().startsWith('/ac')) {
    let args = msg.content.split(' ');
    args.shift();
    const item = Math.floor(Math.random() * 10)
    let url = `https://minecraftskinstealer.com/achievement/${item}/Achievement+Get/`
    const embed = new Discord.RichEmbed().setImage(url + args.join('+'))
    msg.channel.send(embed)
    msg.delete();
  }
});

discordTokens.forEach(token => client.login(token))
