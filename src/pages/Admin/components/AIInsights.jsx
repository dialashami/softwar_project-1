import { Brain, TrendingUp, AlertTriangle, Lightbulb, Target, Users, BookOpen, Award } from 'lucide-react';

export function AIInsights() {
  const insights = [
    {
      type: 'success',
      icon: TrendingUp,
      title: 'Notable Performance Improvement',
      description: 'Grade 10 students showed a 15% improvement in Mathematics over the past month',
      recommendation: 'Continue using current teaching methods',
      priority: 'low',
    },
    {
      type: 'warning',
      icon: AlertTriangle,
      title: 'Decreased Attendance Rate',
      description: '8 students in Grade 11 have an attendance rate below 75%',
      recommendation: 'Contact parents and follow up on individual cases',
      priority: 'high',
    },
    {
      type: 'info',
      icon: Lightbulb,
      title: 'Learning Opportunity',
      description: 'Interactive content in Physics achieved a 92% engagement rate',
      recommendation: 'Apply the same approach to other subjects to improve engagement',
      priority: 'medium',
    },
    {
      type: 'success',
      icon: Target,
      title: 'Learning Goals Achievement',
      description: '85% of Grade 12 students completed their monthly learning objectives',
      recommendation: 'Set new, more challenging goals for next semester',
      priority: 'low',
    },
  ];

  const predictions = [
    {
      student: 'Ahmed Hassan',
      grade: 'Grade 10',
      subject: 'Mathematics',
      currentScore: 78,
      predictedScore: 85,
      confidence: 87,
      factors: ['Engagement Level', 'Homework Completion', 'Continuous Improvement'],
    },
    {
      student: 'Fatima Ali',
      grade: 'Grade 11',
      subject: 'Physics',
      currentScore: 92,
      predictedScore: 95,
      confidence: 93,
      factors: ['Excellent Performance', 'Active Participation', 'Deep Understanding'],
    },
  ];

  const recommendations = [
    {
      icon: BookOpen,
      title: 'Personalized Learning Content',
      description: 'Recommended to create personalized learning paths for 12 students based on different learning styles',
      action: 'Create Paths',
    },
    {
      icon: Users,
      title: 'Study Groups',
      description: 'Form 5 balanced study groups based on levels and common interests',
      action: 'Form Groups',
    },
    {
      icon: Award,
      title: 'Motivation Program',
      description: 'Launch a rewards program to motivate students who showed notable improvement',
      action: 'Launch Program',
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case 'success':
        return 'text-green-600';
      case 'warning':
        return 'text-yellow-600';
      case 'info':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'low':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityText = (priority) => {
    switch (priority) {
      case 'high':
        return 'High';
      case 'medium':
        return 'Medium';
      case 'low':
        return 'Low';
      default:
        return 'Normal';
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-gray-900 mb-2 flex items-center gap-3">
            <Brain className="w-8 h-8 text-purple-600" />
            AI Insights
          </h1>
          <p className="text-gray-600">AI-powered analytics to improve the educational process</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          Refresh Analytics
        </button>
      </div>

      {/* AI Insights */}
      <div className="mb-8">
        <h3 className="text-gray-900 mb-4">Smart Insights</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div
                key={index}
                className={`border rounded-lg p-6 ${getTypeColor(insight.type)}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center ${getIconColor(insight.type)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-gray-900">{insight.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs ${getPriorityBadge(insight.priority)}`}>
                        {getPriorityText(insight.priority)} Priority
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{insight.description}</p>
                    <div className="bg-white bg-opacity-70 rounded-lg p-3">
                      <p className="text-sm text-gray-800">
                        <span className="font-medium">Recommendation:</span> {insight.recommendation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Predictions */}
      <div className="mb-8">
        <h3 className="text-gray-900 mb-4">Academic Predictions</h3>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 text-gray-700">Student</th>
                  <th className="text-left py-3 px-4 text-gray-700">Grade</th>
                  <th className="text-left py-3 px-4 text-gray-700">Subject</th>
                  <th className="text-left py-3 px-4 text-gray-700">Current Score</th>
                  <th className="text-left py-3 px-4 text-gray-700">Predicted Score</th>
                  <th className="text-left py-3 px-4 text-gray-700">Confidence Level</th>
                  <th className="text-left py-3 px-4 text-gray-700">Influencing Factors</th>
                </tr>
              </thead>
              <tbody>
                {predictions.map((prediction, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    <td className="py-3 px-4 text-gray-900">{prediction.student}</td>
                    <td className="py-3 px-4 text-gray-600">{prediction.grade}</td>
                    <td className="py-3 px-4 text-gray-600">{prediction.subject}</td>
                    <td className="py-3 px-4">
                      <span className="text-gray-900">{prediction.currentScore}%</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-green-600 font-medium">{prediction.predictedScore}%</span>
                      <span className="text-xs text-green-600 ml-2">
                        (+{prediction.predictedScore - prediction.currentScore}%)
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-purple-600 h-2 rounded-full"
                            style={{ width: `${prediction.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{prediction.confidence}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {prediction.factors.map((factor, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full"
                          >
                            {factor}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div>
        <h3 className="text-gray-900 mb-4">Smart Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((rec, index) => {
            const Icon = rec.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-gray-900 mb-2">{rec.title}</h4>
                <p className="text-gray-600 mb-4">{rec.description}</p>
                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  {rec.action}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}