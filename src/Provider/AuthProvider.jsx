import React, { Children, createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import app from "../Authentication/firebase.config";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const auth = getAuth(app);


  const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading,setLoading]= useState(true)


      // Create user using email password
const createNewUser = (email, password) => {
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password);
};

// Login user
const userLogin = (email, password) => {
  setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
// Google login
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

//   Logout
const logOut = () => {
  setLoading(true)
    toast.success("Log out successful!", { duration: 3000 });
    return signOut(auth);
  };
// Update user email and photo data
const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };


      
      // Passing data using context
  const authInfo = {
    createNewUser,
    userLogin,
    handleGoogleLogin,
    logOut,
    user,
    loading,
    setLoading,
    setUser,
    updateUserProfile,
  };
// Logout handler
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
