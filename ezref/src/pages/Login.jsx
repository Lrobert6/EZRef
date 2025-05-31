import React, {useState} from "react";
import supabase from "../SupabaseClient";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");

        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error){
            setMessage(error.message);
            return;
        }

        if (data){
            navigate('/dashboard');
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <br/>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email Address' required />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' required />
                <button type='submit'>Log In</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default Login;