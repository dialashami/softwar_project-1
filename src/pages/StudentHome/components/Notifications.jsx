 




// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Bell,
//   CheckCircle2,
//   AlertCircle,
//   Info,
//   Award,
//   MessageCircle,
//   Calendar,
//   Trash2,
// } from "lucide-react";

// const notificationsData = [
//   {
//     id: 1,
//     type: "assignment",
//     icon: AlertCircle,
//     title: "Assignment Due Soon",
//     message: "Your Calculus Problem Set #5 is due tomorrow at 11:59 PM.",
//     time: "2 hours ago",
//     read: false,
//     actionable: true,
//   },
//   {
//     id: 2,
//     type: "grade",
//     icon: Award,
//     title: "New Grade Posted",
//     message: "Your Physics Lab Report has been graded. You scored 95%!",
//     time: "3 hours ago",
//     read: false,
//     actionable: true,
//   },
//   {
//     id: 3,
//     type: "message",
//     icon: MessageCircle,
//     title: "Teacher Message",
//     message:
//       'Ms. Sarah commented on your Chemistry essay: "Great analysis!"',
//     time: "5 hours ago",
//     read: false,
//     actionable: true,
//   },
//   {
//     id: 4,
//     type: "lesson",
//     icon: Info,
//     title: "New Lesson Available",
//     message:
//       'A new lesson "Advanced Quantum Mechanics" is now available.',
//     time: "1 day ago",
//     read: true,
//     actionable: true,
//   },
//   {
//     id: 5,
//     type: "quiz",
//     icon: CheckCircle2,
//     title: "Quiz Completed",
//     message:
//       "You completed the Organic Chemistry Test with a score of 92%.",
//     time: "1 day ago",
//     read: true,
//     actionable: false,
//   },
//   {
//     id: 6,
//     type: "schedule",
//     icon: Calendar,
//     title: "Upcoming Class",
//     message: "Your Mathematics class starts in 30 minutes.",
//     time: "2 days ago",
//     read: true,
//     actionable: false,
//   },
//   {
//     id: 7,
//     type: "achievement",
//     icon: Award,
//     title: "Achievement Unlocked",
//     message:
//       'You earned the "Quick Learner" badge for completing 10 lessons in one week!',
//     time: "2 days ago",
//     read: true,
//     actionable: false,
//   },
//   {
//     id: 8,
//     type: "deadline",
//     icon: AlertCircle,
//     title: "Deadline Missed",
//     message: "You missed the deadline for Trigonometry Practice Problems.",
//     time: "3 days ago",
//     read: true,
//     actionable: true,
//   },
// ];

// export default function Notifications() {
//   const [activeTab, setActiveTab] = useState("all");
//   const [notificationList, setNotificationList] = useState(notificationsData);

//   const filteredNotifications = notificationList.filter((n) => {
//     if (activeTab === "all") return true;
//     if (activeTab === "unread") return !n.read;
//     if (activeTab === "read") return n.read;
//     return true;
//   });

//   const handleMarkAsRead = (id) => {
//     setNotificationList((prev) =>
//       prev.map((n) => (n.id === id ? { ...n, read: true } : n))
//     );
//   };

//   const handleDelete = (id) => {
//     setNotificationList((prev) => prev.filter((n) => n.id !== id));
//   };

//   const handleMarkAllAsRead = () => {
//     setNotificationList((prev) => prev.map((n) => ({ ...n, read: true })));
//   };

//   const unreadCount = notificationList.filter((n) => !n.read).length;

