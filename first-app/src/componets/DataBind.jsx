import { useEffect, useState } from "react"

export function DataBind(){
    const [product,setProduct]=useState({name:"",color:"",price:"",rating:{rate:0,ratings:0,reviews:0},feature:[],image:null,Variant:""})

    function LoadData(){
        let http=new XMLHttpRequest()
        http.open("get","product.json",true)
        http.send()
        http.onreadystatechange=function(){
            if (http.readyState===4){
                setProduct(JSON.parse(http.responseText));
            }
        }
    }

    useEffect(()=>{
        LoadData()
    },[])
    return(
        <div className="container-fulid">
            <div className="mt-4 row">
                <div className="col-2">
                    <img width="100%"
                        src={product.image || undefined}
                        alt="image"></img>
                </div>
                <div className="col-6">
                    <div className="fw-bold fs-4">{product.name}
                        <span className="badge rounded bg-success text-white">{product.rating.rate}<span className="bi bi-star-fill"></span></span>
                        <span className="mx-2 fw-bold text-secondary"> {product.rating.ratings} ratings & {product.rating.reviews} reviews </span>
                    </div>
                    <ul className="mt-2 list-unstyled">
                    {
                        product.feature.map(f=><li key={f} className="my-2 bi bi-dot">{f}</li>)
                    }
                </ul> 
                </div>
                 <div className="col-4">
                    <div className="fs-1 fw-bold">
                        {product.price}
                    </div>
                 </div>
            </div>
        </div>
    )
}