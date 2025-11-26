import { Users, BookOpen, GraduationCap, TrendingUp, Activity, AlertCircle } from 'lucide-react';
import { StatsCard } from './StatsCard';
import { ActivityFeed } from './ActivityFeed';
import { QuickStats } from './QuickStats';
import { AlertsPanel } from './AlertsPanel';

export function DashboardOverview() {
  const stats = [
    {
      title: 'Total Users',
      value: '15,847',
 
      trend: 'up',
      icon: Users,
      color: 'blue',
    },
    {
      title: 'Active Students',
      value: '12,450',
 
      trend: 'up',
      icon: GraduationCap,
      color: 'green',
    },
     {
    title: 'Active Teachers',
    value: '324',
  
    trend: 'up',
    icon: GraduationCap, // 👩‍🏫 المعلّمين
    color: 'purple',
  },
  {
    title: 'Parent Engagement',
    value: '74 ',
   
    trend: 'up',
    icon: Users, // 👨‍👩‍👧 الأهالي
    color: 'orange',
  },
  ];

  return (
    <div className="p-8">
      <div className="welcome">
       <h1>Welcome </h1>
        <p  >Here's what's happening with your platform today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <QuickStats />
        </div>
        <div>
          <AlertsPanel />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityFeed />
        {/* <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-gray-900 mb-4">Platform Health</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Server Performance</span>
                <span className="text-green-600">98%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Database Load</span>
                <span className="text-blue-600">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">API Response Time</span>
                <span className="text-yellow-600">72%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Storage Usage</span>
                <span className="text-purple-600">54%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '54%' }}></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
 