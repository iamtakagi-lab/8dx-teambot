require('dotenv').config()

import BotClient from './struct/BotClient'
const client = new BotClient();

client.start(process.env.TOKEN);

process.on('unhandledRejection', err => console.error(err));