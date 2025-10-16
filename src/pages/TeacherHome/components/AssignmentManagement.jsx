import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Plus, Clock, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import { toast } from 'sonner';

export function AssignmentManagement() {
  const store = useStore();
  const assignments = store.getAssignments();
  
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [isSubmissionsDialogOpen, setIsSubmissionsDialogOpen] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    grade: '',
    dueDate: '',
    instructions: '',
    totalPoints: '100',
    passingScore: '60',
    totalStudents: '62',
  });

  const resetForm = () => {
    setFormData({
      title: '',
      subject: '',
      grade: '',
      dueDate: '',
      instructions: '',
      totalPoints: '100',
      passingScore: '60',
      totalStudents: '62',
    });
  };

  const handleCreate = () => {
    if (!formData.title || !formData.subject || !formData.grade || !formData.dueDate) {
      toast.error('Please fill in all required fields');
      return;
    }

    store.addAssignment({
      title: formData.title,
      subject: formData.subject,
      grade: formData.grade,
      dueDate: formData.dueDate,
      instructions: formData.instructions,
      totalPoints: parseInt(formData.totalPoints),
      passingScore: parseInt(formData.passingScore),
      totalStudents: parseInt(formData.totalStudents),
    });

    toast.success('Assignment created successfully!');
    setIsCreateDialogOpen(false);
    resetForm();
  };

  const handleEdit = () => {
    if (!selectedAssignment) return;
    
    if (!formData.title || !formData.subject || !formData.grade || !formData.dueDate) {
      toast.error('Please fill in all required fields');
      return;
    }

    store.updateAssignment(selectedAssignment.id, {
      title: formData.title,
      subject: formData.subject,
      grade: formData.grade,
      dueDate: formData.dueDate,
      instructions: formData.instructions,
      totalPoints: parseInt(formData.totalPoints),
      passingScore: parseInt(formData.passingScore),
      totalStudents: parseInt(formData.totalStudents),
    });

    toast.success('Assignment updated successfully!');
    setIsEditDialogOpen(false);
    setSelectedAssignment(null);
    resetForm();
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      store.deleteAssignment(id);
      toast.success('Assignment deleted successfully!');
    }
  };

  const openEditDialog = (assignment) => {
    setSelectedAssignment(assignment);
    setFormData({
      title: assignment.title,
      subject: assignment.subject,
      grade: assignment.grade,
      dueDate: assignment.dueDate,
      instructions: assignment.instructions,
      totalPoints: assignment.totalPoints.toString(),
      passingScore: assignment.passingScore.toString(),
      totalStudents: assignment.totalStudents.toString(),
    });
    setIsEditDialogOpen(true);
  };

  const openSubmissionsDialog = (assignment) => {
    setSelectedAssignment(assignment);
    setIsSubmissionsDialogOpen(true);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <Clock className="h-4 w-4" />;
      case 'closed':
        return <CheckCircle className="h-4 w-4" />;
      case 'upcoming':
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'closed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
      case 'upcoming':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return '';
    }
  };

  const AssignmentCard = ({ assignment }) => (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{assignment.title}</CardTitle>
            <p className="text-muted-foreground mt-1">{assignment.subject} • {assignment.grade}</p>
          </div>
          <Badge className={`${getStatusColor(assignment.status)} rounded-full px-3`}>
            <span className="flex items-center gap-1">
              {getStatusIcon(assignment.status)}
              {assignment.status}
            </span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[oklch(0.98_0.02_280)] to-[oklch(0.99_0.01_260)]">
              <p className="text-muted-foreground">Due Date</p>
              <p>{assignment.dueDate}</p>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[oklch(0.98_0.02_280)] to-[oklch(0.99_0.01_260)]">
              <p className="text-muted-foreground">Total Students</p>
              <p>{assignment.totalStudents}</p>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[oklch(0.98_0.02_280)] to-[oklch(0.99_0.01_260)]">
              <p className="text-muted-foreground">Submitted</p>
              <p>{assignment.submitted} / {assignment.totalStudents}</p>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[oklch(0.98_0.02_280)] to-[oklch(0.99_0.01_260)]">
              <p className="text-muted-foreground">Graded</p>
              <p>{assignment.graded} / {assignment.submitted}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-muted-foreground">
              <span>Submission Progress</span>
              <span>{Math.round((assignment.submitted / assignment.totalStudents) * 100)}%</span>
            </div>
            <Progress value={(assignment.submitted / assignment.totalStudents) * 100} className="h-3 rounded-full" />
          </div>
          <div className="flex gap-2 pt-2">
            <Button 
              variant="outline" 
              onClick={() => openSubmissionsDialog(assignment)}
              className="rounded-xl border-[oklch(0.92_0.04_270)] hover:bg-gradient-to-r hover:from-[oklch(0.98_0.02_280)] hover:to-[oklch(0.98_0.02_260)] transition-all"
            >
              View Submissions
            </Button>
            <Button 
              variant="outline" 
              onClick={() => openEditDialog(assignment)}
              className="rounded-xl border-[oklch(0.92_0.04_270)] hover:bg-gradient-to-r hover:from-[oklch(0.98_0.02_280)] hover:to-[oklch(0.98_0.02_260)] transition-all"
            >
              Edit
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleDelete(assignment.id, assignment.title)}
              className="rounded-xl border-[oklch(0.92_0.04_270)] hover:bg-gradient-to-r hover:from-[oklch(0.98_0.02_280)] hover:to-[oklch(0.98_0.02_260)] transition-all hover:border-red-300"
            >
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="gradient-text">Assignment Management</h1>
          <p className="text-muted-foreground">Create, grade, and monitor student assignments</p>
        </div>
        <Button 
          onClick={() => {
            resetForm();
            setIsCreateDialogOpen(true);
          }}
          className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Assignment
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="rounded-xl">
          <TabsTrigger value="all" className="rounded-lg">All Assignments</TabsTrigger>
          <TabsTrigger value="active" className="rounded-lg">Active</TabsTrigger>
          <TabsTrigger value="upcoming" className="rounded-lg">Upcoming</TabsTrigger>
          <TabsTrigger value="closed" className="rounded-lg">Closed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {assignments.length === 0 ? (
            <Card className="border-0 shadow-lg bg-white rounded-2xl">
              <CardContent className="p-12 text-center">
                <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="mb-2">No assignments yet</h3>
                <p className="text-muted-foreground">Create your first assignment to get started</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {assignments.map((assignment) => (
                <AssignmentCard key={assignment.id} assignment={assignment} />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="active" className="space-y-6">
          <div className="grid gap-6">
            {assignments.filter(a => a.status === 'active').map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid gap-6">
            {assignments.filter(a => a.status === 'upcoming').map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="closed" className="space-y-6">
          <div className="grid gap-6">
            {assignments.filter(a => a.status === 'closed').map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Create Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle>Create New Assignment</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Assignment Title *</Label>
                <Input 
                  id="title" 
                  placeholder="Enter assignment title" 
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
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date *</Label>
                <Input 
                  id="dueDate" 
                  type="date" 
                  value={formData.dueDate}
                  onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="instructions">Instructions</Label>
              <Textarea 
                id="instructions" 
                placeholder="Enter assignment instructions..." 
                rows={5} 
                value={formData.instructions}
                onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                className="rounded-xl"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="totalPoints">Total Points</Label>
                <Input 
                  id="totalPoints" 
                  type="number" 
                  placeholder="100" 
                  value={formData.totalPoints}
                  onChange={(e) => setFormData({...formData, totalPoints: e.target.value})}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="passingScore">Passing Score</Label>
                <Input 
                  id="passingScore" 
                  type="number" 
                  placeholder="60" 
                  value={formData.passingScore}
                  onChange={(e) => setFormData({...formData, passingScore: e.target.value})}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="totalStudents">Total Students</Label>
                <Input 
                  id="totalStudents" 
                  type="number" 
                  placeholder="62" 
                  value={formData.totalStudents}
                  onChange={(e) => setFormData({...formData, totalStudents: e.target.value})}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)} className="rounded-xl">Cancel</Button>
              <Button onClick={handleCreate} className="gradient-primary text-white rounded-xl">Create Assignment</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle>Edit Assignment</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Assignment Title *</Label>
                <Input 
                  id="edit-title" 
                  placeholder="Enter assignment title" 
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
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-dueDate">Due Date *</Label>
                <Input 
                  id="edit-dueDate" 
                  type="date" 
                  value={formData.dueDate}
                  onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-instructions">Instructions</Label>
              <Textarea 
                id="edit-instructions" 
                placeholder="Enter assignment instructions..." 
                rows={5} 
                value={formData.instructions}
                onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                className="rounded-xl"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-totalPoints">Total Points</Label>
                <Input 
                  id="edit-totalPoints" 
                  type="number" 
                  value={formData.totalPoints}
                  onChange={(e) => setFormData({...formData, totalPoints: e.target.value})}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-passingScore">Passing Score</Label>
                <Input 
                  id="edit-passingScore" 
                  type="number" 
                  value={formData.passingScore}
                  onChange={(e) => setFormData({...formData, passingScore: e.target.value})}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-totalStudents">Total Students</Label>
                <Input 
                  id="edit-totalStudents" 
                  type="number" 
                  value={formData.totalStudents}
                  onChange={(e) => setFormData({...formData, totalStudents: e.target.value})}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)} className="rounded-xl">Cancel</Button>
              <Button onClick={handleEdit} className="gradient-primary text-white rounded-xl">Save Changes</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Submissions Dialog */}
      <Dialog open={isSubmissionsDialogOpen} onOpenChange={setIsSubmissionsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle>Submissions - {selectedAssignment?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <p className="text-muted-foreground">
              {selectedAssignment?.submitted} out of {selectedAssignment?.totalStudents} students have submitted this assignment.
              {selectedAssignment && selectedAssignment.graded < selectedAssignment.submitted && (
                <span className="text-orange-600 ml-2">
                  {selectedAssignment.submitted - selectedAssignment.graded} submissions need grading.
                </span>
              )}
            </p>
            <div className="text-center py-12 text-muted-foreground">
              <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>Submission details would appear here.</p>
              <p className="text-sm mt-2">This feature can be enhanced with detailed submission tracking.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
