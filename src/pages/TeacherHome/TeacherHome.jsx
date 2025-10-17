import React from 'react';
import { SidebarProvider } from './components/ui/sidebar';
import { TeacherSidebar } from './components/TeacherSidebar';
import { Dashboard } from './components/Dashboard';
//import { LessonManagement } from './components/LessonManagement';
import { AssignmentManagement } from './components/AssignmentManagement';
import { StudentAnalytics } from './components/StudentAnalytics';
import { Notifications } from './components/Notifications';
import { AIAssistant } from './components/AIAssistant';
import { AccountSettings } from './components/AccountSettings';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Toaster } from './components/ui/sonner';
import { useAuth } from './hooks/useAuth';
import LessonManagement from './components/LessonManagement';
import './TeacherHome.css';

export default function TeacherHome() {
  const { isAuthenticated } = useAuth();
  const [activeView, setActiveView] = React.useState('dashboard');
  const [authView, setAuthView] = React.useState('login');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
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
        return <Dashboard />;
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
        <TeacherSidebar activeView={activeView} setActiveView={setActiveView} />
        <main className="teacher-main-content">
          {renderView()}
        </main>
      </div>
      <Toaster position="top-right" richColors />
    </SidebarProvider>
  );
}
