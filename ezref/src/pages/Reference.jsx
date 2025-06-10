import React, {useState} from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import '../assets/css/reference.css';

const Reference = () => {
    const [loading, setLoading] = useState(false);
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
                    <h2 style={{fontSize: '4rem', textAlign: 'center'}}>Hello, Lucas</h2>
                </Card>
                <Card title={'Notifications'} style={{width: '50%'}}>
                    <p>Notifications here</p>
                </Card>
            </div>
            <p style={{position: 'fixed', bottom: 0, width: '100%', textAlign: 'center', padding: '1rem'}}>Powered by <span onClick={() => navigate('/')}>EZRef</span></p>
        </div>
    )
}
export default Reference;