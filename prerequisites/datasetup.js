const Keyv = require('keyv')
const { mongooseConnectionStringKeyv } = process.env.mongooseConnectionStringKeyv

module.exports = {
  name: 'datasetup',
  run: async(client) => {
    client.gData = new Keyv(mongooseConnectionStringKeyv, {namespace: 'guilds'})
    client.uData = new Keyv(mongooseConnectionStringKeyv, {namespace: 'users'})

    client.gData.on('error', err => console.log('Keyv guild data connection error:', err));
    client.uData.on('error', err => console.log('Keyv user data connection error:', err));
  }
}

// Made By  Real_IceyDev#3339 //
// Redistributing Without Permission Is Prohibited //