

//  import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/lesson-management.css';

// function LessonManagement() {
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(false);
//   const [searchTerm, setSearchTerm] = useState(''); // ✅ إضافة state للبحث

//   const [lessons, setLessons] = useState([
//     { id: 1, title: "Quadratic Equations", subject: "Mathematics", status: "published", duration: "45 min", lastEdited: "2 days ago", description: "Complete guide to solving quadratic equations." },
//     { id: 2, title: "Trigonometry Basics", subject: "Mathematics", status: "published", duration: "60 min", lastEdited: "3 days ago", description: "Introduction to trigonometric functions." },
//     { id: 3, title: "Algebraic Expressions", subject: "Mathematics", status: "draft", duration: "50 min", lastEdited: "1 hour ago", description: "Understanding and simplifying algebraic expressions." }
//   ]);

//   // form state
//   const [formData, setFormData] = useState({
//     title: '',
//     subject: '',
//     grade: '',
//     duration: '',
//     status: 'Draft',
//     description: '',
//     objectives: '',
//     materials: ''
//   });

//   const handleNavigation = (page) => {
//     if (page === 'dashboard') navigate('/');
//   };

//   // handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // handle lesson creation
//   const handleCreateLesson = () => {
//     if (!formData.title || !formData.subject || !formData.grade || !formData.duration) {
//       alert("Please fill in all required fields (*)");
//       return;
//     }

//     const newLesson = {
//       id: lessons.length + 1,
//       title: formData.title,
//       subject: formData.subject,
//       status: formData.status.toLowerCase(),
//       duration: formData.duration,
//       lastEdited: "just now",
//       description: formData.description || "No description provided."
//     };

//     setLessons([newLesson, ...lessons]); // add to top
//     setShowModal(false);

//     // reset form
//     setFormData({
//       title: '',
//       subject: '',
//       grade: '',
//       duration: '',
//       status: 'Draft',
//       description: '',
//       objectives: '',
//       materials: ''
//     });
//   };

//   // ✅ فلترة الدروس حسب عنوان الدرس
//   const filteredLessons = lessons.filter((lesson) =>
//     lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="lesson-management">
//       {/* Sidebar */}
//       <div className="lesson-sidebar">
//         <div className="sidebar-header">
//           <h2>Ruwwad</h2>
//           <p>Teacher Portal</p>
//         </div>
//         <ul className="sidebar-nav">
//           <li onClick={() => handleNavigation('dashboard')}>
//             <i className="fas fa-chart-line"></i> Dashboard
//           </li>
//           <li className="active"><i className="fas fa-book"></i> Lessons</li>
//           <li><i className="fas fa-tasks"></i> Assignments</li>
//           <li><i className="fas fa-chart-bar"></i> Analytics</li>
//           <li><i className="fas fa-bell"></i> Notifications</li>
//           <li><i className="fas fa-robot"></i> A Assistant</li>
//           <li><i className="fas fa-cog"></i> Account</li>
//         </ul>

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

//       {/* Main Content */}
//       <div className="lesson-main-content">
//         <div className="content-container">
//           <div className="lesson-header">
//             <div className="header-content">
//               <div className="header-text">
//                 <h1>Lesson Management</h1>
//                 <p>Create, edit, and organize your lessons</p>
//               </div>
//               <div className="header-stats">
//                 <div className="stat-item">
//                   <span className="stat-number">{lessons.length}</span>
//                   <span className="stat-label">Total Lessons</span>
//                 </div>
//                 <div className="stat-item">
//                   <span className="stat-number">{lessons.filter(l => l.status === 'published').length}</span>
//                   <span className="stat-label">Published</span>
//                 </div>
//                 <div className="stat-item">
//                   <span className="stat-number">{lessons.filter(l => l.status === 'draft').length}</span>
//                   <span className="stat-label">Drafts</span>
//                 </div>
//               </div>
//             </div>

