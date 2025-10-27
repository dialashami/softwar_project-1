 
// import React from 'react';
// import { SidebarProvider } from './components/ui/sidebar';
// import { Dashboard } from './components/Dashboard';
// import AssignmentManagement from './components/AssignmentManagement';
// import { StudentAnalytics } from './components/StudentAnalytics';
// import Notifications from './components/Notifications';
// import { AIAssistant } from './components/AIAssistant';
// import { AccountSettings } from './components/AccountSettings';
// import { Login } from './components/Login';
// import { Register } from './components/Register';
// import { Toaster } from './components/ui/sonner';
// import { useAuth } from './hooks/useAuth';
// import LessonManagement from './components/LessonManagement';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './TeacherHome.css';

// export default function TeacherHome() {
//   const { isAuthenticated, loading } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [authView, setAuthView] = React.useState('login');

//   // تحديد العرض النشط بناءً على الـ URL فقط
//   const getActiveViewFromURL = () => {
//     const path = location.pathname;
//     if (path.includes('/lessons')) return 'lessons';
//     if (path.includes('/assignments')) return 'assignments';
//     if (path.includes('/analytics')) return 'analytics';
//     if (path.includes('/notifications')) return 'notifications';
//     if (path.includes('/ai-assistant')) return 'ai-assistant';
//     if (path.includes('/account')) return 'account';
//     return 'dashboard';
//   };

//   const activeView = getActiveViewFromURL(); // استخدام متغير بدلاً من state

//   const handleNavigation = (view) => {
//     // تحديث الـ URL فقط بدون state محلي
//     switch(view) {
//       case 'lessons':
//         navigate('/lessons');
//         break;
//       case 'assignments':
//         navigate('/assignments');
//         break;
//       case 'analytics':
//         navigate('/analytics');
//         break;
//       case 'notifications':
//         navigate('/notifications');
//         break;
//       case 'ai-assistant':
//         navigate('/ai-assistant');
//         break;
//       case 'account':
//         navigate('/account');
//         break;
//       default:
//         navigate('/');
//         break;
//     }
//   };

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
//         return <Dashboard onNavigate={handleNavigation} />;
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
//         return <Dashboard onNavigate={handleNavigation} />;
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
//         <main className="teacher-main-content">
//           {renderView()}
//         </main>
//       </div>
//       <Toaster position="top-right" richColors />
//     </SidebarProvider>
//   );
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React from 'react';
// import { SidebarProvider } from './components/ui/sidebar';
// import { Dashboard } from './components/Dashboard';
// import AssignmentManagement from './components/AssignmentManagement';
// import { StudentAnalytics } from './components/StudentAnalytics';
// import Notifications from './components/Notifications';
// import { AIAssistant } from './components/AIAssistant';
// import { AccountSettings } from './components/AccountSettings';
// import { Login } from './components/Login';
// import { Register } from './components/Register';
// import { Toaster } from './components/ui/sonner';
// import { useAuth } from './hooks/useAuth';
// import LessonManagement from './components/LessonManagement';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './TeacherHome.css';

// export default function TeacherHome() {
//   const { isAuthenticated, loading } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [authView, setAuthView] = React.useState('login');

//   // تحديد العرض النشط بناءً على الـ URL فقط
//   const getActiveViewFromURL = () => {
//     const path = location.pathname;
//     if (path.includes('/lessons')) return 'lessons';
//     if (path.includes('/assignments')) return 'assignments';
//     if (path.includes('/analytics')) return 'analytics';
//     if (path.includes('/notifications')) return 'notifications';
//     if (path.includes('/ai-assistant')) return 'ai-assistant';
//     if (path.includes('/account')) return 'account';
//     return 'dashboard';
//   };

//   const activeView = getActiveViewFromURL();

