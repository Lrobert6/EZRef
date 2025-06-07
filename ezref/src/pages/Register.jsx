import React, {useState} from "react";
import supabase from "../SupabaseClient";
import '../assets/css/registration.css';
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import AuthCard from "../components/AuthCard";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");

        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if (error){
            setMessage(error.message);
            return;
        }

        if (data){
            navigate('/login');
        }

        setEmail("");
        setPassword("");
    }

    return(
        <div className='main'>
            <h1 style={{position: 'absolute'}} onClick={() => navigate('/')}>EZRef</h1>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh'}}>
                    <AuthCard onSubmit={handleSubmit}>
                        <h2>Register</h2>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email Address' required />
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' required />
                        <Button style={{width: '100%', fontSize: '2rem', padding: '1rem'}} text={"Register"} type='submit'/>
                        <div>
                            <p style={{marginBottom: '.5rem'}}>Are you an employer?</p>
                            <Button style={{fontSize: '1rem', padding: '.5rem'}} text={"Employer Registration"} onClick={() => navigate("/employerRegister")}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <p style={{marginBottom: '.5rem'}}>Already have an account?</p>
                            <Button style={{fontSize: '1rem', padding: '.5rem'}} text={"Login"} onClick={() => navigate("/login")}/>
                        </div>
                    </AuthCard>
            </div>
            {message && <p>{message}</p>}
        </div>
    )
}

export default Register;