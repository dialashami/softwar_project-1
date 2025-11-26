// import { useState } from 'react';
// import { Sidebar } from './components/Sidebar';
// import { DashboardOverview } from './components/DashboardOverview';
// import { UserManagement } from './components/UserManagement';
// import { ContentManagement } from './components/ContentManagement';
// import { CommunicationCenter } from './components/CommunicationCenter';
// import { NotificationManagement } from './components/NotificationManagement';
// import { SystemSettings } from './components/SystemSettings';
// import { AIInsights } from './components/AIInsights';
// import './Admin.css';

// export function Admin() {
//   const [activeSection, setActiveSection] = useState('dashboard');

//   const renderContent = () => {
//     switch (activeSection) {
//       case 'dashboard':
//         return <DashboardOverview />;
//       case 'users':
//         return <UserManagement />;
//       case 'content':
//         return <ContentManagement />;
//       case 'communication':
//         return <CommunicationCenter />;
//       case 'notifications':
//         return <NotificationManagement />;
//       case 'ai-insights':
//         return <AIInsights />;
//       case 'settings':
//         return <SystemSettings />;
//       default:
//         return <DashboardOverview />;
//     }
//   };

//   return (
//     <div className="admin-layout">
//       <Sidebar 
//         activeSection={activeSection} 
//         onSectionChange={setActiveSection} 
//       />
//       <main className="admin-main">
//         {renderContent()}
//       </main>
//     </div>
//   );
// }

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardOverview } from './components/DashboardOverview';
import { UserManagement } from './components/UserManagement';
 import { CommunicationCenter } from './components/CommunicationCenter';
import { NotificationManagement } from './components/NotificationManagement';
import { SystemSettings } from './components/SystemSettings';
 
import './Admin.css';

export function Admin() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [communicationTargetName, setCommunicationTargetName] = useState(null);

  const handleOpenCommunication = (user) => {
    setCommunicationTargetName(user.name);     // الاسم اللي رح نفتحه في الـ chat
    setActiveSection('communication');         // روح على Communication Center
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'users':
        return <UserManagement onOpenCommunication={handleOpenCommunication} />;
      
      case 'communication':
        return (
          <CommunicationCenter
            initialChatName={communicationTargetName}
            initialTab="messages"
          />
        );
      case 'notifications':
        return <NotificationManagement />;
      
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
      <main className="admin-main">{renderContent()}</main>
    </div>
  );
}
