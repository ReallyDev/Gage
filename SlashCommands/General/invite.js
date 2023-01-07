const { MessageActionRow, MessageButton, SlashCommandBuilder } = require('discord.js')

module.exports = {
    	name: 'invite',
    	description: 'Sends the bots invite link.',
    	cooldown: 5000,
    	reqPerm: "NONE",
    	args: "",

    /**
     * @param {Client} client
     * @param {CommandInteraction} message
     * @param {String[]} args
     */
    run: async (interaction) => {
        const button = new MessageActionRow().addComponents(
            new MessageButton()
            .setStyle("LINK")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=853993257675259925&permissions=8&scope=bot%20applications.commands")
            .setLabel("Invite Me")
        )
        
        interaction.followUp({ content: `Invite me to your server!`, components: [button] });
		}
}

// Made By  Real_IceyDev#3339 //
// Redistributing Without Permission Is Prohibited //