import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase.init';
import { AuthContext } from './AuthContext';
import Loader from '../Components/Loader/Loader';
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email , password) =>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth , email , password)
        
    }
    const signInUser = (email , password) =>{
        setLoading(false)
        return signInWithEmailAndPassword(auth ,email ,password)
    }
    const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });
  return () => unsubscribe();
}, []);
if(loading){
   return <Loader></Loader>
}
const logout = () =>{
    setLoading(false)
    return signOut(auth);
} 
    const userInfo ={
        createUser ,
        signInUser ,
        googleSignIn ,
        user ,
        logout,
        loading ,
        setLoading
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;