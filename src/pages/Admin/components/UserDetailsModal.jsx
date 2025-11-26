// import { useState } from 'react';
// import { X, Mail, Phone, Award, BookOpen, TrendingUp } from 'lucide-react';

// export function UserDetailsModal({ user, type, onClose, onSave }) {
//   const [showCourses, setShowCourses] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState(user);

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleSave = () => {
//     if (onSave) {
//       onSave(formData);
//     }
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setFormData(user); // رجّع القيم الأصلية
//     setIsEditing(false);
//   };

//   return (
//     <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">
//           <h2 className="text-gray-900">User Details</h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//           >
//             <X className="w-5 h-5 text-gray-600" />
//           </button>
//         </div>

//         <div className="p-6">
//           {/* Profile Header */}
//           <div className="flex items-start gap-6 mb-8 pb-8 border-b border-gray-200">
//             <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl">
//               {formData.name?.charAt(0)}
//             </div>
//             <div className="flex-1">
//               {/* Name */}
//               {isEditing ? (
//                 <input
//                   type="text"
//                   value={formData.name || ''}
//                   onChange={(e) => handleChange('name', e.target.value)}
//                   className="w-full max-w-sm border border-gray-300 rounded-lg px-3 py-2 text-gray-900 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               ) : (
//                 <h3 className="text-gray-900 mb-2">{formData.name}</h3>
//               )}

//               {/* Email + Phone */}
//               <div className="flex flex-wrap gap-4 text-sm text-gray-600">
//                 <div className="flex items-center gap-2">
//                   <Mail className="w-4 h-4" />
//                   {isEditing ? (
//                     <input
//                       type="email"
//                       value={formData.email || ''}
//                       onChange={(e) => handleChange('email', e.target.value)}
//                       className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   ) : (
//                     formData.email
//                   )}
//                 </div>
//                 {formData.phone && (
//                   <div className="flex items-center gap-2">
//                     <Phone className="w-4 h-4" />
//                     {isEditing ? (
//                       <input
//                         type="text"
//                         value={formData.phone || ''}
//                         onChange={(e) => handleChange('phone', e.target.value)}
//                         className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     ) : (
//                       formData.phone
//                     )}
//                   </div>
//                 )}
//               </div>

//               {/* Status */}
//               <div className="mt-3">
//                 {isEditing ? (
//                   <select
//                     value={formData.status || 'active'}
//                     onChange={(e) => handleChange('status', e.target.value)}
//                     className="px-3 py-1 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="active">Active</option>
//                     <option value="inactive">Inactive</option>
//                   </select>
//                 ) : (
//                   <span
//                     className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
//                       formData.status === 'active'
//                         ? 'bg-green-50 text-green-700'
//                         : 'bg-gray-50 text-gray-700'
//                     }`}
//                   >
//                     {formData.status === 'active' ? 'Active' : 'Inactive'}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Details Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             {type === 'students' && (
//               <>
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="text-sm text-gray-600 mb-1">Grade Level</div>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       value={formData.grade || ''}
//                       onChange={(e) => handleChange('grade', e.target.value)}
//                       className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   ) : (
//                     <div className="text-gray-900">{formData.grade}</div>
//                   )}
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="text-sm text-gray-600 mb-1">Parent</div>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       value={formData.parent || ''}
//                       onChange={(e) => handleChange('parent', e.target.value)}
//                       className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   ) : (
//                     <div className="text-gray-900">{formData.parent}</div>
//                   )}
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="text-sm text-gray-600 mb-1">Enrollment Date</div>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       value={formData.enrollDate || ''}
//                       onChange={(e) => handleChange('enrollDate', e.target.value)}
//                       className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   ) : (
//                     <div className="text-gray-900">{formData.enrollDate}</div>
//                   )}
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="text-sm text-gray-600 mb-1">Enrolled Courses</div>
//                   <div className="text-gray-900">
//                     {(formData.courseNames && formData.courseNames.length) ||
//                       formData.courses}{' '}
//                     courses
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="text-sm text-gray-600 mb-1">Average Score</div>
//                   {isEditing ? (
//                     <input
//                       type="number"
//                       value={formData.avgScore || ''}
//                       onChange={(e) => handleChange('avgScore', e.target.value)}
//                       className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   ) : (
//                     <div className="text-gray-900 flex items-center gap-2">
//                       {formData.avgScore}%
//                       <span className="text-xs text-green-600">Excellent</span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="text-sm text-gray-600 mb-1">Last Active</div>
//                   <div className="text-gray-900">{formData.lastActive}</div>
//                 </div>
//               </>
//             )}

//             {type === 'teachers' && (
//               <>
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="text-sm text-gray-600 mb-1">Subject</div>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       value={formData.subject || ''}
//                       onChange={(e) => handleChange('subject', e.target.value)}
//                       className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   ) : (
//                     <div className="text-gray-900">{formData.subject}</div>
//                   )}
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="text-sm text-gray-600 mb-1">Department</div>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       value={formData.department || ''}
//                       onChange={(e) => handleChange('department', e.target.value)}
//                       className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   ) : (
//                     <div className="text-gray-900">{formData.department}</div>
//                   )}
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="text-sm text-gray-600 mb-1">Number of Students</div>
//                   <div className="text-gray-900">{formData.students} students</div>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="text-sm text-gray-600 mb-1">Experience</div>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       value={formData.experience || ''}
//                       onChange={(e) => handleChange('experience', e.target.value)}
//                       className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   ) : (
//                     <div className="text-gray-900">{formData.experience}</div>
//                   )}
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="text-sm text-gray-600 mb-1">Rating</div>
//                   {isEditing ? (
//                     <input
//                       type="number"
//                       step="0.1"
//                       value={formData.rating || ''}
//                       onChange={(e) => handleChange('rating', e.target.value)}
//                       className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   ) : (
//                     <div className="text-gray-900 flex items-center gap-2">
//                       {formData.rating} ⭐
//                       <span className="text-xs text-green-600">Excellent</span>
//                     </div>
//                   )}
//                 </div>
//               </>
//             )}

//             {type === 'parents' && (
//               <>
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="text-sm text-gray-600 mb-1">Number of Children</div>
//                   <div className="text-gray-900">{formData.children}</div>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="text-sm text-gray-600 mb-1">Occupation</div>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       value={formData.occupation || ''}
//                       onChange={(e) => handleChange('occupation', e.target.value)}
//                       className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   ) : (
//                     <div className="text-gray-900">{formData.occupation}</div>
//                   )}
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="text-sm text-gray-600 mb-1">Last Login</div>
//                   <div className="text-gray-900">{formData.lastLogin}</div>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-lg col-span-2">
//                   <div className="text-sm text-gray-600 mb-1">Children Names</div>
//                   <div className="text-gray-900">
//                     {formData.childrenNames?.join(' • ')}
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>

//           {/* Performance Stats for Students */}
//           {type === 'students' && (
//             <div className="mb-8">
//               <h3 className="text-gray-900 mb-4">Academic Performance</h3>

//               <div className="flex gap-4">
//                 {/* Active Courses card */}
//                 <button
//                   type="button"
//                   onClick={() => setShowCourses((prev) => !prev)}
//                   className="flex-1 bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition-colors"
//                 >
//                   <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//                   <div className="text-2xl text-gray-900 mb-1">
//                     {formData.courseNames
//                       ? formData.courseNames.length
//                       : formData.courses}
//                   </div>
//                   <div className="text-sm text-gray-600">Active Courses</div>
//                   <div className="mt-1 text-xs text-blue-700">
//                     {showCourses ? 'Hide courses' : 'View courses'}
//                   </div>
//                 </button>

//                 <div className="flex-1 bg-green-50 p-4 rounded-lg text-center">
//                   <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
//                   <div className="text-2xl text-gray-900 mb-1">12</div>
//                   <div className="text-sm text-gray-600">Achievements</div>
//                 </div>

//                 <div className="flex-1 bg-purple-50 p-4 rounded-lg text-center">
//                   <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
//                   <div className="text-2xl text-gray-900 mb-1">+5%</div>
//                   <div className="text-sm text-gray-600">This Month</div>
//                 </div>
//               </div>

//               {/* Courses list */}
//               {showCourses && formData.courseNames && (
//                 <div className="mt-6 bg-white border border-gray-200 rounded-lg">
//                   <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
//                     <div>
//                       <h4 className="text-sm font-semibold text-gray-900">
//                         Enrolled Courses
//                       </h4>
//                       <p className="text-xs text-gray-500 mt-0.5">
//                         All active courses for this student
//                       </p>
//                     </div>
//                     <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
//                       {formData.courseNames.length} courses
//                     </span>
//                   </div>

//                   <div className="divide-y divide-gray-100">
//                     {formData.courseNames.map((course, index) => (
//                       <div
//                         key={course + index}
//                         className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
//                       >
//                         <div className="flex items-center gap-3">
//                           <span className="text-xs font-medium text-gray-400 w-6 text-right">
//                             {index + 1}.
//                           </span>
//                           <span className="text-sm text-gray-900">{course}</span>
//                         </div>
//                         <span className="text-[11px] uppercase tracking-wide text-blue-600 font-semibold">
//                           Active
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Action Buttons */}
//           <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
//             {!isEditing ? (
//               <>
                 
