import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export function FakestoreSearch(){

    const [cookies,setCookie,removeCookie]=useCookies(['username'])
    let navigate=useNavigate()

    function handleSignout(){
        removeCookie('username')
        navigate("/login")
    }

    useEffect(()=>{
        if(!cookies['username']){
            navigate('/login')
        }
    },[cookies])

    return(
        <div>
            <div className="d-flex justify-content-between align-items-center p-2 mt-1 border-1 border-dark">
                <h4>Hello {cookies['username']}</h4>
                <button onClick={handleSignout} className="btn btn-danger p-2"> SignOut</button>
            </div>
            <form action="/result">
                <p>Search Product</p>
                <input type="text" name="search" />
                <button type="submit">Result</button>
            </form>
        </div>
    )
}