import React from 'react';
import UserNavBar from '../components/UserNavBar';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import '../assets/css/addreference.css';
import supabase from "../SupabaseClient";
import { FaArrowCircleLeft } from "react-icons/fa";

const AddReference = () => {
    const navigate = useNavigate();

    const signOut = async() =>{
        const {error} = await supabase.auth.signOut();
        if (error) throw error;
        navigate('/');
    }

    return(
        <div>
            <UserNavBar onClick={signOut}/>
            <div style={{flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', padding: '3rem 5rem 3rem 3rem'}}>
                {/* <div className='back-div'>  
                    <FaArrowCircleLeft className='icon' color={'#3B413C'} size={'7.5rem'} onClick={() => navigate('/myReferences')}/>
                </div> */}
                <Card title={'Add Reference'} style={{minHeight: '81vh', position: 'relative', width: '50%'}}>
                    <p>Add Reference Information</p>
                </Card>
            </div>
            
        </div>
    )
}

export default AddReference;