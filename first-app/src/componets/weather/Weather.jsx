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
        <div>
            <h2>City Name = {data.name}</h2>
            <ul>
                <li>{data.weather[0].description}</li>
                <li>{data.main.temp}</li>
                <li>{data.main.humidity}</li>
                <li>{data.wind.speed}</li>
            </ul>
        </div>
    )
}