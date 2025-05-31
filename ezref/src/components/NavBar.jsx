import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { CiLogin } from "react-icons/ci";


const NavBar = () => {
    let navigate = useNavigate();

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <h1 onClick={() => navigate('/')}>EZRef</h1>

                <div onClick={() => navigate('/login')} style={{display: 'flex', flexDirection: 'row'}} className='log-in'>
                    <h1>Log In</h1>
                    <CiLogin size={'2vw'}/>
                </div>
            </div>
            
        </nav>
    );
}

export default NavBar;