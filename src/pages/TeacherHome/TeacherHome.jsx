// import React from 'react';
// import { SidebarProvider } from './components/ui/sidebar';
// import { TeacherSidebar } from './components/TeacherSidebar';
// import { Dashboard } from './components/Dashboard';
// //import { LessonManagement } from './components/LessonManagement';
// import  AssignmentManagement  from './components/AssignmentManagement';
// import { StudentAnalytics } from './components/StudentAnalytics';
// import { Notifications } from './components/Notifications';
// import { AIAssistant } from './components/AIAssistant';
// import { AccountSettings } from './components/AccountSettings';
// import { Login } from './components/Login';
// import { Register } from './components/Register';
// import { Toaster } from './components/ui/sonner';
// import { useAuth } from './hooks/useAuth';
// import LessonManagement from './components/LessonManagement';
// import './TeacherHome.css';

// export default function TeacherHome() {
//   const { isAuthenticated } = useAuth();
//   const [activeView, setActiveView] = React.useState('dashboard');
//   const [authView, setAuthView] = React.useState('login');

//   const renderView = () => {
//     switch (activeView) {
//       case 'dashboard':
//         return <Dashboard />;
//       case 'lessons':
//         return <LessonManagement />;
//       case 'assignments':
//         return <AssignmentManagement />;
//       case 'analytics':
//         return <StudentAnalytics />;
//       case 'notifications':
//         return <Notifications />;
//       case 'ai-assistant':
//         return <AIAssistant />;
//       case 'account':
//         return <AccountSettings />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   // Show login/register if not authenticated
//   if (!isAuthenticated) {
//     return (
//       <>
//         {authView === 'login' ? (
//           <Login onSwitchToRegister={() => setAuthView('register')} />
//         ) : (
//           <Register onSwitchToLogin={() => setAuthView('login')} />
//         )}
//         <Toaster position="top-right" richColors />
//       </>
//     );
//   }

//   // Show main app if authenticated
//   return (
//     <SidebarProvider>
//       <div className="teacher-home-container">
//         <TeacherSidebar activeView={activeView} setActiveView={setActiveView} />
//         <main className="teacher-main-content">
//           {renderView()}
//         </main>
//       </div>
//       <Toaster position="top-right" richColors />
//     </SidebarProvider>
//   );
// }

//44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444

//  import React from 'react';
// import { SidebarProvider } from './components/ui/sidebar';
// import { TeacherSidebar } from './components/TeacherSidebar';
// import { Dashboard } from './components/Dashboard';
// import AssignmentManagement from './components/AssignmentManagement';
// import { StudentAnalytics } from './components/StudentAnalytics';
// import { Notifications } from './components/Notifications';
// import { AIAssistant } from './components/AIAssistant';
// import { AccountSettings } from './components/AccountSettings';
// import { Login } from './components/Login';
// import { Register } from './components/Register';
// import { Toaster } from './components/ui/sonner';
// import { useAuth } from './hooks/useAuth';
// import LessonManagement from './components/LessonManagement';
// import './TeacherHome.css';

// export default function TeacherHome() {
//   const { isAuthenticated, loading } = useAuth();
//   const [activeView, setActiveView] = React.useState('dashboard');
//   const [authView, setAuthView] = React.useState('login');

//   // Show loading spinner while checking authentication
//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="loading-spinner">📘</div>
//         <p>Loading Ruwwad Teacher Portal...</p>
//       </div>
//     );
//   }

//   const renderView = () => {
//     switch (activeView) {
//       case 'dashboard':
//         return <Dashboard onNavigate={setActiveView} />;
//       case 'lessons':
//         return <LessonManagement />;
//       case 'assignments':
//         return <AssignmentManagement />;
//       case 'analytics':
//         return <StudentAnalytics />;
//       case 'notifications':
//         return <Notifications />;
//       case 'ai-assistant':
//         return <AIAssistant />;
//       case 'account':
//         return <AccountSettings />;
//       default:
//         return <Dashboard onNavigate={setActiveView} />;
//     }
//   };

