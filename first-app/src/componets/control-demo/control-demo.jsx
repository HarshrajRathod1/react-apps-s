import { useState } from "react"

export function Child({sendData}){
    function handleClick(){
        sendData({Title:"TV",Price:12400})
    }
    return(
        <div className="p-4 bg-danger text-white">
            <h2>Child Component</h2>
            <button onClick={handleClick} className="btn btn-warning">Send Data to Parent</button>
        </div>
    )
}

export function ParentComponent(){
    const [product,setProduct]=useState({Title:'',Price:0})
    function handleData(e){
        setProduct(e)
    }
    return(
        <div className="p-4 bg-dark text-white">
            Parent Component <br/> {product.Title} <br/> {product.Price}
            <Child sendData={handleData} />
        </div>
    )
}