//   // helper: choose bubble color classes by type
//   const getIconClasses = (type) => {
//     switch (type) {
//       case "assignment":
//         return "icon-orange-bg icon-orange-fg";
//       case "grade":
//         return "icon-yellow-bg icon-yellow-fg";
//       case "message":
//         return "icon-blue-bg icon-blue-fg";
//       case "lesson":
//         return "icon-purple-bg icon-purple-fg";
//       case "quiz":
//         return "icon-green-bg icon-green-fg";
//       case "schedule":
//         return "icon-pink-bg icon-pink-fg";
//       case "achievement":
//         return "icon-yellow-bg icon-yellow-fg";
//       case "deadline":
//         return "icon-red-bg icon-red-fg";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div className="notifications-page">
//       {/* HEADER */}
//       <div className="notifications-header-row">
//         <div className="notifications-header-left">
//           <h1>
//             Notifications <span role="img" aria-label="bell">🔔</span>
//           </h1>
//           <p>Stay updated with your learning activities</p>
//         </div>

//         <div className="notifications-header-right">
//           {unreadCount > 0 && (
//             <span className="unread-badge">{unreadCount} Unread</span>
//           )}

//           <button
//             className="mark-all-btn"
//             onClick={handleMarkAllAsRead}
//           >
//             Mark All as Read
//           </button>
//         </div>
//       </div>

//       {/* TABS */}
//       <div className="tabs-wrapper">
//         <div className="tabs-list">
//           <button
//             className="tabs-trigger"
//             data-active={activeTab === "all"}
//             onClick={() => setActiveTab("all")}
//           >
//             All
//           </button>

//           <button
//             className="tabs-trigger"
//             data-active={activeTab === "unread"}
//             onClick={() => setActiveTab("unread")}
//           >
//             Unread
//           </button>

//           <button
//             className="tabs-trigger"
//             data-active={activeTab === "read"}
//             onClick={() => setActiveTab("read")}
//           >
//             Read
//           </button>
//         </div>
//       </div>

//       {/* LIST */}
//       <div className="notifications-list">
//         {filteredNotifications.length > 0 ? (
//           filteredNotifications.map((n, index) => {
//             const IconEl = n.icon;
//             return (
//               <motion.div
//                 key={n.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.05 }}
//               >
//                 <div
//                   className={`notification-card ${
//                     !n.read ? "unread" : ""
//                   }`}
//                 >
//                   <div className="notification-inner">
//                     {/* Icon bubble */}
//                     <div className={`notification-icon ${getIconClasses(n.type)}`}>
//                       <IconEl size={24} />
//                     </div>

//                     {/* Content */}
//                     <div className="notification-content">
//                       <div className="notification-header-row">
//                         <div className="notification-title">{n.title}</div>
//                         <div className="notification-time">
//                           <span>{n.time}</span>
//                           {!n.read && <span className="unread-dot" />}
//                         </div>
//                       </div>

//                       <div className="notification-message">
//                         {n.message}
//                       </div>

//                       <div className="notification-actions-row">
//                         {n.actionable && (
//                           <button className="view-btn">
//                             View
//                           </button>
//                         )}

//                         {!n.read && (
//                           <button
//                             className="mark-read-btn"
//                             onClick={() => handleMarkAsRead(n.id)}
//                           >
//                             Mark as Read
//                           </button>
//                         )}

//                         <button
//                           className="delete-btn"
//                           onClick={() => handleDelete(n.id)}
//                         >
//                           <Trash2 size={16} />
//                           <span>Delete</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//           >
//             <div className="empty-state-wrapper">
//               <div className="empty-state-icon-ring">
//                 <Bell size={48} />
//               </div>
//               <div className="empty-state-title">No notifications</div>
//               <div className="empty-state-desc">
//                 You're all caught up! 🎉
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  AlertCircle,
  Info,
  Award,
  MessageCircle,
  Calendar,
  Trash2,
  X,
} from "lucide-react";

