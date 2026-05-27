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

const get = async (req, res, next) => {
    try {
        const agent = await agentService.getAgent(req.params.id);
        successResponse(res, agent, "Agent fetched", STATUS_CODE.OK);
    } catch (error) {
        next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const { name, nodes, edges, config, description } = req.body;
        const { id } = req.params;

        const updatedAgent = await agentService.updateAgent(id, { name, nodes, edges, config, description });
        successResponse(res, updatedAgent, "Agent Updated", STATUS_CODE.OK);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    getAll,
    get,
    update
}