import React, {useState} from "react";
import '../App.css';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    return(
        <div>
            <h1>Register</h1>
            <br/>
            <form>
                <input type="email" placeholder="Email Address"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;