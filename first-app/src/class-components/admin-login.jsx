import axios from "axios";
import React from "react";

export class AdminLogin extends React.Component{
    constructor(){
        super();
        this.state={
            category:[],
            products:[]
        }
    }
    LoadCategories(){
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(res=>{
            this.setState({category:res.data})
        })
    }
    LoadProducts(){
        axios.get(`https://fakestoreapi.com/products/`)
        .then(res=>{
            this.setState({products:res.data})
        })
    }
    componentDidMount(){
        this.LoadCategories()
        this.LoadProducts()
    }

    render(){
        return(
            <div className="container-fluid">
                <h3 className="fs-4 text-center">Fake Store App</h3>
                <select>
                    {
                        this.state.category.map(item=>(
                            <option key={item}>{item}</option>
                        ))
                    }
                </select>
                <br/>
                {
                    this.state.products.map(product=>(
                        <img key={product.id} src={product.image} height="50" width="50" />
                    ))
                }

            </div>
        )
    }
} 