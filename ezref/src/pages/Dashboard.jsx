import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import supabase from "../SupabaseClient";
import UserNavBar from '../components/UserNavBar.jsx';
import Card from '../components/Card.jsx';

const Dashboard = () => {
    const navigate = useNavigate();

    const signOut = async() =>{
        const {error} = await supabase.auth.signOut();
        if (error) throw error;
        navigate('/');
    }

    return (
        <div>
            <UserNavBar onClick={signOut}/>
            <div style={{flex: '1', display: 'flex', flexDirection: 'row', gap: '5rem', padding: '3rem 5rem'}}>
                <Card title={'Notifications'}>
                    <p>Notifications here</p>
                </Card>
                <Card title={'Profile'}>
                    <p>Profile stuff</p>
                </Card>
            </div>
            
        </div>
    )
}

export default Dashboard;