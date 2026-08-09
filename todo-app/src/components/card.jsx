
export function Card(props){
    return(
        <div className="card text-center" style={{width:"350px",height:"200px"}}>
            <div className="card-body">
              <div className={`fs-2 fw-bold ${props.icon}`}></div>
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}