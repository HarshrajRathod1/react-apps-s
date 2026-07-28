import { useState } from "react";
import { DataGrid } from "../../controlled-components/datagrid";

export function ControlledDemo(){
    const [product]=useState([{Name:'TV',Price:20000},{Name:'Mobile',Price:15000}])
    const [movies]=useState([{Tilte:'Movie1',ReleaseDate:'2026-07-29',City:'Delhi',Shows:5}])
    return(
        <div >
            <DataGrid theme="table-warning" caption="Prouct Details" data={product}/>

            <DataGrid theme="table-success" caption="Admin Movie Dashboard" data={movies}/>
        </div>
    )
}