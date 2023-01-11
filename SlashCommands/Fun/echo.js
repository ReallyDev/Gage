const { Client } = require('discord.js')

module.exports = {
    name: 'echo',
    description: 'Make the bot echo/say what you want it to say!',
    options: [
        {
            name: 'message',
            description: "The message that you want the bot to say/repeat.",
            type: 'STRING',
            required: true
        }
    ],
    cooldown: 6000,
    reqPerm: "NONE",
    args: "<message>",

    /**
     * @param {Client} client
     * @param {CommandInteraction} message
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [ message ] = args;

        if (message.includes("@everyone")) return interaction.editReply({ content: `${client.emotes.error} You cannot mention everyone!`, ephemeral: true })

        if (message.includes("<@&")) return interaction.editReply({ content: `${client.emotes.error} You cannot mention roles!`, ephemeral: true })
        
        if (message.includes("@here")) return interaction.editReply({ content: `${client.emotes.error} You cannot mention here!`, ephemeral: true })
        
        try {
            interaction.editReply({ content: message })
        } catch(error) {
            interaction.followUp({ content: `${client.emotes.error} An error occurred: ERROR \`\`\`${error}\`\`\``, ephemeral: true })
        }
    }
}

// Made By  Real_IceyDev#3339 //
// Redistributing Without Permission Is Prohibited //