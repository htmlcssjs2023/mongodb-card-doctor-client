import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthContextAPI = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password)=>{
       setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // singIn user
    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // SETUP FIREBASE OBSERVER 
    useEffect(()=>{
        const unsubscriber = onAuthStateChanged(auth, createUser=>{
            setUser(createUser);
            console.log('current user: ', createUser);
            setLoading(false);
        })

    // cleanup the observer when the component is unmount
        return ()=>{
            return unsubscriber();
        };

    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextAPI;