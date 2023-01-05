module.exports = {
    name: 'verification',
    description: 'Toggle the verification system.',
    options: [
        {
            name: 'options',
            description: "On/off toggle options.",
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'On',
                    value: 'On'
                },
                {
                    name: 'Off',
                    value: 'Off'
                }
            ]
        }
    ],
    cooldown: 60000,
    reqPerm: "ADMINISTRATOR",
    args: "<options>",
    
    /**
     * @param {Client} client
     * @param {CommandInteraction} message
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let [ options ] = args

        if(options === 'On') {
            client.gData.set(`${interaction.guild.id}:verification`, 'On')
            
            return interaction.followUp({ content: `${client.emotes.success} | Verification successfully enabled!` })
        } else {
            client.gData.delete(`${interaction.guild.id}:verification`)

            return interaction.followUp({ content: `${client.emotes.success} | Verification successfully disabled.` })
        }
    }
}