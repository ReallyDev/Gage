const { MessageEmbed } = require('discord.js');
const toArray = require('collect.js');

module.exports = {
    name: 'addrole',
    description: 'Add a role to a user!',
    options: [
        {
          name: 'user',
          description: "The user that you want to add the role to.",
          type: 'USER',
          required: true
        },
			  {
          name: 'role',
          description: "The role you want to add to the user.",
          type: 'ROLE',
          required: true
        }
    ],
    cooldown: 5000,
    reqPerm: "MANAGE_ROLES",
    args: "<user> <role>",
  	run: async (client, interaction, args) => {
    const [ member, role ] = args
    const guildmember =  interaction.guild.members.cache.get(member) || interaction.member
    if (guildmember.roles.cache.has(role.id)) {
      return interaction.followUp({ content: `:x: | ${guildmember.user.username} already has that role.`, ephemeral: true })
    }

    if (interaction.guild.me.roles.highest.comparePositionTo(role) <= 0) {
      return interaction.followUp({ content: `:x: | My roles must be higher than the role that you want to give!`, ephemeral: true });
    }
    const interactionUser = await interaction.guild.members.fetch(interaction.user.id)
    if (interactionUser.roles.highest.comparePositionTo(role) <= 0) {
      return interaction.followUp({ content: `:x: | Your roles must be higher than the role that you want to give!`, ephemeral: true });
    }
    guildmember.roles.add(role);
    const giveRoleEmbed = new MessageEmbed()
      .setColor('0x2F3136')
      .setTitle('✅ | Given Role')
      .addFields(
        { name: 'To', value: `${guildmember}` },
        { name: 'By', value: `${interactionUser}` },
        { name: 'Role', value: `<@&${role}>` }
      )
      .setTimestamp();
    interaction.followUp({embeds: [giveRoleEmbed]});
  }
}