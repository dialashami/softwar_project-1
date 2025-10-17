import React from 'react';
import { useAuth } from '../hooks/useAuth';

export function TeacherSidebar({ activeView, setActiveView }) {
  const { logout } = useAuth();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'lessons', label: 'Lessons', icon: '📚' },
    { id: 'assignments', label: 'Assignments', icon: '📝' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'ai-assistant', label: 'AI Assistant', icon: '🤖' },
    { id: 'account', label: 'Account', icon: '👤' },
  ];

  /**return (
    <aside className="teacher-sidebar">
      <div className="sidebar-header">
        <h2>Teacher Dashboard</h2>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activeView === item.id ? 'active' : ''}`}
            onClick={() => setActiveView(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <button onClick={logout} className="logout-btn">
          🚪 Logout
        </button>
      </div>
    </aside>
  ); */
}