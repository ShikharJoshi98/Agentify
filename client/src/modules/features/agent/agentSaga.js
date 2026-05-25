import { all, call, put, takeLatest } from "redux-saga/effects";
import { createAgent, getAgents } from "./agentApi";
import { agentCreateFailure, agentCreateSuccess, agentGetFailure, agentGetSuccess } from "./agentAction";
import agentTypes from "./agentActionType";

function* agentCreateSaga(action) {
    try {
        const response = yield call(
            createAgent,
            action.payload
        );

        yield put(agentCreateSuccess(response));
    } catch (error) {
        yield put(agentCreateFailure(error.message));
    }
}

function* agentGetSaga() {
    try {
        const response = yield call(
            getAgents
        );

        yield put(agentGetSuccess(response));
    } catch (error) {
        yield put(agentGetFailure(error.message));
    }
}

function* agentSaga() {
    yield all([

        takeLatest(
            agentTypes.AGENT_CREATE_REQUEST,
            agentCreateSaga
        ),

        takeLatest(
            agentTypes.AGENT_GET_REQUEST,
            agentGetSaga
        )
    ])
}

export default agentSaga