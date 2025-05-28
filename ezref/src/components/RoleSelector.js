import React from 'react';
import {IoPersonOutline} from "react-icons/io5";
import { LiaBusinessTimeSolid } from 'react-icons/lia';

const RoleSelector = ({selectedRole, setSelectedRole}) => {
    return(
        <div className='split-div' style={{marginTop: '5rem', backgroundColor: 'transparent', borderRadius: '3rem', paddingLeft: '1rem', paddingRight: '1rem'}}>
            <div onClick={() => setSelectedRole('employee')} style={{display: 'flex', flexDirection: 'row', marginRight: '7.5rem', width: '30rem', padding: '1rem', borderRadius: '3rem', backgroundColor: selectedRole === 'employee' ? '#9DB5B2' : 'transparent', boxShadow: '0 4px 8px 0 grey, 0 6px 20px 0 grey'}}>
            <IoPersonOutline color={"#3B413C"} size={"5rem"} style={{paddingRight: '1rem'}}/>
            <div>
                <h3>For Employees</h3>
                <p>Save your references from getting hundreds of calls from prospective employers.</p>
            </div>
            </div>
            <div onClick={() => setSelectedRole('employer')} style={{display: 'flex', flexDirection: 'row', width: '30rem', padding: '1rem', borderRadius: '3rem', backgroundColor: selectedRole === 'employer' ? '#9DB5B2' : 'transparent', boxShadow: '0 4px 8px 0 grey, 0 6px 20px 0 grey'}}>
            <LiaBusinessTimeSolid color={"#3B413C"} size={"5rem"} style={{paddingRight: '1rem'}}/>
            <div>
                <h3>For Employers</h3>
                <p>Stop wasting time calling references that just don't pick up.</p>
            </div>
            </div>
        </div>
    )
}

export default RoleSelector;