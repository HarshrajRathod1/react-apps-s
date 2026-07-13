import "./login.css"
export function Login(){
    return(
        <div>
            <form className="form-container ">
                <h3 className="text-center text-white">User Login</h3>
                <dl>
                    <dt className="form-label text-white">UserName</dt>
                    <dd><input type="text" className="form-control"/></dd>
                    <dt className="form-label text-white">Password</dt>
                    <dt><input type="password" className="form-control"/></dt>
                </dl>
                <button className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    )
}