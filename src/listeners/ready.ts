const { Listener } = require('discord-akairo')

export default class extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

   public exec() {
        const client = this.client
        client.user!.setActivity(`${process.env.WEBSITE} | ${client.guilds.cache.size} servers`, { type: 'WATCHING' });
        setInterval(function() {
            client.user!.setActivity(`${process.env.WEBSITE} | ${client.guilds.cache.size} servers`, { type: 'WATCHING' });
        }, 1000*60*5);
    }
}