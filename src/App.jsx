import { Toaster } from 'react-hot-toast'
import { AppRoutes } from './routes';
import { AuthProvider, TranslationProvider } from './context';

function App() {

  return (
    <AuthProvider>
      <TranslationProvider>
        <AppRoutes />
        <Toaster />
      </TranslationProvider>
    </AuthProvider>
  )
}

export default App;
