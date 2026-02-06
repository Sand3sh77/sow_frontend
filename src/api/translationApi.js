import axios from "../utils/axiosInstance";

export const getTranslations = async (lang) => {
    const { data } = await axios.get(`/translation/${lang}`);
    return data.translations;
};

export const addOrUpdateTranslation = async ({ key, language, text }) => {
    const { data } = await axios.post("/translation", { key, language, text });
    return data;
};
