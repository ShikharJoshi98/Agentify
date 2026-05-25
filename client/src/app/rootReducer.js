import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../modules/features/auth/authReducer";
import agentReducer from "../modules/features/agent/agentReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    agent: agentReducer
})

export default rootReducer