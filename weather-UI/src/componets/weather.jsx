import { useEffect, useState } from "react"
import axios from 'axios'
import moment from "moment"
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
            "deg":0
        },
        "name": "",
    })
    const [now]=useState(new Date())

    const [changeInput,setChangeInput]=useState("hyderabad")
    const [submitCityName,setSubmitCityName]=useState(changeInput)

    function handleSubmitCityName(e){
        setSubmitCityName(changeInput)
    }
    function handleChangeInput(e){
        setChangeInput(e.target.value)
    }

    function LoadData(){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${submitCityName}&units=metric&appid=30690ee1382393774271dcdc3edbe58d`)
        .then((response)=>setData(response.data))
        .catch((error)=>console.log(error))
    }
    useEffect(()=>{
        LoadData()
    },[submitCityName])
    return (
        <div className="container-fulid">
            <header className="d-flex flex-row justify-content-between align-items-center p-2 bg-black text-white fs-5 border border-secondary">
                <span className="fw-bold bi bi-cloud"> &nbsp;HarshrajWeather</span>
                <div>
                    <span>Radar</span>
                    <span className="mx-5">Forcast</span>
                    <span>Air Quality</span>
                </div>
                <div className="">
                    <div className="input-group">
                        <input onChange={handleChangeInput} className="form-control" type="text" placeholder="Search cities..." value={changeInput}/>
                        <span className="bi bi-search p-2 btn btn-warning" onClick={handleSubmitCityName}></span>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center ">
                    <span className="bi bi-bell-fill"></span>
                    <span className="bi bi-gear-fill mx-4"></span>
                    <span className="bi bi-person-circle"></span>
                </div>
            </header>
            
            <main className="row">
                <nav className="col-3 bg-black text-white vh-100 border border-secondary">
                    <div className="bi bi-cloud p-5 fw-bold fs-4 text-center"> Global Weather</div>
                    <div className="mx-4 fs-4 -70">
                        <div className="bi bi-box p-2 border border-secondary rounded bg-secondary"> &nbsp; Dashboard</div>
                        <div className="bi bi-map p-2"> &nbsp; Maps</div>
                        <div className="bi bi-clock-history p-2"> &nbsp; History</div>
                        <div className="bi bi-exclamation-octagon p-2"> &nbsp; Alert</div>
                        <div className="bi bi-gear-fill p-2"> &nbsp; Settings</div>
                    </div>
                </nav>
                <section className="col-9 p-5 bg-black text-white">
                    <div className="d-flex flex-row justify-content-between">
                        <div>
                            <span className="bi bi-cloud fs-3"> CURRENT LOCATION</span>
                            <h1 className="p-2 fw-bold"> {data.name}</h1>
                            <div className="fs-5"> {moment(now).format('dddd DD, MMMM yyyy')} </div>
                        </div>
                        <div className=" fs-3 fw-bold">{data.weather[0].description}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-center gap-4">
                        <div className="border border-secondary px-3 py-5 rounded-5 w-25 mt-5">
                            <div className="bi bi-thermometer fs-6"> Temprature</div>
                            <div className="fs-4 p-2"> {data.main.temp}&deg;C</div>
                        </div>
                        <div className="border border-secondary px-3 py-5 rounded-5 w-25 mt-5">
                            <div className="bi bi-moisture fs-6"> Humidity</div>
                            <div className="fs-4 p-2"> {data.main.humidity}</div>
                        </div>
                        <div className="border border-secondary px-3 py-5 rounded-5 w-25 mt-5">
                            <div className="bi bi-wind fs-6"> Wind</div>
                            <div className="fs-4 p-2"> {data.wind.speed}</div>
                        </div>
                        <div className="border border-secondary px-3 py-5 rounded-5 w-25 mt-5">
                            <div className="bi bi-thermometer fs-6"> FEELS LIKE</div>
                            <div className="fs-4 p-2"> {data.main.feels_like}</div>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    )
}