const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    Guild: String,
    Message: String,
    Roles: Object,
});

module.exports = mongoose.model("reactionroles", Schema);

// Made By  Real_IceyDev#3339 //
// Redistributing Without Permission Is Prohibited //