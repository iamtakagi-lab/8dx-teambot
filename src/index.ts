import BotClient from './struct/BotClient'

const client = new BotClient();

client.start(process.env.BOT_TOKEN);
