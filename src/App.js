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


// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from './pages/Layout';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import SignUp from './pages/SignUp';
// import Welcome from './pages/Welcome';
// import TeacherHome from './pages/TeacherHome/TeacherHome';
// import ParentHome from './pages/ParentHome';
// import TranierHome from './pages/TranierHome';
// import VerifyEmail from './pages/verifemail'; 
// import UniversityHome from './pages/UniversityHome';
// import PrivateRoute from './components/PrivateRoute';
// import LessonManagement from './pages/TeacherHome/components/LessonManagement';
// import AssignmentManagement from './pages/TeacherHome/components/AssignmentManagement';
// import "@fortawesome/fontawesome-free/css/all.min.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Default route "/" shows TeacherHome directly */}
//         <Route path="/" element={
//           <div className="teacher-home">
//             <div className="main-content">
//               <TeacherHome />
//             </div>
//           </div>
//         } />
        
//         {/* Welcome route */}
//         <Route path="/welcome" element={<Welcome />} />
        
//         {/* Login route */}
//         <Route path="/login" element={<Login />} />
        
//         {/* Signup route */}
//         <Route path="/signup" element={<SignUp />} />
        
//         {/* Email Verification route */}
//         <Route path="/verify-email" element={<VerifyEmail />} />
        
//         {/* LessonManagement */}
//         <Route path="/lessons" element={
//           <div className="teacher-home">
//             <div className="main-content">
//               <LessonManagement /> {}
//             </div>
//           </div>
//         } />
//             {/* Assignment*/}
//         <Route path="/Assignments" element={
//           <div className="teacher-home">
//             <div className="main-content">
//               <AssignmentManagement /> {}
//             </div>
//           </div>
//         } />
//         {/* Home page uses Layout */}
//         <Route path="/home" element={<Layout />}>
//           <Route index element={
//             <PrivateRoute>
//               <Home />
//             </PrivateRoute>
//           } />
          
//           <Route path='university' element={
//             <PrivateRoute>
//               <UniversityHome />
//             </PrivateRoute>
//           } />  
          
//           <Route path="teacher" element={
//             <PrivateRoute>
//               <TeacherHome />
//             </PrivateRoute>
//           } />

//           <Route path="parent" element={
//             <PrivateRoute>
//               <ParentHome />
//             </PrivateRoute>
//           } />
          
//           <Route path="tranier" element={
//             <PrivateRoute>
//               <TranierHome />
//             </PrivateRoute>
//           } />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
/*
***********************************************44444444 الي تحت عشان تبدا واجهة المعلم  */
   




//وجب الاعتماد للمعلم 
//      import './App.css'; 
// import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import Layout from './pages/Layout';
// import Login from './pages/Login'; 
// import Home from './pages/Home'; 
// import SignUp from './pages/SignUp'; 
// import Welcome from './pages/Welcome'; 
// import TeacherHome from './pages/TeacherHome/TeacherHome'; 
// import ParentHome from './pages/ParentHome'; 
// import TranierHome from './pages/TranierHome';
// import VerifyEmail from './pages/verifemail';
// import UniversityHome from './pages/UniversityHome';
// import PrivateRoute from './components/PrivateRoute'; 
// import "@fortawesome/fontawesome-free/css/all.min.css";

// function App() { 
//   return ( 
//     <BrowserRouter> 
//       <Routes> 
//         {/* Main Dashboard route */} 
//         <Route path="/" element={
//           <div className="teacher-home">
//             <div className="main-content"> 
//               <TeacherHome /> 
//             </div> 
//           </div> 
//         } /> 
        
//         {/* Welcome route */} 
//         <Route path="/welcome" element={<Welcome />} /> 
        
//         {/* Login route */} 
//         <Route path="/login" element={<Login />} />
        
//         {/* Signup route */} 
//         <Route path="/signup" element={<SignUp />} /> 
        
//         {/* Email Verification route */}
//         <Route path="/verify-email" element={<VerifyEmail />} /> 
        
//         {/* Teacher Routes */}
//         <Route path="/dashboard" element={
//           <div className="teacher-home">
//             <div className="main-content"> 
//               <TeacherHome /> 
//             </div> 
//           </div> 
//         } />
        
//         <Route path="/lessons" element={
//           <div className="teacher-home">
//             <div className="main-content"> 
//               <TeacherHome /> 
//             </div> 
//           </div> 
//         } />
        
//         <Route path="/assignments" element={
//           <div className="teacher-home">
//             <div className="main-content"> 
//               <TeacherHome /> 
//             </div> 
//           </div> 
//         } />
        
      

//         <Route path="/notifications" element={
//           <div className="teacher-home">
//             <div className="main-content"> 
//               <TeacherHome /> 
//             </div> 
//           </div> 
//         } />

