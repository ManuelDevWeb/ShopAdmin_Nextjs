import { useState, createContext } from 'react';

// Endpoints API
import { endPoints } from '@services/api';

// Cookie para manejar las cookies
import Cookie from 'js-cookie';

// Axios para hacer peticiones HTTP
import axios from 'axios';

// Creando el contexto (Permite acceder al contexto)
const AuthContext = createContext();

// Provider (Permite acceder a los states y funciones del contexto)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Funcion para iniciar sesion
  const signIn = async (email, password) => {
    try {
      const options = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
      };

      // Haciendo la peticion a la API para iniciar sesion y obtener el token
      const { data: access_token } = await axios.post(
        endPoints.auth.login,
        {
          email,
          password,
        },
        options
      );

      if (access_token) {
        const token = access_token.access_token;

        // Almacenando el token en una cookie
        Cookie.set('token', access_token.access_token, {
          expires: 5,
        });

        // Almacenando el token en el header de axios para que se envie en la peticion consecuente
        axios.defaults.headers.Authorization = `Bearer ${token}`;

        // Haciendo la peticion a la API para obtener el perfil del usuario
        const { data: user } = await axios.get(endPoints.auth.profile);

        setUser(user);
      }
    } catch (error) {
      throw error;
    }
  };

  // Funcion para cerrar sesion
  const signOut = async () => {
    try {
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        error,
        loading,
        setError,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
