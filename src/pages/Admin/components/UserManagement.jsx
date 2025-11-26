// import { useState } from 'react';
// import { Search, Filter, UserPlus, MoreVertical, Mail, Ban, CheckCircle, Edit, Trash2, Eye, Download, Upload } from 'lucide-react';
// import { UserModal } from './UserModal';
// import { UserDetailsModal } from './UserDetailsModal';

// export function UserManagement() {
//   const [activeTab, setActiveTab] = useState('students');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [showDetailsModal, setShowDetailsModal] = useState(false);
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [filterGrade, setFilterGrade] = useState('all');

//   const [users, setUsers] = useState({
//     students: [
//       { id: 1, name: 'Ahmed Hassan', email: 'ahmed.hassan@example.com', grade: 'Grade 10', status: 'active', lastActive: '2 hours ago', phone: '0501234567', parent: 'Hassan Mahmoud', enrollDate: '2024-09-01', courses: 8, avgScore: 85 , courseNames: ['Algebra I', 'Physics Basics', 'English Writing', 'Computer Skills'] },
//       { id: 2, name: 'Fatima Ali', email: 'fatima.ali@example.com', grade: 'Grade 11', status: 'active', lastActive: '5 minutes ago', phone: '0507654321', parent: 'Ali Ahmed', enrollDate: '2024-09-01', courses: 9, avgScore: 92 , courseNames: ['Advanced Math', 'Chemistry', 'Biology', 'English Literature', 'Programming 1'] },
//       { id: 3, name: 'Omar Khalil', email: 'omar.khalil@example.com', grade: 'Grade 9', status: 'inactive', lastActive: '2 days ago', phone: '0509876543', parent: 'Khalil Ibrahim', enrollDate: '2024-09-01', courses: 7, avgScore: 78 ,courseNames: ['Algebra I', 'Chemistry', 'Biology','English Writing'] },
//       { id: 4, name: 'Layla Mohamed', email: 'layla.mohamed@example.com', grade: 'Grade 12', status: 'active', lastActive: '1 hour ago', phone: '0503456789', parent: 'Mohamed Abdullah', enrollDate: '2023-09-01', courses: 10, avgScore: 88 , courseNames: [ 'Biology', 'English Literature', 'Programming 1'] },
//       { id: 5, name: 'Youssef Ibrahim', email: 'youssef.ibrahim@example.com', grade: 'Grade 10', status: 'active', lastActive: '30 minutes ago', phone: '0506789012', parent: 'Ibrahim Said', enrollDate: '2024-09-01', courses: 8, avgScore: 81 , courseNames: ['Physics Basics', 'English Writing','Programming 1'] },
//     ],
//     teachers: [
//       { id: 1, name: 'Dr. Sarah Ahmed', email: 'sarah.ahmed@example.com', subject: 'Mathematics', status: 'active', students: 156, phone: '0551234567', department: 'Science', experience: '8 years', rating: 4.8 },
//       { id: 2, name: 'Prof. Mohamed Saleh', email: 'mohamed.saleh@example.com', subject: 'Physics', status: 'active', students: 132, phone: '0557654321', department: 'Science', experience: '12 years', rating: 4.9 },
//       { id: 3, name: 'Ms. Hanan Youssef', email: 'hanan.youssef@example.com', subject: 'Chemistry', status: 'active', students: 145, phone: '0559876543', department: 'Science', experience: '6 years', rating: 4.7 },
//       { id: 4, name: 'Dr. Khaled Mustafa', email: 'khaled.mustafa@example.com', subject: 'Biology', status: 'inactive', students: 98, phone: '0553456789', department: 'Science', experience: '10 years', rating: 4.6 },
//     ],
//     parents: [
//       { id: 1, name: 'Hassan Ahmed', email: 'hassan.ahmed@example.com', children: 2, status: 'active', lastLogin: '1 day ago', phone: '0581234567', childrenNames: ['Ahmed Hassan', 'Mariam Hassan'], occupation: 'Engineer' },
//       { id: 2, name: 'Aisha Mohamed', email: 'aisha.mohamed@example.com', children: 1, status: 'active', lastLogin: '3 hours ago', phone: '0587654321', childrenNames: ['Fatima Ali'], occupation: 'Doctor' },
//       { id: 3, name: 'Ibrahim Khalil', email: 'ibrahim.khalil@example.com', children: 3, status: 'active', lastLogin: '2 days ago', phone: '0589876543', childrenNames: ['Omar Khalil', 'Sara Khalil', 'Ali Khalil'], occupation: 'Teacher' },
//     ],
//   });