//   // Show login/register if not authenticated
//   if (!isAuthenticated) {
//     return (
//       <>
//         {authView === 'login' ? (
//           <Login onSwitchToRegister={() => setAuthView('register')} />
//         ) : (
//           <Register onSwitchToLogin={() => setAuthView('login')} />
//         )}
//         <Toaster position="top-right" richColors />
//       </>
//     );
//   }

//   // Show main app if authenticated
//   return (
//     <SidebarProvider>
//       <div className="teacher-home-container">
//         <TeacherSidebar activeView={activeView} setActiveView={setActiveView} />
//         <main className="teacher-main-content">
//           {renderView()}
//         </main>
//       </div>
//       <Toaster position="top-right" richColors />
//     </SidebarProvider>
//   );
// }


import React from 'react';
import { SidebarProvider } from './components/ui/sidebar';
//import { TeacherSidebar } from './components/TeacherSidebar';
import { Dashboard } from './components/Dashboard';
import AssignmentManagement from './components/AssignmentManagement';
import { StudentAnalytics } from './components/StudentAnalytics';
import { Notifications } from './components/Notifications';
import { AIAssistant } from './components/AIAssistant';
import { AccountSettings } from './components/AccountSettings';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Toaster } from './components/ui/sonner';
import { useAuth } from './hooks/useAuth';
import LessonManagement from './components/LessonManagement';
import { useLocation, useNavigate } from 'react-router-dom';
import './TeacherHome.css';

export default function TeacherHome() {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [authView, setAuthView] = React.useState('login');

  // تحديد العرض النشط بناءً على الـ URL
  const getActiveViewFromURL = () => {
    const path = location.pathname;
    if (path.includes('/lessons')) return 'lessons';
    if (path.includes('/assignments')) return 'assignments';
    if (path.includes('/analytics')) return 'analytics';
    if (path.includes('/notifications')) return 'notifications';
    if (path.includes('/ai-assistant')) return 'ai-assistant';
    if (path.includes('/account')) return 'account';
    return 'dashboard';
  };

  const [activeView, setActiveView] = React.useState(getActiveViewFromURL());

  // تحديث activeView عندما يتغير الـ URL
  React.useEffect(() => {
    setActiveView(getActiveViewFromURL());
  }, [location.pathname]);

  const handleNavigation = (view) => {
    setActiveView(view);
    // تحديث الـ URL بناءً على العرض المختار
    switch(view) {
      case 'lessons':
        navigate('/lessons');
        break;
      case 'assignments':
        navigate('/assignments');
        break;
      case 'analytics':
        navigate('/analytics');
        break;
      case 'notifications':
        navigate('/notifications');
        break;
      case 'ai-assistant':
        navigate('/ai-assistant');
        break;
      case 'account':
        navigate('/account');
        break;
      default:
        navigate('/');
        break;
    }
  };

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">📘</div>
        <p>Loading Ruwwad Teacher Portal...</p>
      </div>
    );
  }

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigation} />;
      case 'lessons':
        return <LessonManagement />;
      case 'assignments':
        return <AssignmentManagement />;
      case 'analytics':
        return <StudentAnalytics />;
      case 'notifications':
        return <Notifications />;
      case 'ai-assistant':
        return <AIAssistant />;
      case 'account':
        return <AccountSettings />;
      default:
        return <Dashboard onNavigate={handleNavigation} />;
    }
  };

  // Show login/register if not authenticated
  if (!isAuthenticated) {
    return (
      <>
        {authView === 'login' ? (
          <Login onSwitchToRegister={() => setAuthView('register')} />
        ) : (
          <Register onSwitchToLogin={() => setAuthView('login')} />
        )}
        <Toaster position="top-right" richColors />
      </>
    );
  }

  // Show main app if authenticated
  return (
    <SidebarProvider>
      <div className="teacher-home-container">
        {/* <TeacherSidebar activeView={activeView} setActiveView={handleNavigation} /> */}
        <main className="teacher-main-content">
          {renderView()}
        </main>
      </div>
      <Toaster position="top-right" richColors />
    </SidebarProvider>
  );
}