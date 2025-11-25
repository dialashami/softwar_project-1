import { useState } from 'react';
import { Search, Plus, BookOpen, Video, FileText, Image, MoreVertical, Edit, Trash2, Eye } from 'lucide-react';

export function ContentManagement() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Content', count: 245 },
    { id: 'courses', label: 'Courses', count: 89 },
    { id: 'lessons', label: 'Lessons', count: 127 },
    { id: 'assessments', label: 'Assessments', count: 29 },
  ];

  const content = [
    {
      id: 1,
      type: 'course',
      title: 'Advanced Mathematics - Calculus',
      category: 'Mathematics',
      author: 'Dr. Sarah Ahmed',
      students: 156,
      status: 'published',
      lastUpdated: '2 days ago',
    },
    {
      id: 2,
      type: 'lesson',
      title: 'Introduction to Quantum Physics',
      category: 'Physics',
      author: 'Prof. Mohamed Saleh',
      students: 132,
      status: 'published',
      lastUpdated: '1 week ago',
    },
    {
      id: 3,
      type: 'assessment',
      title: 'Chemistry Midterm Exam',
      category: 'Chemistry',
      author: 'Ms. Hanan Youssef',
      students: 145,
      status: 'draft',
      lastUpdated: '3 hours ago',
    },
    {
      id: 4,
      type: 'course',
      title: 'Biology: Cell Structure and Function',
      category: 'Biology',
      author: 'Dr. Khaled Mustafa',
      students: 98,
      status: 'published',
      lastUpdated: '5 days ago',
    },
    {
      id: 5,
      type: 'lesson',
      title: 'Arabic Literature: Classical Poetry',
      category: 'Arabic',
      author: 'Dr. Layla Hassan',
      students: 178,
      status: 'published',
      lastUpdated: '1 day ago',
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'course':
        return BookOpen;
      case 'lesson':
        return Video;
      case 'assessment':
        return FileText;
      default:
        return BookOpen;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'course':
        return 'bg-blue-50 text-blue-600';
      case 'lesson':
        return 'bg-purple-50 text-purple-600';
      case 'assessment':
        return 'bg-orange-50 text-orange-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-gray-900 mb-2">Content Management</h1>
          <p className="text-gray-600">Create and manage educational content across the platform</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-5 h-5" />
          Create Content
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex gap-6 px-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`py-4 border-b-2 transition-colors ${
                  activeCategory === category.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search content..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
              <option>Arabic</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
              <option>Archived</option>
            </select>
          </div>

          <div className="space-y-3">
            {content.map((item) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor(item.type)}`}>
                      <TypeIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-gray-900 mb-1">{item.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{item.category}</span>
                            <span>•</span>
                            <span>{item.author}</span>
                            <span>•</span>
                            <span>{item.students} students</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              item.status === 'published'
                                ? 'bg-green-50 text-green-700'
                                : 'bg-yellow-50 text-yellow-700'
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">Last updated {item.lastUpdated}</p>
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <MoreVertical className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}