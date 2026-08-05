import { useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export function FakestoreLogin(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const [cookies,setCookie,removeCookie]=useCookies(['username'])
    let navigate=useNavigate()

    function handleClick(){
        setCookie('username',username,{expires:new Date('2026-08-06')})
        navigate('/search')
    }

    function handleUserChange(e){
        setUsername(e.target.value)
    }

    function handlePassChange(e){
        setPassword(e.target.value)
    }
    return(
        <div className="container-fluid">
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" onChange={handleUserChange}/></dd>

                    <dt>Password</dt>
                    <dd><input type="password" onChange={handlePassChange}/></dd>
                </dl>
                <button onClick={handleClick} type="submit">Login</button>
        </div>
    )
}