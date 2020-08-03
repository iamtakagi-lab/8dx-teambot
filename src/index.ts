import BotClient from './struct/BotClient'

import express from 'express'
const app: express.Express = express()

app.get('/', async (req: any, res: any) => {
    const client = req.query.client
    if (client === 'gas') {
        return res.send('Glitch woke up')
    }
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ', listener.address());
});

const client = new BotClient();

client.start(process.env.TOKEN);