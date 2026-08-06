import { Link, Outlet } from "react-router-dom";

export function ShopIndex(){
    return(
        <div className="container-fluid">
            <h3>Shop Index</h3>
            <Link to="categories">Categories</Link>
            &nbsp; &nbsp; 
            <Link to="products">Products</Link>
            <hr/>
            <Outlet/>
        </div>
    )
}