import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import supabase from "../SupabaseClient";
import UserNavBar from '../components/UserNavBar.jsx';
import Card from '../components/Card.jsx';
import { MdOutlineModeEditOutline } from "react-icons/md";


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
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5rem', padding: '3rem 5rem'}}>
                <Card style={{width: '50%'}}>
                    <h2 style={{fontSize: '4rem', textAlign: 'center'}}>Hello, Lucas</h2>
                </Card>
                <Card title={'Notifications'} style={{width: '50%'}}>
                    <p>Notifications here</p>
                </Card>
            </div>
            
        </div>
    )
}

export default Dashboard;