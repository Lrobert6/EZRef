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
    const [knowsHow, setKnowsHow] = useState('');
    const [isCurrent, setIsCurrent] = useState(true);
    const [timeKnown, setTimeKnown] = useState('');
    const [knownFrom, setKnownFrom] = useState('');
    const [knownTo, setKnownTo] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyCity, setCompanyCity] = useState('');
    const [companyState, setCompanyState] = useState('');
    const [companyPhone, setCompanyPhone] = useState();

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
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div>
                                    <SmallCard onClick={() => {setKnowsHow('supervisor');setIsCurrent(false);setStep(3)}}>
                                        <p>I am their former supervisor.</p>
                                    </SmallCard>
                                    <SmallCard onClick={() => {setKnowsHow('supervisor');setIsCurrent(true);setStep(3)}}>
                                        <p>I am their current supervisor.</p>
                                    </SmallCard>
                                    <SmallCard onClick={() => {setKnowsHow('community leader');setIsCurrent(false);setStep(3)}}>
                                        <p>I am their former community leader.</p>
                                    </SmallCard>
                                    <SmallCard onClick={() => {setKnowsHow('community leader');setIsCurrent(true);setStep(3)}}>
                                        <p>I am their current community leader.</p>
                                    </SmallCard>
                                    <SmallCard onClick={() => {setKnowsHow('religious leader');setIsCurrent(false);setStep(3)}}>
                                        <p>I am their former religious leader.</p>
                                    </SmallCard>
                                    <SmallCard onClick={() => {setKnowsHow('religious leader');setIsCurrent(true);setStep(3)}}>
                                        <p>I am their current religious leader.</p>
                                    </SmallCard>
                                </div>
                                <div>
                                    <SmallCard onClick={() => {setKnowsHow('teacher');setIsCurrent(false);setStep(3)}}>
                                        <p>I am their former teacher.</p>
                                    </SmallCard>
                                    <SmallCard onClick={() => {setKnowsHow('teacher');setIsCurrent(true);setStep(3)}}>
                                        <p>I am their current teacher.</p>
                                    </SmallCard>
                                    <SmallCard onClick={() => {setKnowsHow('mentor');setIsCurrent(false);setStep(3)}}>
                                        <p>I am their former mentor.</p>
                                    </SmallCard>
                                    <SmallCard onClick={() => {setKnowsHow('mentor');setIsCurrent(true);setStep(3)}}>
                                        <p>I am their current mentor.</p>
                                    </SmallCard>
                                    <SmallCard onClick={() => {setKnowsHow('advisor');setIsCurrent(false);setStep(3)}}>
                                        <p>I am their former advisor.</p>
                                    </SmallCard>
                                    <SmallCard onClick={() => {setKnowsHow('advisor');setIsCurrent(true);setStep(3)}}>
                                        <p>I am their current advisor.</p>
                                    </SmallCard>
                                </div>
                                
                            </div>
                            
                        </Card>
                    </>
                )}
                {step === 3 && (
                    <>
                        {isCurrent===false ? (
                            <Card title={`How long have you been ${knowsHow==='advisor' ? 'an' : 'a'} ${knowsHow} for ${forName}?`} style={{width: '50%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <select placeholder='Select an option' style={{margin: '1rem 0'}}>
                                    <option disabled hidden>Select an option</option>
                                    <option>0-6 months</option>
                                    <option>6-12 months</option>
                                    <option>1-3 years</option>
                                    <option>3-5 years</option>
                                    <option>5+ years</option>
                                </select>
                            </Card>
                        ) : 
                        (
                            <Card title={`When were you ${knowsHow==='advisor' ? 'an' : 'a'} ${knowsHow} for ${firstName}?`} style={{width: '50%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <input type='date' value={knownFrom} onChange={(e) => setKnownFrom(e.target.value)} style={{margin: '3rem 0 1rem', padding: '.5rem'}}/>
                                <p>to</p>
                                <input type='date' value={knownTo} onChange={(e) => setKnownTo(e.target.value)} style={{margin: '1rem 0 3rem', padding: '.5rem'}}/>
                            </Card>
                        )}
                        
                        <Button text='Continue' onClick={() => setStep(4)}/>
                    </>
                )}
                {step===4 && (
                    <>
                        {knowsHow==='supervisor' && (
                            <Card title={`Where did you work with ${forName}?`} style={{width: '50%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <input type='text' value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder='Company Name' required style={{marginTop: '3rem', marginBottom: '2rem'}}/>
                                <input type='text' value={companyCity} onChange={(e) => setCompanyCity(e.target.value)} placeholder='City' required style={{marginTop: '3rem', marginBottom: '2rem'}}/>
                                <input type='text' value={companyState} onChange={(e) => setCompanyState(e.target.value)} placeholder='State/Province' required style={{marginTop: '3rem', marginBottom: '2rem'}}/>
                                <input type='tel' value={companyPhone} onChange={(e) => setCompanyPhone(e.target.value)} placeholder='Company Phone' style={{marginTop: '3rem', marginBottom: '2rem'}}/>
                            </Card>
                        )}
                        
                        <Button text='Continue' onClick={() => setStep(5)}/>
                    </>
                )}
            </div>
            <p style={{position: 'fixed', bottom: 0, width: '100%', textAlign: 'center', padding: '1rem'}}>Powered by <span onClick={() => navigate('/')}>EZRef</span></p>
        </div>
    )
}
export default Reference;