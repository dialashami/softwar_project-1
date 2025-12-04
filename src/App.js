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


// import './App.css'; 
// import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import ParentHome from './pages/ParentHome/ParentHome';
// import './index.css';
// function App() { 
//   return ( 
//     <BrowserRouter> 
//       <Routes> 
//         <Route path="/" element={<ParentHome />} /> 
//         <Route path="/teacher" element={<ParentHome />} />
//         <Route path="*" element={<ParentHome />} />
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




// import './App.css'; 
// import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import { Admin } from './pages/Admin/Admin';
// import './index.css';

// function App() { 
//   return ( 
//     <BrowserRouter> 
//       <Routes> 
//         <Route path="/" element={<Admin />} /> 
//         <Route path="/admin" element={<Admin />} />
//         <Route path="*" element={<Admin />} />
//       </Routes> 
//     </BrowserRouter> 
//   ); 
// } 

// export default App;




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





// import './App.css'; 
// import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import { Admin } from './pages/Admin/Admin';
// import './index.css';

// function App() { 
//   return ( 
//     <BrowserRouter> 
//       <Routes> 
//         <Route path="/" element={<Admin />} /> 
//         <Route path="/admin" element={<Admin />} />
//         <Route path="*" element={<Admin />} />
//       </Routes> 
//     </BrowserRouter> 
//   ); 
// } 

// export default App;



// import './App.css'; 
// import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import ParentHome from './pages/ParentHome/ParentHome';
// import './index.css';
// function App() { 
//   return ( 
//     <BrowserRouter> 
//       <Routes> 
//         <Route path="/" element={<ParentHome />} /> 
//         <Route path="/teacher" element={<ParentHome />} />
//         <Route path="*" element={<ParentHome />} />
//       </Routes> 
//     </BrowserRouter> 
//   ); 
// } export default App;



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



// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TeacherHome from './pages/TeacherHome/TeacherHome';
// import LessonVideoEditor from './pages/TeacherHome/components/LessonVideoEditor'; 
// // ✅ استيراد صفحة الفيديوهات
// import './index.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* صفحة الهوم تبعت المعلم */}
//         <Route path="/" element={<TeacherHome />} />
//         <Route path="/teacher" element={<TeacherHome />} />

//         {/* ✅ صفحة إدارة فيديوهات الدرس */}
//         <Route path="/lessons/:lessonId" element={<LessonVideoEditor />} />

//         {/* أي مسار غلط يرجع على الهوم */}
//         <Route path="*" element={<TeacherHome />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




//كود عبدالرحمن 


// import './App.css';
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Layout from './pages/Layout';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import SignUp from './pages/SignUp';
// import Welcome from './pages/Welcome';
// import VerifyEmail from './pages/verifemail';
// import StudentHome from './pages/StudentHome/StudentHome';
// import ParentHome from './pages/ParentHome/ParentHome';
// import TranierHome from './pages/TranierHome';
// import TeacherHome from './pages/TeacherHome/TeacherHome';
// import UniversityHome from './pages/UniversityHome';
// import LessonManagement from './pages/TeacherHome/components/LessonManagement';
// import AssignmentManagement from './pages/TeacherHome/components/AssignmentManagement';
// import LessonVideoEditor from './pages/TeacherHome/components/LessonVideoEditor';
// import PrivateRoute from './components/PrivateRoute';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// // import Sidebar from './components/Sidebar';
// import './index.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* ================================== */}
//         {/* Default route "/" - redirect to Welcome */}
//         <Route path="/" element={<Navigate to="/welcome" replace />} />

//         {/* Welcome route - using simple Welcome version */}
//         <Route path="/welcome" element={<Welcome />} />

//         {/* Authentication */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/verify-email" element={<VerifyEmail />} />

//         {/* ================================== */}
//         {/* Teacher pages */}
//         <Route path="/teacher" element={
//           <div className="teacher-home">
//             <div className="main-content">
//               <TeacherHome />
//             </div>
//           </div>
//         } />

//         <Route path="/lessons" element={
//           <div className="teacher-home">
//             <div className="main-content">
//               <LessonManagement />
//             </div>
//           </div>
//         } />