//                 <button
//                   className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                   onClick={() => setIsEditing(true)}
//                 >
//                   Edit Details
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button
//                   className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                   onClick={handleCancel}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                   onClick={handleSave}
//                 >
//                   Save Changes
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { X, Mail, Phone, Award, BookOpen, TrendingUp } from 'lucide-react';

export function UserDetailsModal({ user, type, onClose, onSave, onSendMessage }) {
  const [showCourses, setShowCourses] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  // لو تغيّر user من الأب، حدّث formData
  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(user); // رجّع القيم الأصلية
    setIsEditing(false);
  };

  const handleSendMessageClick = () => {
    if (onSendMessage) {
      onSendMessage(formData); // ابعتي اليوزر للأب (UserManagement → Admin → CommunicationCenter)
    }
    onClose();
  };

  return (
    <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-gray-900">User Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          {/* Profile Header */}
          <div className="flex items-start gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl">
              {formData.name?.charAt(0)}
            </div>
            <div className="flex-1">
              {/* Name */}
              {isEditing ? (
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full max-w-sm border border-gray-300 rounded-lg px-3 py-2 text-gray-900 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <h3 className="text-gray-900 mb-2">{formData.name}</h3>
              )}

              {/* Email + Phone */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {isEditing ? (
                    <input
                      type="email"
                      value={formData.email || ''}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    formData.email
                  )}
                </div>
                {formData.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.phone || ''}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      formData.phone
                    )}
                  </div>
                )}
              </div>

              {/* Status */}
              <div className="mt-3">
                {isEditing ? (
                  <select
                    value={formData.status || 'active'}
                    onChange={(e) => handleChange('status', e.target.value)}
                    className="px-3 py-1 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                ) : (
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                      formData.status === 'active'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-50 text-gray-700'
                    }`}
                  >
                    {formData.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {type === 'students' && (
              <>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Grade Level</div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.grade || ''}
                      onChange={(e) => handleChange('grade', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <div className="text-gray-900">{formData.grade}</div>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Parent</div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.parent || ''}
                      onChange={(e) => handleChange('parent', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <div className="text-gray-900">{formData.parent}</div>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Enrollment Date</div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.enrollDate || ''}
                      onChange={(e) => handleChange('enrollDate', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <div className="text-gray-900">{formData.enrollDate}</div>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Enrolled Courses</div>
                  <div className="text-gray-900">
                    {(formData.courseNames && formData.courseNames.length) ||
                      formData.courses}{' '}
                    courses
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Average Score</div>
                  {isEditing ? (
                    <input
                      type="number"
                      value={formData.avgScore || ''}
                      onChange={(e) => handleChange('avgScore', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <div className="text-gray-900 flex items-center gap-2">
                      {formData.avgScore}%
                      <span className="text-xs text-green-600">Excellent</span>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Last Active</div>
                  <div className="text-gray-900">{formData.lastActive}</div>
                </div>
              </>
            )}

            {type === 'teachers' && (
              <>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Subject</div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.subject || ''}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <div className="text-gray-900">{formData.subject}</div>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Department</div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.department || ''}
                      onChange={(e) => handleChange('department', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <div className="text-gray-900">{formData.department}</div>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Number of Students</div>
                  <div className="text-gray-900">
                    {formData.students} students
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Experience</div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.experience || ''}
                      onChange={(e) =>
                        handleChange('experience', e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <div className="text-gray-900">{formData.experience}</div>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Rating</div>
                  {isEditing ? (
                    <input
                      type="number"
                      step="0.1"
                      value={formData.rating || ''}
                      onChange={(e) => handleChange('rating', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <div className="text-gray-900 flex items-center gap-2">
                      {formData.rating} ⭐
                      <span className="text-xs text-green-600">Excellent</span>
                    </div>
                  )}
                </div>
              </>
            )}

            {type === 'parents' && (
              <>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Number of Children</div>
                  <div className="text-gray-900">{formData.children}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Occupation</div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.occupation || ''}
                      onChange={(e) =>
                        handleChange('occupation', e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <div className="text-gray-900">{formData.occupation}</div>
                  )}
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Last Login</div>
                  <div className="text-gray-900">{formData.lastLogin}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg col-span-2">
                  <div className="text-sm text-gray-600 mb-1">Children Names</div>
                  <div className="text-gray-900">
                    {formData.childrenNames?.join(' • ')}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Performance Stats for Students */}
          {type === 'students' && (
            <div className="mb-8">
              <h3 className="text-gray-900 mb-4">Academic Performance</h3>

              <div className="flex gap-4">
                {/* Active Courses card */}
                <button
                  type="button"
                  onClick={() => setShowCourses((prev) => !prev)}
                  className="flex-1 bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition-colors"
                >
                  <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900 mb-1">
                    {formData.courseNames
                      ? formData.courseNames.length
                      : formData.courses}
                  </div>
                  <div className="text-sm text-gray-600">Active Courses</div>
                  <div className="mt-1 text-xs text-blue-700">
                    {showCourses ? 'Hide courses' : 'View courses'}
                  </div>
                </button>

                <div className="flex-1 bg-green-50 p-4 rounded-lg text-center">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900 mb-1">12</div>
                  <div className="text-sm text-gray-600">Achievements</div>
                </div>

                <div className="flex-1 bg-purple-50 p-4 rounded-lg text-center">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900 mb-1">+5%</div>
                  <div className="text-sm text-gray-600">This Month</div>
                </div>
              </div>

              {/* Courses list */}
              {showCourses && formData.courseNames && (
                <div className="mt-6 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        Enrolled Courses
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        All active courses for this student
                      </p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                      {formData.courseNames.length} courses
                    </span>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {formData.courseNames.map((course, index) => (
                      <div
                        key={course + index}
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-medium text-gray-400 w-6 text-right">
                            {index + 1}.
                          </span>
                          <span className="text-sm text-gray-900">
                            {course}
                          </span>
                        </div>
                        <span className="text-[11px] uppercase tracking-wide text-blue-600 font-semibold">
                          Active
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
            {!isEditing ? (
              <>
                <button
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={handleSendMessageClick}
                >
                  Send Message
                </button>
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Details
                </button>
              </>
            ) : (
              <>
                <button
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
