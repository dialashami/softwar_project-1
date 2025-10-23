// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Notifications.css';

// function Notifications({ onNavigate }) {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('templates');
//   const [selectedTemplate, setSelectedTemplate] = useState(null);
//   const [message, setMessage] = useState('');
//   const [notifications, setNotifications] = useState([]);

//  // دالة التنقل المكتملة
// const handleNavigation = (page) => {
//     if (page === 'dashboard') {
//       navigate('/');
//     }
// };


//   // قوالب سريعة
//   const quickTemplates = [
//     {
//       id: 1,
//       title: 'Assignment Reminder',
//       content: 'This is a reminder that your assignment is due soon. Please submit it on time.',
//       type: 'reminder'
//     },
//     {
//       id: 2,
//       title: 'Class Cancellation',
//       content: 'Your class has been cancelled. You will be notified of the rescheduled time.',
//       type: 'cancellation'
//     }
//   ];

//   const handleTemplateSelect = (template) => {
//     setSelectedTemplate(template);
//     setMessage(template.content);
//   };

//   const handleSendNotification = () => {
//     if (!message.trim()) {
//       alert('Please enter a message or select a template');
//       return;
//     }

//     const newNotification = {
//       id: Date.now(),
//       title: selectedTemplate ? selectedTemplate.title : 'Custom Message',
//       content: message,
//       type: selectedTemplate ? selectedTemplate.type : 'custom',
//       date: new Date().toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit'
//       }),
//       status: 'sent'
//     };

//     setNotifications([newNotification, ...notifications]);
//     setMessage('');
//     setSelectedTemplate(null);
//     alert('Notification sent successfully!');
//   };

//   const handleScheduleNotification = () => {
//     if (!message.trim()) {
//       alert('Please enter a message or select a template');
//       return;
//     }

//     const newNotification = {
//       id: Date.now(),
//       title: selectedTemplate ? selectedTemplate.title : 'Custom Message',
//       content: message,
//       type: selectedTemplate ? selectedTemplate.type : 'custom',
//       date: 'Scheduled for tomorrow',
//       status: 'scheduled'
//     };

//     setNotifications([newNotification, ...notifications]);
//     setMessage('');
//     setSelectedTemplate(null);
//     alert('Notification scheduled successfully!');
//   };

//   return (
//     <div className="notifications-container">
//       {/* الشريط الجانبي */}
//       <div className="notifications-sidebar">
//         <div className="sidebar-header">
//           <h2>Ruwwad</h2>
//           <p>Teacher Portal</p>
//         </div>

//         <ul className="sidebar-nav">
//           <li onClick={() => handleNavigation('dashboard')}>
//             <i className="fas fa-chart-line"></i>
//             Dashboard
//           </li>
//           <li onClick={() => handleNavigation('lessons')}>
//             <i className="fas fa-book"></i>
//             Lessons
//           </li>
//           <li onClick={() => handleNavigation('assignments')}>
//             <i className="fas fa-tasks"></i>
//             Assignments
//           </li>
//           <li onClick={() => handleNavigation('analytics')}>
//             <i className="fas fa-chart-bar"></i>
//             Analytics
//           </li>
//           <li className="active">
//             <i className="fas fa-bell"></i>
//             Notifications
//           </li>
//           <li onClick={() => handleNavigation('assistant')}>
//             <i className="fas fa-robot"></i>
//             AI Assistant
//           </li>
//           <li onClick={() => handleNavigation('account')}>
//             <i className="fas fa-cog"></i>
//             Account
//           </li>
//         </ul>

//         {/* الملف الشخصي للمعلم */}
//         <div className="teacher-profile-sidebar">
//           <div className="profile-avatar">
//             <i className="fas fa-user"></i>
//           </div>
//           <div className="profile-info-sidebar">
//             <h4>Sarah Johnson</h4>
//             <p>Mathematics Teacher</p>
//           </div>
//         </div>
//       </div>

//       {/* المحتوى الرئيسي */}
//       <div className="notifications-main-content">
//         <div className="content-container">
//           {/* الرأس */}
//           <div className="notifications-header">
//             <div className="header-content">
//               <div className="header-text">
//                 <h1>Notifications & Messages</h1>
//                 <p>Send reminders, announcements, and feedback to students</p>
//               </div>
//             </div>
//           </div>

