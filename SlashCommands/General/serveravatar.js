const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'server-avatar',
    description: 'Displays the avatar of the server!',
    options: [
        {
          name: 'format',
          description: "The format for the avatar/icon to display in!",
          type: 'STRING',
          required: true,
          choices: [
            {
              name: 'PNG',
              value: "png"
            },
            {
              name: 'GIF',
              value: "gif"
            },
            {
              name: 'JPG',
              value: "jpg"
            },
            {
              name: 'WEBP',
              value: "webp"
            }
          ]
        }
    ],
    cooldown: 5000,
    reqPerm: "NONE",
    args: "<format>",

    /**
     * @param {Client} client
     * @param {CommandInteraction} message
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [ format ] = args

        const guild =  interaction.guild || interaction.guild
        const embed = new MessageEmbed()
          .setColor('0x2F3136')
          .setTitle(`${guild.name}'s Icon`)
          .setDescription(
            `[Server Icon Link](${guild.iconURL({
              size: 2048,
              dynamic: true,
              format: format,
            })})`
          )
          .setImage(guild.iconURL({ size: 2048, dynamic: true, format: format }));
    
          interaction.editReply({ embeds: [embed] });
    }
}

// Made By  Real_IceyDev#3339 //
// Redistributing Without Permission Is Prohibited //