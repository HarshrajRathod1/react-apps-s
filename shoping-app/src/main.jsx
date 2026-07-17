import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Shoping} from './components/shoping/Shoping.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shoping />
  </StrictMode>,
)
