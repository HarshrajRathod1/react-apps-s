import { createSlice } from "@reduxjs/toolkit"

let initialState={
    SharedAppointments:[],
    SharedAppointmentsCount:0
}

const taskSlicer=createSlice({
    name:"taskSlicer",
    initialState,
    reducers:{
        addToShare:(state,action)=>{
            state.SharedAppointments.push(action.payload)
            state.SharedAppointmentsCount=state.SharedAppointments.length
        }
    }
})

export const {addToShare}=taskSlicer.actions
export default taskSlicer.reducer