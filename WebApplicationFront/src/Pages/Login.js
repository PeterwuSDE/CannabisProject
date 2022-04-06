import '../css/Login.css';
import "@fontsource/open-sans";
import { Link } from "react-router-dom";

export default function Login() {
    return(
        <div>
            <h1 className="title">DCRP Login</h1>
            <div className="email">
                <p className="emailText">Email</p>
                <input className="emailInput" type="Email"></input>
            </div>
            <div className="password">
                <p className="passwordText">Password</p>
                <input className="passwordInput" type="Password"></input>
            </div>
            <a className="forgetPassword">forget password?</a>
            <Link to="/profilesettings1">
                <button className="loginButton">Login</button>
            </Link>
        </div>
        
    );
}