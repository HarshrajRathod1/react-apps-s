import axios from "axios"
import { useFormik } from "formik"
import moment from "moment"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export function Dashboard(){
    const navigate=useNavigate()
    const [cookies,setCookie,removeCookie]=useCookies(['username','userid'])
    const [appointments,setAppointments]=useState([{user_id:'',title:'',description:'',id:'',date:''}])

    const newTaskForm=useFormik({
        initialValues:{
            title:'',
            description:'',
            date:'',
            user_id:cookies['userid']
        },
        onSubmit:(appoinment)=>{
            axios.post(`http://localhost:3000/appointments`,appoinment)
            .then(()=>{
                LoadAppointments()
            })
        },
        enableReinitialize:true
    })



    function handleSignout(){
        removeCookie('userid')
        removeCookie('username')
        navigate("/")
    }

    function handleDelete(id){
        if (confirm(`Do you want to delete Appointment`)){
            axios.delete(`http://localhost:3000/appointments/${id}`)
            .then(()=>{
                LoadAppointments()
            })
        } 
    }

    function LoadAppointments(){
        axios.get(`http://localhost:3000/appointments`)
        .then(response=>{
            let userAppointments = response.data.filter(item=> item.user_id===cookies['userid']);
            setAppointments(userAppointments);
        })
    }
    useEffect(()=>{
        LoadAppointments()
    },[cookies,appointments])
    return(
        <div className="row p-2 container-fluid">
            <div className="col-2 bg-light d-flex flex-column justify-content-between" style={{height:"95vh"}}>
                <div className="d-flex flex-column gap-3 mt-3">
                    <div>
                        <div className="bi bi-pencil-square fs-4 fw-bold text-primary"> Todo-App</div>
                        <div className="m-1"><span className="fw-medium">{cookies['username']}</span> Dashboard</div>
                    </div>
                    <div className="mt-5">
                        <button data-bs-target="#newTask" data-bs-toggle="modal" className="bi bi-plus-circle btn btn-dark w-100"> New Task</button>
                        <form onSubmit={newTaskForm.handleSubmit} className="modal fade" id="newTask">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4>New Appointment</h4>
                                    </div>
                                    <div className="modal-body">
                                        <dl>
                                            <dt>Title</dt>
                                            <dd><input type="text" onChange={newTaskForm.handleChange} name="title" className="form-control" /></dd>
                                             <dt>Description</dt>
                                            <dd><textarea rows={4} onChange={newTaskForm.handleChange} cols={40} name="description" className="form-control"></textarea></dd>
                                             <dt>Date</dt>
                                            <dd><input type="date" onChange={newTaskForm.handleChange} name="date" className="form-control" /></dd>
                                        </dl>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" data-bs-dismiss="modal" className="btn btn-primary"> Add</button>
                                        <button type="button" data-bs-dismiss="modal" className="btn btn-danger mx-2">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="bi bi-calendar-date"> Today</div>
                    <div className="bi bi-folder"> Upcoming</div>
                    <div className="bi bi-check-circle"> Completed</div>
                </div>
                <div>
                    <button onClick={handleSignout} className="btn btn-warning w-100 my-2">Sign Out</button>
                </div>
            </div>

            <div className="col-10 px-3">
                <div className="input-group">
                    <input type="text" className="form-control"/>
                    <span className="bi bi-search btn btn-dark"></span>
                </div>
                <div className="mt-5 fs-4 fw-medium"> Your Appointments <hr/></div>

                <div className="d-flex flex-wrap gap-4 p-2">
                    {
                        appointments.map(appointment=>(
                            <div key={appointment.id} className="card p-2" style={{width:"250px"}}>
                                <div className="card-header fs-5 fw-bold">{appointment.title}</div>
                                <div className="card-body">{appointment.description}</div>
                                <div>{moment(appointment.date).format('DD dddd, MMMM YYYY')}</div>
                                <div className="card-footer">
                                    <span className="bi bi-pen-fill btn btn-warning"></span>
                                    <span onClick={()=>handleDelete(appointment.id)} className="mx-3 bi bi-trash btn btn-danger"></span>
                                </div>
                            </div>    
                        ))
                    }
                </div>
            </div>
        </div>
    )
}