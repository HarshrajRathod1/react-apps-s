import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    sharedAppointments: [],
    sharedAppointmentsCount: 0
}

const taskSlicer = createSlice({
    name: 'TaskSlicer',
    initialState,
    reducers: {
        addToShare: (state, action) =>{
            state.sharedAppointments.push(action.payload);
            state.sharedAppointmentsCount = state.sharedAppointments.length;
        }
    }
})

export const { addToShare } = taskSlicer.actions;
export default  taskSlicer.reducer;