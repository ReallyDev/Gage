/*
const client = require("../index");
const { MessageEmbed } = require("discord.js");


client.on("guildCreate", async (guild) => {
  if (!guild) return;
  let channel = guild.channels.cache.find(
    (ch) =>
      ch.type === "GUILD_TEXT" &&
      ch.permissionsFor(guild.me).has("SEND_MESSAGES")
  );

  if (guild.me.permissions.has("USE_APPLICATION_COMMANDS")) {
    try {
      guild.commands
        .set(client.arrayOfCommands)
        .then((s) => {
          channel.send(`Successfully application (/) commands in your server!`);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e.message);
    }
  } else {
    channel.send(
      `I don't have permission \`USE_APPLICATION_COMMANDS\`! I can't create slash commands in your server, if you want to use me then give me \`USE_APPLICATION_COMMANDS\` when re-inviting!`
    );
  }
});
*/

// Made By  Real_IceyDev#3339 //
// Redistributing Without Permission Is Prohibited //