import { useState } from "react"

export function FormDemo(){
    function handleForm(e){
        e.preventDefault()
        let data=new FormData(e.target)
        console.log({username:data.get("user"),age:data.get("age"),city:data.get("city"),gender:data.get("gender")})
    }
    return (
        <div className="container-fluid">
            <h3>User Registration</h3>
            <form onSubmit={handleForm} method="post">
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="user"/></dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="age"/></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="city">
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" name="gender" value="male"/>
                        Male
                        <input type="radio" name="gender" value="female"/>
                        Female
                    </dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}