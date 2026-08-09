import axios, { formToJSON } from "axios"
import { useFormik } from "formik"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export function Login(){
    const navigate=useNavigate()
    const [cookies,setCookie,removeCookie]=useCookies(['username','userid'])
    const formik = useFormik({
        initialValues:{
            user_id:'',
            password:''
        },
        onSubmit:(user)=>{
            axios.get(`http://localhost:3000/users`)
            .then((response)=>{
                let userResult=response.data.find(item=> item.user_id===user.user_id)
                if(userResult){
                    if (userResult.password===user.password){
                        setCookie('username',userResult.user_name),
                        setCookie('userid',userResult.user_id)
                        navigate("/dashboard")
                    }else{
                        alert(`${userResult.user_id} password is wrong`)
                    }
                }else{
                    alert(`${user.user_id} not Register Plz Register then Login`)
                }
            })
        }
    })
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input className="form-control" onChange={formik.handleChange} type="text" name="user_id"/></dd>

                    <dt>Password</dt>
                    <dd><input className="form-control" name="password" onChange={formik.handleChange} type="password"/></dd>
                </dl>
                <button className="btn btn-dark text-white w-100" type="submit">Welcome Back</button>
            </form>
        </div>
    )
}