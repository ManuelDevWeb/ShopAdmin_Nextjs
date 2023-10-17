import { useContext } from 'react';

// Context (Permite acceder al contexto)
import { AuthContext } from '@context/AuthProvider';

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };
