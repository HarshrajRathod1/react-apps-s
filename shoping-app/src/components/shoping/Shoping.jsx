import { useEffect, useState } from "react"
import axios from 'axios'

export function Shoping(){
    const [category,setCategory]=useState([])
    const [product,setProduct]=useState({'products':[]})

    function LoadCategory(){
        axios.get('https://dummyjson.com/products/category-list')
        .then((response)=>setCategory(response.data))
    }
    useEffect(()=>{
        LoadCategory()
    },[])
    return(
        <div className="container-fluid">
            <header className="d-flex flex-row justify-content-between align-items-center bg-light p-2">
                <div className="bi bi-bag-fill fs-3 fw-bold"> Shopping</div>
                <div>
                    <div className="input-group"><input type="text" className="form-control" /><span className="bi bi-search btn btn-warning"></span></div>
                </div>
                <div>
                    <span className="bi bi-person btn btn-secondary rounded mx-2"></span>
                    <span className="bi bi-cart btn btn-warning position-realtive"><span className="badge bg-danger rounded rounded-circle position-absolute">0</span></span>
                </div>
            </header>
        </div>
    )
}