import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardOverview } from './components/DashboardOverview';
import { UserManagement } from './components/UserManagement';
import { ContentManagement } from './components/ContentManagement';
import { CommunicationCenter } from './components/CommunicationCenter';
import { NotificationManagement } from './components/NotificationManagement';
import { SystemSettings } from './components/SystemSettings';
import { AIInsights } from './components/AIInsights';
import './Admin.css';

export function Admin() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'users':
        return <UserManagement />;
      case 'content':
        return <ContentManagement />;
      case 'communication':
        return <CommunicationCenter />;
      case 'notifications':
        return <NotificationManagement />;
      case 'ai-insights':
        return <AIInsights />;
      case 'settings':
        return <SystemSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="admin-layout">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main className="admin-main">
        {renderContent()}
      </main>
    </div>
  );
}