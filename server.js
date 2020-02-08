process.env.NTBA_FIX_319 = 1

const TelegramBot = require('node-telegram-bot-api')

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
  arguments.forEach(argument => (url = `${url}${argument}+`))
  bot.sendPhoto(chatId, url)
})