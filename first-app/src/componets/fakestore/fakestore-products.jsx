import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { CatergoryChange } from "./fakestore-index"

export function FakestoreProducts({onAddToCart}){
    let categoryName=useContext(CatergoryChange)

    const [products,setProducts]=useState([{id:0,title:"",price:0,description:"",image:"",category:"",rating:{rate:0}}])

    function handleAddToCart(e){
        alert(`Add to Cart Success ${e.title}`)
        onAddToCart(e)
    }

    function LoadProducts(){
        if (categoryName==="all"){
            axios.get(`https://fakestoreapi.com/products`)
        .then(response=>{
            setProducts(response.data)
        })
        }else{
            axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(response=>{
                setProducts(response.data)
            })
            .catch((err)=>{
                console.log(err)
                
            })
        }
    }

    useEffect(()=>{
        LoadProducts();
    },[categoryName])
    return (
        <div className="d-flex flex-wrap" style={{height:"200px"}}>
            {
                products.map(product=>
                    <div key={product.id} className="card m-2 p-2" style={{width:"200px"}}>
                        <img src={product.image || null} height="100px" className="card-img-top" alt="image"/>
                        <div className="card-header overflow-auto"  style={{height:"100px"}}>
                            
                            {product.title}
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                                <dt>Rating</dt>
                                <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span></dd>
                            </dl>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-warning w-100 bi bi-cart-3" onClick={()=>handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}