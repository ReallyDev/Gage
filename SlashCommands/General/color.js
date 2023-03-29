const { Discord, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch")
const colors = require('colors');

module.exports = {
	name: "color",
	description: "Get Hex code/color information.",
	options: [
		{
			name: 'color',
			description: "What color do you want info on? EX: #79b5b5",
			type: 'STRING',
			required: false,
		}
	],
	cooldown: 3000,
	reqPerm: "NONE",
	args: "<color>",

	run: async (client, interaction, args) => {
		let [color] = args;
		try {
			const url = (`https://api.popcatdev.repl.co/color/${color.includes("#") ? color.split("#")[1] : color}`)
			let json;
			try {
				json = await fetch(url).then(res => res.json())
			} catch (e) {
				return interaction?.followUp({ content: `\`\`\`fix\n${e.message ? e.message : e}\n\`\`\``, ephemeral: true })
			}
			if (json.error) return interaction?.followUp({ content: `Invalid Hex Color!\n\`\`\`fix\n${json.error}\n\`\`\``, ephemeral: true })
			const embed = new MessageEmbed()
				.setTitle('Color Info')
				.addField('<:arrowgage:1062851884697792693> **Name**', json.name, true)
				.addField("<:arrowgage:1062851884697792693> **Hex**", json.hex, true)
				.addField("<:arrowgage:1062851884697792693> **RGB**", json.rgb, true)
				.addField(`<:arrowgage:1062851884697792693> **Brighter Shade**`, json.brightened, true)
				.setThumbnail(json.color_image)
				.setColor(json.hex)
			interaction?.followUp({
				embeds: [embed], ephemeral: false
			});
		} catch (e) {
			console.log(String(e.stack).bgRed)
		}
	}
}

// Made By  Real_IceyDev#3339 //
// Redistributing Without Permission Is Prohibited //