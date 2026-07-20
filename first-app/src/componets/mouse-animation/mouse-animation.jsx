import { useState } from 'react'
import './mouse-animation.css'
export function MouseAnimation(){
    const [aniObj,setAniObj]=useState({animation: "spin linear 5s  infinite"})
    function handleMouseDown(e){
        setAniObj({animation: "spin linear 1s  infinite"})
    }
    function handleMouseUp(e){
        setAniObj({animation: "spin linear 5s  infinite"})
    }
    return (
        <div className="container-fulid d-flex justify-content-center align-items-center vh-100">
            <img src="react.svg" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} height="200" width='200' style={aniObj}/>
        </div>
    )
}