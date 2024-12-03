import React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import "./index.css"
import { ThemeProvider } from './context/ThemeContext.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <App/>
    </ThemeProvider>

  </StrictMode>,
)
