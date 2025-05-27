import './App.css';
import { useState } from 'react';
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdOutlineHowToReg } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdManageSearch } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";



function App() {
  const [selectedRole, setSelectedRole] = useState('employee');
  return (
    <div className="App">
      <header style={{marginTop: '5rem'}}>
        <h2 style={{fontSize: '5rem'}}>JOB REFERENCES</h2>
        <h2 style={{fontSize: '7rem', marginTop: '-3rem'}}>MADE EASY.</h2>
      </header>
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
      {selectedRole === 'employee' ? (
        <>
          <div style={{marginTop: '5rem'}}>
            <h2 style={{textAlign: 'center'}}>Submit references for your job application in</h2>
            <h2 style={{textAlign: 'center', fontSize: '2rem'}}>3 EASY STEPS</h2>
          </div>
              <div className='large-card' style={{marginTop: '5rem'}}>
                <div>
                  <div style={{display: 'flex', flexDirection: 'row', margin: '1rem'}}>
                    <RiSendPlaneFill color={"#3B413C"} size={"10rem"}/>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <p style={{fontSize: '1.5rem', marginLeft: '1rem', marginRight: '1rem'}}>After creating and verifying your account, send your profile's QR code to former supervisor, community leader or mentor who is willing to give you a reference.</p>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className='large-card' style={{marginTop: '1rem'}}>
                <div>
                  <div style={{display: 'flex', flexDirection: 'row', margin: '1rem'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <p style={{fontSize: '1.5rem', marginLeft: '1rem', marginRight: '1rem'}}>This person will create an account and complete a quick verification process before answering a few questions about you.</p>
                    </div>
                    <MdOutlineHowToReg color={"#3B413C"} size={"10rem"}/>
                  </div>
                </div>
              </div>
              <div className='large-card' style={{marginTop: '1rem'}}>
                <div>
                  <div style={{display: 'flex', flexDirection: 'row', margin: '1rem'}}>
                    <FiShare color={"#3B413C"} size={"10rem"}/>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <p style={{fontSize: '1.5rem', marginLeft: '1rem', marginRight: '1rem'}}>When a prospective employer asks for your references, provide them the link to your account.</p>
                    </div>
                    
                  </div>
                </div>
              </div>
          </>
      ) : (
        <>
          <div style={{marginTop: '5rem'}}>
            <h2 style={{textAlign: 'center'}}>Get information from your applicant's references in</h2>
            <h2 style={{textAlign: 'center', fontSize: '2rem'}}>3 EASY STEPS</h2>
          </div>
              <div className='large-card' style={{marginTop: '5rem'}}>
                <div>
                  <div style={{display: 'flex', flexDirection: 'row', margin: '1rem'}}>
                    <AiOutlineUserAdd color={"#3B413C"} size={"10rem"}/>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <p style={{fontSize: '1.5rem', marginLeft: '1rem', marginRight: '1rem'}}>Direct applicants to create an EZRef account and follow the steps to allow their references to submit information to their profile.</p>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className='large-card' style={{marginTop: '1rem'}}>
                <div>
                  <div style={{display: 'flex', flexDirection: 'row', margin: '1rem'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <p style={{fontSize: '1.5rem', marginLeft: '1rem', marginRight: '1rem'}}>Find your applicants account, or have them send you the link or QR code.</p>
                    </div>
                    <MdManageSearch color={"#3B413C"} size={"10rem"}/>
                  </div>
                </div>
              </div>
              <div className='large-card' style={{marginTop: '1rem'}}>
                <div>
                  <div style={{display: 'flex', flexDirection: 'row', margin: '1rem'}}>
                    <HiOutlineDocumentText color={"#3B413C"} size={"10rem"}/>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <p style={{fontSize: '1.5rem', marginLeft: '1rem', marginRight: '1rem'}}>Read the statements made by the applicants references, who have already had their identities verified by EZRef.</p>
                    </div>
                    
                  </div>
                </div>
              </div>
          </>
      )}
      
    </div>
  );
}

export default App;
