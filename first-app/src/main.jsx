import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import './index.css'
import { Mobile } from './componets/mobile/Mobile.jsx'
import { EventDemo } from './componets/eventDemo/EventDemo.jsx'
import { Mousedemo } from './componets/mouse-demo/mousedemo.jsx'
import { MouseAnimation } from './componets/mouse-animation/mouse-animation.jsx'
import { KeyDemo } from './componets/key-demo/key-demo.jsx'
import { FormDemo } from './componets/form-demo/form-demo.jsx'
import { FormikDemo } from './componets/formik-demo/formik-demo.jsx'
import { SdemoHookForm } from './componets/self-react-hook-form/sdemo-hook-form.jsx'
import { HookFormDemo } from './componets/hook-form-demo/hook-form-demo.jsx'
import { Navbar } from './controlled-components/navbar.jsx'
import { ControlledDemo } from './componets/controlled-demo/controlled-demo.jsx'
import { Parent } from './componets/context-demo/context-demo.jsx'
import { ParentComponent } from './componets/control-demo/control-demo.jsx'
import { ConditionDemo } from './componets/condition-demo/condition-demo.jsx'
import { Sidebar } from './controlled-components/sidebar.jsx'
import { TutorialIndex } from './componets/tutorial/tutorial-index.jsx'
import { FakestoreIndex } from './fakestore/fakestoreIndex.jsx'
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')).render(
  <CookiesProvider>
    <FakestoreIndex />
  </CookiesProvider>
)
