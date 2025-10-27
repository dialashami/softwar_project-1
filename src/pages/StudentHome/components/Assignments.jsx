import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Upload, FileText, CheckCircle2, Clock, AlertCircle, Download } from 'lucide-react';
import { Card, Badge, Button, Tabs, TabsList, TabsTrigger, Progress } from './ui';

const assignments = [
  {
    id: 1,
    title: 'Calculus Problem Set #5',
    subject: 'Mathematics',
    description: 'Complete exercises 1-20 from Chapter 5 covering derivatives and integrals.',
    dueDate: 'Oct 14, 2025',
    dueTime: '11:59 PM',
    status: 'pending',
    progress: 80,
    grade: null,
  },
  {
    id: 2,
    title: 'Physics Lab Report - Mechanics',
    subject: 'Physics',
    description: 'Write a detailed report on the mechanics experiment conducted in class.',
    dueDate: 'Oct 15, 2025',
    dueTime: '11:59 PM',
    status: 'pending',
    progress: 45,
    grade: null,
  },
  {
    id: 3,
    title: 'Organic Chemistry Essay',
    subject: 'Chemistry',
    description: 'Research essay on the applications of organic chemistry in modern medicine.',
    dueDate: 'Oct 16, 2025',
    dueTime: '11:59 PM',
    status: 'pending',
    progress: 20,
    grade: null,
  },
];

const statusConfig = {
  pending: {
    icon: Clock,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    badge: 'bg-blue-600 text-white',
    label: 'Pending',
  },
  late: {
    icon: AlertCircle,
    color: 'text-red-500',
    bg: 'bg-red-100',
    badge: 'bg-red-500 text-white',
    label: 'Overdue',
  },
  graded: {
    icon: CheckCircle2,
    color: 'text-green-500',
    bg: 'bg-green-100',
    badge: 'bg-green-500 text-white',
    label: 'Graded',
  },
};

export function Assignments() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredAssignments = assignments.filter((assignment) => {
    if (activeTab === 'all') return true;
    return assignment.status === activeTab;
  });

  const stats = {
    total: assignments.length,
    pending: assignments.filter(a => a.status === 'pending').length,
  };

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Assignments 📚</h1>
          <p className="text-gray-600 mt-1">Manage your assignments and submissions</p>
        </div>

        {/* Stats */}
        <div className="flex gap-4">
          <div className="px-6 py-3 rounded-xl bg-blue-100">
            <p className="text-gray-600 text-sm font-semibold">Pending</p>
            <p className="text-blue-600 text-2xl font-bold">{stats.pending}</p>
          </div>
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
            All
          </TabsTrigger>
          <TabsTrigger 
            value="pending"
            className={activeTab === 'pending' ? 'bg-blue-600 text-white' : ''}
            onClick={() => setActiveTab('pending')}
          >
            Pending
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Assignments List */}
      <div className="space-y-4">
        {filteredAssignments.map((assignment, index) => {
          const config = statusConfig[assignment.status];
          const Icon = config.icon;

          return (
            <motion.div
              key={assignment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="p-6 rounded-2xl">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${config.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-8 h-8 ${config.color}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-semibold text-gray-900">{assignment.title}</h3>
                          <Badge className={config.badge}>{config.label}</Badge>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600 mb-2">
                          <span>{assignment.subject}</span>
                          <span className="text-gray-400">•</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>Due: {assignment.dueDate} at {assignment.dueTime}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{assignment.description}</p>

                        {/* Progress */}
                        {assignment.status === 'pending' && (
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-600 text-sm font-semibold">Progress</span>
                              <span className="text-blue-600 text-sm font-semibold">{assignment.progress}%</span>
                            </div>
                            <Progress value={assignment.progress} />
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                            <Upload className="w-4 h-4 mr-2" />
                            Submit Assignment
                          </Button>
                          <Button variant="outline" className="rounded-xl">
                            <FileText className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}