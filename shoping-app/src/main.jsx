import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App.jsx'
import {Shoping} from './components/shoping/Shoping.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shoping />
  </StrictMode>,
)
