import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Send,
  Sparkles,
  BookOpen,
  Calculator,
  Beaker,
  Microscope,
  Brain,
  Lightbulb,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

const quickActions = [
  { icon: Calculator, label: "Help with Math", prompt: "Can you help me understand calculus derivatives?" },
  { icon: Beaker, label: "Chemistry Questions", prompt: "Explain the periodic table structure" },
  { icon: Microscope, label: "Biology Topics", prompt: "What is cellular respiration?" },
  { icon: Brain, label: "Study Tips", prompt: "Give me study tips for my upcoming exams" },
  { icon: Lightbulb, label: "Concept Clarification", prompt: "I need help understanding quantum mechanics" },
  { icon: BookOpen, label: "Practice Problems", prompt: "Generate practice problems for algebra" },
];

const conversationHistory = [
  { id: 1, title: "Calculus Help", date: "Oct 13, 2025", preview: "Can you explain derivatives...", messages: 12 },
  { id: 2, title: "Chemistry Concepts", date: "Oct 12, 2025", preview: "What are ionic bonds...", messages: 8 },
  { id: 3, title: "Study Strategy", date: "Oct 11, 2025", preview: "How can I prepare for exams...", messages: 15 },
];

export default function AITutorPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      text:
        "Hello! I'm your AI tutor. I'm here to help you with any subject, explain concepts, solve problems, and provide study guidance. How can I assist you today? 🤖",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = (text) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      text: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const aiResponse = {
        id: userMessage.id + 1,
        type: "ai",
        text:
          "Great question! Let me break this down for you step by step. This concept is fundamental to understanding the broader topic. Would you like me to provide examples or practice problems to help reinforce your understanding?",
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleQuickAction = (prompt) => {
    handleSend(prompt);
  };

  return (
    <div className="AITutorPage">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-[#0F172A] flex items-center gap-2"
            style={{ fontSize: "32px", fontWeight: "700" }}
          >
            AI Tutor 🤖
          </h1>
          <p className="text-gray-600 mt-1" style={{ fontSize: "16px" }}>
            Your personal AI assistant for learning
          </p>
        </div>
        <Badge className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white border-0 px-4 py-2">
          <Sparkles className="w-4 h-4 mr-2" />
          AI Powered
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - Conversation History */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="p-4 rounded-2xl border-0 shadow-lg bg-white">
            <h3
              className="text-[#0F172A] mb-4"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              Recent Conversations
            </h3>
            <div className="space-y-2">
              {conversationHistory.map((conv) => (
                <button
                  key={conv.id}
                  className="w-full p-3 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-[#4F46E5]/10 hover:to-[#9333EA]/10 transition-all text-left"
                >
                  <p
                    className="text-[#0F172A] mb-1"
                    style={{ fontSize: "14px", fontWeight: "600" }}
                  >
                    {conv.title}
                  </p>
                  <p
                    className="text-gray-600 text-sm truncate mb-1"
                    style={{ fontSize: "12px" }}
                  >
                    {conv.preview}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400" style={{ fontSize: "11px" }}>
                      {conv.date}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      {conv.messages} msgs
                    </Badge>
                  </div>
                </button>
              ))}
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-[#4F46E5] to-[#9333EA] hover:opacity-90 text-white rounded-xl">
              <Bot className="w-4 h-4 mr-2" />
              New Conversation
            </Button>
          </Card>
        </div>

        {/* Main Chat Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Quick Actions */}
          <Card className="p-6 rounded-2xl border-0 shadow-lg bg-gradient-to-br from-[#4F46E5] to-[#9333EA]">
            <h3
              className="text-white mb-4"
              style={{ fontSize: "18px", fontWeight: "600" }}
            >
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.button
                    key={index}
                    onClick={() => handleQuickAction(action.prompt)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all text-left"
                  >
                    <Icon className="w-6 h-6 text-white mb-2" />
                    <p
                      className="text-white"
                      style={{ fontSize: "13px", fontWeight: "600" }}
                    >
                      {action.label}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </Card>

          {/* Chat Messages */}
          <Card className="rounded-2xl border-0 shadow-lg bg-white overflow-hidden">
            {/* Messages Area */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.type === "ai" && (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#9333EA] flex items-center justify-center mr-3 flex-shrink-0">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] p-4 rounded-2xl ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white"
                        : "bg-white text-[#0F172A] shadow-md"
                    }`}
                  >
                    <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      {message.text}
                    </p>
                  </div>
                  {message.type === "user" && (
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center ml-3 flex-shrink-0">
                      <span style={{ fontSize: "16px" }}>👤</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-3">
                <Input
                  type="text"
                  placeholder="Ask me anything about your studies..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 rounded-full border-gray-300 px-6"
                />
                <Button
                  onClick={() => handleSend()}
                  className="w-12 h-12 rounded-full p-0 bg-gradient-to-r from-[#4F46E5] to-[#9333EA] hover:opacity-90"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p
                className="text-gray-500 text-center mt-3"
                style={{ fontSize: "12px" }}
              >
                AI can make mistakes. Verify important information.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
