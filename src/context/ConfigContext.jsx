import { createContext, useState, useEffect } from "react";
import { getConfigs } from "../api";

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
    const [configs, setConfigs] = useState({});

    useEffect(() => {
        fetchConfigs();
    }, []);

    const fetchConfigs = async () => {
        const data = await getConfigs();
        setConfigs(data.configs);
    };

    return (
        <ConfigContext.Provider
            value={{ configs, fetchConfigs }}
        >
            {children}
        </ConfigContext.Provider>
    );
};
