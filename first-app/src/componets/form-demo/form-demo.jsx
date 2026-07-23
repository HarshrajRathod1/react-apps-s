import { useRef, useState } from "react"
import { useFormik } from "formik"
export function FormDemo(){
    function validateUser(dataForm){
            let errors={}
            if(dataForm.User.length===0){
                errors.User="Username Required"
            }else{
                if(dataForm.User.length<4){
                    errors.User="Name too short"
                }
            }

            if(dataForm.Age.length===0){
                errors.Age="Age required"
            }else{
                if(isNaN(dataForm.Age)){
                    errors.Age="Age must be number"
                }
            }

            if(dataForm.City=="-1"){
                errors.City="Select your city"
            }

            if(dataForm.Gender.length===0){
                errors.Gender="select your gender"
            }
            if (dataForm.Mobile.length===10){
                errors.Mobile="mobile required"
            }else{
                if(!dataForm.Mobile.match(/^\+91\d{10}$/)){
                    errors.Mobile="Invalid Mobile"
                }
            }
            return errors
        }
    const formik=useFormik({
        initialValues:{
            User:'',
            Age:'',
            City:'-1',
            Gender:'',
            Mobile:''
        },
        validate:validateUser,
        onSubmit:function (user){
            console.log(user)
        },
    })
    return (
        <div className="container-fluid">
            <h3>User Registration</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="User" onBlur={formik.handleBlur} onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.touched.User && formik.errors.User}</dd>

                    <dt>Age</dt>
                    <dd><input type="text" name="Age" onBlur={formik.handleBlur} onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.touched.Age && formik.errors.Age}</dd>
                    
                    <dt>City</dt>
                    <dd>
                        <select name="City" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                            <option value="-1">None</option>
                            <option value="hyd">Hyd</option>
                            <option value="delhi">Delhi</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.touched.City &&formik.errors.City}</dd>

                    <dt>Gender</dt>
                    <dd><input type="radio" value="male" name="Gender" onBlur={formik.handleBlur} onChange={formik.handleChange}/> Male <span> &nbsp; </span>
                        <input type="radio" value="female" name="Gender" onBlur={formik.handleBlur} onChange={formik.handleChange}/> Female
                    </dd>
                    <dd className="text-danger">{formik.touched.Gender && formik.errors.Gender}</dd>

                    <dt>Mobile</dt>
                    <dd>
                        <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="Mobile" />
                    </dd>
                    <dd className="text-danger">{formik.touched.Mobile && formik.errors.Mobile}</dd>
                </dl>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}