import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Outlet, useSearchParams } from "react-router-dom"

export function FakestoreHome(){
    const [categorys,setCategorys]=useState([])

    function LoadCategorys(){
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            setCategorys(response.data)
        })
    }


    useEffect(()=>{
        LoadCategorys()
    },[])
    return(
        <div className="mt-4 row ">
            <div className="col-4">
                <h4>Categorys</h4>
                <ul className="list-group">
                    {
                        categorys.map(category=><li key={category} className="list-group-item list-group-item-warning"><Link to={category}>{category.toUpperCase()}</Link></li>)
                    }
                    <li className="list-group-item list-group-item-warning"><Link to="search">Search Products</Link></li>
                </ul>
                
            </div>
            <div className="col-8">
                <Outlet/>
            </div>
        </div>
    )
}