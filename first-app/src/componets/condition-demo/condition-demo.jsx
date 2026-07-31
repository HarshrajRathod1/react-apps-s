import { useState } from "react"
export function ConditionDemo(){

    const [name,setname]=useState('')

    function handlename(e){
        setname(e.target.value)
    }

    function handleSignIn(){
        localStorage.setItem("name",name)
        location.reload()
        
    }
    function handleSignOut(){
        localStorage.removeItem("name")
        location.reload()
    }
    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between align-items-center p-2 bg-light">
                <span className="bi bi-amazon fs-4 fw-bold"> Amazon</span>
                <div>
                    <div className="input-group">
                    <input placeholder="eg: brands, products" type="text" className="form-control"></input>
                    <button className="bi bi-search btn btn-warning"></button>
                    </div>
                </div>
                <div>
                    {(localStorage.getItem("name")===null)?
                    <div className="input-group">
                        <input onChange={handlename} placeholder="eg: username" type="text" name="uname" className="form-control"/>
                        <button onClick={handleSignIn} className="btn btn-danger">SignIn</button>
                    </div>
                    :
                    <div>
                        <span>{localStorage.getItem("name")}</span>
                        <button onClick={handleSignOut} className="btn btn-danger mx-3">SignOut</button>
                    </div>
                    }
                </div>
            </header>
        </div>
    )
}