import React from 'react';
import UserNavBar from '../components/UserNavBar';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import '../assets/css/myreferences.css';
import supabase from "../SupabaseClient";
import { IoIosAddCircleOutline } from "react-icons/io";

const MyReferences = () => {
    const navigate = useNavigate();

    const signOut = async() =>{
        const {error} = await supabase.auth.signOut();
        if (error) throw error;
        navigate('/');
    }

    return(
        <div>
            <UserNavBar onClick={signOut}/>
            <div style={{display: 'flex', flexDirection: 'row', gap: '5rem', padding: '3rem 5rem'}}>
                <Card title={'References'} style={{height: '70vh'}}>
                    <p>Your references will appear here.</p>
                    <div className='add-div' style={{}}>  
                        <IoIosAddCircleOutline className='icon' color={'white'} size={'7.5rem'}/>
                    </div>
                </Card>
            </div>
            
        </div>
    )
}

export default MyReferences;