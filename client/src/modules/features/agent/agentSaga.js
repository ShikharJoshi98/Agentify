import { all, call, put, takeLatest } from "redux-saga/effects";
import { createAgent, fetchAgent, getAgents } from "./agentApi";
import { agentCreateFailure, agentCreateSuccess, agentFetchFailure, agentFetchSuccess, agentGetFailure, agentGetSuccess } from "./agentAction";
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

function* agentFetchSaga(action) {
    try {
        const response = yield call(
            fetchAgent,
            action.payload
        );

        yield put(agentFetchSuccess(response));
    } catch (error) {
        yield put(agentFetchFailure(error.message));
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
        ),

        takeLatest(
            agentTypes.AGENT_FETCH_REQUEST,
            agentFetchSaga
        )
    ])
}

export default agentSaga