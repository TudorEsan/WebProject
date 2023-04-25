// src/FireAuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { auth, googleAuthProvider } from "./firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";

const FireAuthContext = createContext(null);

export const useFireAuth = () => {
  return useContext(FireAuthContext);
};

export const FireAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const signOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const value = {
    user,
    signInWithGoogle,
    signOut,
    loading,
  };

  return (
    <FireAuthContext.Provider value={value}>
      {!loading && children}
    </FireAuthContext.Provider>
  );
};
