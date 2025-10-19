
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/AssignmentManagement.css';

// function AssignmentManagement() {
//     const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('Active');
//   const [currentView, setCurrentView] = useState('assignments');
  
//  const handleNavigation = (page) => {
//     if (page === 'dashboard') {
//       navigate('/');
//     }
//   };
//   const assignments = [
//     {
//       id: 1,
//       title: "Quadratic Equations Problem Set",
//       subject: "Mathematics",
//       grade: "Grade 10",
//       dueDate: "Oct 18, 2025",
//       totalStudents: 62,
//       submitted: 58,
//       graded: 45,
//       status: "Active"
//     },
//     {
//       id: 2,
//       title: "Chemical Reactions Lab",
//       subject: "Chemistry",
//       grade: "Grade 11",
//       dueDate: "Nov 5, 2025",
//       totalStudents: 45,
//       submitted: 32,
//       graded: 28,
//       status: "Active"
//     },
//     {
//       id: 3,
//       title: "World War II Essay",
//       subject: "History",
//       grade: "Grade 9",
//       dueDate: "Sep 30, 2025",
//       totalStudents: 58,
//       submitted: 58,
//       graded: 58,
//       status: "Closed"
//     },
//     {
//       id: 4,
//       title: "Physics Kinematics Quiz",
//       subject: "Physics",
//       grade: "Grade 11",
//       dueDate: "Dec 15, 2025",
//       totalStudents: 40,
//       submitted: 0,
//       graded: 0,
//       status: "Upcoming"
//     }
//   ];

//   const filteredAssignments = assignments.filter(assignment => 
//     activeTab === 'All' ? true : assignment.status === activeTab
//   );

//   const Sidebar = () => (
//     <div className="sidebar">
//       <div className="logo">
//         <h2>EduManage</h2>
//       </div>
      
//       <ul className="sidebar-nav">
//         <li className={currentView === 'dashboard' ? 'active' : ''}>
//           <a href="#dashboard" onClick={(e) => { e.preventDefault(); setCurrentView('dashboard'); }}>
//             <i className="fas fa-tachometer-alt"></i>
//             <span>Dashboard</span>
//           </a>
//         </li>
//         <li className={currentView === 'assignments' ? 'active' : ''}>
//           <a href="#assignments" onClick={(e) => { e.preventDefault(); setCurrentView('assignments'); }}>
//             <i className="fas fa-tasks"></i>
//             <span>Assignments</span>
//           </a>
//         </li>
//         <li>
//           <a href="#grades">
//             <i className="fas fa-chart-bar"></i>
//             <span>Grades</span>
//           </a>
//         </li>
//         <li>
//           <a href="#students">
//             <i className="fas fa-users"></i>
//             <span>Students</span>
//           </a>
//         </li>
//         <li>
//           <a href="#calendar">
//             <i className="fas fa-calendar"></i>
//             <span>Calendar</span>
//           </a>
//         </li>
//         <li>
//           <a href="#resources">
//             <i className="fas fa-folder"></i>
//             <span>Resources</span>
//           </a>
//         </li>
//       </ul>

//       <div className="teacher-profile-sidebar">
//         <div className="profile-content">
//           <div className="profile-avatar">
//             <i className="fas fa-user"></i>
//             <div className="profile-status"></div>
//           </div>
//           <div className="profile-info-sidebar">
//             <h4>Sarah Johnson</h4>
//             <p>Mathematics Teacher</p>
//             <div className="teacher-rating">
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star-half-alt"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const AssignmentCard = ({ assignment }) => (
//     <div className="assignment-card">
//       <div className="assignment-header">
//         <h3>{assignment.title}</h3>
//         <span className={`status-badge ${assignment.status.toLowerCase()}`}>
//           {assignment.status}
//         </span>
//       </div>
      
//       <div className="assignment-subject">
//         {assignment.subject} • {assignment.grade}
//       </div>
      
