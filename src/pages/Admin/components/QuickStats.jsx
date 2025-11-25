import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export function QuickStats() {
  const engagementData = [
    { name: 'Mon', students: 8400, teachers: 240, parents: 1200 },
    { name: 'Tue', students: 9200, teachers: 280, parents: 1400 },
    { name: 'Wed', students: 8800, teachers: 260, parents: 1300 },
    { name: 'Thu', students: 9600, teachers: 290, parents: 1500 },
    { name: 'Fri', students: 8200, teachers: 250, parents: 1100 },
    { name: 'Sat', students: 7100, teachers: 180, parents: 900 },
    { name: 'Sun', students: 6800, teachers: 150, parents: 850 },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-gray-900">Weekly Engagement</h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Students</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Teachers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Parents</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={engagementData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Line type="monotone" dataKey="students" stroke="#2563eb" strokeWidth={2} />
          <Line type="monotone" dataKey="teachers" stroke="#9333ea" strokeWidth={2} />
          <Line type="monotone" dataKey="parents" stroke="#16a34a" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}