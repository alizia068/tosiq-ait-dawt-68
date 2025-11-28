import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { VERIFY_USER_URL } from "./resource/apis";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Use auth must within Auth Provider");
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect (() => {
        const userToken = localStorage.getItem("token");
        if (userToken) {
            validateUserToken(userToken);
        } else {
            setLoading(false)
        }
    }, []);

    const validateUserToken = async (token) => {
        try {
            const response = await axios.get(VERIFY_USER_URL, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setUser(response.data.user);
        } catch (error) {
            console.log("Error: ", error);
            logout();
        } finally {
            setLoading(false);
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    }

    // const login = (token, userData) => {
    //     localStorage.setItem("token", token);
    //     setUser(userData);
    // }
    const login = async (token, userData = null) => {
        localStorage.setItem("token", token);
        if (userData) {
            setUser(userData);
        } else {
            await validateUserToken(token);
        }
    }

    const isAuthenticated = !!user; // null | undefined -> false, object -> true
    const values = { user, loading, isAuthenticated, login, logout };
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}