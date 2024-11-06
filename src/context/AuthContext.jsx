import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Config/Firebase';

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const auth = getAuth(app);

 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAdmin(user);
        localStorage.setItem('isLoggedIn', true);
      } else {
        setAdmin(null);
        localStorage.removeItem('isLoggedIn');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ admin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
