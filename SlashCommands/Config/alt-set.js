const ms = require('ms');

module.exports = {
    name: 'alt-set',
    description: 'Set the alt-identifier configurations.',
    options: [
        {
            name: 'channel',
            description: "Set the alt-identifier channel.",
            type: 'CHANNEL',
            required: true
        },
        {
            name: 'min age',
            description: "The minimum account age (DAYS).",
            type: 'STRING',
            required: true
        }
    ],
    cooldown: 25000,
    reqPerm: "ADMINISTRATOR",
    args: "<channel> <time>",
    
    /**
     * @param {Client} client
     * @param {CommandInteraction} message
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let guild = interaction.guild
        let [ altIdentifierChannel, time ] = args

        let channel = interaction.guild.channels.cache.get(altIdentifierChannel)

        if(channel.type == "GUILD_VOICE") {
            return interaction.followUp({ content: `${client.emotes.error} Please choose a text channel!` })
        }

        if(isNaN(ms(time))) {
            return interaction.followUp({ content: `${client.emotes.success} Please provide a valid age/time!` })
        }

        if(ms(time) > ms('30 days')) {
            return interaction.followUp({ content: `${client.emotes.error} The time must be under 30 days!` })
        }

        client.gData.set(`${guild.id}:altIdentifierChannel`, channel.id)
        client.gData.set(`${guild.id}:altIdentifierTime`, time)

        interaction.followUp({ content: `${client.emotes.success} | Configurations saved to database! Set channel: ${channel}!` })
    }
}

// Made By  Real_IceyDev#3339 //
// Redistributing Without Permission Is Prohibited //