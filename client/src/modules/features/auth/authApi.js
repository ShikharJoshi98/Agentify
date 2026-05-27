import { get, post } from "../../../api/apiClient"

export const registerUser = (data) => {
    return post("/auth/register", data);
}

export const loginUser = (data) => {
    return post("/auth/login", data);
}

export const logoutUser = (data) => {
    return post("/auth/logout");
}

export const checkAuth = () => {
    return get("/auth/checkAuth");
}