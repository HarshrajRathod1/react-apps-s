
export function EventDemo(){
    function handleButton(e,...data){
        let [id,name,city,crs]=data
        console.log(id)
        console.log(name)
        console.log(city[0],city[1])
        console.log(crs.course)
        console.log(e)
    }
    return (
        <div>
            <button onClick={(e)=>handleButton(e,1,"harsh",["alirajpur","dahi"],{"course":"python"})}>Click me!</button>
        </div>
    )
}