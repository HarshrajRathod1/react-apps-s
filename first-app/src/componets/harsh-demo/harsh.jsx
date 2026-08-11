import { useCaptcha } from "../../hooks/captcha"

export function Harsh(){
    const code=useCaptcha()
    return(
        <div className="container-fluid">
            <form className="w-25">
                <h3 className="text-center">User Login</h3>
                <dl>
                    <dt className="form-label">UserName</dt>
                    <dd><input type="text" className="form-control"/></dd>
                    <dt className="form-label">Password</dt>
                    <dt><input type="password" className="form-control"/></dt>
                    <dt>Captcha</dt>
                    <dd>{code}</dd>
                </dl>
                <button className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    )
} 