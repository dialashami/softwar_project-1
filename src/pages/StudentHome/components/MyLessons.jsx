import { useState } from 'react';
import { Input, Button, Tabs, TabsList, TabsTrigger } from './ui';
import { LessonCard } from './LessonCard';

const lessons = [
  {
    id: 1,
    title: 'Algebra Fundamentals',
    subject: 'Mathematics',
    grade: 'Grade 10',
    description: 'Learn the fundamentals of algebraic expressions, equations, and problem-solving techniques.',
    progress: 75,
    status: 'in-progress',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400',
    icon: '📐',
  },
  {
    id: 2,
    title: 'Chemical Reactions',
    subject: 'Chemistry', 
    grade: 'Grade 10',
    description: 'Explore different types of chemical reactions and their applications in daily life.',
    progress: 30,
    status: 'in-progress',
    thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400',
    icon: '🧪',
  },
];

export function MyLessons() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLessons = lessons.filter(lesson => 
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lesson.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Lessons 📚</h1>
          <p className="text-gray-600 mt-1">Continue your learning journey</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Search lessons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger 
            value="all"
            className={activeTab === 'all' ? 'bg-blue-600 text-white' : ''}
            onClick={() => setActiveTab('all')}
          >
            All Lessons
          </TabsTrigger>
          <TabsTrigger 
            value="in-progress"
            className={activeTab === 'in-progress' ? 'bg-blue-600 text-white' : ''}
            onClick={() => setActiveTab('in-progress')}
          >
            In Progress
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => (
          <LessonCard key={lesson.id} {...lesson} />
        ))}
      </div>
    </div>
  );
}