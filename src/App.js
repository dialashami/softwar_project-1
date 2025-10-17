/*import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import StudentHome from './pages/StudentHome';
import ParentHome from './pages/ParentHome';
import TranierHome from './pages/TranierHome';
import VerifyEmail from './pages/verifemail'; 
import UniversityHome from './pages/UniversityHome';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route "/" shows Welcome page *}
        <Route path="/" element={<Welcome />} />
        
        {/* Login route *}
        <Route path="/login" element={<Login />} />
        
        {/* Signup route *}
        <Route path="/signup" element={<SignUp />} />
        {/* Email Verification route *}
        <Route path="/verify-email" element={<VerifyEmail />} />
        
        {/* Home page uses Layout *}
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
          
          {/* <Route path="student" element={<StudentHome />} /> *}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
* ******************************************************************************222222222222222222222222222222222222222222222222222

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import StudentHome from './pages/StudentHome';

import ParentHome from './pages/ParentHome';
import TranierHome from './pages/TranierHome';
import VerifyEmail from './pages/verifemail'; 
import UniversityHome from './pages/UniversityHome';
import PrivateRoute from './components/PrivateRoute';
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route "/" shows ParentHome directly without authentication *}
        <Route path="/" element={<ParentHome />} />
        
        {/* Welcome route - if you still want to keep it *}
        <Route path="/welcome" element={<Welcome />} />
        
        {/* Login route *}
        <Route path="/login" element={<Login />} />
        
        {/* Signup route *}
        <Route path="/signup" element={<SignUp />} />
        
        {/* Email Verification route *}
        <Route path="/verify-email" element={<VerifyEmail />} />
        
        {/* Home page uses Layout *}
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

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333


بدي ياها !!!!! الي تحتت 3 

*/

/** 

// src/App.js
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import StudentHome from './pages/StudentHome';

import ParentHome from './pages/ParentHome';
import TranierHome from './pages/TranierHome';
import VerifyEmail from './pages/verifemail'; 
import UniversityHome from './pages/UniversityHome';
import PrivateRoute from './components/PrivateRoute';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route "/" shows ParentHome directly *}
        <Route path="/" element={
          <div className="parent-home">
            <Sidebar />
            <div className="main-content">
              <ParentHome />
            </div>
          </div>
        } />
        
        {/* Welcome route *}
        <Route path="/welcome" element={<Welcome />} />
        
        {/* Login route *}
        <Route path="/login" element={<Login />} />
        
        {/* Signup route *}
        <Route path="/signup" element={<SignUp />} />
        
        {/* Email Verification route *}
        <Route path="/verify-email" element={<VerifyEmail />} />
        
        {/* Lessons route - هام: هذا الـ Route الجديد *}
        <Route path="/lessons" element={
          <div className="parent-home">
            <Sidebar />
            <div className="main-content">
           
            </div>
          </div>
        } />

        {/* Home page uses Layout *}
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


بدي الي فوق مباشرة 

*/


import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import TeacherHome from './pages/TeacherHome/TeacherHome';
import ParentHome from './pages/ParentHome';
import TranierHome from './pages/TranierHome';
import VerifyEmail from './pages/verifemail'; 
import UniversityHome from './pages/UniversityHome';
import PrivateRoute from './components/PrivateRoute';
import LessonManagement from './pages/TeacherHome/components/LessonManagement';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route "/" shows TeacherHome directly */}
        <Route path="/" element={
          <div className="teacher-home">
            <div className="main-content">
              <TeacherHome />
            </div>
          </div>
        } />
        
        {/* Welcome route */}
        <Route path="/welcome" element={<Welcome />} />
        
        {/* Login route */}
        <Route path="/login" element={<Login />} />
        
        {/* Signup route */}
        <Route path="/signup" element={<SignUp />} />
        
        {/* Email Verification route */}
        <Route path="/verify-email" element={<VerifyEmail />} />
        
        {/* ✅ تم التصحيح: Lessons route يستخدم LessonManagement */}
        <Route path="/lessons" element={
          <div className="teacher-home">
            <div className="main-content">
              <LessonManagement /> {/* ⬅️ أضف هذا السطر */}
            </div>
          </div>
        } />

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
              <TeacherHome />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*
***********************************************44444444 الي فوق عشان تبدا واجهة المعلم  */

