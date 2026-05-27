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
            description: data.description ? String(data.description) : null,
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
        throw new AppError("Error in getting agents", STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

const getAgent = async (id) => {
    try {
        const agent = await Agent.findById(id);
        return agent;
    } catch (error) {
        throw new AppError("Error in getting agent", STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

const updateAgent = async (id, data) => {
    try {
        const updatedAgent = await Agent.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true
        });
        if (!updatedAgent) {
            throw new AppError("Cannot find agent", STATUS_CODE.NOT_FOUND);
        }
        return updatedAgent;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError("Error in updating agent", STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAgent,
    getAgents,
    getAgent,
    updateAgent
}