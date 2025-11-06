
/*


import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, BookOpen, FileText, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useStore } from '../hooks/useStore';
import '../styles/dashboard.css';
export function Dashboard() {
  const store = useStore();
  const students = store.getStudents();
  const lessons = store.getLessons();
  const assignments = store.getAssignments();
  
  const totalStudents = students.length;
  const activeLessons = lessons.filter(l => l.status === 'published').length;
  const pendingAssignments = assignments.filter(a => a.status === 'active').length;
  const avgPerformance = students.length > 0 
    ? Math.round(students.reduce((sum, s) => sum + s.avgScore, 0) / students.length)
    : 0;

  const statsData = [
    { label: 'Total Students', value: totalStudents.toString(), change: '+12%', icon: Users, color: 'text-blue-600' },
    { label: 'Active Lessons', value: activeLessons.toString(), change: '+3', icon: BookOpen, color: 'text-green-600' },
    { label: 'Pending Assignments', value: pendingAssignments.toString(), change: '-8', icon: FileText, color: 'text-orange-600' },
    { label: 'Avg. Performance', value: `${avgPerformance}%`, change: '+5%', icon: TrendingUp, color: 'text-purple-600' },
  ];

const classPerformanceData = [
  { class: 'Grade 9A', score: 85 },
  { class: 'Grade 9B', score: 78 },
  { class: 'Grade 10A', score: 92 },
  { class: 'Grade 10B', score: 88 },
  { class: 'Grade 11A', score: 81 },
];

const weeklyActivityData = [
  { day: 'Mon', submissions: 45, lessons: 12 },
  { day: 'Tue', submissions: 52, lessons: 15 },
  { day: 'Wed', submissions: 38, lessons: 10 },
  { day: 'Thu', submissions: 61, lessons: 18 },
  { day: 'Fri', submissions: 48, lessons: 14 },
  { day: 'Sat', submissions: 22, lessons: 6 },
  { day: 'Sun', submissions: 15, lessons: 4 },
];

  const upcomingLessons = lessons
    .filter(l => l.status === 'published')
    .slice(0, 4)
    .map((lesson, index) => ({
      id: lesson.id,
      title: lesson.title,
      class: lesson.grade,
      time: index === 0 ? 'Today, 10:00 AM' : index === 1 ? 'Today, 2:00 PM' : `Tomorrow, ${10 + index}:00 AM`
    }));

  const recentActivity = students.slice(0, 4).map((student, index) => ({
    id: student.id,
    student: student.name,
    action: index === 0 ? 'Submitted Assignment: Algebra Quiz' : 
            index === 1 ? 'Completed Lesson: Geometry Fundamentals' :
            index === 2 ? 'Asked Question in Math Forum' : 
            'Submitted Assignment: Calculus Problem Set',
    time: index === 0 ? '5 min ago' : index === 1 ? '12 min ago' : index === 2 ? '25 min ago' : '1 hour ago'
  }));

  return (
    <div className="p-8 space-y-6">
      <div className="mb-8">
        <h1 className="gradient-text">Welcome back, Sarah!</h1>
        <p className="text-muted-foreground">Here's an overview of your classes and students</p>
      </div>

      {/* Stats Grid *}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground">{stat.label}</p>
                    <h2 className="mt-2">{stat.value}</h2>
                    <p className={`mt-1 ${stat.color}`}>{stat.change}</p>
                  </div>
                  <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Row *}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
            <CardTitle>Class Performance Overview</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={classPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.02 270)" />
                <XAxis dataKey="class" stroke="oklch(0.5 0.05 270)" />
                <YAxis stroke="oklch(0.5 0.05 270)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white',
                    border: '1px solid oklch(0.9 0.02 270)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Bar dataKey="score" fill="url(#colorGradient)" radius={[12, 12, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.6 0.25 280)" />
                    <stop offset="100%" stopColor="oklch(0.65 0.2 260)" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
            <CardTitle>Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.02 270)" />
                <XAxis dataKey="day" stroke="oklch(0.5 0.05 270)" />
                <YAxis stroke="oklch(0.5 0.05 270)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white',
                    border: '1px solid oklch(0.9 0.02 270)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Line type="monotone" dataKey="submissions" stroke="oklch(0.6 0.25 280)" strokeWidth={3} dot={{ fill: 'oklch(0.6 0.25 280)', r: 4 }} />
                <Line type="monotone" dataKey="lessons" stroke="oklch(0.65 0.2 260)" strokeWidth={3} dot={{ fill: 'oklch(0.65 0.2 260)', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Lists Row *}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
            <CardTitle>Upcoming Lessons</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-3">
              {upcomingLessons.map((lesson) => (
                <div key={lesson.id} className="flex items-start justify-between p-4 rounded-2xl bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.99_0.01_260)] hover:shadow-md transition-all duration-300 border border-[oklch(0.92_0.04_270)]">
                  <div>
                    <h4>{lesson.title}</h4>
                    <p className="text-muted-foreground">{lesson.class}</p>
                  </div>
                  <p className="text-muted-foreground whitespace-nowrap ml-4">{lesson.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="pb-4 border-b border-[oklch(0.92_0.04_270)] last:border-0 last:pb-0">
                  <h4>{activity.student}</h4>
                  <p className="text-muted-foreground">{activity.action}</p>
                  <p className="text-muted-foreground mt-1">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
*/
/////////////////////////////بدي الي تحت /////////////////////////////

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/dashboard.css';

