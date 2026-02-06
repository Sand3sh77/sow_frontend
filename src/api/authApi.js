import axios from "../utils/axiosInstance";

export const login = async (email, password) => {
    const { data } = await axios.post("/auth/login", { email, password });
    return data;
};
