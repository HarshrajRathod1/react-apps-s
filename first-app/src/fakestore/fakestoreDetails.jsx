import axios from "axios"
import { lazy, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function FakestoreDetails(){
    let params=useParams("id")
    const [product,setProduct]=useState({title:'',category:'',image:'',price:0,id:0,rating:{rate:0}})

    function LoadProduct(){
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
            setProduct(response.data)
        })
    }
    useEffect(()=>{
        LoadProduct()
    },[])
    return(
        <div>
            Fakestore Details {params.id}
            <div key={product.id} className="m-1 p-2 card w-25" >
                    <img src={product.image} height="150px"/>
                    <dl className="card-header">
                        <dt>Title :</dt>
                        <dd>{product.title}</dd>
                    </dl>
                    <dl className="card-body">
                        <dt>Price : </dt>
                        <dd>{product.price}</dd>
                    </dl>
                    <dl className="card-footer">
                        <dt>Rating :</dt>
                        <dd>{product.rating.rate}</dd>
                    </dl>
                </div>
                <p><Link to={`/${product.category}`}>Back to category</Link></p>
        </div>
    )
}