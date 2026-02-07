import { Toaster } from 'react-hot-toast'
import { AppRoutes } from './routes';
import { AuthProvider, ConfigProvider, TranslationProvider } from './context';

function App() {

  return (
    <TranslationProvider>
      <ConfigProvider>
        <AuthProvider>
          <AppRoutes />
          <Toaster />
        </AuthProvider>
      </ConfigProvider>
    </TranslationProvider>
  )
}

export default App;
