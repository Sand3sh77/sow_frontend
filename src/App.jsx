import { Toaster } from 'react-hot-toast'
import { ReactRouterProvider } from './providers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactRouterProvider />
      <Toaster />
    </QueryClientProvider>
  )
}

export default App;
