import { composeTeam, getAlphabet, replaceAll } from "../util";
const Discord = require("discord.js")

const { Command } = require('discord-akairo')

class TeamCommand extends Command {
    constructor() {
        super('t', {
            aliases: ['t'],
            cooldown: 5000,
            args: [
                {
                    id: 'data',
                    match: 'content'
                }
            ],
        });
    }

    error(channel: any) {

        const embed = new Discord.MessageEmbed()
            .setColor("#FFFFCC")
            .setTitle("使い方 | Usage")
            .setDescription(`_t <teamSize> <players>

                    Player Size: 1 - 12

                    1: FFA
                    2: 2v2
                    3: 3v3
                    4: 4v4
                    5: 5v5
                    6: 6v6`
            )

        channel.send(embed)
    }

    exec(message: any, args: any) {
        let error = false

        if (args.data == null) {
            error = true
            return this.error(message.channel)
        }

        const split = args.data.split(/\s+/)

        if (split.length < 2) {
            error = true
            return this.error(message.channel)
        }

        const teamSize = parseInt(split[0])

        if (teamSize < 1 || teamSize > 6) {
            error = true
            return this.error(message.channel)
        }

        const players = split.slice(1, split.length)

        if (players.length < 1 || players.length > 12) {
            error = true
            return this.error(message.channel)
        }

        const makeTeamSize = Math.floor((players.length + teamSize - 1) / teamSize)

        const teams = composeTeam(players, makeTeamSize)

        const embed = new Discord.MessageEmbed()
            .setTitle("Teams (" + ( teamSize == 1 ? "FFA" : teamSize + "v" + teamSize + ")" ))
            .setColor("#FFFFCC")

        teams.forEach(
            (team, i) => {
                embed.addField(getAlphabet(i).toUpperCase() + " (" + team.length + ")", replaceAll(team.toString(), ",", ", "), true)            
            }
        )

        message.channel.send(embed)
    }
}

module.exports = TeamCommand;