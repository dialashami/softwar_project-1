

import React, { useState, useEffect } from "react";
 


const MOCK_CONVERSATIONS = {
  students: [
    {
      id: 1,
      name: "Lama Ahmad",
      grade: "Grade 1A",
      lastMessage: "Miss, I finished my homework.",
      lastTime: "10:20 AM",
      unread: 2,
      role: "student",
    },
  ],
  parents: [
    {
      id: 3,
      name: "Mrs. Sara (Lama's Mom)",
      grade: "Parent of Grade 1A",
      lastMessage: "When is the next meeting?",
      lastTime: "Yesterday",
      unread: 1,
      role: "parent",
    },
  ],
};


const MOCK_MESSAGES = {
  1: [
    { from: "teacher", text: "Hi Lama, great job today! 🌟", time: "10:05 AM" },
    { from: "student", text: "Thank you Miss!", time: "10:10 AM" },
  ],
  3: [
    {
      from: "parent",
      text: "Good evening, when is the next meeting?",
      time: "Yesterday 7:15 PM",
    },
    {
      from: "teacher",
      text: "Good evening! The meeting is on Thursday at 3:00 PM.",
      time: "Yesterday 7:20 PM",
    },
  ],
};


export const ChatCenter = ({ currentRole = "teacher" }) => {
  const [activeTab, setActiveTab] = useState("students"); // students | parents
  const [selectedConversation, setSelectedConversation] = useState(
    MOCK_CONVERSATIONS.students[0]
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
    <div className="chat-page">
      <div className="chat-header">
        <div>
          <h1>Messages</h1>
          <p>
            
            {" "}({currentRole === "teacher" ? "Teacher view" : "Student view"})
          </p>
        </div>
      </div>

      <div className="chat-layout">
        {}
        <div className="chat-sidebar">
          {currentRole === "teacher" && (
            <div className="chat-tabs">
              <button
                className={activeTab === "students" ? "active" : ""}
                onClick={() => setActiveTab("students")}
              >
                Students
              </button>
              <button
                className={activeTab === "parents" ? "active" : ""}
                onClick={() => setActiveTab("parents")}
              >
                Parents
              </button>
            </div>
          )}

          <div className="chat-search">
            <input
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="chat-conversation-list">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className={`chat-conversation-item ${
                  selectedConversation?.id === conv.id ? "selected" : ""
                }`}
                onClick={() => handleSelectConversation(conv)}
              >
                <div className="avatar-circle">
                  {conv.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
                <div className="chat-conversation-text">
                  <div className="chat-conversation-top">
                    <span className="name">{conv.name}</span>
                    <span className="time">{conv.lastTime}</span>
                  </div>
                  <div className="chat-conversation-bottom">
                    <span className="preview">{conv.lastMessage}</span>
                    {conv.unread > 0 && (
                      <span className="badge">{conv.unread}</span>
                    )}
                  </div>
                  <span className="role-tag">
                    {conv.role === "student" ? "Student" : "Parent"}
                  </span>
                </div>
              </div>
            ))}

            {conversations.length === 0 && (
              <div className="chat-empty">No conversations found</div>
            )}
          </div>
        </div>

        {}
        <div className="chat-main">
          {selectedConversation ? (
            <>
              <div className="chat-main-header">
                <div>
                  <h2>{selectedConversation.name}</h2>
                  <p>{selectedConversation.grade}</p>
                </div>
                <div className="chat-main-header-tag">
                  {selectedConversation.role === "student"
                    ? "Student"
                    : "Parent"}
                </div>
              </div>

              <div className="chat-messages">
                {messages.length === 0 && (
                  <div className="chat-empty">Start the conversation ✨</div>
                )}

                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`chat-message-row ${
                      msg.from === currentRole
                        ? "from-teacher"
                        : "from-other"
                    }`}
                  >
                    <div className="chat-message-bubble">
                      <p>{msg.text}</p>
                      <span className="chat-message-time">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <form className="chat-input-area" onSubmit={handleSend}>
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button type="submit">Send</button>
              </form>
            </>
          ) : (
            <div className="chat-main-empty">
              <h2>Select a conversation</h2>
              <p>Choose a student or parent from the left to start chatting.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
