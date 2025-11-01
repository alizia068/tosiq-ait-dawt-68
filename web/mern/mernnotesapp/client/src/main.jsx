import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  // { path: '/notes/edit/:id', element: <DetailNote /> }
  { path: '/notes/update', element: <App /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
