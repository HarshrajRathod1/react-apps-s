import axios from "axios"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Register(){
    const navigate=useNavigate()
    const formik=useFormik({
        initialValues:{
            user_id:'',
            user_name:'',
            email:'',
            password:''
        },
        onSubmit:(user)=>{
            axios.post(`http://localhost:3000/users`,user)
            .then(()=>{
                alert(`${user.user_name} register successfully`)
            })
        }
    })
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User ID</dt>
                    <dd><input className="form-control" onChange={formik.handleChange} name="user_id" type="text" /></dd>

                    <dt>User Name</dt>
                    <dd><input className="form-control" onChange={formik.handleChange} name="user_name" type="text" /></dd>

                    <dt>Email</dt>
                    <dd><input className="form-control" onChange={formik.handleChange} name="email" type="email" /></dd>

                    <dt>Password</dt>
                    <dd><input className="form-control" onChange={formik.handleChange} name="password" type="password" /></dd>
                </dl>
                <button className="btn btn-dark text-white w-100" type="submit">Create Account</button>
            </form>
        </div>
    )
}