//  import { motion } from 'framer-motion';
// import {
//   LayoutDashboard,
//   BookOpen,
//   FileText,
//   CheckSquare,
//   TrendingUp,
//   Bell,
//   Bot,
//   Settings,
//   LogOut,
// } from 'lucide-react';

// // مكونات UI مبسطة بديلة
// const Avatar = ({ children, className = "" }) => (
//   <div className={`rounded-full overflow-hidden ${className}`}>
//     {children}
//   </div>
// );

// const AvatarImage = ({ src, alt = "" }) => (
//   <img src={src} alt={alt} className="w-full h-full object-cover" />
// );

// const AvatarFallback = ({ children }) => (
//   <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 font-medium">
//     {children}
//   </div>
// );

// const Button = ({ children, className = "", variant = "default", ...props }) => {
//   const baseClasses = "px-4 py-2 rounded-lg transition-colors flex items-center justify-center";
//   const variants = {
//     default: "bg-blue-600 text-white hover:bg-blue-700",
//     outline: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
//   };
  
//   return (
//     <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// };

// const Separator = ({ className = "" }) => (
//   <div className={`h-px bg-gray-200 ${className}`} />
// );

// const menuItems = [
//   { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
//   { id: 'lessons', icon: BookOpen, label: 'My Lessons' },
//   { id: 'quizzes', icon: FileText, label: 'Quizzes & Exams' },
//   { id: 'assignments', icon: CheckSquare, label: 'Assignments' },
//   { id: 'progress', icon: TrendingUp, label: 'Progress' },
//   { id: 'notifications', icon: Bell, label: 'Notifications' },
//   { id: 'ai-tutor', icon: Bot, label: 'AI Tutor' },
//   { id: 'settings', icon: Settings, label: 'Settings' },
// ];

// export function Sidebar({ activeItem, onItemChange }) {
//   return (
//     <div className="fixed left-0 top-0 h-screen w-60 bg-white/80 backdrop-blur-xl border-r border-gray-200/50 shadow-lg z-40 flex flex-col">
//       {/* Logo Section */}
//       <div className="p-6 pb-4">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#9333EA] flex items-center justify-center shadow-lg">
//             <span className="text-white" style={{ fontSize: '20px', fontWeight: '700' }}>R</span>
//           </div>
//           <span 
//             className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] bg-clip-text text-transparent"
//             style={{ fontSize: '20px', fontWeight: '700' }}
//           >
//             Ruwwad
//           </span>
//         </div>
//       </div>

//       <Separator className="mx-4" />

//       {/* Navigation Menu */}
//       <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
//         {menuItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = activeItem === item.id;

//           return (
//             <motion.button
//               key={item.id}
//               onClick={() => onItemChange(item.id)}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all relative group ${
//                 isActive
//                   ? 'bg-gradient-to-r from-[#4F46E5]/10 to-[#9333EA]/10 text-[#4F46E5]'
//                   : 'text-gray-600 hover:bg-gray-100'
//               }`}
//               whileHover={{ x: 4 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {/* Active Indicator */}
//               {isActive && (
//                 <motion.div
//                   layoutId="activeIndicator"
//                   className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-gradient-to-b from-[#4F46E5] to-[#9333EA]"
//                   transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                 />
//               )}

//               {/* Icon */}
//               <div className={`relative ${isActive ? 'text-[#4F46E5]' : 'text-gray-600 group-hover:text-[#4F46E5]'}`}>
//                 <Icon className="w-5 h-5" />
//                 {isActive && (
//                   <div className="absolute inset-0 blur-md opacity-50">
//                     <Icon className="w-5 h-5 text-[#9333EA]" />
//                   </div>
//                 )}
//               </div>

//               {/* Label */}
//               <span style={{ fontSize: '14px', fontWeight: isActive ? '600' : '500' }}>
//                 {item.label}
//               </span>

//               {/* Notification Badge (only for notifications) */}
//               {item.id === 'notifications' && (
//                 <div className="ml-auto w-5 h-5 bg-gradient-to-br from-[#4F46E5] to-[#9333EA] rounded-full flex items-center justify-center">
//                   <span className="text-white" style={{ fontSize: '10px', fontWeight: '600' }}>3</span>
//                 </div>
//               )}
//             </motion.button>
//           );
//         })}
//       </nav>

//       <Separator className="mx-4" />

