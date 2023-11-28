import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from './../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthContextAPI = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true);

    // ==============> Create user  <====
        const createUser = (email,password)=>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
        }
   // ==============> SignIn User <====
   const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
   }

    // ==============> sign out <====

    const logOut = () => {
        setLoading(true)
       return signOut(auth)
    }

   // ==============> update user <====
   const updateUser = (user, name)=>{
        return updateProfile(user, name)
   }

   // ==============> Observer <====
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    // cleanup the observer when the component is unmount
    return ()=>{
        unsubscribe();
    }
   },[])
   

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContextAPI;