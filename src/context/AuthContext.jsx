import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { login as loginApi } from "../api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || false);
    const navigate = useNavigate();

    const login = async (email, password) => {
        try {
            const data = await loginApi(email, password);

            if (data) {
                toast.success(data.message);
                setUser(data.user);
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                navigate("/priceList");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    const logout = () => {
        setUser(false);
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        toast.success("Logout successful");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
