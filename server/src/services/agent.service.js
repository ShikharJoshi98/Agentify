const Agent = require("../models/agent.model");
const AppError = require("../utils/error");
const STATUS_CODE = require("../utils/statusCode");

const createAgent = async (data) => {
    try {
        const name = String(data.agentName);
        const userId = String(data.userId);

        const agent = await Agent.create({
            name,
            config: data.config,
            userId
        });

        return agent;
    } catch (error) {
        throw new AppError("Error in creating agent", STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

const getAgents = async (id) => {
    try {
        const agents = await Agent.find({ userId: id });
        return agents;
    } catch (error) {
        throw new AppError("Error in creating agent", STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAgent,
    getAgents
}