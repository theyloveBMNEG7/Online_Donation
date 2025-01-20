import { Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import './index.css';
import Signup from './Auth/Signup';
import ForgotPassword from './Auth/ForgotPassword';
import ResetPassword from './Auth/ResetPassword';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <Routes>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='forgotpassword' element={<ForgotPassword/>} />
        <Route path='resetpassword' element={<ResetPassword/>} />
      </Routes>
    </div>
  );
};

export default App;