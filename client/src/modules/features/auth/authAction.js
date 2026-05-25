import authTypes from "./authActionTypes";

export const signUpRequest = (credentials) => {
    return {
        type: authTypes.SIGNUP_REQUEST,
        payload: credentials
    }
}

export const signUpSuccess = (data) => {
    return {
        type: authTypes.SIGNUP_SUCCESS,
        payload: data
    }
}

export const signUpFailure = (error) => {
    return {
        type: authTypes.SIGNUP_FAILURE,
        payload: error
    }
}

export const loginRequest = (credentials) => {
    return {
        type: authTypes.LOGIN_REQUEST,
        payload: credentials
    }
}

export const loginSuccess = (data) => {
    return {
        type: authTypes.LOGIN_SUCCESS,
        payload: data
    }
}

export const loginFailure = (error) => {
    return {
        type: authTypes.LOGIN_FAILURE,
        payload: error
    }
}

export const chechAuthRequest = () => {
    return {
        type: authTypes.CHECK_AUTH_REQUEST,
    }
}

export const chechAuthSuccess = (data) => {
    return {
        type: authTypes.CHECK_AUTH_SUCCESS,
        payload: data
    }
}

export const chechAuthFailure = (error) => {
    return {
        type: authTypes.CHECK_AUTH_FAILURE,
        payload: error
    }
}

export const clearAuthState = () => {
    return {
        type: authTypes.CLEAR_AUTH_STATE
    }
}