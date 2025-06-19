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
    const [message, setMessage] = useState('');
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [knowsHow, setKnowsHow] = useState('');
    const [isCurrent, setIsCurrent] = useState(true);
    const [timeKnown, setTimeKnown] = useState('');
    const [knownFrom, setKnownFrom] = useState('');
    const [knownTo, setKnownTo] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyCity, setCompanyCity] = useState('');
    const [companyState, setCompanyState] = useState('');
    const [companyPhone, setCompanyPhone] = useState();

    const [q1, setQ1] = useState('Describe a time where this person had a disagreement with a coworker.');
    const [q1Answer, setQ1Answer] = useState('');
    const [q2, setQ2] = useState('');
    const [q2Answer, setQ2Answer] = useState('');
    const [q3, setQ3] = useState('');
    const [q3Answer, setQ3Answer] = useState('');

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
                {step !== 8 &&(
                    <Card style={{width: '50%'}}>
                        <p>Progress Bar Here</p>
                        <h2 style={{fontSize: '2rem', textAlign: 'center'}}>You're submitting a reference for {forName}</h2>
                    </Card>
                )}
                {step === 1 && (
                    <>
                        <Card title={'Enter your Information'} style={{width: '50%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' required style={{marginTop: '3rem', marginBottom: '2rem'}}/>
                            <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' required style={{marginBottom: '2rem'}}/>
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' required style={{marginBottom: '2rem'}}/>
                            <input type='email' value={email2} onChange={(e) => setEmail2(e.target.value)} placeholder='Confirm Email Address' required style={{marginBottom: '3rem', border: email2 && email!==email2 ? '2px solid red' : ''}}/>
                            {message && (
                                <p>{message}</p>
                            )}
                        </Card>
                        <Button text='Continue' onClick={() => {
                            if(!firstName.trim() || !lastName.trim()){
                                setMessage("Please enter your first and last name");
                                return;
                            }
                            if(!email.trim() || !email2.trim()){
                                setMessage("Please enter your email address");
                                return;
                            }
                            if(email !== email2){
                                setMessage("Emails do not match");
                                return;
                            }
                            setMessage('');
                            setStep(2);
                            

                            }}/>
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
                                <select placeholder='Select an option' onChange={(e) => setTimeKnown(e.target.value)} style={{margin: '1rem 0'}}>
                                    <option disabled hidden>Select an option</option>
                                    <option>0-6 months</option>
                                    <option>6-12 months</option>
                                    <option>1-3 years</option>
                                    <option>3-5 years</option>
                                    <option>5+ years</option>
                                </select>
                                {message && (
                                    <p>{message}</p>
                                )}
                            </Card>
                        ) : 
                        (
                            <Card title={`When were you ${knowsHow==='advisor' ? 'an' : 'a'} ${knowsHow} for ${firstName}?`} style={{width: '50%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <input type='date' value={knownFrom} onChange={(e) => setKnownFrom(e.target.value)} style={{margin: '3rem 0 1rem', padding: '.5rem'}}/>
                                <p>to</p>
                                <input type='date' value={knownTo} onChange={(e) => setKnownTo(e.target.value)} style={{margin: '1rem 0 3rem', padding: '.5rem'}}/>
                                {message && (
                                    <p>{message}</p>
                                )}
                            </Card>
                        )}
                        
                        <Button text='Continue' onClick={() => {
                            if(!isCurrent && !timeKnown){
                                setMessage('Please select an option');
                                return;
                            }
                            if(isCurrent && (!knownFrom || !knownTo)){
                                setMessage('Please select an option');
                                return;
                            }
                            setMessage('');
                            setStep(knowsHow === 'supervisor' ? 4 : 5)
                            }}/>
                    </>
                )}
                {step===4 && (
                    <>
                        {knowsHow==='supervisor' && (
                            <Card title={`Where did you work with ${forName}?`} style={{width: '50%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <input type='text' value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder='Company Name' required style={{marginTop: '2rem', marginBottom: '2rem'}}/>
                                <input type='text' value={companyCity} onChange={(e) => setCompanyCity(e.target.value)} placeholder='City' required style={{marginTop: '2rem', marginBottom: '2rem'}}/>
                                <input type='text' value={companyState} onChange={(e) => setCompanyState(e.target.value)} placeholder='State/Province' required style={{marginTop: '2rem', marginBottom: '2rem'}}/>
                                <input type='tel' value={companyPhone} onChange={(e) => setCompanyPhone(e.target.value)} placeholder='Company Phone' style={{marginTop: '2rem', marginBottom: '2rem'}}/>
                                {message && (
                                    <p>{message}</p>
                                )}
                            </Card>
                        )}
                        
                        <Button text='Continue' onClick={() => {
                            if(!companyName.trim() || !companyCity.trim() || !companyState.trim() || !companyPhone.trim()){
                                setMessage('Company details are required');
                                return;
                            }
                            setMessage('');
                            setStep(5)
                            }}/>
                    </>
                )}
                {step===5 && (
                    <>
                        <Card title={q1} style={{width: '50%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <textarea value={q1Answer} onChange={(e) => setQ1Answer(e.target.value)} required placeholder="Please answer here" style={{width: '30rem', height: '15rem', resize: 'none', padding: '1rem', margin: '2rem 0'}}/>
                            {message && (
                                <p>{message}</p>
                            )}
                        </Card>
                        <Button text='Continue' onClick={() => {
                            if(!q1Answer.trim()){
                                setMessage('Answer this question to continue');
                                return;
                            }
                            setMessage('');
                            setStep(6)
                            }}/>
                    </>
                )}
                {step===6 && (
                    <>
                        <Card title={q2} style={{width: '50%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <textarea value={q2Answer} onChange={(e) => setQ2Answer(e.target.value)} required placeholder="Please answer here" style={{width: '30rem', height: '15rem', resize: 'none', padding: '1rem', margin: '2rem 0'}}/>
                            {message && (
                                    <p>{message}</p>
                                )}
                        </Card>
                        <Button text='Continue' onClick={() => {
                            if(!q2Answer.trim()){
                                setMessage('Answer this question to continue');
                                return;
                            }
                            setMessage('');
                            setStep(7)
                        }}/>
                    </>
                )}
                {step===7 && (
                    <>
                        <Card title={q3} style={{width: '50%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <textarea value={q3Answer} onChange={(e) => setQ3Answer(e.target.value)} required placeholder="Please answer here" style={{width: '30rem', height: '15rem', resize: 'none', padding: '1rem', margin: '2rem 0'}}/>
                            {message && (
                                <p>{message}</p>
                            )}
                        </Card>
                        <Button text='Continue' onClick={() => {
                            if(!q3Answer.trim()){
                                setMessage('Answer this question to continue');
                                return;
                            }
                            setMessage('');
                            setStep(8)
                            }}/>
                    </>
                )}
                {step===8 && (
                    <>
                        <Card title={'Review your Reference'} style={{width: '50%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}/>
                        <Card style={{width: '50%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <h4>Name</h4>
                            <p style={{marginLeft: '1rem'}}>{firstName} {lastName}</p>
                            <h4>Email Address</h4>
                            <p style={{marginLeft: '1rem'}}>{email}</p>
                            <h4>Relationship to {forName}</h4>
                            <p style={{marginLeft: '1rem'}}>{isCurrent ? 'Current' : 'Former'} {knowsHow}</p>
                            <h4>Time you've known {forName}</h4>
                            <p style={{marginLeft: '1rem'}}>{isCurrent ? timeKnown : `${knownFrom} - ${knownTo}`}</p>
                        </Card>
                    </>
                )}
            </div>
            <p style={{position: 'fixed', bottom: 0, width: '100%', textAlign: 'center', padding: '1rem'}}>Powered by <span onClick={() => navigate('/')}>EZRef</span></p>
        </div>
    )
}
export default Reference;