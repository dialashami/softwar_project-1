import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
 
import  Dashboard from './components/Dashboard';
import  Notifications from './components/Notifications';
 
 import Settings from './components/Settings';

import { ChatCenter } from './components/ChatCenter';
import FeedbackStar from './components/FeedbackStar'; 
import './ParentHome.css';

export default function StudentHome() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
  
     
      case 'chat':
        return <ChatCenter currentRole="student" />;
       
          case 'notifications':
        return <Notifications />;
 
     case 'settings':
        return<Settings/>
      default:
        return <Dashboard />;
    }
  };

  // return (
  //   <div className="parent-home">
  //     <Sidebar activeItem={activePage} onItemChange={setActivePage} />
      
  //     <div className="main-content">
     
  //       {renderPage()}
  //     </div>
  //   </div>
  // );
  
    return (
      <div className="parent-home">
        <Sidebar activeItem={activePage} onItemChange={setActivePage} />
        
        <div className="main-content">
          {/* <Navigation /> */}
          {renderPage()}
        </div>
  
        { }
        <FeedbackStar />
      </div>
    );
}