// export function Dashboard() {
//   const navigate = useNavigate();

//   const handleNavigation = (page) => {
//     if (page === 'lessons') {
//       navigate('/lessons');
//     } else if (page === 'assignments') {
//       navigate('/assignments');
//     }
//   };

//   return (
//     <div className="dashboard">
//       {/* Sidebar */}
//       <div className="dashboard-sidebar">
//         <div className="sidebar-header">
//           <h2>Ruwwad</h2>
//           <p>Teacher Portal</p>
//         </div>
//         <ul className="sidebar-nav">
//           <li className="active">Dashboard</li>
//           <li onClick={() => handleNavigation('lessons')} style={{cursor: 'pointer'}}>Lessons</li>
//           <li onClick={() => handleNavigation('assignments')} style={{ cursor: 'pointer' }}>Assignments</li>
//           <li>Analytics</li>
//           <li>Notifications</li>
//           <li>AI Assistant</li>
//           <li>Account</li>
//         </ul>
//       </div>

//       {/* باقي الكود يبقى كما هو */}
//       <div className="dashboard-main">
//         <div className="dashboard-header">
//           <div className="welcome-section">
//             <h1>Welcome back, Sarah!</h1>
//             <p>Here's an overview of your classes and students</p>
//           </div>
          
//           <div className="search-bar">
//             <input type="text" placeholder="Search Johnson Mathematics" />
//             <i className="fas fa-search"></i>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="stats-grid">
//           <div className="stat-card">
//             <h3>Total Students</h3>
//             <div className="stat-number">5</div>
//             <div className="stat-change positive">+12%</div>
//           </div>
//           <div className="stat-card">
//             <h3>Active Lessons</h3>
//             <div className="stat-number">2</div>
//             <div className="stat-change positive">+3</div>
//           </div>
//           <div className="stat-card">
//             <h3>Pending Assignments</h3>
//             <div className="stat-number">1</div>
//             <div className="stat-change negative">-8</div>
//           </div>
//           <div className="stat-card">
//             <h3>Avg. Performance</h3>
//             <div className="stat-number">82%</div>
//             <div className="stat-change positive">+5%</div>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="charts-section">
//           <div className="chart-card class-performance">
//             <h3>Class Performance Overview</h3>
//             <div className="performance-bars">
//               <div className="performance-bar" style={{height: '85%'}}>
//                 <span className="performance-bar-label">Grade 9A</span>
//               </div>
//               <div className="performance-bar" style={{height: '78%'}}>
//                 <span className="performance-bar-label">Grade 9B</span>
//               </div>
//               <div className="performance-bar" style={{height: '92%'}}>
//                 <span className="performance-bar-label">Grade 10A</span>
//               </div>
//               <div className="performance-bar" style={{height: '88%'}}>
//                 <span className="performance-bar-label">Grade 10B</span>
//               </div>
//               <div className="performance-bar" style={{height: '81%'}}>
//                 <span className="performance-bar-label">Grade 11A</span>
//               </div>
//             </div>
//           </div>

//           <div className="chart-card">
//             <h3>Weekly Activity</h3>
//             <div className="weekly-activity">
//               <div className="activity-day">
//                 <span className="day-name">Mon</span>
//                 <div className="activity-stats">
//                   <div className="submissions">
//                     <div className="count">45</div>
//                     <div className="label">Submissions</div>
//                   </div>
//                   <div className="lessons">
//                     <div className="count">12</div>
//                     <div className="label">Lessons</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Lists Section */}
//         <div className="lists-section">
//           <div className="list-card">
//             <h3>Upcoming Lessons</h3>
//             <div className="lessons-list">
//               <div className="lesson-item">
//                 <div className="lesson-info">
//                   <h4>Quadratic Equations</h4>
//                   <p className="class">Grade 10</p>
//                 </div>
//                 <div className="lesson-time">Today, 10:00 AM</div>
//               </div>
//               <div className="lesson-item">
//                 <div className="lesson-info">
//                   <h4>Trigonometry Basics</h4>
//                   <p className="class">Grade 11</p>
//                 </div>
//                 <div className="lesson-time">Today, 2:00 PM</div>
//               </div>
//             </div>
//           </div>

