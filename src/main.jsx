import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Context from './context/Context.jsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode >
  <Context >
  <BrowserRouter>
   <App />
  </BrowserRouter> 
  </Context>
  </StrictMode>
)
