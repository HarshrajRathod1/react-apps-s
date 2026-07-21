import { useState } from "react"

export function EventDemo(){

    function handleExecuteClick(){
        setTimeout(()=>{
            console.log('Micro Task')
        },0)
        Promise.resolve().then(function(){
            console.log('Macro Task')
        })
        console.log('Normal Task')
    }
    
    return (
        <div className="container-fluid">
            <button onClick={handleExecuteClick}>Execute</button> 
        </div>
    )
}