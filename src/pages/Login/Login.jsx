import React, { useContext, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AuthContext, TranslationContext } from "../../context";
import "./login.css";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const { translations } = useContext(TranslationContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <div id="login-container">
            <form id="login-form" onSubmit={(e) => handleLogin(e)}>
                <h1>{translations.login}</h1>
                <div id="login-input-container">
                    <div className="label-input-container">
                        <label htmlFor="email">{translations.enter_email}</label>
                        <input
                            id="email"
                            placeholder={translations.email}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="label-input-container">
                        <label htmlFor="password">{translations.enter_password}</label>
                        <div id="password-container">
                            <input
                                id="password"
                                placeholder={translations.password}
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="off"
                            />
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeOff strokeWidth={1} /> : <Eye strokeWidth={1} />}
                            </span>
                        </div>
                    </div>
                </div>
                <button id='login-button'>{translations.login}</button>
                <div id='login-footer'>
                    <a>{translations.register}</a>
                    <a>{translations.get_password}</a>
                </div>
            </form>
        </div>
    );
}
