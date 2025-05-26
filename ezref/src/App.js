import './App.css';
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import { BsQrCode } from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";
import { TiBusinessCard } from "react-icons/ti";


function App() {
  return (
    <div className="App">
      <header style={{marginTop: '5rem'}}>
        <h2 style={{fontSize: '5rem'}}>JOB REFERENCES</h2>
        <h2 style={{fontSize: '7rem', marginTop: '-3rem'}}>MADE EASY.</h2>
      </header>
      <div className='split-div' style={{marginTop: '5rem', backgroundColor: '#9DB5B2', borderRadius: '3rem', paddingLeft: '1rem', paddingRight: '1rem'}}>
        <div style={{display: 'flex', flexDirection: 'row', marginRight: '7.5rem', width: '30rem'}}>
          <IoPersonOutline color={"#3B413C"} size={"5rem"} style={{paddingRight: '1rem'}}/>
          <div>
            <h3>For Employees</h3>
            <p>Save your references from getting hundreds of calls from prospective employers.</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', width: '30rem'}}>
          <LiaBusinessTimeSolid color={"#3B413C"} size={"5rem"} style={{paddingRight: '1rem'}}/>
          <div>
            <h3>For Employers</h3>
            <p>Stop wasting time calling references that just don't pick up.</p>
          </div>
        </div>
      </div>
      <div style={{marginTop: '5rem'}}>
        <h2 style={{textAlign: 'center'}}>Submit references for your job application in</h2>
        <h2 style={{textAlign: 'center', fontSize: '2rem'}}>3 EASY STEPS</h2>
      </div>
      <div className='large-card' style={{marginTop: '5rem'}}>
        <div>
          <div style={{display: 'flex', flexDirection: 'row', margin: '1rem'}}>
            <BsQrCode color={"#3B413C"} size={"10rem"}/>
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
            <TiBusinessCard color={"#3B413C"} size={"10rem"}/>
          </div>
        </div>
      </div>
      <div className='large-card' style={{marginTop: '1rem'}}>
        <div>
          <div style={{display: 'flex', flexDirection: 'row', margin: '1rem'}}>
            <GrPersonalComputer color={"#3B413C"} size={"10rem"}/>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <p style={{fontSize: '1.5rem', marginLeft: '1rem', marginRight: '1rem'}}>When a prospective employer asks for your references, provide them the link to your account.</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
