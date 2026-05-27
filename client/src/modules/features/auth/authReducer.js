import authTypes from "./authActionTypes";

const initialState = {
    user: null,
    login: {
        loading: false,
        error: null,
        message: null
    },
    signup: {
        loading: false,
        error: null,
        message: null
    },
    logout: {
        loading: false,
        error: null,
        message: null
    },
    checkAuth: {
        loading: false,
        error: null,
        message: null
    },
    isAuthenticated: false,
    authChecked: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.SIGNUP_REQUEST:
            return {
                ...state,
                signup: {
                    loading: true,
                    error: null,
                    message: null
                }
            };
        case authTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                signup: {
                    loading: false,
                    error: null,
                    message: action.payload.message
                }
            };
        case authTypes.SIGNUP_FAILURE:
            return {
                ...state,
                signup: {
                    loading: false,
                    error: action.payload,
                    message: null
                }
            };
        case authTypes.LOGIN_REQUEST:
            return {
                ...state,
                login: {
                    loading: true,
                    error: null,
                    message: null
                },
                isAuthenticated: false
            };
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.data,
                login: {
                    loading: false,
                    error: null,
                    message: action.payload.message
                },
                isAuthenticated: true
            };
        case authTypes.LOGIN_FAILURE:
            return {
                ...state,
                user: null,
                login: {
                    loading: false,
                    error: action.payload,
                    message: null
                },
                isAuthenticated: false
            };
        case authTypes.LOGOUT_REQUEST:
            return {
                ...state,
                logout: {
                    loading: true,
                    error: null,
                    message: null
                }
            };
        case authTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                user: null,
                logout: {
                    loading: false,
                    error: null,
                    message: action.payload.message
                },
                isAuthenticated: false
            };
        case authTypes.LOGOUT_FAILURE:
            return {
                ...state,
                logout: {
                    loading: false,
                    error: action.payload,
                    message: null
                },
                isAuthenticated: true
            };
        case authTypes.CHECK_AUTH_REQUEST:
            return {
                ...state,
                checkAuth: {
                    loading: true,
                    error: null,
                    message: null
                },
            };
        case authTypes.CHECK_AUTH_SUCCESS:
            return {
                ...state,
                user: action.payload.data,
                checkAuth: {
                    loading: false,
                    error: null,
                    message: null
                },
                isAuthenticated: true,
                authChecked: true
            };
        case authTypes.CHECK_AUTH_FAILURE:
            return {
                ...state,
                user: null,
                checkAuth: {
                    loading: false,
                    error: null,
                    message: null
                },
                isAuthenticated: false,
                authChecked: true
            };
        case authTypes.CLEAR_AUTH_STATE:
            return {
                ...state,
                login: {
                    loading: false,
                    error: null,
                    message: null
                },
                signup: {
                    loading: false,
                    error: null,
                    message: null
                },
                checkAuth: {
                    loading: false,
                    error: null,
                    message: null
                },
                logout: {
                    loading: false,
                    error: null,
                    message: null
                }
            };
        default:
            return state;
    }
}

export default authReducer