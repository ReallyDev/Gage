const { Client, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "8ball",
  description: "Ask the magic 8ball anything.",
  options: [
      {
          name: "question",
          description: "The question you want to ask the 8ball.",
          required: true,
          type: "STRING",
      }
  ],
	cooldown: 3000,
  reqPerm: "NONE",
  args: "<question>",
	
	run: async (client, interaction, args) => {
		const [ question ] = args
  	const responses = [
    	"It is certain",
    	"It is decidedly so",
    	"without a doubt",
    	"Yes definitely",
    	"You may rely on it",
    	"As I see it, Yes",
    	"Most likely",
    	"Outlook good",
    	"Yes",
    	"Signs point to yes",
    	"Reply hazy try again",
    	"Ask again later",
    	"Better not tell you now",
    	"Cannot predict now",
    	"Concentrate and ask again",
    	"Dont count on it",
    	"My reply is no",
    	"My sources say no",
    	"Outlook not so good",
    	"Very doubtful"
  	];
		const chosen_response = responses[Math.floor(Math.random() * responses.length)];

		await interaction.followUp(`**Question:** ${question}\n🎱\n**Response:** ${chosen_response}.`);
  },
};

// Made By  Real_IceyDev#3339 //
// Redistributing Without Permission Is Prohibited //