//         <Route path="/assignments" element={
//           <div className="teacher-home">
//             <div className="main-content">
//               <AssignmentManagement />
//             </div>
//           </div>
//         } />

//         <Route path="/lessons/:lessonId" element={
//           <div className="teacher-home">
//             <div className="main-content">
//               <LessonVideoEditor />
//             </div>
//           </div>
//         } />

//         {/* ================================== */}
//         {/* Parent Home with Sidebar (optional) */}
//         {/* <Route path="/parent" element={
//           <div className="parent-home">
//             <Sidebar />
//             <div className="main-content">
//               <ParentHome />
//             </div>
//           </div>
//         } /> */}

//         {/* Student Home */}
//         <Route path="/student" element={<StudentHome />} />

//         {/* Tranier Home */}
//         <Route path="/tranier" element={<TranierHome />} />

//         {/* ================================== */}
//         {/* General Home using Layout and PrivateRoute */}
//         <Route path="/home" element={<Layout />}>
//           <Route index element={
//             <PrivateRoute>
//               <Home />
//             </PrivateRoute>
//           } />
//           <Route path="university" element={
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

//         {/* ================================== */}
//         {/* Catch-all route redirects to Welcome */}
//         <Route path="*" element={<Navigate to="/welcome" replace />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;








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

 



// هاد نوعا ما شغال 

// import './App.css'; 
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
// import Layout from './pages/Layout';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import SignUp from './pages/SignUp';
// import Welcome from './pages/Welcome';
// import VerifyEmail from './pages/verifemail'; 
// import PrivateRoute from './components/PrivateRoute';
// import StudentHome from './pages/StudentHome/StudentHome'; // 👈 مهم جدًا
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

//         {/* كل الداشبورد تحت /home */}
//         <Route path="/home" element={<Layout />}>
//           {/* الصفحة الافتراضية / للأدوار اللي رايحين على /home مباشرة */}
//           <Route
//             index
//             element={
//               <PrivateRoute>
//                 <Home />
//               </PrivateRoute>
//             }
//           />

//           {/* 👇 جامعي: /home/university  */}
//           <Route
//             path="university"
//             element={
//               <PrivateRoute>
//                 <StudentHome />   {/* صفحة الطالب الجامعي */}
//               </PrivateRoute>
//             }
//           />

//           {/* 👇 معلم: /home/teacher */}
//           <Route
//             path="teacher"
//             element={
//               <PrivateRoute>
//                 <Home />  {/* مؤقتًا خليها نفس الهوم، أو حطي TeacherHome لو عندك */}
//               </PrivateRoute>
//             }
//           />

//           {/* 👇 متدرب: /home/tranier (نفس اللي كاتبتها في navigate) */}
//           <Route
//             path="tranier"
//             element={
//               <PrivateRoute>
//                 <Home />  {/* برضه مؤقتًا، أو غيّريها لصفحة المتدرب */}
//               </PrivateRoute>
//             }
//           />
//         </Route>
//       </Routes> 
//     </BrowserRouter> 
//   ); 
// } 

// export default App;

//  الي تحت شغال صح مية مية للستيودانت 

// import './App.css'; 
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
// import Layout from './pages/Layout';
// import Login from './pages/Login';
 
// import SignUp from './pages/SignUp';
// import Welcome from './pages/Welcome';
// import VerifyEmail from './pages/verifemail'; 
// import PrivateRoute from './components/PrivateRoute';
// import StudentHome from './pages/StudentHome/StudentHome'; 
// import './index.css';

// function App() { 
//   return ( 
//     <BrowserRouter> 
//       <Routes> 
//         {/* خَلّي صفحة Welcome هي الصفحة الرئيسية مباشرة */}
//         <Route path="/" element={<Welcome />} />

//         {/* لو حدا راح على /welcome خلّيه برضه يفتح Welcome (alias) */}
//         <Route path="/welcome" element={<Welcome />} />

//         {/* Auth pages */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/verify-email" element={<VerifyEmail />} />

