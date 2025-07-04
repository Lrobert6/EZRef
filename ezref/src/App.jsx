import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Wrapper from './pages/Wrapper';
import Home from './pages/Home';
import Register from './pages/Register';
import EmployerRegister from './pages/EmployerRegister';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MyReferences from './pages/MyReferences';
import Account from './pages/Account';
import AddReference from './pages/AddReference';
import Reference from './pages/Reference';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/employerRegister" element={<EmployerRegister/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/myReferences" element={<MyReferences/>}/>
        <Route path="/addReference" element={<AddReference/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/reference" element={<Reference/>}/>
        {/* <Route path="/dashboard" element={<Wrapper><Dashboard/></Wrapper>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
