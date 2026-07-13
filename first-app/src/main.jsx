import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.json"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import './index.css'
import { Login } from './componets/login/login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
