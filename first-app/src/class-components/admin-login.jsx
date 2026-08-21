 import React from "react";

 export class AdminLogin extends React.Component{
    constructor(){
        super()
        this.state={
            msg:'',
            count:0,
        }
        this.handleInsertClick=this.handleInsertClick.bind(this)
        this.handleUpdateClick=this.handleUpdateClick.bind(this)
        this.handleCountIncrease=this.handleCountIncrease.bind(this)
        this.handleCountDecrease=this.handleCountDecrease.bind(this)
    }
    handleInsertClick(){
        this.setState({msg:"Recored Inserted Successfully"})
    }
    handleUpdateClick(){
        this.setState({msg:"Recored Updated"})
    }

    handleCountIncrease(){
        this.setState({count:this.state.count+1})
    }
    handleCountDecrease(){
        this.setState({count:this.state.count-1})
    }

    render(){
        return(
            <div className="container-fluid m-2">
                <button onClick={this.handleInsertClick}>Insert</button>
                <button onClick={this.handleUpdateClick} className="mx-2">Update</button>
                <p>{this.state.msg}</p>
                <hr/>
                <p>Count:{this.state.count}</p>
                <button onClick={this.handleCountIncrease}>count : +1</button>
                <button onClick={this.handleCountDecrease} className="mx-3">count : -1</button>
            </div>
        )
    }
 }