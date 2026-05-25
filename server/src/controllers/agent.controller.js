const agentService = require("../services/agent.service");
const successResponse = require("../utils/response");
const STATUS_CODE = require("../utils/statusCode");

const create = async (req, res, next) => {
    try {
        const agent = await agentService.createAgent({ ...req.body, userId: req.user._id });
        successResponse(res, agent, "Agent Created successfully", STATUS_CODE.CREATED);
    } catch (error) {
        next(error);
    }
}

const getAll = async (req, res, next) => {
    try {
        const agents = await agentService.getAgents(req.user._id);
        successResponse(res, agents, "Agents fetched", STATUS_CODE.OK);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    getAll
}