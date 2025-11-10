 import React, { useState, useEffect } from "react";
 

const MOCK_CONVERSATIONS = {
  teachers: [
    {
      id: 1,
      name: "Ms. Sarah Johnson",
      subject: "Class Teacher - Grade 1A",
      lastMessage: "Lama is doing great in class!",
      lastTime: "10:20 AM",
      unread: 2,
      role: "teacher",
    },
    {
      id: 2,
      name: "Mr. Ahmed Hassan",
      subject: "Math Teacher",
      lastMessage: "Math homework due tomorrow",
      lastTime: "Yesterday",
      unread: 0,
      role: "teacher",
    },
  ],
  school: [
    {
      id: 3,
      name: "School Administration",
      subject: "Ruwwad Elementary",
      lastMessage: "Parent-teacher meeting next week",
      lastTime: "2 days ago",
      unread: 1,
      role: "admin",
    },
  ],
};

const MOCK_MESSAGES = {
  1: [
    { from: "teacher", text: "Hi Mrs. Sara, Lama is doing great in class! 🌟", time: "10:05 AM" },
    { from: "parent", text: "Thank you for the update! She really enjoys your class.", time: "10:10 AM" },
    { from: "teacher", text: "I noticed she's particularly good at reading. We'll focus on that strength.", time: "10:15 AM" },
  ],
  2: [
    { from: "teacher", text: "Hello, just reminding about the math homework due tomorrow.", time: "Yesterday 3:20 PM" },
    { from: "parent", text: "Thank you for the reminder. We'll make sure it's completed.", time: "Yesterday 7:20 PM" },
  ],
  3: [
    { from: "admin", text: "Dear parents, our next parent-teacher meeting is scheduled for next Thursday.", time: "2 days ago" },
    { from: "parent", text: "Looking forward to it! What time should we come?", time: "Yesterday" },
  ],
};

export const ChatCenter = ({ currentRole = "parent" }) => {
  const [activeTab, setActiveTab] = useState("teachers");
  const [selectedConversation, setSelectedConversation] = useState(
    MOCK_CONVERSATIONS.teachers[0]
  );
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (selectedConversation) {
      setMessages(MOCK_MESSAGES[selectedConversation.id] || []);
    }
  }, [selectedConversation]);

  const conversations = MOCK_CONVERSATIONS[activeTab].filter((conv) =>
    conv.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectConversation = (conv) => {
    setSelectedConversation(conv);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;

    const newMsg = {
      from: currentRole,
      text: newMessage.trim(),
      time: "Now",
    };

    const updated = [...messages, newMsg];
    setMessages(updated);
    setNewMessage("");
  };

  return (
    <div className="chat-page-parent">
      <div className="chat-header-parent">
        <div className="header-content">
          <h1>Messages</h1>
          <p  >   </p>
        </div>
         
      </div>

      <div className="chat-layout-parent">
        {/* Sidebar */}
        <div className="chat-sidebar-parent">
          <div className="parent-tabs">
            <button
              className={activeTab === "teachers" ? "active" : ""}
              onClick={() => setActiveTab("teachers")}
            >
              Teachers
            </button>
            <button
              className={activeTab === "school" ? "active" : ""}
              onClick={() => setActiveTab("school")}
            >
              School
            </button>
          </div>

          <div className="chat-search-parent">
            <input
              type="text"
              placeholder="Search teachers or staff..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="chat-conversation-list-parent">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className={`chat-conversation-item-parent ${
                  selectedConversation?.id === conv.id ? "selected" : ""
                }`}
                onClick={() => handleSelectConversation(conv)}
              >
                <div className="avatar-circle-parent">
                  {conv.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
                <div className="chat-conversation-text-parent">
                  <div className="chat-conversation-top-parent">
                    <span className="name">{conv.name}</span>
                    <span className="time">{conv.lastTime}</span>
                  </div>
                  <div className="chat-conversation-middle-parent">
                    <span className="subject">{conv.subject}</span>
                  </div>
                  <div className="chat-conversation-bottom-parent">
                    <span className="preview">{conv.lastMessage}</span>
                    {conv.unread > 0 && (
                      <span className="badge-parent">{conv.unread}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {conversations.length === 0 && (
              <div className="chat-empty-parent">No conversations found</div>
            )}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="chat-main-parent">
          {selectedConversation ? (
            <>
              <div className="chat-main-header-parent">
                <div className="header-info">
                  <div className="avatar-circle-parent main-avatar">
                    {selectedConversation.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <h2>{selectedConversation.name}</h2>
                    <p>{selectedConversation.subject}</p>
                  </div>
                </div>
                <div className={`chat-main-header-tag-parent ${selectedConversation.role}`}>
                  {selectedConversation.role === "teacher" ? "Teacher" : "School Admin"}
                </div>
              </div>

              <div className="chat-messages-parent">
                {messages.length === 0 && (
                  <div className="chat-empty-parent">Start the conversation ✨</div>
                )}

                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`chat-message-row-parent ${
                      msg.from === currentRole
                        ? "from-parent"
                        : "from-other"
                    }`}
                  >
                    <div className="chat-message-bubble-parent">
                      <p>{msg.text}</p>
                      <span className="chat-message-time-parent">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <form className="chat-input-area-parent" onSubmit={handleSend}>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <button type="submit" className="send-button-parent">
                    Send
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="chat-main-empty-parent">
              <div className="empty-icon">💬</div>
              <h2>Select a conversation</h2>
              <p>Choose a teacher or staff member to start chatting.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};