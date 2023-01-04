const { mongooseConnectionString } = process.env.mongooseConnectionString
const mongoose = require("mongoose");

module.exports = async () => {
    if (!mongooseConnectionString) return;

    await mongoose.connect(mongooseConnectionString, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })

    return mongoose.connection
};

// Made By  Real_IceyDev#3339 //
// Redistributing Without Permission Is Prohibited //