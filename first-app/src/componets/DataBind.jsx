import {  useState } from "react"

export function DataBind(){
    const [city]=useState(["mimbai","goa","chennai","hyderabad","indore","pune","delhi"])
    return(
        <div>
            <select>
                {
                    city.map(item=><option key={item}>{item}</option>)
                }
            </select>
        </div>
    )
}