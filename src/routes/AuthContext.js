import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            setLoading(false);
            setUser(user);
        });
        return unsubscribe;
    }, []);

    if (loading) {
        return <>CARGANDO...</>
    }

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;