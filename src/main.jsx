import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import { ThemeProvider } from './Components/ThemeContext/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
