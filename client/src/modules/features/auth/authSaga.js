import { all, call, put, takeLatest } from "redux-saga/effects";
import authTypes from "./authActionTypes";
import { checkAuth, loginUser, registerUser } from "./authApi";
import { chechAuthFailure, chechAuthSuccess, loginFailure, loginSuccess, signUpFailure, signUpSuccess } from "./authAction";

function* signUpSaga(action) {
    try {
        const response = yield call(
            registerUser,
            action.payload
        );

        yield put(signUpSuccess(response));
    } catch (error) {
        yield put(signUpFailure(error.message));
    }
}

function* loginSaga(action) {
    try {
        const response = yield call(
            loginUser,
            action.payload
        );

        yield put(loginSuccess(response));
    } catch (error) {
        yield put(loginFailure(error.message));
    }
}

function* checkAuthSaga() {
    try {
        const response = yield call(
            checkAuth
        );

        yield put(chechAuthSuccess(response));
    } catch (error) {
        yield put(chechAuthFailure(error.message));
    }
}

function* authSaga() {
    yield all([

        takeLatest(
            authTypes.SIGNUP_REQUEST,
            signUpSaga
        ),

        takeLatest(
            authTypes.LOGIN_REQUEST,
            loginSaga
        ),

        takeLatest(
            authTypes.CHECK_AUTH_REQUEST,
            checkAuthSaga
        )

    ])
}

export default authSaga