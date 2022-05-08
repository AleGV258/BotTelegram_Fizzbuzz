// GitHub: @AleGV258

const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

// replace the value below with the Telegram token you receive from @BotFather
const token = "Aqui va el TOKEN, al ser información privada no lo subo, pero si colocas otro TOKEN funciona";
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    if(msg.text == "node" || msg.text == "java"){
        const parameter = msg.text;
        const responseBot = ExplorerController.telegramBotMission(parameter)
        bot.sendMessage(chatId, responseBot);
    }else{
        const parameter = parseInt(msg.text);
        if(!isNaN(parameter)){
            const responseBot = ExplorerController.telegramBotFizzbuzz(parameter)
            bot.sendMessage(chatId, responseBot);
        } else {
            bot.sendMessage(chatId, "Envía un número válido o una de las misiones");
        }
    }
});
