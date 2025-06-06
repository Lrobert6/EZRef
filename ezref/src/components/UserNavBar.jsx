import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/usernavbar.css';
import {FaRegUser} from "react-icons/fa";

const UserNavBar = ({onClick}) => {
    let navigate = useNavigate();

    return (
        <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#3B413C', borderBottom: '1px solid #ccc'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '4rem'}}>
                <h1 style={{cursor: 'pointer', margin: 0, padding: 0, color: 'white', fontSize: '1.5rem'}} onClick={() => navigate('/dashboard')}>EZRef</h1>
                <h2 style={{cursor: 'pointer', margin: 0, padding: 0, color: 'white', fontSize: '1.5rem'}}>My References</h2>
            </div>
            <div style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2rem'}}>
                <FaRegUser className='icon' size={'1.8rem'} color={'white'}/>
                <h2 style={{cursor: 'pointer', margin: 0, padding: 0, color: 'white', fontSize: '1.5rem'}} onClick={onClick}>Sign Out</h2>
            </div>
        </nav>
    );
}

export default UserNavBar;