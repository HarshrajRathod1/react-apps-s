import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'



import App from './App.jsx'
import { Weather } from './componets/weather.jsx'

createRoot(document.getElementById('root')).render(
    <Weather />
)