const notificationsData = [
  {
    id: 1,
    type: "assignment",
    icon: AlertCircle,
    title: "Assignment Due Soon",
    message: "Your Calculus Problem Set #5 is due tomorrow at 11:59 PM.",
    time: "2 hours ago",
    read: false,
    actionable: true,
  },
  {
    id: 2,
    type: "grade",
    icon: Award,
    title: "New Grade Posted",
    message: "Your Physics Lab Report has been graded. You scored 95%!",
    time: "3 hours ago",
    read: false,
    actionable: true,
  },
  {
    id: 3,
    type: "message",
    icon: MessageCircle,
    title: "Teacher Message",
    message:
      'Ms. Sarah commented on your Chemistry essay: "Great analysis!"',
    time: "5 hours ago",
    read: false,
    actionable: true,
  },
  {
    id: 4,
    type: "lesson",
    icon: Info,
    title: "New Lesson Available",
    message:
      'A new lesson "Advanced Quantum Mechanics" is now available.',
    time: "1 day ago",
    read: true,
    actionable: true,
  },
  {
    id: 5,
    type: "quiz",
    icon: CheckCircle2,
    title: "Quiz Completed",
    message:
      "You completed the Organic Chemistry Test with a score of 92%.",
    time: "1 day ago",
    read: true,
    actionable: false,
  },
  {
    id: 6,
    type: "schedule",
    icon: Calendar,
    title: "Upcoming Class",
    message: "Your Mathematics class starts in 30 minutes.",
    time: "2 days ago",
    read: true,
    actionable: false,
  },
  {
    id: 7,
    type: "achievement",
    icon: Award,
    title: "Achievement Unlocked",
    message:
      'You earned the "Quick Learner" badge for completing 10 lessons in one week!',
    time: "2 days ago",
    read: true,
    actionable: false,
  },
  {
    id: 8,
    type: "deadline",
    icon: AlertCircle,
    title: "Deadline Missed",
    message: "You missed the deadline for Trigonometry Practice Problems.",
    time: "3 days ago",
    read: true,
    actionable: true,
  },
];

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("all");
  const [notificationList, setNotificationList] = useState(notificationsData);

  // modal state
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const filteredNotifications = notificationList.filter((n) => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return !n.read;
    if (activeTab === "read") return n.read;
    return true;
  });

  const handleMarkAsRead = (id) => {
    setNotificationList((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleDelete = (id) => {
    setNotificationList((prev) => prev.filter((n) => n.id !== id));
    // لو حذفتي الإشعار وهو مفتوح بالمودال، سكّري المودال
    if (selectedNotification && selectedNotification.id === id) {
      setIsDetailsOpen(false);
      setSelectedNotification(null);
    }
  };

  const handleMarkAllAsRead = () => {
    setNotificationList((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notificationList.filter((n) => !n.read).length;

  // اختيار ستايل البادج تبع الأيقونة حسب النوع
  const getIconClasses = (type) => {
    switch (type) {
      case "assignment":
        return "icon-orange-bg icon-orange-fg";
      case "grade":
        return "icon-yellow-bg icon-yellow-fg";
      case "message":
        return "icon-blue-bg icon-blue-fg";
      case "lesson":
        return "icon-purple-bg icon-purple-fg";
      case "quiz":
        return "icon-green-bg icon-green-fg";
      case "schedule":
        return "icon-pink-bg icon-pink-fg";
      case "achievement":
        return "icon-yellow-bg icon-yellow-fg";
      case "deadline":
        return "icon-red-bg icon-red-fg";
      default:
        return "";
    }
  };

  // لما أضغط View
  const openDetails = (notification) => {
    // علمها مقروءة
    setNotificationList((prev) =>
      prev.map((n) =>
        n.id === notification.id ? { ...n, read: true } : n
      )
    );

    // خزّنها وافتح المودال
    setSelectedNotification(notification);
    setIsDetailsOpen(true);
  };

  const closeDetails = () => {
    setIsDetailsOpen(false);
    setSelectedNotification(null);
  };

  return (
    <div className="notifications-page">
      {/* HEADER */}
      <div className="notifications-header-row">
        <div className="notifications-header-left">
          <h1>
            Notifications <span role="img" aria-label="bell">🔔</span>
          </h1>
          <p>Stay updated with your learning activities</p>
        </div>

        <div className="notifications-header-right">
          {unreadCount > 0 && (
            <span className="unread-badge">{unreadCount} Unread</span>
          )}

          <button
            className="mark-all-btn"
            onClick={handleMarkAllAsRead}
          >
            Mark All as Read
          </button>
        </div>
      </div>

      {/* TABS */}
      <div className="tabs-wrapper">
        <div className="tabs-list">
          <button
            className="tabs-trigger"
            data-active={activeTab === "all"}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>

          <button
            className="tabs-trigger"
            data-active={activeTab === "unread"}
            onClick={() => setActiveTab("unread")}
          >
            Unread
          </button>

          <button
            className="tabs-trigger"
            data-active={activeTab === "read"}
            onClick={() => setActiveTab("read")}
          >
            Read
          </button>
        </div>
      </div>

      {/* LIST */}
      <div className="notifications-list">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((n, index) => {
            const IconEl = n.icon;
            return (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div
                  className={`notification-card ${!n.read ? "unread" : ""}`}
                >
                  <div className="notification-inner">
                    {/* Icon bubble */}
                    <div
                      className={`notification-icon ${getIconClasses(
                        n.type
                      )}`}
                    >
                      <IconEl size={24} />
                    </div>

                    {/* Content */}
                    <div className="notification-content">
                      <div className="notification-header-row">
                        <div className="notification-title">{n.title}</div>
                        <div className="notification-time">
                          <span>{n.time}</span>
                          {!n.read && <span className="unread-dot" />}
                        </div>
                      </div>

                      <div className="notification-message">{n.message}</div>

                      <div className="notification-actions-row">
                        {n.actionable && (
                          <button
                            className="view-btn"
                            onClick={() => openDetails(n)}
                          >
                            View
                          </button>
                        )}

                        {!n.read && (
                          <button
                            className="mark-read-btn"
                            onClick={() => handleMarkAsRead(n.id)}
                          >
                            Mark as Read
                          </button>
                        )}

                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(n.id)}
                        >
                          <Trash2 size={16} />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="empty-state-wrapper">
              <div className="empty-state-icon-ring">
                <Bell size={48} />
              </div>
              <div className="empty-state-title">No notifications</div>
              <div className="empty-state-desc">
                You're all caught up! 🎉
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* DETAILS MODAL */}
      {isDetailsOpen && selectedNotification && (
        <div className="notif-modal-overlay" onClick={closeDetails}>
          <motion.div
            className="notif-modal-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()} // ما تسكري لو كبست جوه
          >
            <div className="notif-modal-header">
              <div className="notif-modal-icon-and-title">
                <div
                  className={`notification-icon ${getIconClasses(
                    selectedNotification.type
                  )}`}
                >
                  <selectedNotification.icon size={24} />
                </div>
                <div className="notif-modal-texts">
                  <div className="notif-modal-title">
                    {selectedNotification.title}
                  </div>
                  <div className="notif-modal-time">
                    {selectedNotification.time}
                  </div>
                </div>
              </div>

              <button className="notif-modal-close" onClick={closeDetails}>
                <X size={20} />
              </button>
            </div>

            <div className="notif-modal-body">
              <div className="notif-modal-message">
                {selectedNotification.message}
              </div>
            </div>

            <div className="notif-modal-footer">
              <button
                className="delete-btn"
                onClick={() => {
                  handleDelete(selectedNotification.id);
                }}
              >
                <Trash2 size={16} />
                <span>Delete</span>
              </button>

              {!selectedNotification.read && (
                <button
                  className="mark-read-btn"
                  onClick={() => {
                    handleMarkAsRead(selectedNotification.id);
                    // locally update selectedNotification.read too so the dot disappears if you reopen
                    setSelectedNotification((prev) =>
                      prev ? { ...prev, read: true } : prev
                    );
                  }}
                >
                  Mark as Read
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
