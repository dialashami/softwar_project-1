import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import StudentHome from './pages/StudentHome';
import HomeTeacher from './pages/HomeTeacher';
import ParentHome from './pages/ParentHome';
import TranierHome from './pages/TranierHome';
import VerifyEmail from './pages/verifemail'; 
import UniversityHome from './pages/UniversityHome';
import PrivateRoute from './components/PrivateRoute';

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
          <Route index element={
            <PrivateRoute>
               <Home />
            </PrivateRoute>
            } />
            <Route path='university' element={
            <PrivateRoute>
                <UniversityHome />
            </PrivateRoute>
          } />  
          <Route path="teacher" element={
            <PrivateRoute>
                <HomeTeacher />
            </PrivateRoute>
          } />

         <Route path="parent" element={
            <PrivateRoute>
                <ParentHome />
            </PrivateRoute>
          } />
          <Route path="tranier" element={
            <PrivateRoute>
                <TranierHome />
            </PrivateRoute>
          } />
          
          {/* <Route path="student" element={<StudentHome />} /> */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;