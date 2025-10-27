import { Card, Badge, Progress } from './ui';
import { TrendingUp, Award, Star, Brain } from 'lucide-react';

const progressData = [
  {
    subject: 'Mathematics',
    progress: 75,
    grade: 'A-',
    completedLessons: 12,
    totalLessons: 16,
    improvement: '+5%',
  },
  {
    subject: 'Physics',
    progress: 60,
    grade: 'B+',
    completedLessons: 9,
    totalLessons: 15,
    improvement: '+8%',
  },
  {
    subject: 'Chemistry',
    progress: 45,
    grade: 'B',
    completedLessons: 7,
    totalLessons: 15,
    improvement: '+3%',
  },
  {
    subject: 'Biology',
    progress: 80,
    grade: 'A',
    completedLessons: 12,
    totalLessons: 15,
    improvement: '+12%',
  },
];

export function ProgressPage() {
  const overallProgress = progressData.reduce((sum, subject) => sum + subject.progress, 0) / progressData.length;

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Progress Tracking 📈</h1>
          <p className="text-gray-600 mt-1">Monitor your learning journey and achievements</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-center">
            <p className="text-gray-600 text-sm font-semibold">Overall Progress</p>
            <p className="text-2xl font-bold text-blue-600">{Math.round(overallProgress)}%</p>
          </div>
        </div>
      </div>

      {/* Overall Progress */}
      <Card className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Your Learning Journey</h2>
            <p className="text-blue-100">Great progress! Keep up the good work</p>
          </div>
          <TrendingUp className="w-12 h-12" />
        </div>
        <div className="mt-4">
          <Progress value={overallProgress} className="h-3 bg-white/20" />
        </div>
      </Card>

      {/* Subject Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {progressData.map((subject, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{subject.subject}</h3>
              <Badge className={
                subject.grade === 'A' ? 'bg-green-100 text-green-800' :
                subject.grade === 'A-' ? 'bg-green-100 text-green-800' :
                subject.grade === 'B+' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }>
                {subject.grade}
              </Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-semibold text-blue-600">{subject.progress}%</span>
              </div>
              <Progress value={subject.progress} />
              
              <div className="flex justify-between text-sm text-gray-600">
                <span>{subject.completedLessons}/{subject.totalLessons} lessons</span>
                <span className="text-green-600 font-semibold">{subject.improvement}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Achievements 🏆</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg">
            <Award className="w-8 h-8 text-yellow-600" />
            <div>
              <p className="font-semibold text-gray-900">Quick Learner</p>
              <p className="text-sm text-gray-600">Complete 5 lessons in a week</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
            <Star className="w-8 h-8 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-900">Consistent Student</p>
              <p className="text-sm text-gray-600">Study for 10 days straight</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
            <Brain className="w-8 h-8 text-purple-600" />
            <div>
              <p className="font-semibold text-gray-900">Problem Solver</p>
              <p className="text-sm text-gray-600">Solve 50+ practice problems</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}