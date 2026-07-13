import "./login.css"
export function Login(){
    return(
        <div>
            <form className="form-container">
                <h3>User Login</h3>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" /></dd>
                    <dt>Password</dt>
                    <dt><input type="password"/></dt>
                </dl>
                <button>Login</button>
            </form>
        </div>
    )
}