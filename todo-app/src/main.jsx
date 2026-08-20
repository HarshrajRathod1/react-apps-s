import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App.jsx'
import { CookiesProvider } from 'react-cookie'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/router.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'

createRoot(document.getElementById('root')).render(
    <CookiesProvider>
        <Provider store={store}>
            <RouterProvider router={routes}></RouterProvider>
        </Provider>
    </CookiesProvider>
)