//   const tabs = [
//     { id: 'students', label: 'Students', count: users.students.length },
//     { id: 'teachers', label: 'Teachers', count: users.teachers.length },
//     { id: 'parents', label: 'Parents', count: users.parents.length },
//   ];

//   const handleAddUser = (userData) => {
//     const newUser = {
//       id: Date.now(),
//       ...userData,
//       status: 'active',
//       lastActive: 'Now',
//     };
    
//     setUsers(prev => ({
//       ...prev,
//       [activeTab]: [...prev[activeTab], newUser],
//     }));
    
//     setShowAddModal(false);
//   };

//   const handleDeleteUser = (userId) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       setUsers(prev => ({
//         ...prev,
//         [activeTab]: prev[activeTab].filter((u) => u.id !== userId),
//       }));
//     }
//   };

//   const handleToggleStatus = (userId) => {
//     setUsers(prev => ({
//       ...prev,
//       [activeTab]: prev[activeTab].map((u) =>
//         u.id === userId
//           ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' }
//           : u
//       ),
//     }));
//   };

//   const filteredUsers = users[activeTab].filter((user) => {
//     const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          user.email.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
//     const matchesGrade = filterGrade === 'all' || user.grade === filterGrade;
    
//     return matchesSearch && matchesStatus && (activeTab !== 'students' || matchesGrade);
//   });

//   const exportToCSV = () => {
//     alert('Exporting data to CSV file...');
//   };

//   return (
//     <div className="p-8">
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h1 className="text-gray-900 mb-2">User Management</h1>
//           <p className="text-gray-600">Manage all platform users and their permissions</p>
//         </div>
//         <div className="flex gap-3">
         
//           <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//             <Upload className="w-5 h-5" />
//             Print
//           </button>
//           <button 
//             onClick={() => setShowAddModal(true)}
//             className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             <UserPlus className="w-5 h-5" />
//             Add New User
//           </button>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg border border-gray-200">
//         <div className="border-b border-gray-200">
//           <div className="flex">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => {
//                   setActiveTab(tab.id);
//                   setSearchQuery('');
//                   setFilterStatus('all');
//                   setFilterGrade('all');
//                 }}
//                 className={`px-6 py-4 border-b-2 transition-colors ${
//                   activeTab === tab.id
//                     ? 'border-blue-600 text-blue-600'
//                     : 'border-transparent text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 {tab.label} ({tab.count})
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="p-6">
//           <div className="flex gap-4 mb-6">
//             <div className="flex-1 relative">
//               <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder={`Search ${activeTab}...`}
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <select 
//               value={filterStatus}
//               onChange={(e) => setFilterStatus(e.target.value)}
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="all">All Status</option>
//               <option value="active">Active</option>
//               <option value="inactive">Inactive</option>
//             </select>
//             {activeTab === 'students' && (
//               <select 
//                 value={filterGrade}
//                 onChange={(e) => setFilterGrade(e.target.value)}
//                 className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="all">All Grades</option>
//                 <option value="Grade 9">Grade 9</option>
//                 <option value="Grade 10">Grade 10</option>
//                 <option value="Grade 11">Grade 11</option>
//                 <option value="Grade 12">Grade 12</option>
//               </select>
//             )}
//           </div>

