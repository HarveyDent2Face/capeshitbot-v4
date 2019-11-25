const keys = require('./data/keys.js');
const { Handler, BotClient } = require('./bot.js');
const handler = new Handler();
const bot = new BotClient();
// command handler
handler.createHandler({
    type: 0,
    folders: `${__dirname}/commands/`,
});
// event handler
handler.createHandler({
    type: 1,
    folders: `${__dirname}/events/`,
});
// events
bot.client.on('error', e => console.error(e));
bot.client.on('debug', e => console.info(e));
bot.client.on('warn', e => console.warn(e));
process.on('unhandledRejection', e => console.error(e));
process.on('uncaughtException', e => console.error(e));
// util
bot.client.setMaxListeners(100);
// Starting the bot
bot.client.login(keys.tokens.main);