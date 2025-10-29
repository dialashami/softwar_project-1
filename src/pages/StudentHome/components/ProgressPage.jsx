import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Target, Flame, Trophy, Star, BookOpen, Brain } from 'lucide-react';
 

const subjectProgress = [
  { name: 'Mathematics', progress: 85, lessons: 24, quizzes: 18, grade: 'A', colorClass: 'subj-math', trend: '+5%' },
  { name: 'Physics', progress: 72, lessons: 20, quizzes: 15, grade: 'B+', colorClass: 'subj-phys', trend: '+3%' },
  { name: 'Chemistry', progress: 90, lessons: 22, quizzes: 16, grade: 'A+', colorClass: 'subj-chem', trend: '+8%' },
  { name: 'Biology', progress: 68, lessons: 18, quizzes: 12, grade: 'B', colorClass: 'subj-bio', trend: '+2%' },
  { name: 'English', progress: 95, lessons: 26, quizzes: 20, grade: 'A+', colorClass: 'subj-eng', trend: '+6%' },
];

const achievements = [
  { id: 1, title: 'Quick Learner', description: 'Completed 10 lessons in one week', icon: '⚡', earned: true },
  { id: 2, title: 'Perfect Score', description: 'Scored 100% on 5 quizzes', icon: '💯', earned: true },
  // { id: 3, title: 'Streak Master', description: 'Maintained 30-day learning streak', icon: '🔥', earned: true },
  { id: 4, title: 'Math Genius', description: 'Completed all Math lessons', icon: '🎯', earned: false },
  { id: 5, title: 'Science Explorer', description: 'Completed 50 science lessons', icon: '🔬', earned: true },
  { id: 6, title: 'Early Bird', description: 'Started 10 lessons before deadline', icon: '🌅', earned: false },
];

const weeklyActivity = [
  { day: 'Mon', hours: 3.5 },
  { day: 'Tue', hours: 2.8 },
  { day: 'Wed', hours: 4.2 },
  { day: 'Thu', hours: 3.0 },
  { day: 'Fri', hours: 2.5 },
  { day: 'Sat', hours: 5.0 },
  { day: 'Sun', hours: 4.5 },
];

const stats = [
  { icon: BookOpen, label: 'Lessons Completed', value: '110', colorClass: 'stat-bg-blue' },
  { icon: Target, label: 'Quizzes Passed', value: '81', colorClass: 'stat-bg-purple' },
  { icon: Trophy, label: 'Achievements', value: '12', colorClass: 'stat-bg-yellow' },
  // { icon: Flame, label: 'Day Streak', value: '23', colorClass: 'stat-bg-orange' },
];

export default function ProgressPage() {
  const overallProgress = 82;
  const maxHours = Math.max(...weeklyActivity.map(d => d.hours));

  return (
    <div className="progress-page-wrapper">
      {/* Header */}
      <div>
        <h1 className="progress-header-title">My Progress 📊</h1>
        <p className="progress-header-subtitle">
          Track your learning journey and achievements
        </p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="stat-card">
                <div className="stat-card-row">
                  <div className={`stat-card-icon ${stat.colorClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="stat-card-label">{stat.label}</p>
                    <p className="stat-card-value">{stat.value}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Grid */}
      <div className="main-grid">
        {/* LEFT SIDE */}
        <div className="left-col">
          {/* Overall Progress */}
          <div className="overall-progress-card">
            <div className="overall-progress-top">
              <div>
                <div className="overall-progress-left-title">Overall Progress</div>
                <div className="overall-progress-left-sub">
                  You're doing great! Keep it up 🎉
                </div>
              </div>
              <div className="overall-progress-percent">{overallProgress}%</div>
            </div>
            <div className="overall-progress-bar-wrapper">
              <div
                className="overall-progress-bar-fill"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Progress by Subject */}
          <div className="subject-card">
            <div className="subject-card-title">Progress by Subject</div>

            {subjectProgress.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="subject-row"
              >
                <div className="subject-row-header">
                  <div className="subject-left">
                    <div className={`subject-icon-bubble ${subject.colorClass}`}>
                      {subject.name[0]}
                    </div>
                    <div>
                      <div className="subject-text-title">{subject.name}</div>
                      <div className="subject-text-sub">
                        {subject.lessons} lessons • {subject.quizzes} quizzes
                      </div>
                    </div>
                  </div>

                  <div className="subject-right">
                    <div className="grade-badge">Grade: {subject.grade}</div>
                    <div className="subject-numbers">
                      <div className="subject-percent">{subject.progress}%</div>
                      <div className="subject-trend">{subject.trend}</div>
                    </div>
                  </div>
                </div>

                <div className="subject-progress-track">
                  <div
                    className="subject-progress-fill"
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Weekly Activity */}
          <div className="weekly-card">
            <div className="weekly-card-title">Weekly Activity</div>

            <div className="weekly-bars-wrapper">
              {weeklyActivity.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="weekly-bar-col"
                >
                  <div className="weekly-bar-outer">
                    <div
                      className="weekly-bar-inner"
                      style={{ height: `${(day.hours / maxHours) * 160}px` }}
                    ></div>
                  </div>
                  <div className="weekly-day">{day.day}</div>
                  <div className="weekly-hours">{day.hours}h</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-col">
          <div className="achievements-card">
            <div className="achievements-card-title">Achievements 🏆</div>

            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`achievement-item ${
                  achievement.earned ? 'achievement-earned' : ''
                }`}
              >
                <div className="achievement-icon-box">
                  {achievement.earned ? achievement.icon : '🔒'}
                </div>

                <div className="achievement-texts">
                  <div className="achievement-title">{achievement.title}</div>
                  <div className="achievement-desc">
                    {achievement.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
