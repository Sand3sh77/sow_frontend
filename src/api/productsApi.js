import axios from "../utils/axiosInstance";

export const getProducts = async () => {
    const { data } = await axios.get("/products");
    return data;
};