//       {/* Profile Section */}
//       <div className="p-4 space-y-3">
//         {/* Profile Info */}
//         <div 
//           className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
//           onClick={() => console.log('Profile clicked')}
//         >
//           <Avatar className="h-10 w-10 border-2 border-gray-300">
//             <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amira" alt="Amira" />
//             <AvatarFallback>AM</AvatarFallback>
//           </Avatar>
//           <div className="flex flex-col flex-1 min-w-0">
//             <span className="text-[#0F172A] truncate" style={{ fontSize: '14px', fontWeight: '600' }}>
//               Amira Hassan
//             </span>
//             <span className="text-gray-500 truncate" style={{ fontSize: '12px' }}>
//               Grade 10
//             </span>
//           </div>
//         </div>

//         {/* Logout Button */}
//         <Button
//           variant="outline"
//           className="w-full justify-start gap-3 rounded-xl border-gray-300 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
//           onClick={() => console.log('Logout clicked')}
//         >
//           <LogOut className="w-4 h-4" />
//           <span style={{ fontSize: '14px', fontWeight: '600' }}>Logout</span>
//         </Button>
//       </div>
//     </div>
//   );
// }


//بدي الي تحتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتت


// import { motion } from 'framer-motion';
// import {
//   LayoutDashboard,
//   BookOpen,
//   FileText,
//   CheckSquare,
//   TrendingUp,
//   Bell,
//   Bot,
//   Settings,
//   LogOut,
// } from 'lucide-react';

// const menuItems = [
//   { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
//   { id: 'lessons', icon: BookOpen, label: 'My Lessons' },
//   { id: 'assignments', icon: CheckSquare, label: 'Assignments' },
//   { id: 'progress', icon: TrendingUp, label: 'Progress' },
//   { id: 'notifications', icon: Bell, label: 'Notifications' },
//   { id: 'ai-tutor', icon: Bot, label: 'AI Tutor' },
//   { id: 'settings', icon: Settings, label: 'Settings' },
// ];

// export function Sidebar({ activeItem, onItemChange }) {
//   return (
//     <div className="sidebar">
//       {/* Logo Section */}
//       <div className="sidebar-header">
//         <div className="logo">R</div>
//         <div className="sidebar-title">Ruwwad</div>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="flex-1 px-3 py-4 space-y-1">
//         {menuItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = activeItem === item.id;

//           return (
//             <motion.button
//               key={item.id}
//               onClick={() => onItemChange(item.id)}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
//                 isActive
//                   ? 'bg-blue-100 text-blue-700'
//                   : 'text-gray-600 hover:bg-gray-100'
//               }`}
//               whileHover={{ x: 4 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <Icon className="w-5 h-5" />
//               <span className="font-medium">{item.label}</span>
              
//               {item.id === 'notifications' && (
//                 <div className="ml-auto w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
//                   <span className="text-white text-xs font-semibold">3</span>
//                 </div>
//               )}
//             </motion.button>
//           );
//         })}
//       </nav>

//       {/* Profile Section */}
//       <div className="p-4 space-y-3">
//         <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
//           <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
//             <span className="text-gray-600 font-medium">AM</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-gray-900 font-semibold">Amira Hassan</span>
//             <span className="text-gray-500 text-sm">Grade 10</span>
//           </div>
//         </div>

//         <button className="w-full flex items-center gap-3 px-4 py-2 rounded-xl border border-gray-300 hover:bg-red-50 hover:text-red-600 transition-colors">
//           <LogOut className="w-4 h-4" />
//           <span className="font-medium">Logout</span>
//         </button>
//       </div>
//     </div>
//   );
// }

import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  CheckSquare,
  TrendingUp,
  Bell,
  Bot,
  Settings,
  LogOut,
} from 'lucide-react';

const menuItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'lessons', icon: BookOpen, label: 'My Lessons' },
  { id: 'assignments', icon: CheckSquare, label: 'Assignments' },
  { id: 'progress', icon: TrendingUp, label: 'Progress' },
  { id: 'notifications', icon: Bell, label: 'Notifications' },
  { id: 'ai-tutor', icon: Bot, label: 'AI Tutor' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

export function Sidebar({ activeItem, onItemChange }) {
  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="sidebar-header">
        <div className="logo-container">
          <img 
            src="/logoRUWWAD.png" 
            alt="Ruwwad Logo" 
            className="logo-image"
          />
        </div>
        
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => onItemChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              
              {item.id === 'notifications' && (
                <div className="ml-auto w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">3</span>
                </div>
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Profile Section */}
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600 font-medium">AM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-900 font-semibold">Amira Hassan</span>
            <span className="text-gray-500 text-sm">Grade 10</span>
          </div>
        </div>

        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-xl border border-gray-300 hover:bg-red-50 hover:text-red-600 transition-colors">
          <LogOut className="w-4 h-4" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}