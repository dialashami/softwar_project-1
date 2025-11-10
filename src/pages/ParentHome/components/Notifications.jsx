import React, { useState } from 'react';
 

// Mock notifications data
const notificationsData = [
  {
    id: 1,
    type: 'grade',
    icon: 'Award',
    title: 'New Grade Posted',
    message: 'Sarah Ahmed received an A (92%) on Mathematics Quiz #5',
    student: 'Sarah Ahmed',
    time: '2 hours ago',
    read: false,
    priority: 'high',
    color: 'blue',
  },
  {
    id: 2,
    type: 'assignment',
    icon: 'FileText',
    title: 'Assignment Due Soon',
    message: 'Science Project due in 2 days - October 17, 2025',
    student: 'Sarah Ahmed',
    time: '3 hours ago',
    read: false,
    priority: 'medium',
    color: 'purple',
  },
  {
    id: 3,
    type: 'message',
    icon: 'MessageSquare',
    title: 'New Message from Teacher',
    message: "Mrs. Thompson sent you a message about Sarah's progress",
    student: 'Sarah Ahmed',
    time: '5 hours ago',
    read: true,
    priority: 'medium',
    color: 'indigo',
  },
  {
    id: 4,
    type: 'grade',
    icon: 'Award',
    title: 'New Grade Posted',
    message: 'Omar Ahmed received a B+ (85%) on English Essay',
    student: 'Omar Ahmed',
    time: '1 day ago',
    read: true,
    priority: 'high',
    color: 'blue',
  },
 
  {
    id: 6,
    type: 'progress',
    icon: 'TrendingUp',
    title: 'Progress Milestone',
    message: 'Sarah Ahmed completed 90% of Mathematics curriculum',
    student: 'Sarah Ahmed',
    time: '2 days ago',
    read: true,
    priority: 'low',
    color: 'green',
  },
  {
    id: 7,
    type: 'assignment',
    icon: 'FileText',
    title: 'Assignment Submitted',
    message: 'Omar Ahmed submitted History Essay on time',
    student: 'Omar Ahmed',
    time: '2 days ago',
    read: true,
    priority: 'low',
    color: 'purple',
  },
  {
    id: 8,
    type: 'calendar',
    icon: 'Calendar',
    title: 'Upcoming Event',
    message: 'School Science Fair - October 25, 2025',
    student: 'All Students',
    time: '3 days ago',
    read: true,
    priority: 'medium',
    color: 'violet',
  },
  {
    id: 9,
    type: 'grade',
    icon: 'Award',
    title: 'Excellent Performance',
    message: 'Sarah Ahmed ranked in top 5% of the class this week',
    student: 'Sarah Ahmed',
    time: '4 days ago',
    read: true,
    priority: 'high',
    color: 'blue',
  },
  {
    id: 10,
    type: 'assignment',
    icon: 'CheckCircle2',
    title: 'Assignment Graded',
    message: 'Science Lab Report graded - 88/100',
    student: 'Omar Ahmed',
    time: '5 days ago',
    read: true,
    priority: 'medium',
    color: 'purple',
  },
];

// Icon components
const Award = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FileText = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const MessageSquare = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const AlertCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TrendingUp = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const Calendar = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const CheckCircle2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Bell = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.24 8.56a5.97 5.97 0 01-3.79 1.17 5.97 5.97 0 01-3.79-1.17M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Clock = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const X = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const iconComponents = {
  Award,
  FileText,
  MessageSquare,
  AlertCircle,
  TrendingUp,
  Calendar,
  CheckCircle2,
  Bell,
  Clock,
  X
};

function Notifications() {
  const [notifications, setNotifications] = useState(notificationsData);
  const [filter, setFilter] = useState('all');

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAsRead = (id) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
    // Simulate toast notification
    console.log('Notification marked as read');
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
    // Simulate toast notification
    console.log('All notifications marked as read');
  };

  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
    // Simulate toast notification
    console.log('Notification deleted');
  };

  const filteredNotifications = notifications.filter((n) => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !n.read;
    return n.type === filter;
  });

  const getIconComponent = (iconName) => {
    return iconComponents[iconName] || Award;
  };

  return (
    <div className="notifications-container">
      {/* Header */}
      <div className="notifications-header">
        <div className="notifications-header-content">
          <div className="header-content">
            <div>
              <h1 className="header-title">
                Notifications
                {unreadCount > 0 && (
                  <span className="unread-badge">{unreadCount} New</span>
                )}
              </h1>
              <p className="header-description">
                Stay updated with your children's academic activities
              </p>
            </div>
            <button
              onClick={handleMarkAllAsRead}
              className="mark-all-button"
              disabled={unreadCount === 0}
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Mark All as Read
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="tabs-container">
        <div className="tabs-list">
          {['all', 'unread', 'grade', 'assignment', 'message' ].map((tab) => (
            <button
              key={tab}
              className={`tab-trigger ${filter === tab ? 'active' : ''}`}
              onClick={() => setFilter(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="notifications-card">
          <div className="notifications-content">
            <div className="scroll-area">
              <div className="notifications-list">
                {filteredNotifications.length === 0 ? (
                  <div className="empty-state">
                    <Bell className="empty-icon" />
                    <p className="empty-text">No notifications found</p>
                  </div>
                ) : (
                  filteredNotifications.map((notification) => {
                    const IconComponent = getIconComponent(notification.icon);
                    const status = notification.read ? 'read' : 'unread';

                    return (
                      <div
                        key={notification.id}
                        className={`notification-item ${status}`}
                      >
                        <div className="notification-content">
                          <div className={`notification-icon ${status} ${notification.color}`}>
                            <IconComponent className={`icon ${status} ${notification.color}`} />
                          </div>

                          <div className="notification-details">
                            <div className="notification-header">
                              <div>
                                <h3 className={`notification-title ${status}`}>
                                  {notification.title}
                                </h3>
                                <p className={`notification-message ${status}`}>
                                  {notification.message}
                                </p>
                              </div>
                              {!notification.read && <div className="unread-dot" />}
                            </div>

                            <div className="notification-footer">
                              <div className="student-info">
                                <span className="student-badge">
                                  {notification.student}
                                </span>
                                <span className="notification-time">
                                  <Clock className="time-icon" />
                                  {notification.time}
                                </span>
                              </div>

                              <div className="notification-actions">
                                {!notification.read && (
                                  <button
                                    className="action-button mark-read-button"
                                    onClick={() => handleMarkAsRead(notification.id)}
                                  >
                                    <CheckCircle2 className="w-4 h-4 mr-1" />
                                    Mark Read
                                  </button>
                                )}
                                <button
                                  className="action-button delete-button"
                                  onClick={() => handleDeleteNotification(notification.id)}
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;