//           <div className="list-card">
//             <h3>Recent Activity</h3>
//             <div className="activity-list">
//               <div className="activity-item">
//                 <h4 className="activity-student">Ahmed Hassan</h4>
//                 <p className="activity-action">Submitted Assignment: Algebra Quiz</p>
//                 <p className="activity-time">5 min ago</p>
//               </div>
//               <div className="activity-item">
//                 <h4 className="activity-student">Fatima Ali</h4>
//                 <p className="activity-action">Completed Lesson: Geometry Fundamentals</p>
//                 <p className="activity-time">12 min ago</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Teacher Profile */}
//         <div className="teacher-profile">
//           <div className="profile-avatar">SJ</div>
//           <div className="profile-info">
//             <h4>Sarah Johnson</h4>
//             <p>Mathematics</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
///////////////////////////بدي الي فوق ////////////////////////////////////
import React from 'react';
import '../styles/dashboard.css';

export function Dashboard({ onNavigate }) {
  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>Welcome back, Sarah!</h1>
          <p>Here's an overview of your classes and students</p>
        </div>
        
        
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Students</h3>
          <div className="stat-number">5</div>
          <div className="stat-change positive">+12%</div>
        </div>
        <div className="stat-card">
          <h3>Active Lessons</h3>
          <div className="stat-number">2</div>
          <div className="stat-change positive">+3</div>
        </div>
        <div className="stat-card">
          <h3>Pending Assignments</h3>
          <div className="stat-number">1</div>
          <div className="stat-change negative">-8</div>
        </div>
        <div className="stat-card">
          <h3>Avg. Performance</h3>
          <div className="stat-number">82%</div>
          <div className="stat-change positive">+5%</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-card class-performance">
          <h3>Class Performance Overview</h3>
          <div className="performance-bars">
            <div className="performance-bar" style={{height: '85%'}}>
              <span className="performance-bar-label">Grade 9A</span>
            </div>
            <div className="performance-bar" style={{height: '78%'}}>
              <span className="performance-bar-label">Grade 9B</span>
            </div>
            <div className="performance-bar" style={{height: '92%'}}>
              <span className="performance-bar-label">Grade 10A</span>
            </div>
            <div className="performance-bar" style={{height: '88%'}}>
              <span className="performance-bar-label">Grade 10B</span>
            </div>
            <div className="performance-bar" style={{height: '81%'}}>
              <span className="performance-bar-label">Grade 11A</span>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>Weekly Activity</h3>
          <div className="weekly-activity">
            <div className="activity-day">
              <span className="day-name">Mon</span>
              <div className="activity-stats">
                <div className="submissions">
                  <div className="count">45</div>
                  <div className="label">Submissions</div>
                </div>
                <div className="lessons">
                  <div className="count">12</div>
                  <div className="label">Lessons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lists Section */}
      <div className="lists-section">
        <div className="list-card">
          <h3>Upcoming Lessons</h3>
          <div className="lessons-list">
            <div className="lesson-item">
              <div className="lesson-info">
                <h4>Quadratic Equations</h4>
                <p className="class">Grade 10</p>
              </div>
              <div className="lesson-time">Today, 10:00 AM</div>
            </div>
            <div className="lesson-item">
              <div className="lesson-info">
                <h4>Trigonometry Basics</h4>
                <p className="class">Grade 11</p>
              </div>
              <div className="lesson-time">Today, 2:00 PM</div>
            </div>
          </div>
        </div>

        <div className="list-card">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <h4 className="activity-student">Ahmed Hassan</h4>
              <p className="activity-action">Submitted Assignment: Algebra Quiz</p>
              <p className="activity-time">5 min ago</p>
            </div>
            <div className="activity-item">
              <h4 className="activity-student">Fatima Ali</h4>
              <p className="activity-action">Completed Lesson: Geometry Fundamentals</p>
              <p className="activity-time">12 min ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Teacher Profile */}
      <div className="teacher-profile">
        <div className="profile-avatar">SJ</div>
        <div className="profile-info">
          <h4>Sarah Johnson</h4>
          <p>Mathematics</p>
        </div>
      </div>
    </div>
  );
}