const { AkairoClient, CommandHandler } = require('discord-akairo')

export default class BotClient extends AkairoClient {
    constructor() {
        super({ownerID: '695218967173922866'})

        this.commandHandler = new CommandHandler(this, {
            directory: './dist/commands/',
            aliasReplacement: /-/g,
            prefix: '_',
            allowMention: true,
            commandUtil: true,
            commandUtilLifetime: 10000,
            commandUtilSweepInterval: 10000,
            storeMessages: true,
            handleEdits: true,
            argumentDefaults: {
                prompt: {
                    start: 'What is thing?',
                    modifyStart: (msg: any, text: any) => `${msg.author}, ${text}\nType \`cancel\` to cancel this command.`,
                    retry: 'What is thing, again?',
                    modifyRetry: (msg: any, text: any) => `${msg.author}, ${text}\nType \`cancel\` to cancel this command.`,
                    timeout: 'Out of time.',
                    ended: 'No more tries.',
                    cancel: 'Cancelled.',
                    retries: 5
                },
                modifyOtherwise: (msg: any, text: any) => `${msg.author}, ${text}`
            }
        });
        this.setup()
    }

    setup () {
        this.commandHandler.loadAll();
    }

    async start(token: any) {
        await this.login(token);
        console.log('Ready!');
    }
}