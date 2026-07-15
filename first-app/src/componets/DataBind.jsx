import {  useState } from "react"

export function DataBind(){
    const [studData]=useState({name:"rahul",age:12,course:"react"})
    return(
        <div>
            <h2>Object</h2>
            <p>Name: {studData.name}</p>
            <p>Age: {studData.age}</p>
            <p>Course: {studData.course}</p>
            <hr></hr>
            <h2>Keys of object</h2>
            {
                Object.keys(studData).map((k,i)=>(<p key={i}>{k}</p>))
            }
            <hr/>
            <h2>Values</h2>
            {
                Object.values(studData).map((v,i)=>(<p key={i}>{v}</p>))
            }
            <hr/>
            <h2>Entries</h2>
            {
                Object.entries(studData).map(e=>(<p key={e}>{e}</p>))
            }
        </div>
    )
}