import { get, post } from "../../../api/apiClient";

export const createAgent = (data) => {
    return post("/agent/create", data);
}

export const getAgents = () => {
    return get("/agent/getAll");
}