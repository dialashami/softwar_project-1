import React from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { BookOpen, Trophy, Target, TrendingUp, CheckCircle } from 'lucide-react';

// دالة بسيطة تاخد الإيميل وترجع اسم مرتب
const getNameFromEmail = (email) => {
  if (!email) return '';

  const [localPart] = email.split('@'); // الجزء اللي قبل @
  const cleaned = localPart
    .replace(/\d+/g, '') // يشيل الأرقام
    .replace(/[._-]+/g, ' '); // يحول . و _ و - لمسافات

  return cleaned
    .split(' ')
    .filter(Boolean)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
};

// Mock data for children
const childrenData = [
  {
    id: 1,
    name: 'Sarah Ahmed',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    grade: 'Grade 8',
    overallProgress: 85,
    completedLessons: 42,
    totalLessons: 50,
    averageScore: 88,
    recentQuizzes: [
      { subject: 'Mathematics', score: 92, date: '2025-10-14' },
      { subject: 'Science', score: 88, date: '2025-10-13' },
      { subject: 'English', score: 85, date: '2025-10-12' },
    ],
    subjects: [
      { name: 'Mathematics', progress: 90, grade: 'A' },
      { name: 'Science', progress: 85, grade: 'A-' },
      { name: 'English', progress: 82, grade: 'B+' },
      { name: 'History', progress: 88, grade: 'A-' },
      { name: 'Arabic', progress: 80, grade: 'B+' },
    ],
    upcomingAssignments: 3,
    studyStreak: 12,
  },
  {
    id: 2,
    name: 'Omar Ahmed',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    grade: 'Grade 5',
    overallProgress: 78,
    completedLessons: 35,
    totalLessons: 48,
    averageScore: 82,
    recentQuizzes: [
      { subject: 'Mathematics', score: 85, date: '2025-10-14' },
      { subject: 'Science', score: 80, date: '2025-10-13' },
      { subject: 'Arabic', score: 79, date: '2025-10-12' },
    ],
    subjects: [
      { name: 'Mathematics', progress: 80, grade: 'B+' },
      { name: 'Science', progress: 78, grade: 'B' },
      { name: 'English', progress: 85, grade: 'A-' },
      { name: 'Arabic', progress: 75, grade: 'B' },
    ],
    upcomingAssignments: 2,
    studyStreak: 8,
  },
];

const Dashboard = ({ userEmail }) => {
  const userName = getNameFromEmail(userEmail);
  const childNames = childrenData.map((child) => child.name).join(', ');

  return (
    <div className="dashboard">
      {/* العنوان العلوي */}
      <div className="welcome">
           <h1>Welcome {userName}</h1>
    <p>Your child&apos;s: {childNames}</p>
      </div>
  

      {childrenData.map((child) => (
        <div key={child.id}>
          {/* Child Card */}
          <Card className="child-card">
            {/* Header */}
            <CardHeader className="child-card-header">
              <div className="child-card-header-top">
                <div className="child-card-header-main">
                  <Avatar className="child-avatar">
                    <AvatarImage src={child.avatar} alt={child.name} />
                    <AvatarFallback>
                      {child.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="child-name">{child.name}</CardTitle>
                    <CardDescription className="child-grade">
                      {child.grade}
                    </CardDescription>
                  </div>
                </div>
                <Badge className="overall-badge">
                  Overall: {child.overallProgress}%
                </Badge>
              </div>
            </CardHeader>

            {/* Content */}
            <CardContent className="child-card-content">
              {/* Quick Stats */}
              <div className="quick-stats-grid">
                <div className="quick-stat-card quick-stat-lessons">
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        marginBottom: '0.35rem',
                      }}
                    >
                      <BookOpen style={{ width: 16, height: 16 }} />
                      <span>Lessons</span>
                    </div>
                    <p>
                      {child.completedLessons}/{child.totalLessons}
                    </p>
                    <p>Completed</p>
                  </div>
                </div>

                <div className="quick-stat-card quick-stat-average">
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        marginBottom: '0.35rem',
                      }}
                    >
                      <Trophy style={{ width: 16, height: 16 }} />
                      <span>Average</span>
                    </div>
                    <p>{child.averageScore}%</p>
                    <p>Score</p>
                  </div>
                </div>

                <div className="quick-stat-card quick-stat-assignments">
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        marginBottom: '0.35rem',
                      }}
                    >
                      <Target style={{ width: 16, height: 16 }} />
                      <span>Assignments</span>
                    </div>
                    <p>{child.upcomingAssignments}</p>
                    <p>Upcoming</p>
                  </div>
                </div>

                <div className="quick-stat-card quick-stat-streak">
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        marginBottom: '0.35rem',
                      }}
                    >
                      <TrendingUp style={{ width: 16, height: 16 }} />
                      <span>Study Streak</span>
                    </div>
                    <p>{child.studyStreak} days</p>
                    <p>Current</p>
                  </div>
                </div>
              </div>

              {/* Subject Progress */}
              <div className="subject-section">
                <h3 className="section-title">Subject Progress</h3>
                <div className="subject-list">
                  {child.subjects.map((subject) => (
                    <div key={subject.name} className="subject-card">
                      <div className="subject-header">
                        <span className="subject-name">{subject.name}</span>
                        <Badge className="subject-badge">{subject.grade}</Badge>
                      </div>
                      <Progress
                        value={subject.progress}
                        className="subject-progress-bar"
                      />
                      <p className="subject-progress-text">
                        {subject.progress}% complete
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Quizzes */}
              <div className="quiz-section">
                <h3 className="section-title">Recent Quiz Results</h3>
                <div className="quiz-list">
                  {child.recentQuizzes.map((quiz, index) => (
                    <div key={index} className="quiz-card">
                      <div className="quiz-left">
                        <div
                          className={
                            'quiz-icon ' +
                            (quiz.score >= 90
                              ? 'quiz-icon-green'
                              : quiz.score >= 80
                              ? 'quiz-icon-blue'
                              : 'quiz-icon-yellow')
                          }
                        >
                          <CheckCircle className="quiz-icon-svg" />
                        </div>
                        <div>
                          <p className="quiz-subject">{quiz.subject}</p>
                          <p className="quiz-date">{quiz.date}</p>
                        </div>
                      </div>
                      <div className="quiz-score-wrapper">
                        <p
                          className={
                            'quiz-score ' +
                            (quiz.score >= 90
                              ? 'quiz-score-green'
                              : quiz.score >= 80
                              ? 'quiz-score-blue'
                              : 'quiz-score-yellow')
                          }
                        >
                          {quiz.score}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
