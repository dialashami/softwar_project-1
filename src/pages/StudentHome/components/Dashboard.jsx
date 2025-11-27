 





import { useState } from 'react';
import { Card, Button, Badge } from './ui';
import { FaBook, FaClipboardList, FaChartBar, FaBell, FaCalendar, FaCheckCircle,  FaFileUpload, FaGraduationCap, FaFlask, FaAtom } from "react-icons/fa";
 
export function Dashboard() {
  // State for tracking progress and interactions
  const [progressData, setProgressData] = useState({
    mathematics: { percent: 65, lessons: 12, quizzes: 8, avgScore: 85 },
    physics: { percent: 42, lessons: 8, quizzes: 5, avgScore: 78 },
    chemistry: { percent: 30, lessons: 6, quizzes: 3, avgScore: 72 }
  });

  const [scheduleItems, setScheduleItems] = useState([
    { id: 1, time: "09:00 AM", title: "Mathematics Lecture", description: "Advanced Calculus - Room 204", subject: "math", duration: "1h 30m", completed: true },
    { id: 2, time: "11:00 AM", title: "Physics Lab", description: "Quantum Mechanics Experiments - Lab 3", subject: "physics", duration: "2h", completed: false },
    { id: 3, time: "02:00 PM", title: "Chemistry Tutorial", description: "Organic Compounds - Online Session", subject: "chemistry", duration: "1h", completed: false },
    { id: 4, time: "04:00 PM", title: "Study Group", description: "Biology Review - Library Study Room", subject: "biology", duration: "1h 30m", completed: false }
  ]);

  const [activities, setActivities] = useState([
    { id: 1, type: "quiz", title: "Completed Physics Quiz", description: "Scored 95% on Newton's Laws assessment", score: "95%", read: true },
    { id: 2, type: "feedback", title: "Teacher Feedback Received", description: "Ms. Sarah commented on your Chemistry report", status: "New", read: false }
  ]);

  // State for current lesson/quiz/assignment
  const [currentContent, setCurrentContent] = useState(null);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [assignmentData, setAssignmentData] = useState({
    title: "Advanced Calculus Assignment",
    description: "Complete problems 1-10 from chapter 5",
    dueDate: "2023-06-15",
    file: null
  });

  // Button handlers with actual functionality
  // const handleContinueLesson = () => {
  //   setCurrentContent({
  //     type: "lesson",
  //     title: "Advanced Calculus - Limits and Continuity",
  //     content: "In mathematics, a limit is the value that a function approaches as the input approaches some value. Limits are essential to calculus and mathematical analysis...",
  //     duration: "45 minutes",
  //     progress: 65
  //   });
  // };

  // const handleStartQuiz = () => {
  //   setCurrentQuiz({
  //     title: "Mathematics Quiz - Chapter 4",
  //     questions: [
  //       {
  //         id: 1,
  //         question: "What is the derivative of x²?",
  //         options: ["2x", "x", "2", "x²"],
  //         correctAnswer: 0
  //       },
  //       {
  //         id: 2,
  //         question: "What is the integral of 2x?",
  //         options: ["x²", "x² + C", "2x²", "2x² + C"],
  //         correctAnswer: 1
  //       }
  //     ],
  //     currentQuestion: 0,
  //     score: 0
  //   });
  // };

  // const handleSubmitAssignment = () => {
  //   setCurrentContent({
  //     type: "assignment",
  //     title: assignmentData.title,
  //     description: assignmentData.description,
  //     dueDate: assignmentData.dueDate
  //   });
  // };

  const handleViewDetails = (subject) => {
    setCurrentContent({
      type: "progress",
      subject: subject,
      data: progressData[subject] || progressData
    });
  };

  const handleViewFullSchedule = () => {
    setCurrentContent({
      type: "schedule",
      title: "Weekly Schedule",
      items: [
        ...scheduleItems,
        { id: 5, time: "10:00 AM", title: "Mathematics Review", description: "Group study session", subject: "math", duration: "1h", completed: false, day: "Tuesday" },
        { id: 6, time: "01:00 PM", title: "Physics Lecture", description: "Electromagnetism", subject: "physics", duration: "1h 30m", completed: false, day: "Wednesday" },
        { id: 7, time: "03:00 PM", title: "Chemistry Lab", description: "Chemical Reactions", subject: "chemistry", duration: "2h", completed: false, day: "Thursday" }
      ]
    });
  };

  const handleViewAllActivities = () => {
    setCurrentContent({
      type: "activities",
      title: "All Activities",
      items: [
        ...activities,
        { id: 3, type: "lesson", title: "Completed Mathematics Lesson", description: "Finished 'Limits and Continuity' chapter", score: null, read: true },
        { id: 4, type: "assignment", title: "Assignment Submitted", description: "Submitted 'Organic Chemistry' report", score: null, read: true },
        { id: 5, type: "quiz", title: "Chemistry Quiz Attempted", description: "Scored 82% on Periodic Table quiz", score: "82%", read: true }
      ]
    });
  };

  const handleMarkAsCompleted = (scheduleId) => {
    setScheduleItems(prevItems => 
      prevItems.map(item => 
        item.id === scheduleId ? { ...item, completed: true } : item
      )
    );
  };

  const handleMarkActivityAsRead = (activityId) => {
    setActivities(prevActivities => 
      prevActivities.map(activity => 
        activity.id === activityId ? { ...activity, read: true } : activity
      )
    );
  };

  const handleStartSubjectLesson = (subject) => {
    setCurrentContent({
      type: "lesson",
      title: `${subject.charAt(0).toUpperCase() + subject.slice(1)} - New Chapter`,
      content: `This is the beginning of a new ${subject} lesson. You will learn important concepts and principles...`,
      duration: "50 minutes",
      progress: progressData[subject].percent
    });
  };

  const handleTakeSubjectQuiz = (subject) => {
    setCurrentQuiz({
      title: `${subject.charAt(0).toUpperCase() + subject.slice(1)} Quiz`,
      questions: [
        {
          id: 1,
          question: `What is a fundamental concept in ${subject}?`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswer: Math.floor(Math.random() * 4)
        },
        {
          id: 2,
          question: `Which principle is most important in ${subject}?`,
          options: ["Principle 1", "Principle 2", "Principle 3", "Principle 4"],
          correctAnswer: Math.floor(Math.random() * 4)
        }
      ],
      currentQuestion: 0,
      score: 0
    });
  };

  const handleAnswerQuestion = (questionIndex, answerIndex) => {
    if (currentQuiz.questions[questionIndex].correctAnswer === answerIndex) {
      setCurrentQuiz(prev => ({
        ...prev,
        score: prev.score + 1,
        currentQuestion: prev.currentQuestion + 1
      }));
    } else {
      setCurrentQuiz(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    }
  };

  const handleFinishQuiz = () => {
    const finalScore = Math.round((currentQuiz.score / currentQuiz.questions.length) * 100);
    alert(`Quiz completed! Your score: ${finalScore}%`);
    setCurrentQuiz(null);
    
    // Update progress data
    setProgressData(prev => {
      const updated = {...prev};
      Object.keys(updated).forEach(subject => {
        if (currentQuiz.title.toLowerCase().includes(subject)) {
          updated[subject] = {
            ...updated[subject],
            quizzes: updated[subject].quizzes + 1,
            avgScore: Math.round((updated[subject].avgScore * updated[subject].quizzes + finalScore) / (updated[subject].quizzes + 1))
          };
        }
      });
      return updated;
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAssignmentData(prev => ({
        ...prev,
        file: file
      }));
    }
  };

  const handleSubmitAssignmentFile = () => {
    if (assignmentData.file) {
      alert(`Assignment "${assignmentData.title}" submitted successfully!`);
      setCurrentContent(null);
      setAssignmentData(prev => ({
        ...prev,
        file: null
      }));
    } else {
      alert("Please select a file to upload.");
    }
  };

  const handleCloseContent = () => {
    setCurrentContent(null);
    setCurrentQuiz(null);
  };

  // Function to get subject icon
  const getSubjectIcon = (subject) => {
    switch(subject) {
      case 'math': return <FaGraduationCap />;
      case 'physics': return <FaAtom />;
      case 'chemistry': return <FaFlask />;
      default: return <FaBook />;
    }
  };

  return (
    <div className="dashboard-container">
      {/* ======= Top Banner ======= */}
      <section className="welcome-banner">
        <div className="banner-left">
          <h1>Welcome back, Amira</h1>
          <p>
            Continue your learning journey and achieve your goals today!
          </p>
           
        </div>
        <div className="banner-right">
          <FaBook className="banner-icon" />
        </div>
      </section>

      {/* ======= Progress Tracker ======= */}
      <section className="section">
        <div className="section-header">
          <h2><FaChartBar /> Progress Tracker</h2>
          <button
  type="button"
  onClick={handleViewDetails.bind(null, 'all')}
  className="link-button"
>
  View Details
</button>
        </div>
        <div className="progress-tracker">
          {Object.entries(progressData).map(([subject, data]) => (
            <Card key={subject} className="progress-card">
              <div className="progress-header">
                <h3>{getSubjectIcon(subject)} {subject.charAt(0).toUpperCase() + subject.slice(1)}</h3>
                <span className="progress-percent">{data.percent}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{width: `${data.percent}%`}}
                ></div>
              </div>
              <div className="progress-stats">
                <div className="stat">
                  <span className="stat-value">{data.lessons}/20</span>
                  <span className="stat-label">Lessons</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{data.quizzes}/10</span>
                  <span className="stat-label">Quizzes</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{data.avgScore}%</span>
                  <span className="stat-label">Avg. Score</span>
                </div>
              </div>
             
            </Card>
          ))}
        </div>
      </section>

      {/* ======= Today's Schedule ======= */}
      <section className="section">
        <div className="section-header">
          <h2><FaCalendar /> Today's Schedule</h2>
          <button
  type="button"
  onClick={handleViewFullSchedule}
  className="link-button"
>
  View Full Schedule
</button>
        </div>
        <div className="schedule-container">
          {scheduleItems.map((item) => (
            <Card key={item.id} className="schedule-item">
              <div className="time-badge">
                <span>{item.time}</span>
              </div>
              <div className="schedule-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="schedule-meta">
                  <span className={`subject-tag ${item.subject}`}>
                    {getSubjectIcon(item.subject)} {item.subject.charAt(0).toUpperCase() + item.subject.slice(1)}
                  </span>
                  <span className="duration">{item.duration}</span>
                </div>
              </div>
              {item.completed ? (
                <FaCheckCircle className="status-icon completed" />
              ) : (
                <Button 
                  className="small primary" 
                  onClick={() => handleMarkAsCompleted(item.id)}
                >
                  Mark Done
                </Button>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* ======= Recent Activity ======= */}
      <section className="section">
        <div className="section-header">
          <h2><FaBell /> Recent Activity</h2>
          
<button
  type="button"
  onClick={handleViewAllActivities}
  className="link-button"
>
  View All
</button>
        </div>
        <div className="activity-list">
          {activities.map((activity) => (
            <Card key={activity.id} className="activity-item">
              {activity.type === "quiz" ? (
                <FaClipboardList className={`activity-icon ${activity.read ? 'read' : 'new'}`} />
              ) : (
                <FaBell className={`activity-icon ${activity.read ? 'read' : 'new'}`} />
              )}
              <div className="activity-content">
                <h4>{activity.title}</h4>
                <p>{activity.description}</p>
              </div>
              {activity.score ? (
                <Badge 
                  className={`score-badge ${activity.read ? 'read' : 'new'}`}
                  onClick={() => handleMarkActivityAsRead(activity.id)}
                >
                  {activity.score}
                </Badge>
              ) : (
                <Badge 
                  className={`status-badge ${activity.read ? 'read' : 'new'}`}
                  onClick={() => handleMarkActivityAsRead(activity.id)}
                >
                  {activity.status}
                </Badge>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* ======= Modal for current content ======= */}
      {currentContent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseContent}>×</button>
            <h2>{currentContent.title}</h2>
            
            {currentContent.type === "lesson" && (
              <div className="lesson-content">
                <div className="lesson-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{width: `${currentContent.progress}%`}}
                    ></div>
                  </div>
                  <span>{currentContent.progress}% Complete</span>
                </div>
                <div className="lesson-text">
                  <p>{currentContent.content}</p>
                </div>
                <div className="lesson-actions">
                  <Button className="primary">Mark as Completed</Button>
                  <Button className="secondary">Save Progress</Button>
                </div>
              </div>
            )}
            
            {currentContent.type === "assignment" && (
              <div className="assignment-content">
                <p><strong>Description:</strong> {currentContent.description}</p>
                <p><strong>Due Date:</strong> {currentContent.dueDate}</p>
                <div className="file-upload">
                  <input 
                    type="file" 
                    id="assignment-file" 
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="assignment-file" className="file-upload-label">
                    Choose File
                  </label>
                  {assignmentData.file && (
                    <span className="file-name">{assignmentData.file.name}</span>
                  )}
                </div>
                <Button className="primary" onClick={handleSubmitAssignmentFile}>
                  Submit Assignment
                </Button>
              </div>
            )}
            
            {currentContent.type === "progress" && (
              <div className="progress-details">
                {currentContent.subject === 'all' ? (
                  <div className="all-progress">
                    <h3>Overall Progress</h3>
                    {Object.entries(currentContent.data).map(([subject, data]) => (
                      <div key={subject} className="subject-progress-detail">
                        <h4>{subject.charAt(0).toUpperCase() + subject.slice(1)}</h4>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{width: `${data.percent}%`}}
                          ></div>
                        </div>
                        <div className="progress-stats">
                          <div className="stat">
                            <span>Lessons: {data.lessons}/20</span>
                          </div>
                          <div className="stat">
                            <span>Quizzes: {data.quizzes}/10</span>
                          </div>
                          <div className="stat">
                            <span>Average Score: {data.avgScore}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="single-subject-progress">
                    <h3>{currentContent.subject.charAt(0).toUpperCase() + currentContent.subject.slice(1)} Progress</h3>
                    <div className="progress-bar large">
                      <div 
                        className="progress-fill" 
                        style={{width: `${currentContent.data.percent}%`}}
                      ></div>
                    </div>
                    <div className="detailed-stats">
                      <div className="stat-card">
                        <h4>Lessons Completed</h4>
                        <span className="stat-value">{currentContent.data.lessons}/20</span>
                      </div>
                      <div className="stat-card">
                        <h4>Quizzes Taken</h4>
                        <span className="stat-value">{currentContent.data.quizzes}/10</span>
                      </div>
                      <div className="stat-card">
                        <h4>Average Score</h4>
                        <span className="stat-value">{currentContent.data.avgScore}%</span>
                      </div>
                      <div className="stat-card">
                        <h4>Time Spent</h4>
                        <span className="stat-value">15h 30m</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {currentContent.type === "schedule" && (
              <div className="full-schedule">
                <h3>Weekly Schedule</h3>
                <div className="schedule-days">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                    <div key={day} className="schedule-day">
                      <h4>{day}</h4>
                      {currentContent.items
                        .filter(item => !item.day || item.day === day)
                        .map(item => (
                          <div key={item.id} className="schedule-item compact">
                            <div className="time-badge small">
                              <span>{item.time}</span>
                            </div>
                            <div className="schedule-content">
                              <h5>{item.title}</h5>
                              <p>{item.description}</p>
                            </div>
                            {item.completed ? (
                              <FaCheckCircle className="status-icon completed" />
                            ) : (
                              <span className="pending">Pending</span>
                            )}
                          </div>
                        ))
                      }
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {currentContent.type === "activities" && (
              <div className="all-activities">
                <h3>All Activities</h3>
                <div className="activity-filters">
                  <Button className="small">All</Button>
                  <Button className="small secondary">Quizzes</Button>
                  <Button className="small secondary">Lessons</Button>
                  <Button className="small secondary">Assignments</Button>
                </div>
                <div className="activities-list">
                  {currentContent.items.map(activity => (
                    <div key={activity.id} className="activity-item detailed">
                      {activity.type === "quiz" ? (
                        <FaClipboardList className="activity-icon" />
                      ) : activity.type === "lesson" ? (
                        <FaBook className="activity-icon" />
                      ) : (
                        <FaFileUpload className="activity-icon" />
                      )}
                      <div className="activity-content">
                        <h4>{activity.title}</h4>
                        <p>{activity.description}</p>
                        <span className="activity-date">2 days ago</span>
                      </div>
                      {activity.score && (
                        <Badge className="score-badge">{activity.score}</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======= Quiz Modal ======= */}
      {currentQuiz && (
        <div className="modal-overlay">
          <div className="modal-content quiz-modal">
            <button className="close-button" onClick={handleCloseContent}>×</button>
            <h2>{currentQuiz.title}</h2>
            
            {currentQuiz.currentQuestion < currentQuiz.questions.length ? (
              <div className="quiz-question">
                <div className="quiz-progress">
                  Question {currentQuiz.currentQuestion + 1} of {currentQuiz.questions.length}
                </div>
                <h3>{currentQuiz.questions[currentQuiz.currentQuestion].question}</h3>
                <div className="quiz-options">
                  {currentQuiz.questions[currentQuiz.currentQuestion].options.map((option, index) => (
                    <Button 
                      key={index}
                      className="quiz-option"
                      onClick={() => handleAnswerQuestion(currentQuiz.currentQuestion, index)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="quiz-results">
                <h3>Quiz Completed!</h3>
                <p>Your score: {currentQuiz.score} out of {currentQuiz.questions.length}</p>
                <p>Percentage: {Math.round((currentQuiz.score / currentQuiz.questions.length) * 100)}%</p>
                <Button className="primary" onClick={handleFinishQuiz}>
                  Finish Quiz
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}