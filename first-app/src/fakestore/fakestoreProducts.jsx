import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export function FakestoreProducts(){
    let params=useParams("category")
    const [products,setProducts]=useState([{title:'',image:'',price:0,id:0,rating:{rate:0}}])

    function LoadProducts(){
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data)
        })
    }
    useEffect(()=>{
        LoadProducts()
    },[products])
    return(
        <div className="container-fluid">
            Fakestore products
            <div className="d-flex flex-wrap p-2 gap-2 ">
            {
                products.map(product=><div key={product.id} className="p-2 m-1 card" >
                    <img src={product.image} height="100px" width="100px"/>
                        <p><Link to={`/details/${product.id}`}>Details</Link></p>
                </div>)
            }
            </div>
        </div>
    )
}