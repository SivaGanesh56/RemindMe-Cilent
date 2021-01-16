import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../../auth';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();
    // TODO: call spinner component
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    function verifyEmail() {
        return auth.currentUser.sendEmailVerification();
    }

    useEffect(() => {
        const unsubscribe =  auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
        
        return unsubscribe;
    } ,[])

    const value = {
        currentUser,
        loading,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        verifyEmail,
    };

    // TODO: call spinner while loading
    return (
        <AuthContext.Provider value={value}>
            {!loading && children }
        </AuthContext.Provider>
    );
}