import { useForm } from "react-hook-form"

export function SdemoHookForm(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit((data)=>console.log(data))}>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" name="user" {...register("user")}/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="pwd" {...register("pwd")}/></dd>
                </dl>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}