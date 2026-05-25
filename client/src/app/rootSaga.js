import { all } from "redux-saga/effects";
import authSaga from "../modules/features/auth/authSaga";
import agentSaga from "../modules/features/agent/agentSaga";

export default function* rootSaga() {
    yield all([
        authSaga(),
        agentSaga()
    ])
}