//       <div className="assignment-stats">
//         <div className="stat-item">
//           <div className="stat-label">Due Date</div>
//           <div className="stat-value">{assignment.dueDate}</div>
//         </div>
//         <div className="stat-item">
//           <div className="stat-label">Total Students</div>
//           <div className="stat-value">{assignment.totalStudents}</div>
//         </div>
//         <div className="stat-item">
//           <div className="stat-label">Submitted</div>
//           <div className="stat-value">{assignment.submitted} / {assignment.totalStudents}</div>
//         </div>
//         <div className="stat-item">
//           <div className="stat-label">Graded</div>
//           <div className="stat-value">{assignment.graded} / {assignment.submitted}</div>
//         </div>
//       </div>
      
//       <div className="assignment-actions">
//         <button className="btn btn-primary">
//           <i className="fas fa-eye"></i> View Submissions
//         </button>
//         <button className="btn btn-secondary">
//           <i className="fas fa-edit"></i> Edit
//         </button>
//         <button className="btn btn-danger">
//           <i className="fas fa-trash"></i> Delete
//         </button>
//       </div>
//     </div>
//   );

//   const AssignmentView = () => (
//     <div className="main-content">
//       <div className="content-header">
//         <h1>Assignment Management</h1>
//         <p>Create, grade, and monitor student assignments</p>
//       </div>
      
//       <div className="section">
//         <h2>All Assignments</h2>
//         <div className="tabs">
//           {['All', 'Active', 'Upcoming', 'Closed'].map(tab => (
//             <button
//               key={tab}
//               className={`tab ${activeTab === tab ? 'active' : ''}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>
      
//       <div className="assignments-grid">
//         {filteredAssignments.map(assignment => (
//           <AssignmentCard key={assignment.id} assignment={assignment} />
//         ))}
//       </div>
      
