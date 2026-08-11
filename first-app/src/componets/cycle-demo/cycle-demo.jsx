import { useEffect, useState } from "react"

function Login(){
    useEffect(()=>{
        console.log("Login Mounted")

        return()=>{
            console.log("login De-mounted")
        }
    },[])
}

function Register(){
    useEffect(()=>{
        console.log("Register Mounted")

        return()=>{
            console.log("Register De-mounted")
        }
    },[])
}

export function CycleDemo(){
    const [view,setView]=useState('')
    function handleLoginClick(){
        setView(<Login/>)
    }
    function handleRegisterClick(){
        setView(<Register/>)
    }
    return(
        <div className="container-fluid">
           <button onClick={handleLoginClick}>Login</button>&nbsp;&nbsp;
           <button onClick={handleRegisterClick}>Register</button>
           {view}
        </div>
    )
}