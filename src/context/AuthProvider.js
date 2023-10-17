import { useState, createContext } from 'react';

// Cookie para manejar las cookies
import Cookie from 'js-cookie';

// Axios para hacer peticiones HTTP
import axios from 'axios';

// Creando el contexto (Permite acceder al contexto)
const AuthContext = createContext();

// Provider (Permite acceder a los states y funciones del contexto)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Funcion para iniciar sesion
  const signIn = async (email, password) => {
    try {
      setUser('Login');
    } catch (error) {}
  };

  // Funcion para cerrar sesion
  const signOut = async () => {
    try {
      setUser('Logout');
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
