import { UserPlus, BookOpen, MessageSquare, Award, FileText, Users } from 'lucide-react';

export function ActivityFeed() {
  const activities = [
    {
      icon: UserPlus,
      color: 'blue',
      title: 'New Teacher Registration',
      description: 'Dr. Sarah Ahmed joined the Mathematics department',
      time: '5 minutes ago',
    },
    {
      icon: BookOpen,
      color: 'purple',
      title: 'Course Published',
      description: 'Advanced Physics - Semester 2 is now available',
      time: '12 minutes ago',
    },
    {
      icon: Award,
      color: 'green',
      title: 'Achievement Unlocked',
      description: '150 students completed the Chemistry module',
      time: '1 hour ago',
    },
    {
      icon: MessageSquare,
      color: 'orange',
      title: 'Parent Communication',
      description: '23 new messages from parents regarding progress reports',
      time: '2 hours ago',
    },
    {
      icon: FileText,
      color: 'blue',
      title: 'Assessment Created',
      description: 'Biology Midterm Exam scheduled for next week',
      time: '3 hours ago',
    },
    {
      icon: Users,
      color: 'green',
      title: 'Student Enrollment',
      description: '45 new students enrolled in Computer Science courses',
      time: '4 hours ago',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex gap-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClasses[activity.color]}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-900">{activity.title}</p>
                <p className="text-gray-600 truncate">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}