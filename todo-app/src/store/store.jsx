import { configureStore } from "@reduxjs/toolkit";
import taskSlicer from '../slicers/task-slicer';


export const store = configureStore({
    reducer : taskSlicer
})