import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState(localStorage.getItem("id"));
    const [token, setToken] = useState(localStorage.getItem("token"));


    const login = (data) => {
        setUserId(data.userId);
        setToken(data.token);

        localStorage.setItem("id", data.userId)
        localStorage.setItem("token", data.token)
    }
    
    const logout = () => {
        setUserId(null);
        setToken(null);

        localStorage.removeItem("id");
        localStorage.removeItem("token");
    }

    return(
        <AuthContext.Provider value={{ userId, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);