//             {/* ✅ مربع البحث */}
//             <div className="search-container">
//               <input
//                 type="text"
//                 className="search-input"
//                 placeholder="Search by lesson title..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <i className="fas fa-search search-icon"></i>
//             </div>
//           </div>

//           {/* Action Bar */}
//           <div className="action-bar">
//             <button className="create-lesson-btn" onClick={() => setShowModal(true)}>
//               <i className="fas fa-plus"></i> Create New Lesson
//             </button>
//           </div>

//           {/* ✅ عرض الدروس بعد الفلترة */}
//           <div className="lessons-grid">
//             {filteredLessons.length > 0 ? (
//               filteredLessons.map((lesson) => (
//                 <div key={lesson.id} className="lesson-card">
//                   <div className="lesson-card-header">
//                     <div className="lesson-header-section">
//                       <div className="lesson-title-section">
//                         <h3>{lesson.title}</h3>
//                         <p className="lesson-subject">
//                           <i className="fas fa-book-open"></i>{lesson.subject}
//                         </p>
//                       </div>
//                       <span className={`status-badge ${lesson.status}`}>
//                         <i className={`fas ${lesson.status === 'published' ? 'fa-check-circle' : 'fa-edit'}`}></i>
//                         {lesson.status}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="lesson-description">{lesson.description}</div>
//                 </div>
//               ))
//             ) : (
//               <p className="no-results">No lessons found.</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="create-lesson-modal">
//             <h2>Create New Lesson</h2>

//             <div className="modal-form">
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Lesson Title *</label>
//                   <input name="title" value={formData.title} onChange={handleChange} type="text" placeholder="Enter lesson title" />
//                 </div>
//                 <div className="form-group">
//                   <label>Subject *</label>
//                   <select name="subject" value={formData.subject} onChange={handleChange}>
//                     <option value="">Select subject</option>
//                     <option>Mathematics</option>
//                     <option>Science</option>
//                     <option>English</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Grade *</label>
//                   <select name="grade" value={formData.grade} onChange={handleChange}>
//                     <option value="">Select grade</option>
//                     <option>Grade 6</option>
//                     <option>Grade 7</option>
//                     <option>Grade 8</option>
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label>Duration *</label>
//                   <input name="duration" value={formData.duration} onChange={handleChange} type="text" placeholder="e.g., 45 min" />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Status</label>
//                 <select name="status" value={formData.status} onChange={handleChange}>
//                   <option>Draft</option>
//                   <option>Published</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Enter lesson description..."></textarea>
//               </div>

//               <div className="form-group">
//                 <label>Learning Objectives (one per line)</label>
//                 <textarea name="objectives" value={formData.objectives} onChange={handleChange} placeholder="List the learning objectives..."></textarea>
//               </div>

//               <div className="form-group">
//                 <label>Materials (one per line)</label>
//                 <textarea name="materials" value={formData.materials} onChange={handleChange} placeholder="List required materials..."></textarea>
//               </div>

//               <div className="modal-actions">
//                 <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
//                 <button className="create-btn" onClick={handleCreateLesson}>Create Lesson</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LessonManagement;
/////////////////////////////////////////////////////// بدي الي فوق /////////////////////////////



// الكود الي تحت قبل الزوم 

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/lesson-management.css';

