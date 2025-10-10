/** 
import React from 'react';


import '../CSS/StudentHome.css';

const StudentHome = () => {
  const subjects = [
    {
      id: 1,
      name: 'Mathematics',
      icon: '➕',
      description: 'Learn numbers, operations, and problem solving',
      color: '#4f46e5'
    },
    {
      id: 2,
      name: 'Arabic',
      icon: '📖',
      description: 'Arabic language and reading skills',
      color: '#059669'
    },
    {
      id: 3,
      name: 'English',
      icon: '🔤',
      description: 'English language and communication',
      color: '#dc2626'
    },
    {
      id: 4,
      name: 'Science',
      icon: '🔬',
      description: 'Discover the world of science',
      color: '#7c3aed'
    },
    {
      id: 5,
      name: 'Social Studies',
      icon: '🌍',
      description: 'Learn about society and environment',
      color: '#ea580c'
    },
    {
      id: 6,
      name: 'Art',
      icon: '🎨',
      description: 'Creative arts and drawing',
      color: '#db2777'
    }
  ];

  const handleSubjectClick = (subject) => {
    alert(`Opening ${subject.name} lessons`);
    // هنا يمكنك إضافة التنقل لصفحة المادة
  };

  return (
    <div className="student-home">
      {/* Header *}
      <header className="student-header">
        <div className="header-content">
          <h1 className="welcome-title">Welcome to Your Classroom</h1>
          <p className="grade-info">Grade 1 - Primary School</p>
          <div className="student-info">
            <span className="student-name">Student Name</span>
            <span className="school-name">Ruwwad Academy</span>
          </div>
        </div>
      </header>

      {/* Main Content *}
      <main className="student-main">
        <section className="subjects-section">
          <h2 className="section-title">Your Subjects</h2>
          <p className="section-subtitle">Choose a subject to start learning</p>
          
          <div className="subjects-grid">
            {subjects.map(subject => (
              <div 
                key={subject.id}
                className="subject-card"
                onClick={() => handleSubjectClick(subject)}
                style={{ '--subject-color': subject.color }}
              >
                <div className="subject-icon" style={{ backgroundColor: `${subject.color}20` }}>
                  <span className="icon">{subject.icon}</span>
                </div>
                <div className="subject-content">
                  <h3 className="subject-name">{subject.name}</h3>
                  <p className="subject-description">{subject.description}</p>
                </div>
                <div className="subject-arrow">→</div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Stats *}
        <section className="stats-section">
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-info">
              <h3>12</h3>
              <p>Lessons Completed</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-info">
              <h3>85%</h3>
              <p>Average Score</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <h3>5</h3>
              <p>Active Courses</p>
            </div>
          </div>
        </section>
      </main>

      {/* Navigation Footer *}
      <footer className="student-footer">
        <nav className="footer-nav">
          <button className="nav-item active">
            <span className="nav-icon">🏠</span>
            <span className="nav-label">Home</span>
          </button>
          <button className="nav-item">
            <span className="nav-icon">📅</span>
            <span className="nav-label">Schedule</span>
          </button>
          <button className="nav-item">
            <span className="nav-icon">📊</span>
            <span className="nav-label">Progress</span>
          </button>
          <button className="nav-item">
            <span className="nav-icon">👤</span>
            <span className="nav-label">Profile</span>
          </button>
        </nav>
      </footer>
    </div>
  );
};

export default StudentHome;*/



import React from 'react';
import '../CSS/StudentHome.css';

const StudentHome = () => {
  const subjects = [
    {
      id: 1,
      name: 'Mathematics',
      icon: '➕',
      description: 'Learn numbers, operations, and problem solving',
      color: '#4f46e5'
    },
    {
      id: 2,
      name: 'Arabic',
      icon: '📖',
      description: 'Arabic language and reading skills',
      color: '#059669'
    },
    {
      id: 3,
      name: 'English',
      icon: '🔤',
      description: 'English language and communication',
      color: '#dc2626'
    },
    {
      id: 4,
      name: 'Science',
      icon: '🔬',
      description: 'Discover the world of science',
      color: '#7c3aed'
    },
    {
      id: 5,
      name: 'Social Studies',
      icon: '🌍',
      description: 'Learn about society and environment',
      color: '#ea580c'
    },
    {
      id: 6,
      name: 'Art',
      icon: '🎨',
      description: 'Creative arts and drawing',
      color: '#db2777'
    }
  ];

  const handleSubjectClick = (subject) => {
    alert(`Opening ${subject.name} lessons`);
    // هنا يمكنك إضافة التنقل لصفحة المادة
  };

  return (
    <div className="student-home">
      {/* Header */}
      <header className="student-header">
        <div className="header-content">
          <h1 className="welcome-title">Welcome to Your Classroom</h1>
          <p className="grade-info">Grade 1 - Primary School</p>
          <div className="student-info">
            <span className="student-name">Student Name</span>
            <span className="school-name">Ruwwad Academy</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="student-main">
        <section className="subjects-section">
          <h2 className="section-title">Your Subjects</h2>
          <p className="section-subtitle">Choose a subject to start learning</p>
          
          <div className="subjects-grid">
            {subjects.map(subject => (
              <div 
                key={subject.id}
                className="subject-card"
                onClick={() => handleSubjectClick(subject)}
                style={{ '--subject-color': subject.color }}
              >
                <div className="subject-icon" style={{ backgroundColor: `${subject.color}20` }}>
                  <span className="icon">{subject.icon}</span>
                </div>
                <div className="subject-content">
                  <h3 className="subject-name">{subject.name}</h3>
                  <p className="subject-description">{subject.description}</p>
                </div>
                <div className="subject-arrow">→</div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="stats-section">
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-info">
              <h3>12</h3>
              <p>Lessons Completed</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-info">
              <h3>85%</h3>
              <p>Average Score</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <h3>5</h3>
              <p>Active Courses</p>
            </div>
          </div>
        </section>
      </main>

      {/* Navigation Footer */}
      <footer className="student-footer">
        <nav className="footer-nav">
          <button className="nav-item active">
            <span className="nav-icon">🏠</span>
            <span className="nav-label">Home</span>
          </button>
          <button className="nav-item">
            <span className="nav-icon">📅</span>
            <span className="nav-label">Schedule</span>
          </button>
          <button className="nav-item">
            <span className="nav-icon">📊</span>
            <span className="nav-label">Progress</span>
          </button>
          <button className="nav-item">
            <span className="nav-icon">👤</span>
            <span className="nav-label">Profile</span>
          </button>
        </nav>
      </footer>
    </div>
  );
};

export default StudentHome;