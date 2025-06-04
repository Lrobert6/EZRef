import React from 'react';

const AuthCard = ({children}) => {
    return(
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div className='login-container'>
                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {children}
                </form>
            </div>
        </div>
    )
}

export default AuthCard;