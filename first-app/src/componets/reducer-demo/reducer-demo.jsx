import { useReducer } from "react"

let initialState={
    'subscriber':0
}

function reducer(state,action){
    switch(action.type){
        case "subscribe":
            return{subscriber:state.subscriber + 1}
        case "unsubscribe":
            return{subscriber:state.subscriber - 1}
    }
}

export function ReducerDemo(){
    const [state,dispatch]=useReducer(reducer,initialState)

    function handleSubscribe(){
        dispatch({type:'subscribe'})
    }
    function handleUnSubscribe(){
        dispatch({type:'unsubscribe'})
    }
    return(
        <div>
            <h3>Youtube Channel [{state.subscriber}]</h3>
            <button onClick={handleSubscribe} className="btn btn-danger bi bi-bell-fill">Subscribe</button>
            <button onClick={handleUnSubscribe} className="btn btn-dark mx-4 bi bi-bell-slash-fill">UnSubscribe</button>
        </div>
    )
}