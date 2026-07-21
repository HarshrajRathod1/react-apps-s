import axios from "axios"
import { useEffect, useState } from "react"

export function KeyDemo(){
    const [user,setUser]=useState([{uname:''}])
    const [msg,setMsg]=useState('')
    const [errorMsg,setErrorMsg]=useState({})
    const [progMsg,setProgMsg]=useState('')
    const [progWidth,setProgWidth]=useState({width:""})
    const [progStyle,setProgStyle]=useState('')
    function LoadUsers(){
        axios.get("users.json")
        .then(response=>{
            setUser(response.data)
        })
    }
    function handleKeyUp(e){
        for(let u of user){
            if(u.uname===e.target.value){
                setMsg('Username already taken')
                setErrorMsg('text-danger')
                break;
            }else{
                setMsg('username available')
                setErrorMsg('text-success')
            }
        }
    }

    function passwordVerify(e){
        console.log(e.target.value.length)
        if(e.target.value.match(/^(?=.*[A-Z])\w{4,15}$/)){
            //strong
            setProgMsg('Strong')
            setProgWidth({width:"100%"})
            setProgStyle('progress-bar-striped bg-success progress-bar-animated');
        }else if(e.target.value.length<4){
            //poor
            setProgMsg('Poor')
            setProgWidth({width:"30%"})
            setProgStyle('progress-bar-striped bg-danger progress-bar-animated');
        }else{
            //week
            setProgMsg('week')
            setProgWidth({width:"70%"})
            setProgStyle('progress-bar-striped bg-warning progress-bar-animated');
        }
    }
    
    useEffect(()=>{
        LoadUsers()
    })
    return(
        <div className="container-fulid m-3">
            <h3>Register User</h3>
            <dl className="w-25">
                <dt>UserName</dt>
                <dd><input type="text" className="form-control" onKeyUp={handleKeyUp}/></dd>
                <dd className={errorMsg}>{msg}</dd>
                <dt>Password</dt>
                <dd><input type="password" className="form-control" onKeyDown={passwordVerify}/></dd>
                <dd className={`progress-bar text-white ${progStyle}`} style={progWidth} >{progMsg}</dd>
            </dl>
        </div>
    )
}