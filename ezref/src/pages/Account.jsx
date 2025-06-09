import React from 'react';
import UserNavBar from '../components/UserNavBar';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import '../assets/css/account.css';
import supabase from "../SupabaseClient";
import { MdOutlineModeEditOutline } from "react-icons/md";


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
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', padding: '3rem 5rem'}}>
                <Card title={'Profile'} style={{position: 'relative', width: '50%'}}>
                    <MdOutlineModeEditOutline  style={{position: 'absolute', right: 0, top: 0, padding: '2rem'}} color={'#3B413C'} size={'3rem'}/>
                    <table >
                        <tr>
                            <td>First Name<input type='text'/></td>
                            <td>Last Name<input type='text'/></td>
                        </tr>
                        <tr>
                            <td>Date of Birth<input type='date'/></td>
                            <td>Email Address<input type='text'/></td>
                        </tr>
                        
                        <tr>
                            <td>City<input type='text'/></td>
                            <td>State<input type='text'/></td>
                        </tr>
                        <tr>
                            <td>Country<input type='text'/></td>
                            <td>Postal Code<input type='text'/></td>
                        </tr>
                    </table>
                </Card>
                <Card title={'Settings'} style={{position: 'relative', width: '50%'}}>
                    <MdOutlineModeEditOutline  style={{position: 'absolute', right: 0, top: 0, padding: '2rem'}} color={'#3B413C'} size={'3rem'}/>
                    <table>
                        <tr>
                            <td>Public</td>
                            <td>
                                <input></input>
                            </td>
                        </tr>
                    </table>
                </Card>
            </div>
            
        </div>
    )
}

export default Account;