//   const handleNavigation = (view) => {
//     switch(view) {
//       case 'lessons':
//         navigate('/lessons');
//         break;
//       case 'assignments':
//         navigate('/assignments');
//         break;
//       case 'analytics':
//         navigate('/analytics');
//         break;
//       case 'notifications':
//         navigate('/notifications');
//         break;
//       case 'ai-assistant':
//         navigate('/ai-assistant');
//         break;
//       case 'account':
//         navigate('/account');
//         break;
//       default:
//         navigate('/');
//         break;
//     }
//   };

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
//         return <Dashboard onNavigate={handleNavigation} />;
//       case 'lessons':
//         return <LessonManagement />;
//       case 'assignments':
//         return <AssignmentManagement />;
//       case 'analytics':
//         return <StudentAnalytics />;
//       case 'notifications':
//         return <Notifications onNavigate={handleNavigation} />;
//       case 'ai-assistant':
//         return <AIAssistant />;
//       case 'account':
//         return <AccountSettings />;
//       default:
//         return <Dashboard onNavigate={handleNavigation} />;
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
import { Dashboard } from './components/Dashboard';
import AssignmentManagement from './components/AssignmentManagement';
// import { StudentAnalytics } from './components/StudentAnalytics';
import Notifications from './components/Notifications';
import { AIAssistant } from './components/AIAssistant';
import { AccountSettings } from './components/AccountSettings';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Toaster } from './components/ui/sonner';
import { useAuth } from './hooks/useAuth';
import LessonManagement from './components/LessonManagement';
import { useLocation, useNavigate } from 'react-router-dom';
import './TeacherHome.css';

// مكون السايدبار المنفصل
function AppSidebar({ activeView, onNavigate }) {
  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-header">
        <h2>Ruwwad</h2>
        <p>Teacher Portal</p>
      </div>
      <ul className="sidebar-nav">
        <li 
          className={activeView === 'dashboard' ? 'active' : ''}
          onClick={() => onNavigate('dashboard')}
          style={{cursor: 'pointer'}}
        >
          Dashboard
        </li>
        <li 
          className={activeView === 'lessons' ? 'active' : ''}
          onClick={() => onNavigate('lessons')}
          style={{cursor: 'pointer'}}
        >
          Lessons
        </li>
        <li 
          className={activeView === 'assignments' ? 'active' : ''}
          onClick={() => onNavigate('assignments')}
          style={{cursor: 'pointer'}}
        >
          Assignments
        </li>
        {/* <li 
          className={activeView === 'analytics' ? 'active' : ''}
          onClick={() => onNavigate('analytics')}
          style={{cursor: 'pointer'}}
        >
          Analytics
        </li> */}
        <li 
          className={activeView === 'notifications' ? 'active' : ''}
          onClick={() => onNavigate('notifications')}
          style={{cursor: 'pointer'}}
        >
          Notifications
        </li>
        <li 
          className={activeView === 'ai-assistant' ? 'active' : ''}
          onClick={() => onNavigate('ai-assistant')}
          style={{cursor: 'pointer'}}
        >
          AI Assistant
        </li>
        <li 
          className={activeView === 'account' ? 'active' : ''}
          onClick={() => onNavigate('account')}
          style={{cursor: 'pointer'}}
        >
          Account
        </li>
      </ul>
    </div>
  );
}

export default function TeacherHome() {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [authView, setAuthView] = React.useState('login');

  // تحديد العرض النشط بناءً على الـ URL
  const getActiveViewFromURL = () => {
    const path = location.pathname;
    if (path === '/lessons' || path.includes('/lessons')) return 'lessons';
    if (path === '/assignments' || path.includes('/assignments')) return 'assignments';
    // if (path === '/analytics' || path.includes('/analytics')) return 'analytics';
    if (path === '/notifications' || path.includes('/notifications')) return 'notifications';
    if (path === '/ai-assistant' || path.includes('/ai-assistant')) return 'ai-assistant';
    if (path === '/account' || path.includes('/account')) return 'account';
    return 'dashboard';
  };

  const activeView = getActiveViewFromURL();

  const handleNavigation = (view) => {
    switch(view) {
      case 'dashboard':
        navigate('/');
        break;
      case 'lessons':
        navigate('/lessons');
        break;
      case 'assignments':
        navigate('/assignments');
        break;
      // case 'analytics':
      //   navigate('/analytics');
      //   break;
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
        return <LessonManagement onNavigate={handleNavigation} />;
      case 'assignments':
        return <AssignmentManagement onNavigate={handleNavigation} />;
      // case 'analytics':
      //   return <StudentAnalytics onNavigate={handleNavigation} />;
      case 'notifications':
        return <Notifications onNavigate={handleNavigation} />;
      case 'ai-assistant':
        return <AIAssistant onNavigate={handleNavigation} />;
      case 'account':
        return <AccountSettings onNavigate={handleNavigation} />;
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
        <AppSidebar activeView={activeView} onNavigate={handleNavigation} />
        <main className="teacher-main-content">
          {renderView()}
        </main>
      </div>
      <Toaster position="top-right" richColors />
    </SidebarProvider>
  );
}