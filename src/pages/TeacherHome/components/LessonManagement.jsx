
/** 
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Plus, Search, Edit, Trash2, Eye, BookOpen } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import { toast } from 'sonner';

export function LessonManagement() {
  const store = useStore();
  const lessons = store.getLessons();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    grade: '',
    duration: '',
    description: '',
    objectives: '',
    materials: '',
    status: 'draft',
  });

  const resetForm = () => {
    setFormData({
      title: '',
      subject: '',
      grade: '',
      duration: '',
      description: '',
      objectives: '',
      materials: '',
      status: 'draft',
    });
  };

  const handleCreate = () => {
    if (!formData.title || !formData.subject || !formData.grade || !formData.duration) {
      toast.error('Please fill in all required fields');
      return;
    }

    const objectives = formData.objectives.split('\n').filter(o => o.trim());
    const materials = formData.materials.split('\n').filter(m => m.trim());

    store.addLesson({
      ...formData,
      objectives,
      materials,
    });

    toast.success('Lesson created successfully!');
    setIsCreateDialogOpen(false);
    resetForm();
  };

  const handleEdit = () => {
    if (!selectedLesson) return;
    
    if (!formData.title || !formData.subject || !formData.grade || !formData.duration) {
      toast.error('Please fill in all required fields');
      return;
    }

    const objectives = formData.objectives.split('\n').filter(o => o.trim());
    const materials = formData.materials.split('\n').filter(m => m.trim());

    store.updateLesson(selectedLesson.id, {
      ...formData,
      objectives,
      materials,
    });

    toast.success('Lesson updated successfully!');
    setIsEditDialogOpen(false);
    setSelectedLesson(null);
    resetForm();
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      store.deleteLesson(id);
      toast.success('Lesson deleted successfully!');
    }
  };

  const openEditDialog = (lesson) => {
    setSelectedLesson(lesson);
    setFormData({
      title: lesson.title,
      subject: lesson.subject,
      grade: lesson.grade,
      duration: lesson.duration,
      description: lesson.description,
      objectives: lesson.objectives.join('\n'),
      materials: lesson.materials.join('\n'),
      status: lesson.status,
    });
    setIsEditDialogOpen(true);
  };

  const openViewDialog = (lesson) => {
    setSelectedLesson(lesson);
    setIsViewDialogOpen(true);
  };

  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lesson.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || lesson.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'archived':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
      default:
        return '';
    }
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="gradient-text">Lesson Management</h1>
          <p className="text-muted-foreground">Create, edit, and organize your lessons</p>
        </div>
        <Button 
          onClick={() => {
            resetForm();
            setIsCreateDialogOpen(true);
          }}
          className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Lesson
        </Button>
      </div>

      {/* Filters *}
      <Card className="border-0 shadow-lg bg-white rounded-2xl">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search lessons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 rounded-xl border-[oklch(0.92_0.04_270)] focus:border-[oklch(0.6_0.25_280)] transition-colors"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-[200px] rounded-xl border-[oklch(0.92_0.04_270)]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="all">All Lessons</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Lessons Grid *}
      {filteredLessons.length === 0 ? (
        <Card className="border-0 shadow-lg bg-white rounded-2xl">
          <CardContent className="p-12 text-center">
            <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="mb-2">No lessons found</h3>
            <p className="text-muted-foreground">Create your first lesson to get started</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => (
            <Card key={lesson.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-2xl overflow-hidden group">
              <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)] group-hover:from-[oklch(0.96_0.04_280)] group-hover:to-[oklch(0.96_0.04_260)] transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="line-clamp-1">{lesson.title}</CardTitle>
                    <p className="text-muted-foreground mt-1">{lesson.subject}</p>
                  </div>
                  <Badge className={`${getStatusColor(lesson.status)} rounded-full px-3`}>
                    {lesson.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>{lesson.grade}</span>
                    <span>{lesson.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>{lesson.students} students</span>
                    <span>Edited {lesson.lastEdited}</span>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 rounded-xl border-[oklch(0.92_0.04_270)] hover:bg-gradient-to-r hover:from-[oklch(0.98_0.02_280)] hover:to-[oklch(0.98_0.02_260)] transition-all"
                      onClick={() => openViewDialog(lesson)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 rounded-xl border-[oklch(0.92_0.04_270)] hover:bg-gradient-to-r hover:from-[oklch(0.98_0.02_280)] hover:to-[oklch(0.98_0.02_260)] transition-all"
                      onClick={() => openEditDialog(lesson)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-xl border-[oklch(0.92_0.04_270)] hover:bg-gradient-to-r hover:from-[oklch(0.98_0.02_280)] hover:to-[oklch(0.98_0.02_260)] transition-all hover:border-red-300"
                      onClick={() => handleDelete(lesson.id, lesson.title)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Create Dialog *}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle>Create New Lesson</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Lesson Title *</Label>
                <Input 
                  id="title" 
                  placeholder="Enter lesson title" 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                    <SelectItem value="Science">Science</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="History">History</SelectItem>
                    <SelectItem value="Physics">Physics</SelectItem>
                    <SelectItem value="Chemistry">Chemistry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="grade">Grade *</Label>
                <Select value={formData.grade} onValueChange={(value) => setFormData({...formData, grade: value})}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="Grade 9">Grade 9</SelectItem>
                    <SelectItem value="Grade 10">Grade 10</SelectItem>
                    <SelectItem value="Grade 11">Grade 11</SelectItem>
                    <SelectItem value="Grade 12">Grade 12</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration *</Label>
                <Input 
                  id="duration" 
                  placeholder="e.g., 45 min" 
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Enter lesson description..." 
                rows={4} 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="objectives">Learning Objectives (one per line)</Label>
              <Textarea 
                id="objectives" 
                placeholder="List the learning objectives..." 
                rows={3} 
                value={formData.objectives}
                onChange={(e) => setFormData({...formData, objectives: e.target.value})}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="materials">Materials (one per line)</Label>
              <Textarea 
                id="materials" 
                placeholder="List required materials..." 
                rows={3} 
                value={formData.materials}
                onChange={(e) => setFormData({...formData, materials: e.target.value})}
                className="rounded-xl"
              />
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)} className="rounded-xl">Cancel</Button>
              <Button onClick={handleCreate} className="gradient-primary text-white rounded-xl">Create Lesson</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog *}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle>Edit Lesson</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Lesson Title *</Label>
                <Input 
                  id="edit-title" 
                  placeholder="Enter lesson title" 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-subject">Subject *</Label>
                <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                    <SelectItem value="Science">Science</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="History">History</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-grade">Grade *</Label>
                <Select value={formData.grade} onValueChange={(value) => setFormData({...formData, grade: value})}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="Grade 9">Grade 9</SelectItem>
                    <SelectItem value="Grade 10">Grade 10</SelectItem>
                    <SelectItem value="Grade 11">Grade 11</SelectItem>
                    <SelectItem value="Grade 12">Grade 12</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-duration">Duration *</Label>
                <Input 
                  id="edit-duration" 
                  placeholder="e.g., 45 min" 
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-status">Status</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-description">Description</Label>
              <Textarea 
                id="edit-description" 
                placeholder="Enter lesson description..." 
                rows={4} 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-objectives">Learning Objectives (one per line)</Label>
              <Textarea 
                id="edit-objectives" 
                placeholder="List the learning objectives..." 
                rows={3} 
                value={formData.objectives}
                onChange={(e) => setFormData({...formData, objectives: e.target.value})}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-materials">Materials (one per line)</Label>
              <Textarea 
                id="edit-materials" 
                placeholder="List required materials..." 
                rows={3} 
                value={formData.materials}
                onChange={(e) => setFormData({...formData, materials: e.target.value})}
                className="rounded-xl"
              />
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)} className="rounded-xl">Cancel</Button>
              <Button onClick={handleEdit} className="gradient-primary text-white rounded-xl">Save Changes</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* View Dialog *}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle>{selectedLesson?.title}</DialogTitle>
          </DialogHeader>
          {selectedLesson && (
            <div className="space-y-6 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground">Subject</p>
                  <p className="font-medium">{selectedLesson.subject}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Grade</p>
                  <p className="font-medium">{selectedLesson.grade}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Duration</p>
                  <p className="font-medium">{selectedLesson.duration}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Status</p>
                  <Badge className={getStatusColor(selectedLesson.status)}>
                    {selectedLesson.status}
                  </Badge>
                </div>
              </div>
              
              {selectedLesson.description && (
                <div>
                  <h4 className="mb-2">Description</h4>
                  <p className="text-muted-foreground">{selectedLesson.description}</p>
                </div>
              )}

              {selectedLesson.objectives.length > 0 && (
                <div>
                  <h4 className="mb-2">Learning Objectives</h4>
                  <ul className="space-y-1">
                    {selectedLesson.objectives.map((obj, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedLesson.materials.length > 0 && (
                <div>
                  <h4 className="mb-2">Required Materials</h4>
                  <ul className="space-y-1">
                    {selectedLesson.materials.map((material, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{material}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setIsViewDialogOpen(false)} className="rounded-xl">Close</Button>
                <Button onClick={() => {
                  setIsViewDialogOpen(false);
                  openEditDialog(selectedLesson);
                }} className="gradient-primary text-white rounded-xl">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Lesson
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
*/

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/lesson-management.css';

