import { useState } from 'react';
import { Send, Paperclip, Search, MoreVertical, Phone, Video, Mail, MessageSquare, Users, Bell } from 'lucide-react';

export function CommunicationCenter() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('messages');

  const conversations = [
    {
      id: 1,
      name: 'Dr. Sarah Ahmed',
      role: 'Mathematics Teacher',
      lastMessage: 'Thank you, I will review the report',
      time: '5 minutes ago',
      unread: 2,
      online: true,
      avatar: 'SA',
    },
    {
      id: 2,
      name: 'Hassan Ahmed',
      role: 'Parent',
      lastMessage: 'When is the next meeting?',
      time: '1 hour ago',
      unread: 0,
      online: false,
      avatar: 'HA',
    },
    {
      id: 3,
      name: 'Ahmed Hassan',
      role: 'Student - Grade 10',
      lastMessage: 'Can I get more time for the assignment?',
      time: '2 hours ago',
      unread: 1,
      online: true,
      avatar: 'AH',
    },
  ];

  const messages = selectedChat ? [
    {
      id: 1,
      sender: 'other',
      content: 'Hello, I would like to inquire about the latest report',
      time: '10:30 AM',
    },
    {
      id: 2,
      sender: 'me',
      content: 'Hello! Of course. The report is ready and will be sent shortly',
      time: '10:32 AM',
    },
    {
      id: 3,
      sender: 'other',
      content: 'Thank you, I will review the report',
      time: '10:35 AM',
    },
  ] : [];

  const announcements = [
    {
      id: 1,
      title: 'Mid-Semester Break',
      content: 'The mid-semester break starts next Saturday and will last for one week',
      date: '2024-11-20',
      recipients: 'All Users',
      status: 'published',
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      content: 'We are pleased to invite you to attend the parent-teacher meeting on Thursday at 6 PM',
      date: '2024-11-22',
      recipients: 'Parents',
      status: 'published',
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Communication Center</h1>
        <p className="text-gray-600">Connect with teachers, parents, and students</p>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('messages')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'messages'
              ? 'bg-blue-600 text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <MessageSquare className="w-5 h-5" />
          Messages
        </button>
        <button
          onClick={() => setActiveTab('announcements')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'announcements'
              ? 'bg-blue-600 text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Users className="w-5 h-5" />
          Announcements
        </button>
        <button
          onClick={() => setActiveTab('email')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'email'
              ? 'bg-blue-600 text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Mail className="w-5 h-5" />
          Email
        </button>
      </div>

      {activeTab === 'messages' && (
        <div className="bg-white rounded-lg border border-gray-200 h-[600px] flex">
          {/* Conversations List */}
          <div className="w-80 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedChat(conv)}
                  className={`w-full p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors text-left ${
                    selectedChat?.id === conv.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                        {conv.avatar}
                      </div>
                      {conv.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <p className="text-gray-900">{conv.name}</p>
                          <p className="text-xs text-gray-500">{conv.role}</p>
                        </div>
                        <span className="text-xs text-gray-500">{conv.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                        {conv.unread > 0 && (
                          <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center ml-2">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                      {selectedChat.avatar}
                    </div>
                    <div>
                      <p className="text-gray-900">{selectedChat.name}</p>
                      <p className="text-sm text-gray-500">{selectedChat.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Phone className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Video className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-md px-4 py-2 rounded-lg ${
                          msg.sender === 'me'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="mb-1">{msg.content}</p>
                        <p className={`text-xs ${msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Paperclip className="w-5 h-5 text-gray-600" />
                    </button>
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p>Select a conversation to start</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'announcements' && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-gray-900">Announcements</h3>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Create New Announcement
            </button>
          </div>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-gray-900 mb-1">{announcement.title}</h4>
                    <p className="text-sm text-gray-600">{announcement.content}</p>
                  </div>
                  <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                    {announcement.status === 'published' ? 'Published' : 'Draft'}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Date: {announcement.date}</span>
                  <span>•</span>
                  <span>Recipients: {announcement.recipients}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'email' && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-gray-900 mb-4">Send Bulk Email</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Recipients</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Users</option>
                <option>Students Only</option>
                <option>Teachers Only</option>
                <option>Parents Only</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email subject"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows={8}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="flex justify-end gap-3">
              <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Save as Draft
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Send Email
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}