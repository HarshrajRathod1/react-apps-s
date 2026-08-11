import { useState } from "react"
import { useFilterData } from "../../hooks/filter-data"


export function Harsh(){
    const course=["python course","java course","python Advance","Django course","development"]
    const [searchString,setSearchString]=useState('')

    const res=useFilterData(course,searchString)

    function handleSearchChange(e){
        setSearchString(e.target.value)
    }

    return(
        <div className="container-fluid">
            <input className="w-25 form-control" type="text" onChange={handleSearchChange} placeholder="search..."/>
            <hr></hr>
            {
                res.map(item=><li key={item}>{item}</li>)
            }
        </div>
    )
} 