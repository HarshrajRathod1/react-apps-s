import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Dashboard } from "../components/dashboard";

const routes=createBrowserRouter([
    {
        path:"/",
        element:<App />
    },
    {
        path:'/dashboard',
        element:
        <Dashboard/>
    }
])

export default routes