function LessonManagement() {
  const navigate = useNavigate();
  //const [showScrollButtons, setShowScrollButtons] = useState(false);

  const handleNavigation = (page) => {
    if (page === 'dashboard') {
      navigate('/');
    }
  };

  

  // Sample data for lessons
  const lessons = [
    {
      id: 1,
      title: "Quadratic Equations",
      subject: "Mathematics",
      status: "published",
      duration: "45 min",
      lastEdited: "2 days ago",
      description: "Complete guide to solving quadratic equations using various methods including factoring, completing the square, and quadratic formula."
    },
    {
      id: 2,
      title: "Trigonometry Basics",
      subject: "Mathematics",
      status: "published",
      duration: "60 min",
      lastEdited: "3 days ago",
      description: "Introduction to trigonometric functions, identities, and their applications in real-world problems."
    },
    {
      id: 3,
      title: "Algebraic Expressions",
      subject: "Mathematics",
      status: "draft",
      duration: "50 min",
      lastEdited: "1 hour ago",
      description: "Understanding and simplifying algebraic expressions with variables and constants."
    },
    {
      id: 4,
      title: "Geometry Fundamentals",
      subject: "Mathematics",
      status: "published",
      duration: "55 min",
      lastEdited: "1 week ago",
      description: "Basic concepts of geometry including points, lines, angles, and plane figures."
    },
    {
      id: 5,
      title: "Calculus Introduction",
      subject: "Mathematics",
      status: "published",
      duration: "70 min",
      lastEdited: "4 days ago",
      description: "Fundamental concepts of calculus including limits, derivatives, and basic integration."
    },
    {
      id: 6,
      title: "Statistics Basics",
      subject: "Mathematics",
      status: "draft",
      duration: "65 min",
      lastEdited: "2 hours ago",
      description: "Introduction to statistical concepts, data analysis, and probability distributions."
    }
  ];

  return (
    <div className="lesson-management">
      {/* Sidebar */}
      <div className="lesson-sidebar">
        <div className="sidebar-header">
          <h2>Ruwwad</h2>
          <p>Teacher Portal</p>
        </div>
        
        <ul className="sidebar-nav">
          <li onClick={() => handleNavigation('dashboard')}>
            <i className="fas fa-chart-line"></i>
            Dashboard
          </li>
          <li className="active">
            <i className="fas fa-book"></i>
            Lessons
          </li>
          <li>
            <i className="fas fa-tasks"></i>
            Assignments
          </li>
          <li>
            <i className="fas fa-chart-bar"></i>
            Analytics
          </li>
          <li>
            <i className="fas fa-bell"></i>
            Notifications
          </li>
          <li>
            <i className="fas fa-robot"></i>
            A Assistant
          </li>
          <li>
            <i className="fas fa-cog"></i>
            Account
          </li>
        </ul>

        {/* Teacher Profile in Sidebar
        <div className="teacher-profile-sidebar">
          <div className="profile-avatar">
            <i className="fas fa-user"></i>
          </div>
          <div className="profile-info-sidebar">
            <h4>Sarah Johnson</h4>
            <p>Mathematics Teacher</p>
          </div>
        </div> */}
      </div>

      {/* Main Content */}
      <div className="lesson-main-content">
        <div className="content-container">
          {/* Header Section */}
          <div className="lesson-header">
            <div className="header-content">
              <div className="header-text">
                <h1>Lesson Management</h1>
                <p>Create, edit, and organize your lessons</p>
              </div>
              <div className="header-stats">
                <div className="stat-item">
                  <span className="stat-number">{lessons.length}</span>
                  <span className="stat-label">Total Lessons</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{lessons.filter(l => l.status === 'published').length}</span>
                  <span className="stat-label">Published</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{lessons.filter(l => l.status === 'draft').length}</span>
                  <span className="stat-label">Drafts</span>
                </div>
              </div>
            </div>
            
            <div className="search-container">
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search lessons..."
              />
              <i className="fas fa-search search-icon"></i>
            </div>
          </div>

          {/* Action Bar */}
          <div className="action-bar">
            <button className="create-lesson-btn">
              <i className="fas fa-plus"></i>
              Create New Lesson
            </button>
            <div className="filter-options">
              <select className="filter-select">
                <option>All Status</option>
                <option>Published</option>
                <option>Draft</option>
                <option>Archived</option>
              </select>
              <select className="filter-select">
                <option>All Subjects</option>
                <option>Mathematics</option>
                <option>Science</option>
                <option>English</option>
              </select>
              <button className="filter-btn">
                <i className="fas fa-filter"></i>
                Filter
              </button>
            </div>
          </div>

          {/* Lessons Grid */}
          <div className="lessons-grid">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="lesson-card">
                <div className="lesson-card-header">
                  <div className="lesson-header-section">
                    <div className="lesson-title-section">
                      <h3>{lesson.title}</h3>
                      <p className="lesson-subject">
                        <i className="fas fa-book-open"></i>
                        {lesson.subject}
                      </p>
                    </div>
                    <span className={`status-badge ${lesson.status}`}>
                      <i className={`fas ${lesson.status === 'published' ? 'fa-check-circle' : 'fa-edit'}`}></i>
                      {lesson.status}
                    </span>
                  </div>
                </div>

                <div className="lesson-description">
                  {lesson.description}
                </div>

                <div className="lesson-details">
                  <div className="detail-item">
                    <i className="fas fa-clock"></i>
                    <span>{lesson.duration}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-calendar"></i>
                    <span>Created 2 weeks ago</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-edit"></i>
                    <span>Edited {lesson.lastEdited}</span>
                  </div>
                </div>

                <div className="lesson-meta">
                  <div className="meta-item">
                    <i className="fas fa-users"></i>
                    <span>24 Students</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-download"></i>
                    <span>15 Downloads</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-star"></i>
                    <span>4.8 Rating</span>
                  </div>
                </div>

                <div className="lesson-actions">
                  <button className="action-btn preview">
                    <i className="fas fa-eye"></i>
                    Preview
                  </button>
                  <button className="action-btn view">
                    <i className="fas fa-external-link-alt"></i>
                    View
                  </button>
                  <button className="action-btn edit">
                    <i className="fas fa-edit"></i>
                    Edit
                  </button>
                  <button className="action-btn more">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Section */}
          <div className="load-more-section">
            <button className="load-more-btn">
              <i className="fas fa-redo"></i>
              Load More Lessons
            </button>
            <div className="pagination-info">
              Showing {lessons.length} of 24 lessons
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default LessonManagement;