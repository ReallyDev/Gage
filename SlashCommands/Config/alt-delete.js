module.exports = {
    name: 'alt-remove',
    description: 'Remove all alt indentifier data in our systems.',
    cooldown: 120000,
    reqPerm: "ADMINISTRATOR",
    args: "",
    
    /**
     * @param {Client} client
     * @param {CommandInteraction} message
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let guild = interaction.guild
        client.gData.delete(`${guild.id}:altIdentifierChannel`)
        client.gData.delete(`${guild.id}:altIdentifierTime`)

        interaction.followUp({ content: `${client.emotes.success} Successfully deleted the alt identifier channel!` })
    }
}

// Made By  Real_IceyDev#3339 //
// Redistributing Without Permission Is Prohibited //