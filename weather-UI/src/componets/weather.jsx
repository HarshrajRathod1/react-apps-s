import { useEffect, useState } from "react"
import axios from 'axios'
export function Weather() {
    const [data, setData] = useState({
        "weather": [{ "description": "", }], "main": {
            "temp": 0, "feels_like": 0,
            "temp_min": 0,
            "temp_max": 0,
            "humidity": 0,
        },
        "wind": {
            "speed": 0,
        },
        "name": "",
    })

    function LoadData(){
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=30690ee1382393774271dcdc3edbe58d")
        .then((response)=>setData(response.data))
        .catch((error)=>console.log(error))
    }
    useEffect(()=>{
        LoadData()
    },[])
    return (
        <div className="container-fluid">
            <header className="d-flex flex-row justify-content-between align-items-center p-2 bg-black text-white fs-5">
                <div><span className="fw-bold bi bi-cloud">HarshrajWeather</span></div>
                <div>
                    <span>Radar</span>
                    <span className="mx-5">Forcast</span>
                    <span>Air Quality</span>
                </div>
                <div className="">
                    <input className="px-3 py-2 rounded-pill" type="text" placeholder="Search cities..."/>
                </div>
                <div>
                    <div><i className="bi bi-bell-fill"></i></div>
                    <h2>hello</h2>
                    <h3 className="bi bi-1-circle"></h3>
                    <span className="bi bi-gear-fill"></span>
                </div>
            </header>
        </div>
    )
}