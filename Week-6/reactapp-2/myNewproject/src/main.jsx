import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
     <App />
  // </StrictMode>
)
//-In main.jsx file strictMode checks the purityof the component
