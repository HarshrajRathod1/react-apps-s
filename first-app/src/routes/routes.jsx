import { createBrowserRouter } from "react-router-dom"
import { ShopIndex } from "../shop/shop-index"
import { ShopCategories } from "../shop/shop-categories"
import { ShopProducts } from "../shop/shop-products"

const routes=createBrowserRouter([
        {
            path:"/",
            element:<ShopIndex/>,
            children:[
                {
                    path:"/categories",
                    element:<ShopCategories/>,
                    errorElement:<div>Error</div>
                },
                {
                    path:"/products",
                    element:<ShopProducts/>,
                    errorElement:<div>Error</div>
                }
        ],
            errorElement:<div>Error</div>
        },
        
    ])

export default routes