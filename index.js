const { Discord, Client, Collection } = require("discord.js");
const walkSync = require('./walkSync.js');
const path = require('path')

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});

module.exports = client;

// Global Variables
client.config = require("./config.json");
client.emotes = require('./config/emotes')

// Admins
client.ADMINS = [
    {"lastKnownTag": "Real_IceyDev#3339", "ID": "711964126301126696"}
]

// Initializing the project
require("./handler")(client);

// MongoDB
const mongo = require('././handler/mongoose')
mongo().then(connection => {
    console.log('MongoDB primary shard connection successful.')
})



//Slash command files
client.slashCommands = new Collection()
client.slashCommandFiles = walkSync(path.join(__dirname, '/SlashCommands'))

// Requirements
client.requirements = new Collection()
client.requirementFiles = walkSync(path.join(__dirname, '/requirements'))

for (const file of client.requirementFiles) {
    const requirement = require(`${file}`);
    client.requirements.set(requirement.name, requirement)
    requirement.run(client);
}

// Features
client.features = new Collection()
client.featureFiles = walkSync(path.join(__dirname, '/features'))

for (const file of client.featureFiles) {
    const feature = require(`${file}`);
    client.features.set(feature.name, feature)
    feature.run(client);
}

client.login(process.env.token);

// Made By Real_IceyDev#3339 //
// Redistributing Without Permission Is Prohibited //