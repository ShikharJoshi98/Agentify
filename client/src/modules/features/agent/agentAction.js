import agentTypes from "./agentActionType";

export const agentCreateRequest = (credentials) => {
    return {
        type: agentTypes.AGENT_CREATE_REQUEST,
        payload: credentials
    }
}

export const agentCreateSuccess = (data) => {
    return {
        type: agentTypes.AGENT_CREATE_SUCCESS,
        payload: data
    }
}

export const agentCreateFailure = (error) => {
    return {
        type: agentTypes.AGENT_CREATE_FAILURE,
        payload: error
    }
}

export const agentGetRequest = () => {
    return {
        type: agentTypes.AGENT_GET_REQUEST,
    }
}

export const agentGetSuccess = (data) => {
    return {
        type: agentTypes.AGENT_GET_SUCCESS,
        payload: data
    }
}

export const agentGetFailure = (error) => {
    return {
        type: agentTypes.AGENT_GET_FAILURE,
        payload: error
    }
}

export const clearAgentState = () => {
    return {
        type: agentTypes.CLEAR_AGENT_STATE
    }
}