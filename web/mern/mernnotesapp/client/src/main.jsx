import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import Routes from './routes/Routes.jsx'
import { AuthProvider } from './AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster />
      <Routes />
    </AuthProvider>
  </StrictMode>,
)