//           <div className="mb-4 text-sm text-gray-600">
//             Showing {filteredUsers.length} of {users[activeTab].length}
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-gray-200">
//                   <th className="text-left py-3 px-4 text-gray-700">Name</th>
//                   <th className="text-left py-3 px-4 text-gray-700">Email</th>
//                   <th className="text-left py-3 px-4 text-gray-700">
//                     {activeTab === 'students' && 'Grade'}
//                     {activeTab === 'teachers' && 'Subject'}
//                     {activeTab === 'parents' && 'Children'}
//                   </th>
//                   <th className="text-left py-3 px-4 text-gray-700">Status</th>
//                   <th className="text-left py-3 px-4 text-gray-700">
//                     {activeTab === 'students' && 'Last Active'}
//                     {activeTab === 'teachers' && 'Students'}
//                     {activeTab === 'parents' && 'Last Login'}
//                   </th>
//                   <th className="text-left py-3 px-4 text-gray-700">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredUsers.map((user) => (
//                   <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
//                     <td className="py-3 px-4 text-gray-900">{user.name}</td>
//                     <td className="py-3 px-4 text-gray-600">{user.email}</td>
//                     <td className="py-3 px-4 text-gray-600">
//                       {user.grade || user.subject || user.children}
//                     </td>
//                     <td className="py-3 px-4">
//                       <button
//                         onClick={() => handleToggleStatus(user.id)}
//                         className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
//                           user.status === 'active'
//                             ? 'bg-green-50 text-green-700 hover:bg-green-100'
//                             : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
//                         } transition-colors`}
//                       >
//                         <div
//                           className={`w-1.5 h-1.5 rounded-full ${
//                             user.status === 'active' ? 'bg-green-600' : 'bg-gray-600'
//                           }`}
//                         ></div>
//                         {user.status}
//                       </button>
//                     </td>
//                     <td className="py-3 px-4 text-gray-600">
//                       {user.lastActive || user.students || user.lastLogin}
//                     </td>
//                     <td className="py-3 px-4">
//                       <div className="flex items-center gap-2">
//                         <button 
//                           onClick={() => {
//                             setSelectedUser(user);
//                             setShowDetailsModal(true);
//                           }}
//                           className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                           title="View Details"
//                         >
//                           <Eye className="w-4 h-4 text-gray-600" />
//                         </button>
//                         <button 
//                           className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                           title="Edit"
//                         >
//                           <Edit className="w-4 h-4 text-gray-600" />
//                         </button>
//                         <button 
//                           className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                           title="Send Message"
//                         >
//                           <Mail className="w-4 h-4 text-gray-600" />
//                         </button>
//                         <button 
//                           onClick={() => handleDeleteUser(user.id)}
//                           className="p-2 hover:bg-red-50 rounded-lg transition-colors"
//                           title="Delete"
//                         >
//                           <Trash2 className="w-4 h-4 text-red-600" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {showAddModal && (
//         <UserModal
//           type={activeTab}
//           onClose={() => setShowAddModal(false)}
//           onSave={handleAddUser}
//         />
//       )}

//          {showDetailsModal && selectedUser && (
//         <UserDetailsModal
//           user={selectedUser}
//           type={activeTab}
//           onClose={() => {
//             setShowDetailsModal(false);
//             setSelectedUser(null);
//           }}
//           onSave={(updatedUser) => {
//             setUsers((prev) => ({
//               ...prev,
//               [activeTab]: prev[activeTab].map((u) =>
//                 u.id === updatedUser.id ? { ...u, ...updatedUser } : u
//               ),
//             }));
//             setSelectedUser(updatedUser);
//           }}
//         />
//       )}

//     </div>
//   );
// }


import { useState } from 'react';
import {
  Search,
  UserPlus,
  Mail,
  Edit,
  Trash2,
  Eye,
  Upload,
} from 'lucide-react';
import { UserModal } from './UserModal';
import { UserDetailsModal } from './UserDetailsModal';

