import React, {useState} from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import SmallCard from "../components/SmallCard";
import { useNavigate } from "react-router-dom";
import '../assets/css/reference.css';

const Reference = () => {
    const [loading, setLoading] = useState(false);
    const [forName, setForName] = useState("Name");
    const [step, setStep] = useState(1);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    let navigate = useNavigate();


    if(loading){
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    return(
        <div style={{position: 'relative'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5rem', padding: '3rem 5rem'}}>
                <Card style={{width: '50%'}}>
                    <p>Progress Bar Here</p>
                    <h2 style={{fontSize: '2rem', textAlign: 'center'}}>You're submitting a reference for {forName}</h2>
                </Card>
                {step === 1 && (
                    <>
                        <Card title={'Enter your Name'} style={{width: '50%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' required style={{marginTop: '3rem', marginBottom: '2rem'}}/>
                            <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' required style={{marginBottom: '3rem'}}/>
                        </Card>
                        <Button text='Continue' onClick={() => setStep(2)}/>
                    </>
                )}
                {step === 2 && (
                    <>
                        <Card title={`How do you know ${forName}?`} style={{width: '50%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <div>
                                <SmallCard>
                                    <p>I am their former supervisor.</p>
                                </SmallCard>
                                <SmallCard>
                                    <p>I am their current supervisor.</p>
                                </SmallCard>
                            </div>
                            
                        </Card>
                        <Button text='Continue'/>
                    </>
                )}
            </div>
            <p style={{position: 'fixed', bottom: 0, width: '100%', textAlign: 'center', padding: '1rem'}}>Powered by <span onClick={() => navigate('/')}>EZRef</span></p>
        </div>
    )
}
export default Reference;