import { useState } from 'react';
import {
  Search,
  Plus,
  Send,
  Clock,
  CheckCircle,
  Edit,
  Trash2,
  Users,
} from 'lucide-react';
import { NotificationModal } from './NotificationModal';

export function NotificationManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterTarget, setFilterTarget] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Welcome to New Semester',
      message:
        'We are excited to welcome all students to the new academic semester. Please check your schedules and course materials.',
      target: 'students',
      status: 'sent',
      sentAt: '2024-11-20 09:00',
      createdAt: '2024-11-19 14:30',
      recipients: 1250,
    },
    {
      id: 2,
      title: 'Scheduled Maintenance Alert',
      message:
        'The platform will undergo scheduled maintenance on Saturday from 2 AM to 6 AM. Services will be temporarily unavailable.',
      target: 'all',
      status: 'scheduled',
      scheduledFor: '2024-11-27 08:00',
      createdAt: '2024-11-23 10:15',
      recipients: 3500,
    },
    {
      id: 3,
      title: 'New Course Materials Available',
      message:
        'New study materials for Mathematics Grade 10 have been uploaded to the platform.',
      target: 'students',
      status: 'sent',
      sentAt: '2024-11-22 11:30',
      createdAt: '2024-11-22 11:00',
      recipients: 450,
    },
    {
      id: 4,
      title: 'Parent-Teacher Meeting Reminder',
      message:
        'Reminder: Parent-teacher meetings are scheduled for next week. Please confirm your attendance.',
      target: 'parents',
      status: 'sent',
      sentAt: '2024-11-21 15:00',
      createdAt: '2024-11-21 14:30',
      recipients: 890,
    },
    {
      id: 5,
      title: 'Assignment Submission Deadline',
      message:
        'Reminder: Physics assignment submissions are due by Friday 11:59 PM.',
      target: 'students',
      status: 'sent',
      sentAt: '2024-11-24 10:00',
      createdAt: '2024-11-24 09:45',
      recipients: 320,
    },
    {
      id: 6,
      title: 'New Feature Announcement',
      message:
        'We have added AI-powered study recommendations to help personalize your learning experience.',
      target: 'all',
      status: 'draft',
      createdAt: '2024-11-25 08:00',
      recipients: 3500,
    },
  ]);

  const handleAddNotification = (data) => {
    if (selectedNotification) {
      setNotifications((prev) =>
        prev.map((n) =>
          n.id === selectedNotification.id ? { ...n, ...data } : n
        )
      );
    } else {
      const newNotification = {
        id: Date.now(),
        ...data,
        createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      };
      setNotifications((prev) => [newNotification, ...prev]);
    }
    setShowModal(false);
    setSelectedNotification(null);
  };

  const handleDeleteNotification = (id) => {
    if (window.confirm('Are you sure you want to delete this notification?')) {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }
  };

  const handleSendNow = (id) => {
    if (window.confirm('Send this notification immediately?')) {
      setNotifications((prev) =>
        prev.map((n) =>
          n.id === id
            ? {
                ...n,
                status: 'sent',
                sentAt: new Date()
                  .toISOString()
                  .slice(0, 16)
                  .replace('T', ' '),
              }
            : n
        )
      );
    }
  };

  // 👇 رجّعنا دالة الـ bulk
  const handleBulkAction = (action) => {
    if (selectedIds.length === 0) return;

    if (action === 'delete') {
      if (window.confirm(`Delete ${selectedIds.length} selected notifications?`)) {
        setNotifications((prev) =>
          prev.filter((n) => !selectedIds.includes(n.id))
        );
        setSelectedIds([]);
      }
    } else if (action === 'send') {
      if (window.confirm(`Send ${selectedIds.length} selected notifications?`)) {
        const now = new Date().toISOString().slice(0, 16).replace('T', ' ');
        setNotifications((prev) =>
          prev.map((n) =>
            selectedIds.includes(n.id)
              ? { ...n, status: 'sent', sentAt: now }
              : n
          )
        );
        setSelectedIds([]);
      }
    }
  };

  const filteredNotifications = notifications.filter((notification) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      notification.title.toLowerCase().includes(q) ||
      notification.message.toLowerCase().includes(q);

    const matchesStatus =
      filterStatus === 'all' || notification.status === filterStatus;

    const matchesTarget =
      filterTarget === 'all' || notification.target === filterTarget;

    return matchesSearch && matchesStatus && matchesTarget;
  });

  const toggleSelectAll = () => {
    if (
      selectedIds.length === filteredNotifications.length &&
      filteredNotifications.length > 0
    ) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredNotifications.map((n) => n.id));
    }
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'sent':
        return 'text-green-700 bg-green-50';
      case 'scheduled':
        return 'text-blue-700 bg-blue-50';
      default:
        return 'text-gray-700 bg-gray-50';
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-gray-900 mb-2">Notification Management</h1>
          <p className="text-gray-600">
            Create and manage platform-wide notifications
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedNotification(null);
            setShowModal(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Create Notification
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search notifications..."
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
              <option value="sent">Sent</option>
              <option value="scheduled">Scheduled</option>
              <option value="draft">Draft</option>
            </select>

            <select
              value={filterTarget}
              onChange={(e) => setFilterTarget(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Targets</option>
              <option value="students">Students</option>
              <option value="teachers">Teachers</option>
              <option value="parents">Parents</option>
              <option value="all">Everyone</option>
            </select>
          </div>

          {selectedIds.length > 0 && (
            <div className="mt-4 flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <p className="text-blue-900">{selectedIds.length} selected</p>
              <button
                onClick={() => handleBulkAction('send')}
                className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Send All
              </button>
              <button
                onClick={() => handleBulkAction('delete')}
                className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
              >
                Delete All
              </button>
              <button
                onClick={() => setSelectedIds([])}
                className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                Clear Selection
              </button>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="mb-4 text-sm text-gray-600">
            Showing {filteredNotifications.length} of {notifications.length}{' '}
            notifications
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4">
                    <input
                      type="checkbox"
                      checked={
                        filteredNotifications.length > 0 &&
                        selectedIds.length === filteredNotifications.length
                      }
                      onChange={toggleSelectAll}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                  </th>
                  <th className="text-left py-3 px-4 text-gray-700">Title</th>
                  <th className="text-left py-3 px-4 text-gray-700">Target</th>
                  <th className="text-left py-3 px-4 text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-gray-700">
                    Recipients
                  </th>
                  <th className="text-left py-3 px-4 text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredNotifications.map((notification) => (
                  <tr
                    key={notification.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(notification.id)}
                        onChange={() => toggleSelect(notification.id)}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-gray-900">{notification.title}</p>
                        <p className="text-sm text-gray-500 line-clamp-1">
                          {notification.message}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-purple-50 text-purple-700">
                        <Users className="w-3 h-3" />
                        {notification.target}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(
                          notification.status
                        )}`}
                      >
                        {notification.status === 'sent' && (
                          <CheckCircle className="w-3 h-3" />
                        )}
                        {notification.status === 'scheduled' && (
                          <Clock className="w-3 h-3" />
                        )}
                        {notification.status === 'draft' && (
                          <Edit className="w-3 h-3" />
                        )}
                        {notification.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {notification.recipients.toLocaleString()}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        {(notification.status === 'draft' ||
                          notification.status === 'scheduled') && (
                          <button
                            onClick={() => handleSendNow(notification.id)}
                            className="p-2 hover:bg-green-50 rounded-lg transition-colors"
                            title="Send Now"
                          >
                            <Send className="w-4 h-4 text-green-600" />
                          </button>
                        )}
                        <button
                          onClick={() => {
                            setSelectedNotification(notification);
                            setShowModal(true);
                          }}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          onClick={() =>
                            handleDeleteNotification(notification.id)
                          }
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredNotifications.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="py-6 text-center text-gray-500 text-sm"
                    >
                      No notifications match your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && (
        <NotificationModal
          notification={selectedNotification}
          onClose={() => {
            setShowModal(false);
            setSelectedNotification(null);
          }}
          onSave={handleAddNotification}
        />
      )}
    </div>
  );
}
