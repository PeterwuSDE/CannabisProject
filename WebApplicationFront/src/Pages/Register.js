import {
    Link
  } from "react-router-dom";

export default function Register() {
    return(
        <div>
            <h1>Create your free account</h1>
            <p>Do you already have an account?</p>
            <a>sign in</a>
            <div>
                <p>Email</p>
                <input type="Email"></input>
            </div>
            <div>
                <p>Password</p>
                <input type="Email"></input>
            </div>
            <p>I accept the terms and privacy policy</p>
            {/* for testing, am linking this page to the next page in the profile creation process. 
            Will have to do anyway right? */}
            <Link to="profileSettings1">
                <button>Continue</button>
            </Link>
        </div>
        
    );
}