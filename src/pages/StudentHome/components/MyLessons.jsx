
import { useState } from "react";
import { Search } from "lucide-react";
import { LessonCard } from "./LessonCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
 
 const lessons = [
  {
    id: 1,
    title: "Introduction to Algebra",
    subject: "Mathematics",
    grade: "Grade 10",
    description:
      "Learn the fundamentals of algebraic expressions, equations, and problem-solving techniques.",
    progress: 75,
    status: "in-progress",
    thumbnail:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop",
  },
  {
  id: 2,
  title: "Newton’s Laws of Motion",
  subject: "Physics",
  grade: "Grade 10",
  description:
    "Explore the three fundamental laws that describe the relationship between force and motion.",
  progress: 100,
  status: "completed",
  thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop",
},
{
  id: 3,
  title: "Organic Chemistry Basics",
  subject: "Chemistry",
  grade: "Grade 10",
  description:
    "Discover the structure, properties, and reactions of organic compounds.",
  progress: 45,
  status: "in-progress",
  thumbnail: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200&auto=format&fit=crop",
},
{
  id: 4,
  title: "Cell Biology Fundamentals",
  subject: "Biology",
  grade: "Grade 10",
  description:
    "Study the structure and function of cells, the basic units of life in all living organisms.",
  progress: 0,
  status: "recommended",
  thumbnail: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=1200&auto=format&fit=crop",
},

  {
    id: 5,
    title: "Advanced Calculus",
    subject: "Mathematics",
    grade: "Grade 10",
    description:
      "Master derivatives, integrals, and their applications in real-world problem solving.",
    progress: 30,
    status: "in-progress",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Quantum Mechanics Intro",
    subject: "Physics",
    grade: "Grade 10",
    description:
      "Introduction to the principles of quantum mechanics and wave-particle duality.",
    progress: 0,
    status: "recommended",
    thumbnail:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "World History Overview",
    subject: "History",
    grade: "Grade 10",
    description:
      "Explore the key historical events that shaped civilizations across the world.",
    progress: 60,
    status: "in-progress",
    thumbnail:
      "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?w=600&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Environmental Science",
    subject: "Science",
    grade: "Grade 10",
    description:
      "Learn about ecosystems, sustainability, and human impact on the environment.",
    progress: 10,
    status: "in-progress",
    thumbnail:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "English Literature Basics",
    subject: "English",
    grade: "Grade 10",
    description:
      "Dive into classic literature, poetry analysis, and creative writing fundamentals.",
    progress: 90,
    status: "completed",
    thumbnail:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Computer Science Essentials",
    subject: "Computer Science",
    grade: "Grade 10",
    description:
      "Understand programming logic, algorithms, and basic data structures.",
    progress: 55,
    status: "in-progress",
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop",
  },
];




export function MyLessons() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "in-progress" && lesson.status === "in-progress") ||
      (activeTab === "completed" && lesson.status === "completed") ||
      (activeTab === "recommended" && lesson.status === "recommended");
    return matchesSearch && matchesTab;
  });

  const inProgressCount = lessons.filter(
    (l) => l.status === "in-progress"
  ).length;
  const completedCount = lessons.filter(
    (l) => l.status === "completed"
  ).length;

  return (
    <div className="my-lessons-container">
      {/* ✅ شريط البحث العلوي */}
      <div className="search-bar">
        <div style={{ position: "relative", flex: 1 }}>
          <Search
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9ca3af",
            }}
            size={20}
          />
          <Input
            type="text"
            placeholder="Search for lessons, assignments, quizzes, or ask a question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button>📚 5 lessons today</button>
      </div>

      {/* ✅ العنوان الرئيسي */}
      <div className="my-lessons-header">
        <h1>
          My Lessons <span role="img" aria-label="book">📘</span>
        </h1>
        <p>Continue your learning journey</p>
      </div>

      {/* ✅ الإحصائيات */}
      <div className="stats-container">
        <div className="stat-box stat-inprogress">
          In Progress <span>{inProgressCount}</span>
        </div>
        <div className="stat-box stat-completed">
          Completed <span>{completedCount}</span>
        </div>
      </div>

      {/* ✅ التبويبات */}
      <div className="tabs">
        {["all", "in-progress", "completed", "recommended"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? "active" : ""}
          >
            {tab === "all"
              ? "All"
              : tab === "in-progress"
              ? "In Progress"
              : tab === "completed"
              ? "Completed"
              : "Recommended"}
          </button>
        ))}
      </div>

      {/* ✅ شبكة الكروت */}
      <div className="lessons-grid">
        {filteredLessons.map((lesson) => (
          <div className="lesson-card" key={lesson.id}>
            <img src={lesson.thumbnail} alt={lesson.title} />
            <div
              className={`lesson-status ${
                lesson.status === "completed" ? "completed" : ""
              }`}
            >
              {lesson.status === "completed" ? "Completed" : "In Progress"}
            </div>
            <div className="lesson-card-content">
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>

              <div className="lesson-progress">
                <div
                  className="lesson-progress-bar"
                  style={{ width: `${lesson.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ الزر العائم */}
      <button className="floating-btn">
        <i className="fas fa-robot"></i>
      </button>
    </div>
  );
}
