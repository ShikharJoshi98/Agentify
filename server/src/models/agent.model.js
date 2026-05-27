const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    config: {
        type: mongoose.Schema.Types.Mixed,
        default: {}
    },
    nodes: {
        type: mongoose.Schema.Types.Mixed,
        default: {}
    },
    edges: {
        type: mongoose.Schema.Types.Mixed,
        default: {}
    },
    published: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;