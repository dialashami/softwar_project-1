import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import StudentHome from './pages/StudentHome';
import VerifyEmail from './pages/verifemail'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route "/" shows Welcome page */}
        <Route path="/" element={<Welcome />} />
        
        {/* Login route */}
        <Route path="/login" element={<Login />} />
        
        {/* Signup route */}
        <Route path="/signup" element={<SignUp />} />
        {/* Email Verification route */}
        <Route path="/verify-email" element={<VerifyEmail />} />
        
        {/* Home page uses Layout */}
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          { }
          <Route path="student" element={<StudentHome />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;