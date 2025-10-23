import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AssignmentManagement.css';

function AssignmentManagement({ onNavigate }) { // ✅ إضافة onNavigate كـ prop
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  
  // States للنوافذ المنبثقة الجديدة
  const [showSubmissionsModal, setShowSubmissionsModal] = useState(false);
  const [showGradeModal, setShowGradeModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(null);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [gradingMode, setGradingMode] = useState(''); // 'single' or 'bulk'

  // بيانات الواجبات
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Quadratic Equations Problem Set",
      subject: "Mathematics",
      grade: "Grade 10",
      dueDate: "2025-10-18",
      displayDate: "Oct 18, 2025",
      totalStudents: 62,
      submitted: 58,
      graded: 45,
      status: "active",
      lastEdited: "2 days ago",
      description: "Practice problems covering factoring, quadratic formula, and real-world applications of quadratic equations.",
      points: 100,
      passingScore: 60,
      instructions: "Solve all problems showing your work. Submit your answers in PDF format."
    },
    {
      id: 2,
      title: "Chemical Reactions Lab",
      subject: "Chemistry",
      grade: "Grade 11",
      dueDate: "2025-11-05",
      displayDate: "Nov 5, 2025",
      totalStudents: 45,
      submitted: 32,
      graded: 28,
      status: "active",
      lastEdited: "1 day ago",
      description: "Laboratory experiment analyzing different types of chemical reactions and their properties.",
      points: 100,
      passingScore: 70,
      instructions: "Complete the lab report following the scientific method format."
    }
  ]);

  // بيانات الطلاب (محاكاة)
  const [students, setStudents] = useState([
    { id: 1, name: "Ahmed Mohammed", submitted: true, grade: 85, submittedDate: "2025-10-15", file: "ahmed_assignment.pdf" },
    { id: 2, name: "Sarah Ali", submitted: true, grade: 92, submittedDate: "2025-10-16", file: "sarah_lab_report.docx" },
    { id: 3, name: "Mohammed Hassan", submitted: true, grade: null, submittedDate: "2025-10-17", file: "mohammed_work.pdf" },
    { id: 4, name: "Fatima Abdullah", submitted: false, grade: null, submittedDate: null, file: null },
    { id: 5, name: "Khalid Omar", submitted: true, grade: 78, submittedDate: "2025-10-14", file: "khalid_assignment.zip" }
  ]);

  // بيانات النموذج
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    grade: '',
    dueDate: '',
    totalStudents: 62,
    points: 100,
    passingScore: 60,
    instructions: '',
    status: 'upcoming'
  });

  const [gradeData, setGradeData] = useState({
    score: '',
    feedback: ''
  });

  const [bulkGradeData, setBulkGradeData] = useState({
    score: '',
    feedback: ''
  });

  // ✅ إزالة handleNavigation القديم واستخدام onNavigate مباشرة
  const handleNavigation = (page) => {
    onNavigate(page); // استخدام الـ prop من TeacherHome
  };

  // معالجة تغيير الحقول
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // معالجة تغيير التقدير الفردي
  const handleGradeChange = (e) => {
    const { name, value } = e.target;
    setGradeData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // معالجة تغيير التقدير الجماعي
  const handleBulkGradeChange = (e) => {
    const { name, value } = e.target;
    setBulkGradeData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // فتح نافذة المشاهدات
  const handleViewSubmissions = (assignment) => {
    setSelectedAssignment(assignment);
    setShowSubmissionsModal(true);
  };

  // فتح نافذة التقدير الفردي
  const handleGradeStudent = (assignment, student) => {
    setSelectedAssignment(assignment);
    setSelectedStudent(student);
    setGradingMode('single');
    setGradeData({
      score: student.grade || '',
      feedback: 'Good work! Keep it up.'
    });
    setShowGradeModal(true);
  };

  // فتح نافذة التقدير الجماعي
  const handleBulkGrade = (assignment) => {
    setSelectedAssignment(assignment);
    setSelectedStudent(null);
    setGradingMode('bulk');
    setBulkGradeData({
      score: '',
      feedback: 'Good work everyone!'
    });
    setShowGradeModal(true);
  };

  // فتح نافذة التعديل
  const handleEdit = (assignment) => {
    setSelectedAssignment(assignment);
    setFormData({
      title: assignment.title,
      subject: assignment.subject,
      grade: assignment.grade,
      dueDate: assignment.dueDate,
      totalStudents: assignment.totalStudents,
      points: assignment.points,
      passingScore: assignment.passingScore,
      instructions: assignment.instructions,
      status: assignment.status
    });
    setShowEditModal(true);
  };

  // فتح/إغلاق قائمة المزيد
  const toggleMoreMenu = (assignmentId) => {
    setShowMoreMenu(showMoreMenu === assignmentId ? null : assignmentId);
  };

  // إغلاق جميع النوافذ
  const closeAllModals = () => {
    setShowCreateModal(false);
    setShowSubmissionsModal(false);
    setShowGradeModal(false);
    setShowEditModal(false);
    setShowMoreMenu(null);
    setSelectedAssignment(null);
    setSelectedStudent(null);
    setGradingMode('');
  };

  // حفظ التعديلات
  const handleSaveEdit = () => {
    if (!formData.title || !formData.subject || !formData.grade || !formData.dueDate) {
      alert("Please fill in all required fields (*)");
      return;
    }

    const updatedAssignments = assignments.map(assignment =>
      assignment.id === selectedAssignment.id
        ? {
            ...assignment,
            title: formData.title,
            subject: formData.subject,
            grade: formData.grade,
            dueDate: formData.dueDate,
            displayDate: new Date(formData.dueDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            }),
            totalStudents: parseInt(formData.totalStudents),
            points: parseInt(formData.points),
            passingScore: parseInt(formData.passingScore),
            instructions: formData.instructions,
            status: formData.status,
            lastEdited: "just now"
          }
        : assignment
    );

    setAssignments(updatedAssignments);
    closeAllModals();
  };

  // حفظ التقدير الفردي
  const handleSaveGrade = () => {
    if (!gradeData.score) {
      alert("Please enter a score");
      return;
    }

    // تحديث بيانات الطالب
    const updatedStudents = students.map(student =>
      student.id === selectedStudent.id
        ? { ...student, grade: parseInt(gradeData.score) }
        : student
    );

    setStudents(updatedStudents);

    // تحديث عدد الواجبات المصححة
    const gradedCount = updatedStudents.filter(s => s.submitted && s.grade !== null).length;
    const updatedAssignments = assignments.map(assignment =>
      assignment.id === selectedAssignment.id
        ? { ...assignment, graded: gradedCount }
        : assignment
    );

    setAssignments(updatedAssignments);
    closeAllModals();
  };

  // حفظ التقدير الجماعي
  const handleSaveBulkGrade = () => {
    if (!bulkGradeData.score) {
      alert("Please enter a score");
      return;
    }

    // تحديث جميع الطلاب الذين سلموا ولم يتم تقييمهم بعد
    const updatedStudents = students.map(student =>
      student.submitted && student.grade === null
        ? { ...student, grade: parseInt(bulkGradeData.score) }
        : student
    );

    setStudents(updatedStudents);

    // تحديث عدد الواجبات المصححة
    const gradedCount = updatedStudents.filter(s => s.submitted && s.grade !== null).length;
    const updatedAssignments = assignments.map(assignment =>
      assignment.id === selectedAssignment.id
        ? { ...assignment, graded: gradedCount }
        : assignment
    );

    setAssignments(updatedAssignments);
    closeAllModals();
  };

  // حذف الواجب
  const handleDeleteAssignment = (assignmentId) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      const updatedAssignments = assignments.filter(assignment => assignment.id !== assignmentId);
      setAssignments(updatedAssignments);
      setShowMoreMenu(null);
    }
  };

  // إنشاء الواجب الجديد
  const handleCreateAssignment = async () => {
    if (!formData.title || !formData.subject || !formData.grade || !formData.dueDate) {
      alert("Please fill in all required fields (*)");
      return;
    }

    setIsCreating(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newAssignment = {
      id: Date.now(), // استخدام timestamp لتجنب تكرار IDs
      title: formData.title,
      subject: formData.subject,
      grade: formData.grade,
      dueDate: formData.dueDate,
      displayDate: new Date(formData.dueDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      totalStudents: parseInt(formData.totalStudents),
      submitted: 0,
      graded: 0,
      status: formData.status,
      lastEdited: "just now",
      description: formData.instructions || "No instructions provided.",
      points: parseInt(formData.points),
      passingScore: parseInt(formData.passingScore),
      instructions: formData.instructions
    };

    setAssignments([newAssignment, ...assignments]);
    setIsCreating(false);
    closeAllModals();
    
    // إعادة تعيين النموذج
    setFormData({
      title: '',
      subject: '',
      grade: '',
      dueDate: '',
      totalStudents: 62,
      points: 100,
      passingScore: 60,
      instructions: '',
      status: 'upcoming'
    });
    setCharCount(0);
  };

  // فلترة الواجبات حسب التبويب والبحث
  const filteredAssignments = assignments.filter(assignment => {
    const matchesTab = activeTab === 'All' ? true : assignment.status === activeTab.toLowerCase();
    const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assignment.subject.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // الحصول على تاريخ الغد للتحديد الافتراضي
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="assignment-management">
      {/* ✅ إزالة السايدبار تماماً */}

      {/* المحتوى الرئيسي فقط */}
      <div className="assignment-main-content">
        <div className="content-container">

          {/* الرأس */}
          <div className="assignment-header">
            <div className="header-content">
              <div className="header-text">
                <h1>Assignment Management</h1>
                <p>Create, grade, and monitor student assignments</p>
              </div>
              
            </div>

            <div className="search-bar">
          <input type="text" placeholder="Search  " />
          <i className="fas fa-search"></i>
        </div>
          </div>

          {/* شريط الإجراءات */}
          <div className="action-bar">
            <button className="create-assignment-btn" onClick={() => setShowCreateModal(true)}>
              <i className="fas fa-plus"></i>
              Create New Assignment
            </button>
            <div className="filter-options">
              <select className="filter-select" value={activeTab} onChange={(e) => setActiveTab(e.target.value)}>
                <option>All</option>
                <option>Active</option>
                <option>Upcoming</option>
                <option>Closed</option>
              </select>
              <button className="filter-btn">
                <i className="fas fa-filter"></i>
                Filter
              </button>
            </div>
          </div>

          {/* التبويبات */}
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

          {/* شبكة الواجبات */}
          <div className="assignments-grid">
            {filteredAssignments.length > 0 ? (
              filteredAssignments.map((assignment) => (
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

                  <div className="assignment-description">{assignment.description}</div>

                  <div className="assignment-details">
                    <div className="detail-item">
                      <i className="fas fa-calendar-day"></i>
                      <span>Due: {assignment.displayDate}</span>
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
                          style={{ width: `${(assignment.submitted / assignment.totalStudents) * 100}%` }}
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
                          style={{ width: `${(assignment.graded / (assignment.submitted || 1)) * 100}%` }}
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
                    <button 
                      className="action-btn view-submissions"
                      onClick={() => handleViewSubmissions(assignment)}
                    >
                      <i className="fas fa-eye"></i>
                      View Submissions
                    </button>
                    <button 
                      className="action-btn grade"
                      onClick={() => handleBulkGrade(assignment)}
                    >
                      <i className="fas fa-check-double"></i>
                      Grade
                    </button>
                    <button 
                      className="action-btn edit"
                      onClick={() => handleEdit(assignment)}
                    >
                      <i className="fas fa-edit"></i>
                      Edit
                    </button>
                    <div className="more-actions-container">
                      <button 
                        className="action-btn more"
                        onClick={() => toggleMoreMenu(assignment.id)}
                      >
                        <i className="fas fa-ellipsis-h"></i>
                      </button>
                      {showMoreMenu === assignment.id && (
                        <div className="more-menu">
                          <button onClick={() => handleViewSubmissions(assignment)}>
                            <i className="fas fa-eye"></i> View Submissions
                          </button>
                          <button onClick={() => handleBulkGrade(assignment)}>
                            <i className="fas fa-check-double"></i> Grade All
                          </button>
                          <button onClick={() => handleEdit(assignment)}>
                            <i className="fas fa-edit"></i> Edit Assignment
                          </button>
                          <button onClick={() => {
                            navigator.clipboard.writeText(assignment.title);
                            setShowMoreMenu(null);
                          }}>
                            <i className="fas fa-copy"></i> Copy Title
                          </button>
                          <button 
                            className="delete-btn"
                            onClick={() => handleDeleteAssignment(assignment.id)}
                          >
                            <i className="fas fa-trash"></i> Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-assignments">
                <i className="fas fa-tasks"></i>
                <h3>No assignments found</h3>
                <p>Try changing your search or filter criteria</p>
              </div>
            )}
          </div>

          {/* قسم تحميل المزيد */}
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

      {/* نافذة إنشاء الواجب */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={() => !isCreating && closeAllModals()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Create New Assignment</h2>
            <div className="modal-form">
              <div className="form-group">
                <label data-required="*">Assignment Title</label>
                <input 
                  type="text" 
                  name="title"
                  className="form-input"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter assignment title" 
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label data-required="*">Subject</label>
                  <select 
                    name="subject"
                    className="form-select"
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option value="">Select subject</option>
                    <option>Mathematics</option>
                    <option>English</option>
                    <option>Science</option>
                    <option>History</option>
                    <option>Biology</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label data-required="*">Grade</label>
                  <select 
                    name="grade"
                    className="form-select"
                    value={formData.grade}
                    onChange={handleInputChange}
                  >
                    <option value="">Select grade</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                    <option>Grade 12</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label data-required="*">Due Date</label>
                  <input 
                    type="date" 
                    name="dueDate"
                    className="form-input"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    min={getTomorrowDate()}
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select 
                    name="status"
                    className="form-select"
                    value={formData.status}
                    onChange={handleInputChange}
                  >
                    <option value="upcoming">Upcoming</option>
                    <option value="active">Active</option>
                    <option value="closed">Closed</option>
                  </select>
                  <span className={`status-preview ${formData.status}`}>
                    {formData.status}
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label>Instructions</label>
                <textarea 
                  name="instructions"
                  className="form-textarea"
                  value={formData.instructions}
                  onChange={(e) => {
                    handleInputChange(e);
                    setCharCount(e.target.value.length);
                  }}
                  placeholder="Enter assignment instructions..."
                  maxLength={500}
                ></textarea>
                <span className={`char-counter ${charCount > 450 ? 'warning' : ''}`}>
                  {charCount}/500
                </span>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Total Points</label>
                  <input 
                    type="number" 
                    name="points"
                    className="form-input"
                    value={formData.points}
                    onChange={handleInputChange}
                    min="0"
                    max="1000"
                  />
                </div>

                <div className="form-group">
                  <label>Passing Score</label>
                  <input 
                    type="number" 
                    name="passingScore"
                    className="form-input"
                    value={formData.passingScore}
                    onChange={handleInputChange}
                    min="0"
                    max={formData.points}
                  />
                </div>

                <div className="form-group">
                  <label>Total Students</label>
                  <input 
                    type="number" 
                    name="totalStudents"
                    className="form-input"
                    value={formData.totalStudents}
                    onChange={handleInputChange}
                    min="1"
                    max="100"
                  />
                </div>
              </div>

              <div className="modal-actions">
                <button 
                  className="cancel-btn" 
                  onClick={closeAllModals}
                  disabled={isCreating}
                >
                  Cancel
                </button>
                <button 
                  className={`create-btn ${isCreating ? 'loading' : ''}`}
                  onClick={handleCreateAssignment}
                  disabled={isCreating}
                >
                  {isCreating ? 'Creating...' : 'Create Assignment'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* نافذة المشاهدات */}
      {showSubmissionsModal && selectedAssignment && (
        <div className="modal-overlay" onClick={closeAllModals}>
          <div className="modal large-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Submissions - {selectedAssignment.title}</h2>
            <div className="submissions-content">
              <div className="submissions-header">
                <div className="submission-stats">
                  <span>Total Students: {selectedAssignment.totalStudents}</span>
                  <span>Submitted: {selectedAssignment.submitted}</span>
                  <span>Graded: {selectedAssignment.graded}</span>
                </div>
              </div>
              
              <div className="students-list">
                <h3>Student Submissions</h3>
                {students.map(student => (
                  <div key={student.id} className="student-item">
                    <div className="student-info">
                      <span className="student-name">{student.name}</span>
                      <span className={`submission-status ${student.submitted ? 'submitted' : 'pending'}`}>
                        {student.submitted ? `Submitted on ${student.submittedDate}` : 'Not submitted'}
                      </span>
                    </div>
                    <div className="student-grade">
                      {student.grade ? (
                        <span className="grade-badge">{student.grade}/100</span>
                      ) : student.submitted ? (
                        <span className="grade-pending">Not graded</span>
                      ) : (
                        <span className="grade-pending">Not submitted</span>
                      )}
                    </div>
                    <div className="student-actions">
                      {student.submitted && (
                        <>
                          <button 
                            className="action-btn download"
                            onClick={() => alert(`Downloading ${student.file}`)}
                          >
                            <i className="fas fa-download"></i>
                          </button>
                          <button 
                            className="action-btn grade"
                            onClick={() => handleGradeStudent(selectedAssignment, student)}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="modal-actions">
                <button className="cancel-btn" onClick={closeAllModals}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* نافذة التقدير */}
      {showGradeModal && selectedAssignment && (
        <div className="modal-overlay" onClick={closeAllModals}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>
              {gradingMode === 'single' && selectedStudent 
                ? `Grade - ${selectedStudent.name}` 
                : 'Grade All Submissions'}
            </h2>
            <div className="modal-form">
              <div className="form-group">
                <label>Score *</label>
                <input 
                  type="number" 
                  name="score"
                  className="form-input"
                  value={gradingMode === 'single' ? gradeData.score : bulkGradeData.score}
                  onChange={gradingMode === 'single' ? handleGradeChange : handleBulkGradeChange}
                  min="0"
                  max="100"
                  placeholder="Enter score (0-100)"
                />
              </div>
              
              <div className="form-group">
                <label>Feedback</label>
                <textarea 
                  name="feedback"
                  className="form-textarea"
                  value={gradingMode === 'single' ? gradeData.feedback : bulkGradeData.feedback}
                  onChange={gradingMode === 'single' ? handleGradeChange : handleBulkGradeChange}
                  placeholder={
                    gradingMode === 'single' 
                      ? "Enter feedback for the student..." 
                      : "Enter general feedback for all students..."
                  }
                  rows="4"
                ></textarea>
              </div>

              <div className="modal-actions">
                <button className="cancel-btn" onClick={closeAllModals}>
                  Cancel
                </button>
                <button 
                  className="create-btn" 
                  onClick={gradingMode === 'single' ? handleSaveGrade : handleSaveBulkGrade}
                >
                  {gradingMode === 'single' ? 'Save Grade' : 'Apply to All Ungraded'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* نافذة التعديل - المحتوى الكامل */}
      {showEditModal && selectedAssignment && (
        <div className="modal-overlay" onClick={closeAllModals}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Edit Assignment</h2>
            <div className="modal-form">
              <div className="form-group">
                <label data-required="*">Assignment Title</label>
                <input 
                  type="text" 
                  name="title"
                  className="form-input"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter assignment title" 
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label data-required="*">Subject</label>
                  <select 
                    name="subject"
                    className="form-select"
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option value="">Select subject</option>
                    <option>Mathematics</option>
                    <option>English</option>
                    <option>Science</option>
                    <option>History</option>
                    <option>Biology</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label data-required="*">Grade</label>
                  <select 
                    name="grade"
                    className="form-select"
                    value={formData.grade}
                    onChange={handleInputChange}
                  >
                    <option value="">Select grade</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                    <option>Grade 12</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label data-required="*">Due Date</label>
                  <input 
                    type="date" 
                    name="dueDate"
                    className="form-input"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    min={getTomorrowDate()}
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select 
                    name="status"
                    className="form-select"
                    value={formData.status}
                    onChange={handleInputChange}
                  >
                    <option value="upcoming">Upcoming</option>
                    <option value="active">Active</option>
                    <option value="closed">Closed</option>
                  </select>
                  <span className={`status-preview ${formData.status}`}>
                    {formData.status}
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label>Instructions</label>
                <textarea 
                  name="instructions"
                  className="form-textarea"
                  value={formData.instructions}
                  onChange={handleInputChange}
                  placeholder="Enter assignment instructions..."
                  rows="4"
                ></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Total Points</label>
                  <input 
                    type="number" 
                    name="points"
                    className="form-input"
                    value={formData.points}
                    onChange={handleInputChange}
                    min="0"
                    max="1000"
                  />
                </div>

                <div className="form-group">
                  <label>Passing Score</label>
                  <input 
                    type="number" 
                    name="passingScore"
                    className="form-input"
                    value={formData.passingScore}
                    onChange={handleInputChange}
                    min="0"
                    max={formData.points}
                  />
                </div>

                <div className="form-group">
                  <label>Total Students</label>
                  <input 
                    type="number" 
                    name="totalStudents"
                    className="form-input"
                    value={formData.totalStudents}
                    onChange={handleInputChange}
                    min="1"
                    max="100"
                  />
                </div>
              </div>

              <div className="modal-actions">
                <button className="cancel-btn" onClick={closeAllModals}>
                  Cancel
                </button>
                <button className="create-btn" onClick={handleSaveEdit}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AssignmentManagement;