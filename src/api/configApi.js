import axios from "../utils/axiosInstance";

export const getConfigs = async () => {
  const { data } = await axios.get("/config");
  return data;
};
