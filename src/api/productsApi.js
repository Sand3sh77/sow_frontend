import axios from "../utils/axiosInstance";

export const getProducts = async () => {
    const { data } = await axios.get("/products");
    return data;
};

export const editProducts = async ({ id, data }) => {
    const resp = await axios.patch(`/products/${id}`, data);
    return resp;
};
