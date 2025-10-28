import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { MyLessons } from './components/MyLessons';
import { Assignments } from './components/Assignments';
import { ProgressPage } from './components/ProgressPage';
import { AITutorPage } from './components/AITutorPage';
import { Settings } from './components/Settings';
import './StudentHome.css';

export default function StudentHome() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'lessons':
        return <MyLessons />;
      case 'assignments':
        return <Assignments />;
      case 'progress':
        return <ProgressPage />;
      case 'ai-tutor':
        return <AITutorPage />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="student-home">
      <Sidebar activeItem={activePage} onItemChange={setActivePage} />
      
      <div className="main-content">
        <Navigation />
        {renderPage()}
      </div>
    </div>
  );
}