// Layout
import { MainLayout } from '@layout/MainLayout';

// Provider (Permite acceder a los states y funciones del contexto)
import { AuthProvider } from '@context/AuthProvider';

import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthProvider>
  );
}

export default MyApp;
