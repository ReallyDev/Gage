const ms = module.require("ms");
const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "hack",
  description: "Hack someone.",
  options: [
      {
          name: "user",
          description: "User you wanna hack.",
          required: true,
          type: "USER",
      }
  ],
	cooldown: 5000,
  reqPerm: "NONE",
  args: "[user]",
     
	run: async (client, interaction, args) => {
    if (!args[0]) {
      return interaction.followUp(
        "Woah.... Slow Down!! Who are we hacking..??"
      );
    }
		const [ member ] = args
    const tohack = interaction.guild.members.cache.get(member) || interaction.member
    let msg = await interaction.followUp(`Hacking ${tohack.displayName}....`);

    let time = "1s";
    setTimeout(function () {
      interaction.editReply(`Finding ${tohack.displayName}'s Email and password.....`);
    }, ms(time));

    let time1 = "6s";
    setTimeout(function () {
      interaction.editReply(`E-Mail: ${tohack.displayName}@gmail.com \nPassword: ********`);
    }, ms(time1));

    let time2 = "9s";
    setTimeout(function () {
      interaction.editReply("Finding Other Accounts.....");
    }, ms(time2));

    let time3 = "15s";
    setTimeout(function () {
      interaction.editReply("Setting up Epic Games account.....");
    }, ms(time3));

    let time4 = "21s";
    setTimeout(function () {
      interaction.editReply("Hacking Epic Games account......");
    }, ms(time4));

    let time5 = "28s";
    setTimeout(function () {
      interaction.editReply("Hacked Epic Games account!");
    }, ms(time5));

    let time6 = "31s";
    setTimeout(function () {
      interaction.editReply("Collecting Info.....");
    }, ms(time6));

    let time7 = "38s";
    setTimeout(function () {
      interaction.editReply("Selling data to FBI....");
    }, ms(time7));

    let time8 = "41s";
    setTimeout(function () {
      interaction.editReply(`Finished hacking ${tohack.displayName}.`);
    }, ms(time8));
  },
};