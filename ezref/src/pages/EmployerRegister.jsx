import React, {useState} from "react";
import supabase from "../SupabaseClient";
import '../assets/css/registration.css';
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import AuthCard from "../components/AuthCard";

const EmployerRegister = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState("");
    const [accountFirstName, setAccountFirstName] = useState("");
    const [accountLastName, setAccountLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [stage, setStage] = useState(1);

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setMessage("");

    //     const {data, error} = await supabase.auth.signUp({
    //         email: email,
    //         password: password
    //     });

    //     if (error){
    //         setMessage(error.message);
    //         return;
    //     }

    //     if (data){
    //         navigate('/login');
    //     }

    //     setEmail("");
    //     setPassword("");
    // }

    return(
        <div className='main'>
            <h1 style={{position: 'absolute'}} onClick={() => navigate('/')}>EZRef</h1>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh'}}>
                <form autoComplete="off">
                    <AuthCard>
                        <h2>Employer Registration</h2>
                        {stage === 1 && (<>
                            <input onChange={(e) => setCompanyName(e.target.value)} value={companyName} type='text' placeholder='Company Name' required />
                            <input onChange={(e) => setAccountFirstName(e.target.value)} value={accountFirstName} type='text' placeholder='First Name' required />
                            <input onChange={(e) => setAccountLastName(e.target.value)} value={accountLastName} type='text' placeholder='Last Name' required />
                            <Button style={{width: '100%', fontSize: '2rem', padding: '1rem'}} text={"Next"} onClick={() => setStage(2)}/>
                        </>)}
                        {stage === 2 && (<>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Company Email Address' required autoComplete="new-email" />
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' required autoComplete="new-password" />
                            <Button style={{width: '20%', fontSize: '1rem', padding: '1rem'}} text={"Back"} onClick={() => setStage(1)}/>
                            <Button style={{width: '100%', fontSize: '2rem', padding: '1rem'}} text={"Register"} type='submit'/>
                        </>)}
                    </AuthCard>
                </form>
            </div>
            {message && <p>{message}</p>}
        </div>
    )
}

export default EmployerRegister;