export function UserManagement({ onOpenCommunication }) {
  const [activeTab, setActiveTab] = useState('students');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterGrade, setFilterGrade] = useState('all');

  const [users, setUsers] = useState({
    students: [
      {
        id: 1,
        name: 'Ahmed Hassan',
        email: 'ahmed.hassan@example.com',
        grade: 'Grade 10',
        status: 'active',
        lastActive: '2 hours ago',
        phone: '0501234567',
        parent: 'Hassan Mahmoud',
        enrollDate: '2024-09-01',
        courses: 8,
        avgScore: 85,
        courseNames: [
          'Algebra I',
          'Physics Basics',
          'English Writing',
          'Computer Skills',
        ],
      },
      {
        id: 2,
        name: 'Fatima Ali',
        email: 'fatima.ali@example.com',
        grade: 'Grade 11',
        status: 'active',
        lastActive: '5 minutes ago',
        phone: '0507654321',
        parent: 'Ali Ahmed',
        enrollDate: '2024-09-01',
        courses: 9,
        avgScore: 92,
        courseNames: [
          'Advanced Math',
          'Chemistry',
          'Biology',
          'English Literature',
          'Programming 1',
        ],
      },
      {
        id: 3,
        name: 'Omar Khalil',
        email: 'omar.khalil@example.com',
        grade: 'Grade 9',
        status: 'inactive',
        lastActive: '2 days ago',
        phone: '0509876543',
        parent: 'Khalil Ibrahim',
        enrollDate: '2024-09-01',
        courses: 7,
        avgScore: 78,
        courseNames: [
          'Algebra I',
          'Chemistry',
          'Biology',
          'English Writing',
        ],
      },
      {
        id: 4,
        name: 'Layla Mohamed',
        email: 'layla.mohamed@example.com',
        grade: 'Grade 12',
        status: 'active',
        lastActive: '1 hour ago',
        phone: '0503456789',
        parent: 'Mohamed Abdullah',
        enrollDate: '2023-09-01',
        courses: 10,
        avgScore: 88,
        courseNames: ['Biology', 'English Literature', 'Programming 1'],
      },
      {
        id: 5,
        name: 'Youssef Ibrahim',
        email: 'youssef.ibrahim@example.com',
        grade: 'Grade 10',
        status: 'active',
        lastActive: '30 minutes ago',
        phone: '0506789012',
        parent: 'Ibrahim Said',
        enrollDate: '2024-09-01',
        courses: 8,
        avgScore: 81,
        courseNames: ['Physics Basics', 'English Writing', 'Programming 1'],
      },
    ],
    teachers: [
      {
        id: 1,
        name: 'Dr. Sarah Ahmed',
        email: 'sarah.ahmed@example.com',
        subject: 'Mathematics',
        status: 'active',
        students: 156,
        phone: '0551234567',
        department: 'Science',
        experience: '8 years',
        rating: 4.8,
      },
      {
        id: 2,
        name: 'Prof. Mohamed Saleh',
        email: 'mohamed.saleh@example.com',
        subject: 'Physics',
        status: 'active',
        students: 132,
        phone: '0557654321',
        department: 'Science',
        experience: '12 years',
        rating: 4.9,
      },
      {
        id: 3,
        name: 'Ms. Hanan Youssef',
        email: 'hanan.youssef@example.com',
        subject: 'Chemistry',
        status: 'active',
        students: 145,
        phone: '0559876543',
        department: 'Science',
        experience: '6 years',
        rating: 4.7,
      },
      {
        id: 4,
        name: 'Dr. Khaled Mustafa',
        email: 'khaled.mustafa@example.com',
        subject: 'Biology',
        status: 'inactive',
        students: 98,
        phone: '0553456789',
        department: 'Science',
        experience: '10 years',
        rating: 4.6,
      },
    ],
    parents: [
      {
        id: 1,
        name: 'Hassan Ahmed',
        email: 'hassan.ahmed@example.com',
        children: 2,
        status: 'active',
        lastLogin: '1 day ago',
        phone: '0581234567',
        childrenNames: ['Ahmed Hassan', 'Mariam Hassan'],
        occupation: 'Engineer',
      },
      {
        id: 2,
        name: 'Aisha Mohamed',
        email: 'aisha.mohamed@example.com',
        children: 1,
        status: 'active',
        lastLogin: '3 hours ago',
        phone: '0587654321',
        childrenNames: ['Fatima Ali'],
        occupation: 'Doctor',
      },
      {
        id: 3,
        name: 'Ibrahim Khalil',
        email: 'ibrahim.khalil@example.com',
        children: 3,
        status: 'active',
        lastLogin: '2 days ago',
        phone: '0589876543',
        childrenNames: ['Omar Khalil', 'Sara Khalil', 'Ali Khalil'],
        occupation: 'Teacher',
      },
    ],
  });

  const tabs = [
    { id: 'students', label: 'Students', count: users.students.length },
    { id: 'teachers', label: 'Teachers', count: users.teachers.length },
    { id: 'parents', label: 'Parents', count: users.parents.length },
  ];

  const handleAddUser = (userData) => {
    const newUser = {
      id: Date.now(),
      ...userData,
      status: 'active',
      lastActive: 'Now',
    };

    setUsers((prev) => ({
      ...prev,
      [activeTab]: [...prev[activeTab], newUser],
    }));

    setShowAddModal(false);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers((prev) => ({
        ...prev,
        [activeTab]: prev[activeTab].filter((u) => u.id !== userId),
      }));
    }
  };

  const handleToggleStatus = (userId) => {
    setUsers((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((u) =>
        u.id === userId
          ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' }
          : u
      ),
    }));
  };

  const filteredUsers = users[activeTab].filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    const matchesGrade =
      filterGrade === 'all' || user.grade === filterGrade;

    return (
      matchesSearch &&
      matchesStatus &&
      (activeTab !== 'students' || matchesGrade)
    );
  });

  const exportToCSV = () => {
    alert('Exporting data to CSV file...');
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-gray-900 mb-2">User Management</h1>
          <p className="text-gray-600">
            Manage all platform users and their permissions
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Upload className="w-5 h-5" />
            Print
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <UserPlus className="w-5 h-5" />
            Add New User
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchQuery('');
                  setFilterStatus('all');
                  setFilterGrade('all');
                }}
                className={`px-6 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {activeTab === 'students' && (
              <select
                value={filterGrade}
                onChange={(e) => setFilterGrade(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Grades</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
              </select>
            )}
          </div>

          <div className="mb-4 text-sm text-gray-600">
            Showing {filteredUsers.length} of {users[activeTab].length}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-700">Name</th>
                  <th className="text-left py-3 px-4 text-gray-700">Email</th>
                  <th className="text-left py-3 px-4 text-gray-700">
                    {activeTab === 'students' && 'Grade'}
                    {activeTab === 'teachers' && 'Subject'}
                    {activeTab === 'parents' && 'Children'}
                  </th>
                  <th className="text-left py-3 px-4 text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-gray-700">
                    {activeTab === 'students' && 'Last Active'}
                    {activeTab === 'teachers' && 'Students'}
                    {activeTab === 'parents' && 'Last Login'}
                  </th>
                  <th className="text-left py-3 px-4 text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 text-gray-900">{user.name}</td>
                    <td className="py-3 px-4 text-gray-600">{user.email}</td>
                    <td className="py-3 px-4 text-gray-600">
                      {user.grade || user.subject || user.children}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleToggleStatus(user.id)}
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                          user.status === 'active'
                            ? 'bg-green-50 text-green-700 hover:bg-green-100'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        } transition-colors`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            user.status === 'active'
                              ? 'bg-green-600'
                              : 'bg-gray-600'
                          }`}
                        ></div>
                        {user.status}
                      </button>
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {user.lastActive || user.students || user.lastLogin}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedUser(user);
                            setShowDetailsModal(true);
                          }}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                         
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Send Message"
                          onClick={() =>
                            onOpenCommunication && onOpenCommunication(user)
                          }
                        >
                          <Mail className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showAddModal && (
        <UserModal
          type={activeTab}
          onClose={() => setShowAddModal(false)}
          onSave={handleAddUser}
        />
      )}

      {showDetailsModal && selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          type={activeTab}
          onClose={() => {
            setShowDetailsModal(false);
            setSelectedUser(null);
          }}
          onSendMessage={(userToMessage) => {
            if (onOpenCommunication) {
              onOpenCommunication(userToMessage);
            }
          }}
        />
      )}
    </div>
  );
}
