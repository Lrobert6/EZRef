import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import supabase from "../SupabaseClient";

const Dashboard = () => {
    const navigate = useNavigate();

    const signOut = async() =>{
        const {error} = await supabase.auth.signOut();
        if (error) throw error;
        navigate('/');
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}

export default Dashboard;