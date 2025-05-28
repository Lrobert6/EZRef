import '../App.css';
import { useState } from 'react';
import RoleSelector from '../components/RoleSelector';
import StepsSection from '../components/StepsSection';

const Home = () => {
  const [selectedRole, setSelectedRole] = useState('employee');
  return (
    <div className="App">
      <header style={{marginTop: '5rem'}}>
        <h2 style={{fontSize: '5rem'}}>JOB REFERENCES</h2>
        <h2 style={{fontSize: '7rem', marginTop: '-3rem'}}>MADE EASY.</h2>
      </header>
      <RoleSelector selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>
      <StepsSection role={selectedRole}/>
    </div>
  );
}

export default Home;
