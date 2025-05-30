import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import RoleSelector from '../components/RoleSelector';
import StepsSection from '../components/StepsSection';
import Button from '../components/Button';

const Home = () => {
  let navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('employee');
  return (
    <div className="App">
      <NavBar/>
      <header style={{marginTop: '5rem'}}>
        <h2 style={{fontSize: '5rem'}}>JOB REFERENCES</h2>
        <h2 style={{fontSize: '7rem', marginTop: '-3rem'}}>MADE EASY.</h2>
      </header>
      <RoleSelector selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>
      <StepsSection role={selectedRole}/>
      <Button style={{marginTop: '5rem', marginBottom: '5rem'}} text={"Get Started"} onClick={() => navigate('/register')}/>
    </div>
  );
}

export default Home;
