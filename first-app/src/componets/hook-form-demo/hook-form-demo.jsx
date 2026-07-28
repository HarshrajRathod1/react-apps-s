import { useForm } from "react-hook-form"
import { Navbar } from "../../controlled-components/navbar"

export function HookFormDemo(){
    const{register,handleSubmit,formState:{errors}}=useForm()
    function submit(data){
        console.log(data)
    }
    return(
        <div className="container-fluid">
            <Navbar theme="bg-dark text-white" brandIcon="bi bi-cloud" brandTitle=" Weather App" menuItems={["Home","City", "Today","Last Week"]} searchString="eg: city, country, place" btnColor="btn btn-light"/>
            <form onSubmit={handleSubmit(submit)}>

            <Navbar theme="bg-danger text-white" brandIcon="bi bi-fork-knife" btnColor="btn btn-dark" brandTitle=" Food Delivery" searchString="eg: restaurent, recipes, city" menuItems={['Trending','Most Ordered','10 Min Deliver']} />
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="Name"{...register("Name",{required:true,minLength:4})}/></dd>
                    {(errors.Name?.type==="required")?<span className="text-danger">Name Required</span>:<span></span>}
                    {(errors.Name?.type==="minLength")?<span className="text-danger">Name too Short</span>:<span></span>}

                    <dt>Age</dt>
                    <dd><input type="number" name="Age" {...register("Age",{required:true,min:18,max:60})}/></dd>
                    {(errors.Age?.type==="required")?<span className="text-danger">Age Required</span>:<span></span>}
                    {(errors.Age?.type==="min")?<span className="text-danger">Age 18+</span>:<span></span>}
                    {(errors.Age?.type==="max")?<span className="text-danger">Age 60-</span>:<span></span>}
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}