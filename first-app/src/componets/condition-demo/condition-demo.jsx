import { useState } from "react"
import { Sidebar } from "../../controlled-components/sidebar"
export function ConditionDemo(){
    const [direction,setDirection]=useState('')
    function handleDirectionChange(e){
        setDirection(e.target.value)
    }
    return(
        <div className="container-fluid">
            <select onChange={handleDirectionChange} className="list-group m-3 p-2">
                Which Type of Header You Want ??
                <option className="list-group-item">select</option>
                <option className="list-group-item" value="vertical">Vertical</option>
                <option className="list-group-item" value="horizontal">Horizontal</option>
            </select>
            <Sidebar orientation={direction}/>
        </div>
    )
}