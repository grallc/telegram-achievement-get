process.env.NTBA_FIX_319 = 1

const TelegramBot = require('node-telegram-bot-api')

const dotenv = require('dotenv')
dotenv.config()

const token = process.env.TELEGRAM_TOKEN

if (!token) {
  throw new Error('Missing Telegram Token. Please provid a valid in .env file.')
}