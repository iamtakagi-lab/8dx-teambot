require('dotenv').config()
const fetch = require("node-fetch");

import BotClient from './struct/BotClient'

const client = new BotClient();

client.start(process.env.TOKEN);

import express from 'express';
var app: express.Express = express();

app.get("/", function (request: any, response: any) {
  
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ', listener.address());
});