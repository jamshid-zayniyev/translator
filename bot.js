// 1-usul 

const {Telegraf}  = require('telegraf')
const translate = require('translation-google')

const bot = new Telegraf('7570109328:AAF6rPPSAT-cI9fhDZJjPMkd4L8B_D9LLjc')

bot.start((ctx)=>{ctx.reply('Hello')})

bot.on('text',async (ctx)=>{
    const text = ctx.message.text;

    const translation = await translate(text,{from:'uz', to:'en'})

    ctx.reply(translation.text)
    
})

bot.launch()






// 2-usul 

// const TelegramBot = require('node-telegram-bot-api');

// const bot = new TelegramBot('7570109328:AAF6rPPSAT-cI9fhDZJjPMkd4L8B_D9LLjc',{polling:true})


// bot.onText('start',(msg)=>{
//     console.log(msg);
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId,`Xush kelibsiz ${msg.chat.first_name}! Tarjima qilish uchun xabar yuboring.`)
// })


// bot.on('message',(msg)=>{
//     console.log(msg);
// })