//           {/* التبويبات */}
//           <div className="notifications-tabs">
//             <button 
//               className={`tab ${activeTab === 'templates' ? 'active' : ''}`}
//               onClick={() => setActiveTab('templates')}
//             >
//               Quick Templates
//             </button>
//             <button 
//               className={`tab ${activeTab === 'all' ? 'active' : ''}`}
//               onClick={() => setActiveTab('all')}
//             >
//               All Notifications
//             </button>
//           </div>

//           {/* محتوى التبويبات */}
//           <div className="tab-content">
//             {activeTab === 'templates' ? (
//               <div className="templates-section">
//                 <h3>Quick Templates</h3>
//                 <div className="templates-grid">
//                   {quickTemplates.map(template => (
//                     <div 
//                       key={template.id}
//                       className={`template-card ${selectedTemplate?.id === template.id ? 'selected' : ''}`}
//                       onClick={() => handleTemplateSelect(template)}
//                     >
//                       <div className="template-icon">
//                         <i className={`fas ${
//                           template.type === 'reminder' ? 'fa-bell' : 'fa-calendar-times'
//                         }`}></i>
//                       </div>
//                       <div className="template-content">
//                         <h4>{template.title}</h4>
//                         <p>{template.content}</p>
//                       </div>
//                       <div className="template-check">
//                         <i className="fas fa-check"></i>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* محرر الرسالة */}
//                 <div className="message-editor">
//                   <h4>Compose Message</h4>
//                   <textarea
//                     className="message-textarea"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="Type your message here or select a template above..."
//                     rows="6"
//                   ></textarea>
                  
//                   <div className="message-actions">
//                     <button 
//                       className="btn btn-secondary"
//                       onClick={() => {
//                         setMessage('');
//                         setSelectedTemplate(null);
//                       }}
//                     >
//                       Clear
//                     </button>
//                     <button 
//                       className="btn btn-schedule"
//                       onClick={handleScheduleNotification}
//                     >
//                       <i className="fas fa-clock"></i>
//                       Schedule
//                     </button>
//                     <button 
//                       className="btn btn-primary"
//                       onClick={handleSendNotification}
//                     >
//                       <i className="fas fa-paper-plane"></i>
//                       Send Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="notifications-list-section">
//                 <div className="notifications-tabs-secondary">
//                   <button className="tab-secondary active">Sent</button>
//                   <button className="tab-secondary">Scheduled</button>
//                 </div>

//                 <div className="notifications-list">
//                   {notifications.length > 0 ? (
//                     notifications.map(notification => (
//                       <div key={notification.id} className="notification-item">
//                         <div className="notification-icon">
//                           <i className={`fas ${
//                             notification.type === 'reminder' ? 'fa-bell' : 
//                             notification.type === 'cancellation' ? 'fa-calendar-times' : 
//                             'fa-envelope'
//                           }`}></i>
//                         </div>
//                         <div className="notification-content">
//                           <h4>{notification.title}</h4>
//                           <p>{notification.content}</p>
//                           <span className="notification-date">{notification.date}</span>
//                         </div>
//                         <div className={`notification-status ${notification.status}`}>
//                           {notification.status === 'sent' ? (
//                             <i className="fas fa-check-circle"></i>
//                           ) : (
//                             <i className="fas fa-clock"></i>
//                           )}
//                           {notification.status}
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <div className="empty-state">
//                       <i className="fas fa-bell-slash"></i>
//                       <h3>No notifications yet</h3>
//                       <p>Send your first notification using the quick templates</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
      
//     </div>
    
//   );
// }

// export default Notifications;



import React, { useState } from 'react';
import '../styles/Notifications.css';

