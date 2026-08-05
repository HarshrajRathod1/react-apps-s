import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom"

export function FakestoreHome(){
    const [categorys,setCategorys]=useState([])
    const navigate=useNavigate()

    function LoadCategorys(){
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            setCategorys(response.data)
        })
    }

    function handleButtonSearch(){
        navigate("/search")
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
                </ul>
                <div className="btn btn-warning p-2 mt-2 w-100"><Link to="/search">Search</Link></div>
                <button onClick={handleButtonSearch} className="d-block btn btn-primary w-100 mt-3" type="submit">Search Product</button>
                
            </div>
            <div className="col-8">
                <Outlet/>
            </div>
        </div>
    )
}