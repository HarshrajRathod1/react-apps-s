import axios from "axios"
import { useEffect, useState } from "react"
import './mousedemo.css'
export function Mousedemo(){
    const [mobileImage,setMobileImage]=useState([{image:""}])

    const [mobile,setMobile]=useState(mobileImage[0].image)


    function handleMouseOver(e){
        setMobile(e.target.src)
    }

    function LoadMobiles(){
        axios.get("mobiles.json")
        .then(response=>{
            setMobileImage(response.data)
        })
    }

    useEffect(()=>{
        LoadMobiles()
    },[setMobile])
    return(
        <div className="container-fulid border-bottom pb-5">
            <div className="row mt-2">
                <div className="col-2 border-end d-flex flex-column align-items-center">
                    {
                        mobileImage.map(mobile=>(
                            <img src={mobile.image} onMouseOver={handleMouseOver} className="thumb-nail" width="100" />
                        ))
                    }
                </div>
                <div className="col-10 d-flex justify-content-center align-items-center ">
                    <div>
                        <img src={mobile} width="600"/>
                    </div>
                </div>
            </div>

        </div>
    )
}