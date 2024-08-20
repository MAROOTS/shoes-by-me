import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser =JSON.parse(localStorage.getItem("user"));
        if(storedUser) setUser(storedUser);
    }, []);

    const register = async (name, email, password) => {
        await axios.post('http://localhost:3000/api/auth/register', {name, email, password});
    };

    const login= async (email, password) => {
        const {data}= await axios.post('http://localhost:3000/api/auth/login', {email, password});
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
    };

    const logout =  () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return(
        <AuthContext.Provider value={{user,register,logout,login,loading}}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);