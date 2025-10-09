import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextStore from './ContextApi/ContextStore.jsx'
import User from './User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextStore>
      <User />
      <App />

    </ContextStore>
  </StrictMode>,
)
