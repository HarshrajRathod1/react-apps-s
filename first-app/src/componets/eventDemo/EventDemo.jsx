import { useState } from "react"

export function EventDemo(){
    const [name,setName]=useState('')
    function handleChange(e){
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        alert('Form Submitted')
        setName('')
    }
    return (
        <div className="container-fluid m-5">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} value={name}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}