//         {/* كل الداشبورد تحت /home */}
//         <Route path="/home" element={<Layout />}>
//           {/* الصفحة الافتراضية / للأدوار اللي رايحين على /home مباشرة (school student, parent, …) */}
//           <Route
//             index
//             element={
//               <PrivateRoute>
//                 <StudentHome />
//               </PrivateRoute>
//             }
//           />

//           {/* 👇 طالب جامعي: /home/university */}
//           <Route
//             // path="university"
//             element={
//               <PrivateRoute>
//                 <StudentHome />   {/* صفحة الطالب الجامعي */}
//               </PrivateRoute>
//             }
//           />
 
//         </Route>

//         {/* أي راوت غلط → رجّعيه على الصفحة الرئيسية */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes> 
//     </BrowserRouter> 
//   ); 
// } 

// export default App;

// هاد شغال مية مية للمعلم 

//  import './App.css'; 
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
// import Layout from './pages/Layout';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import Welcome from './pages/Welcome';
// import VerifyEmail from './pages/verifemail'; 
// import PrivateRoute from './components/PrivateRoute';
// import TeacherHome from './pages/TeacherHome/TeacherHome';
// import './index.css';

// function App() { 
//   return ( 
//     <BrowserRouter> 
//       <Routes> 
//         {/* الصفحة الرئيسية = Welcome */}
//         <Route path="/" element={<Welcome />} />
//         <Route path="/welcome" element={<Welcome />} />

//         {/* صفحات الأوث */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/verify-email" element={<VerifyEmail />} />

//         {/* كل الداشبورد تحت /home */}
//         <Route path="/home" element={<Layout />}>
//           {/* index → حاليًا خليها TeacherHome لو بدك المعلم يكون الافتراضي */}
//           <Route
//             index
//             element={
//               <PrivateRoute>
//                 <TeacherHome />
//               </PrivateRoute>
//             }
//           />

//           {/* صفحة المعلم بشكل صريح: /home/teacher */}
//           <Route
//             path="teacher"
//             element={
//               <PrivateRoute>
//                 <TeacherHome />
//               </PrivateRoute>
//             }
//           />
//         </Route>

//         {/* أي حدا يكتب /teacher → حوّليه لـ /home/teacher */}
//         <Route path="/teacher" element={<Navigate to="/home/teacher" replace />} />

//         {/* أي مسار غلط → رجّعيه عالـ Welcome */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes> 
//     </BrowserRouter> 
//   ); 
// } 

// export default App;


import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from './pages/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import VerifyEmail from './pages/verifemail';
import PrivateRoute from './components/PrivateRoute';

import StudentHome from './pages/StudentHome/StudentHome';
import TeacherHome from './pages/TeacherHome/TeacherHome';
import ParentHome from './pages/ParentHome/ParentHome';   // 👈 استدعاء الأهل

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* الصفحة الرئيسية = Welcome */}
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />

        {/* صفحات الأوث */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        {/* كل الداشبورد تحت /home */}
        <Route path="/home" element={<Layout />}>
          {/* الافتراضي (/home) → StudentHome (طالب مدرسة مثلاً) */}
          <Route
                index
            element={
              <PrivateRoute>
                <StudentHome />
              </PrivateRoute>
            }
          />

          {/* طالب: /home/student */}
          <Route
          path="student"
            element={
              <PrivateRoute>
                <StudentHome />
              </PrivateRoute>
            }
          />

          {/* أهل: /home/parent → ParentHome الحقيقي */}
          <Route
            path="parent"
            element={
              <PrivateRoute>
                <ParentHome />   {/* 👈 هون استدعاء صفحة الأهل */}
              </PrivateRoute>
            }
          />

          {/* معلّم: /home/teacher */}
          <Route
            path="teacher"
            element={
              <PrivateRoute>
                <TeacherHome />
              </PrivateRoute>
            }
          />
        </Route>

        {/* أي حدا يروح على /teacher بس → حوّليه لـ /home/teacher */}
        {/* <Route path="/teacher" element={<Navigate to="/home/teacher" replace />} /> */}

        {/* أي مسار غلط → رجّعيه على Welcome */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
