import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import supabase from "../SupabaseClient";
import UserNavBar from '../components/UserNavBar.jsx';

const Dashboard = () => {
    const navigate = useNavigate();

    const signOut = async() =>{
        const {error} = await supabase.auth.signOut();
        if (error) throw error;
        navigate('/');
    }

    return (
        <div>
            <UserNavBar/>
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}

export default Dashboard;