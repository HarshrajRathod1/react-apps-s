import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams,Link } from "react-router-dom"

export function FakestoreResult(){
    let [params]=useSearchParams()
    const [products,setProducts]=useState([{title:'',image:'',price:0,id:0,rating:{rate:0}}])

    function LoadProducts(){
        axios(`https://fakestoreapi.com/products/category/${params.get('search')}`)    
        .then(res=>{
            setProducts(res.data)
        })
    }

    useEffect(()=>{
        LoadProducts()
    },[])
    return(
        <div className="mt-4">
            <h4>Result</h4>
            <div className="d-flex">
                {
                    products.map(product=><div key={product.id}>
                    <img src={product.image} className="m-2" width="50" height="50" />
                </div>)
                }
            </div>
            <Link to="/search">Back to Search</Link>
        </div>
    )
}