// function LessonManagement({ onNavigate }) { // ✅ إضافة onNavigate كـ prop
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   const [lessons, setLessons] = useState([
//     { id: 1, title: "Quadratic Equations", subject: "Mathematics", status: "published", duration: "45 min", lastEdited: "2 days ago", description: "Complete guide to solving quadratic equations." },
//     { id: 2, title: "Trigonometry Basics", subject: "Mathematics", status: "published", duration: "60 min", lastEdited: "3 days ago", description: "Introduction to trigonometric functions." },
//     { id: 3, title: "Algebraic Expressions", subject: "Mathematics", status: "draft", duration: "50 min", lastEdited: "1 hour ago", description: "Understanding and simplifying algebraic expressions." }
//   ]);

//   // form state
//   const [formData, setFormData] = useState({
//     title: '',
//     subject: '',
//     grade: '',
//     duration: '',
//     status: 'Draft',
//     description: '',
//     objectives: '',
//     materials: ''
//   });

//   // ✅ إزالة handleNavigation القديم واستخدام onNavigate مباشرة
//   const handleNavigation = (page) => {
//     onNavigate(page); // استخدام الـ prop من TeacherHome
//   };

//   // handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // handle lesson creation
//   const handleCreateLesson = () => {
//     if (!formData.title || !formData.subject || !formData.grade || !formData.duration) {
//       alert("Please fill in all required fields (*)");
//       return;
//     }

//     const newLesson = {
//       id: lessons.length + 1,
//       title: formData.title,
//       subject: formData.subject,
//       status: formData.status.toLowerCase(),
//       duration: formData.duration,
//       lastEdited: "just now",
//       description: formData.description || "No description provided."
//     };

//     setLessons([newLesson, ...lessons]);
//     setShowModal(false);

//     // reset form
//     setFormData({
//       title: '',
//       subject: '',
//       grade: '',
//       duration: '',
//       status: 'Draft',
//       description: '',
//       objectives: '',
//       materials: ''
//     });
//   };

//   // ✅ فلترة الدروس حسب عنوان الدرس
//   const filteredLessons = lessons.filter((lesson) =>
//     lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="lesson-management">
//       {/* ✅ إزالة السايدبار تماماً */}

//       {/* Main Content فقط */}
//       <div className="lesson-main-content">
//         <div className="content-container">
//           <div className="lesson-header">
//             <div className="header-content">
//               <div className="header-text">
//                 <h1>Lesson Management</h1>
//                 <p>Create, edit, and organize your lessons</p>
//               </div>
             
//             </div>

           
//           </div>

//           {/* Action Bar */}
//           <div className="action-bar">
//             <button className="create-lesson-btn" onClick={() => setShowModal(true)}>
//               <i className="fas fa-plus"></i> Create New Lesson
//             </button>
//           </div>

//           {/* ✅ عرض الدروس بعد الفلترة */}
//           <div className="lessons-grid">
//             {filteredLessons.length > 0 ? (
//               filteredLessons.map((lesson) => (
//                 <div key={lesson.id} className="lesson-card">
//                   <div className="lesson-card-header">
//                     <div className="lesson-header-section">
//                       <div className="lesson-title-section">
//                         <h3>{lesson.title}</h3>
//                         <p className="lesson-subject">
//                           <i className="fas fa-book-open"></i>{lesson.subject}
//                         </p>
//                       </div>
//                       <span className={`status-badge ${lesson.status}`}>
//                         <i className={`fas ${lesson.status === 'published' ? 'fa-check-circle' : 'fa-edit'}`}></i>
//                         {lesson.status}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="lesson-description">{lesson.description}</div>
//                 </div>
//               ))
//             ) : (
//               <p className="no-results">No lessons found.</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="create-lesson-modal">
//             <h2>Create New Lesson</h2>

//             <div className="modal-form">
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Lesson Title *</label>
//                   <input name="title" value={formData.title} onChange={handleChange} type="text" placeholder="Enter lesson title" />
//                 </div>
//                 <div className="form-group">
//                   <label>Subject *</label>
//                   <select name="subject" value={formData.subject} onChange={handleChange}>
//                     <option value="">Select subject</option>
//                     <option>Mathematics</option>
//                     <option>Science</option>
//                     <option>English</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Grade *</label>
//                   <select name="grade" value={formData.grade} onChange={handleChange}>
//                     <option value="">Select grade</option>
//                     <option>Grade 6</option>
//                     <option>Grade 7</option>
//                     <option>Grade 8</option>
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label>Duration *</label>
//                   <input name="duration" value={formData.duration} onChange={handleChange} type="text" placeholder="e.g., 45 min" />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Status</label>
//                 <select name="status" value={formData.status} onChange={handleChange}>
//                   <option>Draft</option>
//                   <option>Published</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Enter lesson description..."></textarea>
//               </div>

//               <div className="form-group">
//                 <label>Learning Objectives (one per line)</label>
//                 <textarea name="objectives" value={formData.objectives} onChange={handleChange} placeholder="List the learning objectives..."></textarea>
//               </div>

//               <div className="form-group">
//                 <label>Materials (one per line)</label>
//                 <textarea name="materials" value={formData.materials} onChange={handleChange} placeholder="List required materials..."></textarea>
//               </div>

//               <div className="modal-actions">
//                 <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
//                 <button className="create-btn" onClick={handleCreateLesson}>Create Lesson</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LessonManagement;

// الكود الي فوق قبل الزوم 


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/lesson-management.css';

function LessonManagement({ onNavigate }) { // ✅ إضافة onNavigate كـ prop
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [lessons, setLessons] = useState([
    { id: 1, title: "Quadratic Equations", subject: "Mathematics", status: "published", duration: "45 min", lastEdited: "2 days ago", description: "Complete guide to solving quadratic equations." },
    { id: 2, title: "Trigonometry Basics", subject: "Mathematics", status: "published", duration: "60 min", lastEdited: "3 days ago", description: "Introduction to trigonometric functions." },
    { id: 3, title: "Algebraic Expressions", subject: "Mathematics", status: "draft", duration: "50 min", lastEdited: "1 hour ago", description: "Understanding and simplifying algebraic expressions." }
  ]);

  // form state
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    grade: '',
    duration: '',
    status: 'Draft',
    description: '',
    objectives: '',
    materials: ''
  });

  // 🔹 Zoom meeting state
  const [zoomMeeting, setZoomMeeting] = useState(null);
  const [zoomLoading, setZoomLoading] = useState(false);
  const [zoomError, setZoomError] = useState('');

  // 🔹 إيميل المعلم على Zoom (عدّليه)
  const teacherZoomEmail = 'dana1310.eng@gmail.com';

  const handleNavigation = (page) => {
    onNavigate(page); // استخدام الـ prop من TeacherHome
  };

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // handle lesson creation
  const handleCreateLesson = () => {
    if (!formData.title || !formData.subject || !formData.grade || !formData.duration) {
      alert("Please fill in all required fields (*)");
      return;
    }

    const newLesson = {
      id: lessons.length + 1,
      title: formData.title,
      subject: formData.subject,
      status: formData.status.toLowerCase(),
      duration: formData.duration,
      lastEdited: "just now",
      description: formData.description || "No description provided."
    };

    setLessons([newLesson, ...lessons]);
    setShowModal(false);

    // reset form
    setFormData({
      title: '',
      subject: '',
      grade: '',
      duration: '',
      status: 'Draft',
      description: '',
      objectives: '',
      materials: ''
    });
  };

  // ✅ فلترة الدروس حسب عنوان الدرس
  const filteredLessons = lessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔹 إنشاء اجتماع Zoom
  const handleCreateZoomMeeting = async () => {
    try {
      setZoomLoading(true);
      setZoomError('');
      setZoomMeeting(null);

      if (!teacherZoomEmail) {
        setZoomError('Zoom email is not configured.');
        setZoomLoading(false);
        return;
      }

      // نحاول نطلع رقم الدقائق من duration لو مكتوب "45 min"
      const durationMinutes =
        parseInt(formData.duration) || 45;

      const body = {
        topic: formData.title || 'Online Lesson',
        duration: durationMinutes,
        zoomEmail: teacherZoomEmail
      };

      const res = await fetch('/api/zoom/create-meeting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to create Zoom meeting');
      }

      const data = await res.json();
      setZoomMeeting(data);
    } catch (err) {
      setZoomError(err.message || 'Unexpected error');
    } finally {
      setZoomLoading(false);
    }
  };

  return (
    <div className="lesson-management">
      {/* Main Content فقط */}
      <div className="lesson-main-content">
        <div className="content-container">
          <div className="lesson-header">
            <div className="header-content">
              <div className="header-text">
                <h1>Lesson Management</h1>
                <p>Create, edit, and organize your lessons</p>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="action-bar">
            <button
              className="create-lesson-btn"
              onClick={() => setShowModal(true)}
            >
              <i className="fas fa-plus"></i> Create New Lesson
            </button>

            {/* 🔹 زر إنشاء اجتماع Zoom */}
            <button
              className="create-lesson-btn"
              onClick={handleCreateZoomMeeting}
              disabled={zoomLoading}
              style={{ marginLeft: '12px' }}
            >
              {zoomLoading ? 'Creating Zoom Meeting...' : 'Create Zoom Meeting'}
            </button>
          </div>

          {/* 🔹 عرض نتيجة إنشاء اجتماع Zoom */}
          {zoomError && (
            <p className="zoom-error" style={{ color: 'red', marginTop: '8px' }}>
              {zoomError}
            </p>
          )}

          {zoomMeeting && (
            <div className="zoom-meeting-info" style={{ marginTop: '12px' }}>
              <h3>Zoom Meeting Created</h3>
              <p><strong>Topic:</strong> {zoomMeeting.topic}</p>
              <p>
                <strong>Teacher (Start link): </strong>
                <a href={zoomMeeting.start_url} target="_blank" rel="noreferrer">
                  Start Meeting
                </a>
              </p>
              <p>
                <strong>Students (Join link): </strong>
                <a href={zoomMeeting.join_url} target="_blank" rel="noreferrer">
                  Join Meeting
                </a>
              </p>
              {zoomMeeting.password && (
                <p><strong>Password:</strong> {zoomMeeting.password}</p>
              )}
            </div>
          )}

          {/* ✅ عرض الدروس بعد الفلترة */}
          <div className="lessons-grid">
            {filteredLessons.length > 0 ? (
              filteredLessons.map((lesson) => (
                <div key={lesson.id} className="lesson-card">
                  <div className="lesson-card-header">
                    <div className="lesson-header-section">
                      <div className="lesson-title-section">
                        <h3>{lesson.title}</h3>
                        <p className="lesson-subject">
                          <i className="fas fa-book-open"></i>{lesson.subject}
                        </p>
                      </div>
                      <span className={`status-badge ${lesson.status}`}>
                        <i className={`fas ${lesson.status === 'published' ? 'fa-check-circle' : 'fa-edit'}`}></i>
                        {lesson.status}
                      </span>
                    </div>
                  </div>
                  <div className="lesson-description">{lesson.description}</div>
                </div>
              ))
            ) : (
              <p className="no-results">No lessons found.</p>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="create-lesson-modal">
            <h2>Create New Lesson</h2>

            <div className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Lesson Title *</label>
                  <input name="title" value={formData.title} onChange={handleChange} type="text" placeholder="Enter lesson title" />
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <select name="subject" value={formData.subject} onChange={handleChange}>
                    <option value="">Select subject</option>
                    <option>Mathematics</option>
                    <option>Science</option>
                    <option>English</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Grade *</label>
                  <select name="grade" value={formData.grade} onChange={handleChange}>
                    <option value="">Select grade</option>
                    <option>Grade 6</option>
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Duration *</label>
                  <input name="duration" value={formData.duration} onChange={handleChange} type="text" placeholder="e.g., 45 min" />
                </div>
              </div>

              <div className="form-group">
                <label>Status</label>
                <select name="status" value={formData.status} onChange={handleChange}>
                  <option>Draft</option>
                  <option>Published</option>
                </select>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Enter lesson description..."></textarea>
              </div>

              <div className="form-group">
                <label>Learning Objectives (one per line)</label>
                <textarea name="objectives" value={formData.objectives} onChange={handleChange} placeholder="List the learning objectives..."></textarea>
              </div>

              <div className="form-group">
                <label>Materials (one per line)</label>
                <textarea name="materials" value={formData.materials} onChange={handleChange} placeholder="List required materials..."></textarea>
              </div>

              <div className="modal-actions">
                <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="create-btn" onClick={handleCreateLesson}>Create Lesson</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LessonManagement;
