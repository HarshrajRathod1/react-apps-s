import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.json"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import './index.css'
import { Mobile } from './componets/mobile/Mobile.jsx'
import { EventDemo } from './componets/eventDemo/EventDemo.jsx'
import { Mousedemo } from './componets/mouse-demo/mousedemo.jsx'
import { MouseAnimation } from './componets/mouse-animation/mouse-animation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MouseAnimation />
  </StrictMode>,
)
