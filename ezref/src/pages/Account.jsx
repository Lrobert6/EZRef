import React from 'react';
import UserNavBar from '../components/UserNavBar';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import '../assets/css/account.css';
import supabase from "../SupabaseClient";

const Account = () => {
    const navigate = useNavigate();

    const signOut = async() =>{
        const {error} = await supabase.auth.signOut();
        if (error) throw error;
        navigate('/');
    }

    return(
        <div>
            <UserNavBar onClick={signOut}/>
            <div style={{display: 'flex', flexDirection: 'column', gap: '3rem', padding: '3rem 5rem'}}>
                <Card title={'Account'}>
                    <p>Account Information</p>
                </Card>
                <Card title={'Settings'}>
                    <p>Account Settings</p>
                </Card>
            </div>
            
        </div>
    )
}

export default Account;