function Notifications({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('templates');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [message, setMessage] = useState('');
  const [notifications, setNotifications] = useState([]);

  // قوالب سريعة
  const quickTemplates = [
    {
      id: 1,
      title: 'Assignment Reminder',
      content: 'This is a reminder that your assignment is due soon. Please submit it on time.',
      type: 'reminder'
    },
    {
      id: 2,
      title: 'Class Cancellation',
      content: 'Your class has been cancelled. You will be notified of the rescheduled time.',
      type: 'cancellation'
    }
  ];

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setMessage(template.content);
  };

  const handleSendNotification = () => {
    if (!message.trim()) {
      alert('Please enter a message or select a template');
      return;
    }

    const newNotification = {
      id: Date.now(),
      title: selectedTemplate ? selectedTemplate.title : 'Custom Message',
      content: message,
      type: selectedTemplate ? selectedTemplate.type : 'custom',
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'sent'
    };

    setNotifications([newNotification, ...notifications]);
    setMessage('');
    setSelectedTemplate(null);
    alert('Notification sent successfully!');
  };

  const handleScheduleNotification = () => {
    if (!message.trim()) {
      alert('Please enter a message or select a template');
      return;
    }

    const newNotification = {
      id: Date.now(),
      title: selectedTemplate ? selectedTemplate.title : 'Custom Message',
      content: message,
      type: selectedTemplate ? selectedTemplate.type : 'custom',
      date: 'Scheduled for tomorrow',
      status: 'scheduled'
    };

    setNotifications([newNotification, ...notifications]);
    setMessage('');
    setSelectedTemplate(null);
    alert('Notification scheduled successfully!');
  };

  return (
    <div className="notifications-container">
      <div className="notifications-main-content">
        <div className="content-container">
          {/* الرأس */}
          <div className="notifications-header">
            <div className="header-content">
              <div className="header-text">
                <h1>Notifications & Messages</h1>
                <p>Send reminders, announcements, and feedback to students</p>
              </div>
            </div>
          </div>

          {/* التبويبات */}
          <div className="notifications-tabs">
            <button 
              className={`tab ${activeTab === 'templates' ? 'active' : ''}`}
              onClick={() => setActiveTab('templates')}
            >
              Quick Templates
            </button>
            <button 
              className={`tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Notifications
            </button>
          </div>

          {/* محتوى التبويبات */}
          <div className="tab-content">
            {activeTab === 'templates' ? (
              <div className="templates-section">
                <h3>Quick Templates</h3>
                <div className="templates-grid">
                  {quickTemplates.map(template => (
                    <div 
                      key={template.id}
                      className={`template-card ${selectedTemplate?.id === template.id ? 'selected' : ''}`}
                      onClick={() => handleTemplateSelect(template)}
                    >
                      <div className="template-icon">
                        <i className={`fas ${
                          template.type === 'reminder' ? 'fa-bell' : 'fa-calendar-times'
                        }`}></i>
                      </div>
                      <div className="template-content">
                        <h4>{template.title}</h4>
                        <p>{template.content}</p>
                      </div>
                      <div className="template-check">
                        <i className="fas fa-check"></i>
                      </div>
                    </div>
                  ))}
                </div>

                {/* محرر الرسالة */}
                <div className="message-editor">
                  <h4>Compose Message</h4>
                  <textarea
                    className="message-textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here or select a template above..."
                    rows="6"
                  ></textarea>
                  
                  <div className="message-actions">
                    <button 
                      className="btn btn-secondary"
                      onClick={() => {
                        setMessage('');
                        setSelectedTemplate(null);
                      }}
                    >
                      Clear
                    </button>
                    <button 
                      className="btn btn-schedule"
                      onClick={handleScheduleNotification}
                    >
                      <i className="fas fa-clock"></i>
                      Schedule
                    </button>
                    <button 
                      className="btn btn-primary"
                      onClick={handleSendNotification}
                    >
                      <i className="fas fa-paper-plane"></i>
                      Send Now
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="notifications-list-section">
                <div className="notifications-tabs-secondary">
                  <button className="tab-secondary active">Sent</button>
                  <button className="tab-secondary">Scheduled</button>
                </div>

                <div className="notifications-list">
                  {notifications.length > 0 ? (
                    notifications.map(notification => (
                      <div key={notification.id} className="notification-item">
                        <div className="notification-icon">
                          <i className={`fas ${
                            notification.type === 'reminder' ? 'fa-bell' : 
                            notification.type === 'cancellation' ? 'fa-calendar-times' : 
                            'fa-envelope'
                          }`}></i>
                        </div>
                        <div className="notification-content">
                          <h4>{notification.title}</h4>
                          <p>{notification.content}</p>
                          <span className="notification-date">{notification.date}</span>
                        </div>
                        <div className={`notification-status ${notification.status}`}>
                          {notification.status === 'sent' ? (
                            <i className="fas fa-check-circle"></i>
                          ) : (
                            <i className="fas fa-clock"></i>
                          )}
                          {notification.status}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="empty-state">
                      <i className="fas fa-bell-slash"></i>
                      <h3>No notifications yet</h3>
                      <p>Send your first notification using the quick templates</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;