
export function Sidebar(props){
    return(
        <div className="container-fluid" >
            {(props.orientation=="vertical")?
            <header className="d-flex justify-content-between align-items-center p-2 bg-secondary text-white">
                <div className="bi bi-amazon"> Amazon</div>
                <div>
                    <span>Home</span>
                    <span className="mx-3">About</span>
                    <span>Contact</span>
                    <span className="mx-2">About us</span>
                    <span>Services</span>
                </div>
                <div>
                    <button className="btn btn-light">Login</button>
                </div>

            </header>
            :(props.orientation=="horizontal")?
            <header style={{height:'500px',width:'200px'}} className="d-flex flex-column justify-content-between align-items-center p-2 bg-danger text-white">
                <div className="bi bi-amazon"> Amazon</div>
                <div className="list-group">
                    <div className="list-group-item">Home</div>
                    <div className="my-2 list-group-item">About</div>
                    <div className="list-group-item">Contact</div>
                    <div className="my-2 list-group-item">About us</div>
                    <div className="list-group-item">Services</div>
                </div>
                <div>
                    <button className="btn btn-light">Login</button>
                </div>
            </header>:<span></span>}
            
            
        </div>
    )
}