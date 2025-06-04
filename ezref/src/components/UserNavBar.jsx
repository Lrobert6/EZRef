import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import {FaRegUser} from "react-icons/fa";

const UserNavBar = () => {
    let navigate = useNavigate();

    return (
        <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#3B413C', borderBottom: '1px solid #ccc'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <h1 style={{cursor: 'pointer', margin: 0}} onClick={() => navigate('/')}>EZRef</h1>
                <button style={{padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer', border: '1px solid #888', borderRadius: '5px', backgroundColor: 'white'}}>
                    My References
                </button>
            </div>
            <div style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <FaRegUser size={'1.8rem'}/>
                <button>Sign Out</button>
            </div>
        </nav>
    );
}

export default UserNavBar;