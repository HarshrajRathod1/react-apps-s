import { useEffect, useState } from "react"
import axios from 'axios'

export function Shoping(){
    const [Categories,setCategories]=useState([{slug:"",name:""}])
    const [products,setProducts]=useState({'products':[]})

    function LoadCategories(){
        axios.get("https://dummyjson.com/products/categories")
        .then((res)=>setCategories(res.data))
        .catch((err)=>console.log(err))
    }

    function LoadProducts(){
        axios.get("https://dummyjson.com/products")
        .then((res)=>setProducts(res.data))
        .catch((error)=>console.log(error))
    }

    function handleCategory(e){
        axios.get(`https://dummyjson.com/products/category/${e.target.value}`)
        .then((response)=>setProducts(response.data))
    }

    useEffect(()=>{
        LoadCategories()
        LoadProducts()
    },[])
    return(
        <div className="container-fluid">
            <header className="d-flex flex-row justify-content-between align-items-center bg-light p-2">
                <div className="bi bi-bag-fill fs-3 fw-bold"> Shopping</div>
                <div>
                    <div className="input-group"><input type="text" placeholder="search :products, brands" className="form-control" /><span className="bi bi-search btn btn-warning"></span></div>
                </div>
                <div>
                    <span className="bi bi-person btn btn-secondary rounded mx-2"></span>
                    <span className="bi bi-cart btn btn-warning position-realtive"><span className="badge bg-danger rounded rounded-circle position-absolute">0</span></span>
                </div>
            </header>
            <main className="row mt-4">
                <nav className="col-3 p-2 bg-light">
                    <h4> Filter Products </h4>
                    <div>
                        <label className="fw-bold form-label"> Categories</label>
                        <div>
                            <select className="form-select" size="20">
                            {
                               Categories.map(category=>(<option key={category.slug} value={category.slug} onClick={handleCategory}>{category.name}</option>))
                            }
                            </select>
                        </div>
                    </div>
                </nav>
                <section className="col-9 d-flex flex-row flex-wrap card">
                    {
                        products.products.map(product=>(
                            <div key={product.id} className="card m-3 p-2 text-center" style={{width:"300px"}}>
                                <img src={product.thumbnail} height="200" className="card-img-top"/>
                                <div className="card-header" style={{height:"80px"}}>
                                    {product.title}
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt> Price: </dt>
                                        <dd> ₹ {product.price}</dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-warning w-100 bi bi-cart4"> Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </main>
        </div>
    )
}