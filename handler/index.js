const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);
const chalk = require("chalk");

module.exports = async (client) => {
    
    //Events
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));
    
    //Commands
    const slashCommands = await globPromise(`${process.cwd()}/SlashCommands/*/*.js`);
    const arrayOfSlashCommands = [];
		console.log(chalk.green.bold("SLASH COMMANDS━━━━━━━━━━━━━━━━━━━┓"));
    slashCommands.map((value) => {
        const file = require(value)
        if (!file?.name) return;
        client.slashCommands.set(file.name, file)
        console.log('Slash Command Loaded: ' + file.name)
        arrayOfSlashCommands.push(file)
    });
	    	console.log(chalk.green.bold("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"));
	 			console.log("Successfully reloaded application (/) commands.");

    //Posting slash commands
    client.on("ready", async () => {
        client.guilds.cache.forEach(async (g) => {
            try {
                await client.guilds.cache.get(g.id).commands.set(arrayOfSlashCommands);
            } catch(error) {
            }
        });
    });
};

// Made By  Real_IceyDev#3339 //
// Redistributing Without Permission Is Prohibited //