import { useState, useEffect } from 'react';
import { X, Send, Clock, Save } from 'lucide-react';

export function NotificationModal({ notification, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    type: 'info',
    target: 'all',
    
    status: 'draft',
    scheduledFor: '',
    recipients: 0,
  });

  useEffect(() => {
    if (notification) {
      setFormData({
        title: notification.title || '',
        message: notification.message || '',
        type: notification.type || 'info',
        target: notification.target || 'all',
       
        status: notification.status || 'draft',
        scheduledFor: notification.scheduledFor || '',
        recipients: notification.recipients || 0,
      });
    }
  }, [notification]);

  const calculateRecipients = (target) => {
    const counts = {
      'all': 3500,
      'students': 1250,
      'teachers': 156,
      'parents': 890,
      'custom': 0,
    };
    return counts[target] || 0;
  };

  const handleTargetChange = (target) => {
    setFormData(prev => ({
      ...prev,
      target,
      recipients: calculateRecipients(target)
    }));
  };

  const handleSubmit = (status) => {
    if (!formData.title.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    if (status === 'scheduled' && !formData.scheduledFor) {
      alert('Please select a date and time for scheduled notifications');
      return;
    }

    const data = {
      ...formData,
      status,
      recipients: formData.recipients || calculateRecipients(formData.target),
    };

    if (status === 'sent') {
      data.sentAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
    }

    onSave(data);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <h2 className="text-gray-900">
            {notification ? 'Edit Notification' : 'Create New Notification'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Enter notification title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Enter notification message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <p className="text-sm text-gray-500 mt-1">
              {formData.message.length} characters
            </p>
          </div>

          {/* Type and Priority Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="info">Info</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
              </select>
            </div>

           
          </div>

          {/* Target Audience */}
          <div>
            <label className="block text-gray-700 mb-2">Target Audience</label>
            <div className="space-y-2">
              <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="target"
                  value="all"
                  checked={formData.target === 'all'}
                  onChange={(e) => handleTargetChange(e.target.value)}
                  className="mr-3"
                />
                <div className="flex-1">
                  <p className="text-gray-900">Everyone</p>
                  <p className="text-sm text-gray-500">All platform users (Students, Teachers, Parents)</p>
                </div>
                <span className="text-gray-600">~3,500 users</span>
              </label>

              <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="target"
                  value="students"
                  checked={formData.target === 'students'}
                  onChange={(e) => handleTargetChange(e.target.value)}
                  className="mr-3"
                />
                <div className="flex-1">
                  <p className="text-gray-900">Students Only</p>
                  <p className="text-sm text-gray-500">All registered students</p>
                </div>
                <span className="text-gray-600">~1,250 users</span>
              </label>

              <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="target"
                  value="teachers"
                  checked={formData.target === 'teachers'}
                  onChange={(e) => handleTargetChange(e.target.value)}
                  className="mr-3"
                />
                <div className="flex-1">
                  <p className="text-gray-900">Teachers Only</p>
                  <p className="text-sm text-gray-500">All registered teachers</p>
                </div>
                <span className="text-gray-600">~156 users</span>
              </label>

              <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="target"
                  value="parents"
                  checked={formData.target === 'parents'}
                  onChange={(e) => handleTargetChange(e.target.value)}
                  className="mr-3"
                />
                <div className="flex-1">
                  <p className="text-gray-900">Parents Only</p>
                  <p className="text-sm text-gray-500">All registered parents</p>
                </div>
                <span className="text-gray-600">~890 users</span>
              </label>
            </div>
          </div>

          {/* Scheduled Date */}
          <div>
            <label className="block text-gray-700 mb-2">
              Schedule For (Optional)
            </label>
            <input
              type="datetime-local"
              value={formData.scheduledFor}
              onChange={(e) => setFormData(prev => ({ ...prev, scheduledFor: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              min={new Date().toISOString().slice(0, 16)}
            />
            <p className="text-sm text-gray-500 mt-1">
              Leave empty to send immediately or save as draft
            </p>
          </div>

          {/* Preview Box */}
          <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
            <p className="text-gray-700 mb-2">Preview</p>
            <div className={`p-4 rounded-lg ${
              formData.type === 'success' ? 'bg-green-50 border border-green-200' :
              formData.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
              formData.type === 'error' ? 'bg-red-50 border border-red-200' :
              'bg-blue-50 border border-blue-200'
            }`}>
              <h4 className="text-gray-900 mb-1">
                {formData.title || 'Notification Title'}
              </h4>
              <p className="text-gray-600 text-sm">
                {formData.message || 'Notification message will appear here...'}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Will be sent to {formData.recipients.toLocaleString()} recipients
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex gap-3 justify-end sticky bottom-0 bg-white">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          
          <button
            onClick={() => handleSubmit('draft')}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Save className="w-4 h-4" />
            Save as Draft
          </button>

          {formData.scheduledFor && (
            <button
              onClick={() => handleSubmit('scheduled')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Clock className="w-4 h-4" />
              Schedule
            </button>
          )}

          <button
            onClick={() => handleSubmit('sent')}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Send className="w-4 h-4" />
            Send Now
          </button>
        </div>
      </div>
    </div>
  );
}