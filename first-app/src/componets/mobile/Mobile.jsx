import { useEffect, useState } from "react"
import axios from "axios"

export function Mobile(){
    const [product,setProduct]=useState({"title":"","link":"","rating":"","price":0,"color":"","size":"","info":{"Brand":"","Oprating System":"","RAM Memory":"","CPU Model":"","CPU Speed":""},"about":[]})
    function loadData(){
        axios.get("mobile.json")
        .then((response)=>setProduct(response.data))
        .catch((error)=>error)
    }
    useEffect(()=>{
        loadData()
    },[])
    return(
        <div>
            <h1>{product.title}</h1>
            <p>{product.link}</p>
            <p>{product.rating}</p>
            <p>{product.price}</p>
            <p>{product.color}</p>
            <p>{product.size}</p>
            <ul>
                {
                    Object.keys(product.info).map(key=><li key={key}>{key}</li>)
                }
            </ul>
            <hr/>
            <ol>
                {
                    product.about.map(value=><li key={value}>{value}</li>)
                }
            </ol>
        </div>
    )
}