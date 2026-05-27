import agentTypes from "./agentActionType";

const initialState = {
    agent: null,
    agentCreate: {
        loading: false,
        error: null,
        message: null
    },
    agents: [],
    agentGet: {
        loading: false,
        error: null,
        message: null
    },
    agentFetch: {
        loading: false,
        error: null,
        message: null
    }
};

const agentReducer = (state = initialState, action) => {
    switch (action.type) {
        case agentTypes.AGENT_CREATE_REQUEST:
            return {
                ...state,
                agentCreate: {
                    loading: true,
                    error: null,
                    message: null
                }
            };
        case agentTypes.AGENT_CREATE_SUCCESS:
            return {
                ...state,
                agent: action.payload.data,
                agentCreate: {
                    loading: false,
                    error: null,
                    message: action.payload.message
                }
            };
        case agentTypes.AGENT_CREATE_FAILURE:
            return {
                ...state,
                agent: null,
                agentCreate: {
                    loading: false,
                    error: action.payload,
                    message: null
                }
            };
        case agentTypes.AGENT_GET_REQUEST:
            return {
                ...state,
                agentGet: {
                    loading: true,
                    error: null,
                    message: null
                }
            };
        case agentTypes.AGENT_GET_SUCCESS:
            return {
                ...state,
                agents: action.payload.data,
                agentGet: {
                    loading: false,
                    error: null,
                    message: null
                },
            };
        case agentTypes.AGENT_GET_FAILURE:
            return {
                ...state,
                agents: [],
                agentGet: {
                    loading: false,
                    error: action.payload,
                    message: null
                }
            };
        case agentTypes.AGENT_FETCH_REQUEST:
            return {
                ...state,
                agentFetch: {
                    loading: true,
                    error: null,
                    message: null
                }
            };
        case agentTypes.AGENT_FETCH_SUCCESS:
            return {
                ...state,
                agent: action.payload.data,
                agentFetch: {
                    loading: false,
                    error: null,
                    message: null
                }
            };
        case agentTypes.AGENT_FETCH_FAILURE:
            return {
                ...state,
                agent: null,
                agentFetch: {
                    loading: false,
                    error: action.payload,
                    message: null
                }
            };
        case agentTypes.CLEAR_AGENT_STATE:
            return {
                ...state,
                agent: null,
                agentCreate: {
                    loading: false,
                    error: null,
                    message: null
                }
            };
        default:
            return state;
    }
}

export default agentReducer