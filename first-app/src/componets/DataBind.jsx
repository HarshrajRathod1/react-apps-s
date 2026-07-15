import {  useState } from "react"

export function DataBind(){
    const [studData]=useState({name:"rahul",age:12,course:"react"})
    return(
        <div>
            <h2>Object</h2>
            <p>Name: {studData.name}</p>
            <p>Age: {studData.age}</p>
            <p>Course: {studData.course}</p>
        </div>
    )
}