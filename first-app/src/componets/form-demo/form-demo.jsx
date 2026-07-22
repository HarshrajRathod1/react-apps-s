import { useState } from "react"

export function FormDemo(){
    const [user,setUser]=useState('')
    const [age,setAge]=useState(0)
    function handleUserChange(e){
        setUser(e.target.value)
    }
    function handleAgeChange(e){
        setAge(e.target.value)
    }
    function handleForm(e){
        e.preventDefault()
        console.log({username:user,age:parseInt(age)})
    }
    return (
        <div className="container-fluid">
            <h3>User Registration</h3>
            <form onSubmit={handleForm}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={handleUserChange} name="user"/></dd>
                    <dt>Age</dt>
                    <dd><input type="number" onChange={handleAgeChange} name="age"/></dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}