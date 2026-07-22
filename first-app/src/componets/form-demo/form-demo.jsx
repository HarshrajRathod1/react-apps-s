import { useRef, useState } from "react"

export function FormDemo(){
    let userRef=useRef('')
    let ageRef=useRef('')
    let cityRef=useRef('')
    let genderRef=useRef('')
    function handleForm(e){
        e.preventDefault()
        console.log({username:userRef.current.value,age:ageRef.current.value,city:cityRef.current.value,gender:genderRef.current.value})
    }
    return (
        <div className="container-fluid">
            <h3>User Registration</h3>
            <form onSubmit={handleForm}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="user" ref={userRef}/></dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="age" ref={ageRef}/></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="city" ref={cityRef}>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" name="gender" value="male" ref={genderRef}/>
                        Male
                        <input type="radio" name="gender" value="female" ref={genderRef}/>
                        Female
                    </dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}