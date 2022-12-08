import React, { useContext, useState, useEffect } from 'react';
import '../firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthContext;


export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();
  
   useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
   },[]);
    
   async function signup (email, password, username) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(email, password);
        await updateProfile(auth.currenUser, {
            displayName : username
        });

        const user = auth.currentUser;
        setCurrentUser({
            ...user
        });
    }

    function login (email, password) {
          const auth = getAuth();
          return signInWithEmailAndPassword(auth, email, password);
    }

    function logout(email, password) {
      const auth = getAuth();
      return signOut(auth);
    }
    
    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};