//       <div className="search-section">
//         <div className="search-box">
//           <i className="fas fa-search"></i>
//           <input type="text" placeholder="Search assignments..." />
//         </div>
//         <div className="action-buttons">
//           <button className="btn btn-outline">
//             <i className="fas fa-download"></i> DNG
//           </button>
//           <button className="btn btn-primary">
//             <i className="fas fa-search"></i> FIND/VIEW
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const DashboardView = () => (
//     <div className="main-content">
//       <div className="content-header">
//         <h1>Teacher Dashboard</h1>
//         <p>Welcome back, Sarah! Here's your overview for today.</p>
//       </div>
//       <div className="placeholder-content">
//         <h2>Dashboard Overview</h2>
//         <p>Select "Assignments" from the sidebar to manage your assignments.</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="dashboard">
//       <Sidebar />
//       {currentView === 'assignments' ? <AssignmentView /> : <DashboardView />}
//     </div>
//   );
// };

// export default AssignmentManagement;







import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AssignmentManagement.css';

function AssignmentManagement() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  
  const handleNavigation = (page) => {
    if (page === 'dashboard') {
      navigate('/');
    }
  };

  // Sample data for assignments
  const assignments = [
    {
      id: 1,
      title: "Quadratic Equations Problem Set",
      subject: "Mathematics",
      grade: "Grade 10",
      dueDate: "Oct 18, 2025",
      totalStudents: 62,
      submitted: 58,
      graded: 45,
      status: "active",
      lastEdited: "2 days ago",
      description: "Practice problems covering factoring, quadratic formula, and real-world applications of quadratic equations."
    },
    {
      id: 2,
      title: "Chemical Reactions Lab",
      subject: "Chemistry",
      grade: "Grade 11",
      dueDate: "Nov 5, 2025",
      totalStudents: 45,
      submitted: 32,
      graded: 28,
      status: "active",
      lastEdited: "1 day ago",
      description: "Laboratory experiment analyzing different types of chemical reactions and their properties."
    },
    {
      id: 3,
      title: "World War II Essay",
      subject: "History",
      grade: "Grade 9",
      dueDate: "Sep 30, 2025",
      totalStudents: 58,
      submitted: 58,
      graded: 58,
      status: "closed",
      lastEdited: "1 week ago",
      description: "Analytical essay on the causes and consequences of World War II with primary source analysis."
    },
    {
      id: 4,
      title: "Physics Kinematics Quiz",
      subject: "Physics",
      grade: "Grade 11",
      dueDate: "Dec 15, 2025",
      totalStudents: 40,
      submitted: 0,
      graded: 0,
      status: "upcoming",
      lastEdited: "3 hours ago",
      description: "Multiple choice and problem-solving quiz covering motion, velocity, and acceleration concepts."
    },
    {
      id: 5,
      title: "Literary Analysis - Shakespeare",
      subject: "English",
      grade: "Grade 10",
      dueDate: "Nov 12, 2025",
      totalStudents: 55,
      submitted: 42,
      graded: 35,
      status: "active",
      lastEdited: "5 days ago",
      description: "Critical analysis of Shakespeare's sonnets focusing on themes and literary devices."
    },
    {
      id: 6,
      title: "Cell Biology Worksheet",
      subject: "Biology",
      grade: "Grade 9",
      dueDate: "Oct 25, 2025",
      totalStudents: 60,
      submitted: 48,
      graded: 30,
      status: "active",
      lastEdited: "4 days ago",
      description: "Comprehensive worksheet covering cell structure, organelles, and cellular processes."
    }
  ];

  const filteredAssignments = assignments.filter(assignment => 
    activeTab === 'All' ? true : assignment.status === activeTab.toLowerCase()
  );

  return (
    <div className="assignment-management">
      {/* Sidebar */}
      <div className="assignment-sidebar">
        <div className="sidebar-header">
          <h2>Ruwwad</h2>
          <p>Teacher Portal</p>
        </div>
        
        <ul className="sidebar-nav">
          <li onClick={() => handleNavigation('dashboard')}>
            <i className="fas fa-chart-line"></i>
            Dashboard
          </li>
          <li>
            <i className="fas fa-book"></i>
            Lessons
          </li>
          <li className="active">
            <i className="fas fa-tasks"></i>
            Assignments
          </li>
          <li>
            <i className="fas fa-chart-bar"></i>
            Analytics
          </li>
          <li>
            <i className="fas fa-bell"></i>
            Notifications
          </li>
          <li>
            <i className="fas fa-robot"></i>
            A Assistant
          </li>
          <li>
            <i className="fas fa-cog"></i>
            Account
          </li>
        </ul>

        {/* Teacher Profile in Sidebar */}
        <div className="teacher-profile-sidebar">
          <div className="profile-avatar">
            <i className="fas fa-user"></i>
          </div>
          <div className="profile-info-sidebar">
            <h4>Sarah Johnson</h4>
            <p>Mathematics Teacher</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="assignment-main-content">
        <div className="content-container">
          {/* Header Section */}
          <div className="assignment-header">
            <div className="header-content">
              <div className="header-text">
                <h1>Assignment Management</h1>
                <p>Create, grade, and monitor student assignments</p>
              </div>
              <div className="header-stats">
                <div className="stat-item">
                  <span className="stat-number">{assignments.length}</span>
                  <span className="stat-label">Total Assignments</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{assignments.filter(a => a.status === 'active').length}</span>
                  <span className="stat-label">Active</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{assignments.filter(a => a.status === 'upcoming').length}</span>
                  <span className="stat-label">Upcoming</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{assignments.filter(a => a.status === 'closed').length}</span>
                  <span className="stat-label">Closed</span>
                </div>
              </div>
            </div>
            
            <div className="search-container">
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search assignments..."
              />
              <i className="fas fa-search search-icon"></i>
            </div>
          </div>

          {/* Action Bar */}
          <div className="action-bar">
            <button className="create-assignment-btn">
              <i className="fas fa-plus"></i>
              Create New Assignment
            </button>
            <div className="filter-options">
              <select 
                className="filter-select"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
              >
                <option>All</option>
                <option>Active</option>
                <option>Upcoming</option>
                <option>Closed</option>
              </select>
              <select className="filter-select">
                <option>All Subjects</option>
                <option>Mathematics</option>
                <option>Science</option>
                <option>English</option>
                <option>History</option>
                <option>Biology</option>
                <option>Physics</option>
                <option>Chemistry</option>
              </select>
              <select className="filter-select">
                <option>All Grades</option>
                <option>Grade 9</option>
                <option>Grade 10</option>
                <option>Grade 11</option>
                <option>Grade 12</option>
              </select>
              <button className="filter-btn">
                <i className="fas fa-filter"></i>
                Filter
              </button>
            </div>
          </div>

          {/* Assignment Tabs */}
          <div className="assignment-tabs">
            {['All', 'Active', 'Upcoming', 'Closed'].map(tab => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                <span className="tab-count">
                  {tab === 'All' ? assignments.length : 
                   assignments.filter(a => a.status === tab.toLowerCase()).length}
                </span>
              </button>
            ))}
          </div>

          {/* Assignments Grid */}
          <div className="assignments-grid">
            {filteredAssignments.map((assignment) => (
              <div key={assignment.id} className="assignment-card">
                <div className="assignment-card-header">
                  <div className="assignment-header-section">
                    <div className="assignment-title-section">
                      <h3>{assignment.title}</h3>
                      <p className="assignment-subject-grade">
                        <i className="fas fa-book-open"></i>
                        {assignment.subject} • {assignment.grade}
                      </p>
                    </div>
                    <span className={`status-badge ${assignment.status}`}>
                      <i className={`fas ${
                        assignment.status === 'active' ? 'fa-play-circle' : 
                        assignment.status === 'upcoming' ? 'fa-clock' : 
                        'fa-check-circle'
                      }`}></i>
                      {assignment.status}
                    </span>
                  </div>
                </div>

                <div className="assignment-description">
                  {assignment.description}
                </div>

                <div className="assignment-details">
                  <div className="detail-item">
                    <i className="fas fa-calendar-day"></i>
                    <span>Due: {assignment.dueDate}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-users"></i>
                    <span>{assignment.totalStudents} Students</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-edit"></i>
                    <span>Edited {assignment.lastEdited}</span>
                  </div>
                </div>

                <div className="assignment-progress">
                  <div className="progress-section">
                    <div className="progress-header">
                      <span>Submission Progress</span>
                      <span>{assignment.submitted}/{assignment.totalStudents}</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill submitted"
                        style={{width: `${(assignment.submitted / assignment.totalStudents) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="progress-section">
                    <div className="progress-header">
                      <span>Grading Progress</span>
                      <span>{assignment.graded}/{assignment.submitted || 1}</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill graded"
                        style={{width: `${(assignment.graded / (assignment.submitted || 1)) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="assignment-meta">
                  <div className="meta-item">
                    <i className="fas fa-paper-plane"></i>
                    <span>{assignment.submitted} Submitted</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-check-circle"></i>
                    <span>{assignment.graded} Graded</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-clock"></i>
                    <span>{assignment.totalStudents - assignment.submitted} Pending</span>
                  </div>
                </div>

                <div className="assignment-actions">
                  <button className="action-btn view-submissions">
                    <i className="fas fa-eye"></i>
                    View Submissions
                  </button>
                  <button className="action-btn grade">
                    <i className="fas fa-check-double"></i>
                    Grade
                  </button>
                  <button className="action-btn edit">
                    <i className="fas fa-edit"></i>
                    Edit
                  </button>
                  <button className="action-btn more">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Section */}
          <div className="load-more-section">
            <button className="load-more-btn">
              <i className="fas fa-redo"></i>
              Load More Assignments
            </button>
            <div className="pagination-info">
              Showing {filteredAssignments.length} of {assignments.length} assignments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentManagement;