//         <Route path="/ai-assistant" element={
//           <div className="teacher-home">
//             <div className="main-content"> 
//               <TeacherHome /> 
//             </div> 
//           </div> 
//         } />

//         <Route path="/account" element={
//           <div className="teacher-home">
//             <div className="main-content"> 
//               <TeacherHome /> 
//             </div> 
//           </div> 
//         } />
        
//         {/* Home page using Layout */}
//         <Route path="/home" element={<Layout />}>
//           <Route index element={ 
//             <PrivateRoute> 
//               <Home /> 
//             </PrivateRoute> 
//           } />
//           <Route path='university' element={ 
//             <PrivateRoute> 
//               <UniversityHome /> 
//             </PrivateRoute> 
//           } /> 
//           <Route path="teacher" element={ 
//             <PrivateRoute> 
//               <TeacherHome /> 
//             </PrivateRoute> 
//           } /> 
//           <Route path="parent" element={ 
//             <PrivateRoute> 
//               <ParentHome /> 
//             </PrivateRoute> 
//           } /> 
//           <Route path="tranier" element={ 
//             <PrivateRoute> 
//               <TranierHome /> 
//             </PrivateRoute> 
//           } />
//         </Route> 

//         {/* Catch all route - redirect to dashboard */}
//         <Route path="*" element={
//           <div className="teacher-home">
//             <div className="main-content"> 
//               <TeacherHome /> 
//             </div> 
//           </div> 
//         } />
//       </Routes> 
//     </BrowserRouter> 
//   ); 
// } 

// export default App;
//وجب الاعتماد الي فوق للمعلم 





// import './App.css'; 
// import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import StudentHome from './pages/StudentHome/StudentHome';
// import './index.css';
// function App() { 
//   return ( 
//     <BrowserRouter> 
//       <Routes> 
//         <Route path="/" element={<StudentHome />} /> 
//         <Route path="/teacher" element={<StudentHome />} />
//         <Route path="*" element={<StudentHome />} />
//       </Routes> 
//     </BrowserRouter> 
//   ); 
// } 

// export default App;



// import './App.css'; 
// import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import TeacherHome from './pages/TeacherHome/TeacherHome';
// import './index.css';
// function App() { 
//   return ( 
//     <BrowserRouter> 
//       <Routes> 
//         <Route path="/" element={<TeacherHome />} /> 
//         <Route path="/teacher" element={<TeacherHome />} />
//         <Route path="*" element={<TeacherHome />} />
//       </Routes> 
//     </BrowserRouter> 
//   ); 
// } 

// export default App;

// الكود الي تحت عشان الويلكوم بيج 

//  import './App.css'; 
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
// import Layout from './pages/Layout';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import SignUp from './pages/SignUp';
// import Welcome from './pages/Welcome';
// import VerifyEmail from './pages/verifemail'; 
// import PrivateRoute from './components/PrivateRoute';
// import './index.css';

// function App() { 
//   return ( 
//     <BrowserRouter> 
//       <Routes> 
//         {/* Redirect root path to welcome page */}
//         <Route path="/" element={<Navigate to="/welcome" replace />} />
        
//         <Route path="/welcome" element={<Welcome />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/verify-email" element={<VerifyEmail />} />
        
//         <Route path="/home" element={<Layout />}>
//           <Route index element={
//             <PrivateRoute>
//                <Home />
//             </PrivateRoute>
//           } />
//         </Route>
//       </Routes> 
//     </BrowserRouter> 
//   ); 
// } 

// export default App;

// الكود الي فوق عشان الويلكوم بيج 



// import './App.css'; 
// import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import TeacherHome from './pages/TeacherHome/TeacherHome';
// import './index.css';
// function App() { 
//   return ( 
//     <BrowserRouter> 
//       <Routes> 
//         <Route path="/" element={<TeacherHome />} /> 
//         <Route path="/teacher" element={<TeacherHome />} />
//         <Route path="*" element={<TeacherHome />} />
//       </Routes> 
//     </BrowserRouter> 
//   ); 
// } export default App;


// import './App.css'; 
// import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import StudentHome from './pages/StudentHome/StudentHome';
// import './index.css';
// function App() { 
//   return ( 
//     <BrowserRouter> 
//       <Routes> 
//         <Route path="/" element={<StudentHome />} /> 
//         <Route path="/teacher" element={<StudentHome />} />
//         <Route path="*" element={<StudentHome />} />
//       </Routes> 
//     </BrowserRouter> 
//   ); 
// } 

// export default App;


import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import ParentHome from './pages/ParentHome/ParentHome';
import './index.css';
function App() { 
  return ( 
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<ParentHome />} /> 
        <Route path="/teacher" element={<ParentHome />} />
        <Route path="*" element={<ParentHome />} />
      </Routes> 
    </BrowserRouter> 
  ); 
} export default App;
