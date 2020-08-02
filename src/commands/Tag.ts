import { randomTag } from "../util";

const {Command} = require('discord-akairo')

class TagCommnad extends Command {
    constructor() {
        super('tag', {
            aliases: ['tag'],
            cooldown: 5000,
            args: [
                {
                    id: 'tagLength',
                    type: 'integer'
                },
            ],
        });
    }

    exec(message: any, args: any) {     

        if(args.tagLength == null || args.tagLength > 10 || args.tagLength < 1){
            return message.channel.send("タグは10文字まで | Maximum tag length: 10")
        }

        const tag = randomTag(args.tagLength)

        message.channel.send("Tag: " + tag + " | " + tag.toUpperCase())
    }
}

module.exports = TagCommnad