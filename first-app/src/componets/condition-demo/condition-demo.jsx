import { useState } from "react"
import { Login } from "../login/login"
import { FakestoreIndex } from "../fakestore/fakestore-index"
import {FormikDemo} from "../formik-demo/formik-demo"

export function ConditionDemo(){

    const [display,setDisplay]=useState('')

    function handleClick(e){
        switch(e.target.name){
            case 'login':
                setDisplay(<FormikDemo/>)
                break;
            case 'shopping':
                setDisplay(<FakestoreIndex  />)
                break;
        }
    }
    return(
        <div>
            <h2>Condition-Demo</h2>
            <button onClick={handleClick} name="login">Login</button>
            &nbsp;&nbsp;
            <button onClick={handleClick} name="shopping">Shopping</button>
            <hr></hr>
            {display}
        </div>
    )
}