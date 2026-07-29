import { createContext, useContext, useState } from "react"
let NameContext=createContext(null)

export function Level1(){
    let userName=useContext(NameContext)
    return(
        <div className="p-4 bg-danger text-white">
            <h2>Level1 - {userName}</h2>
            < Level2 />
        </div>
    )
}

export function Level2(){
    let userName =useContext(NameContext)
    return(
        <div className="p-4 bg-warning text-danger">
            <h2>Level2- {userName}</h2>
        </div>
    )
}

export function Parent(){
    const [msg,setMsg]=useState('')
    function handleChange(e){
        setMsg(e.target.value)
    }
    return(
        <div className="p-4 bg-black text-white">
            <h2>Hello</h2>
            <input className="mb-2" type="text" onChange={handleChange} />
            <NameContext value={msg}>
                <Level1/>
            </NameContext>
        </div>
    )
}