const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'userinfo',
	description: 'Get information on any user in the guild',
	options: [
		{
			name: 'user',
			description: "The user to get information on",
			type: 'USER',
			required: false
		}
	],
	cooldown: 5000,
	reqPerm: "NONE",
	args: "[user]",

	/**
	 * @param {Client} client
	 * @param {CommandInteraction} message
	 * @param {String[]} args
	 */
	run: async (client, interaction, args) => {
		const [member] = args
		const guildmember = interaction.guild.members.cache.get(member) || interaction.member
		
		const days = Math.floor((new Date() - guildmember.user.createdAt) / (1000 * 60 * 60 * 24));
    const joinedDays = Math.floor((new Date() - guildmember.joinedAt) / (1000 * 60 * 60 * 24));

		const embed = new MessageEmbed()
      .setColor(guildmember.displayHexColor || 0xDDADCC)
      .setThumbnail(guildmember.user.displayAvatarURL({ size: 512 }))
      .addFields({
        name: "❯ Name",
        value: guildmember.user.tag,
        inline: true
      })
      .addFields({
        name: "❯ ID",
        value: guildmember.user.id,
        inline: true
      })
      .addFields({
        name: "❯ Discord Join Date",
        value: `${guildmember.user.createdAt.toDateString()} (${days} days ago)`,
        inline: true
      })
      .addFields({
        name: "❯ Server Join Date",
        value: `${guildmember.joinedAt.toDateString()} (${joinedDays} days ago)`,
        inline: true
      })
      .addFields({
        name: "❯ Bot",
        value: guildmember.user.bot ? "Yes" : "No",
        inline: true
      })
      .addFields({
        name: "❯ Highest Role",
        value: guildmember.roles.cache.size > 1 ? guildmember.roles.highest.name : "None",
        inline: true
      })
      .addFields({
        name: "❯ Hoist Role",
        value: guildmember.roles.hoist ? guildmember.roles.hoist.name : "None",
        inline: true
      });

    await interaction.followUp({ embeds: [embed] });
	}
}

// Made By  Real_IceyDev#3339 //
// Redistributing Without Permission Is Prohibited //