import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { Send, Bell, CheckCheck, Clock, Trash2 } from 'lucide-react';
import { useStore } from '../hooks/useStore';

// بديل مؤقت لـ sonner إذا لم يثبت
let toast;
try {
  const sonner = require('sonner');
  toast = sonner.toast;
} catch (error) {
  toast = {
    success: (msg) => console.log('✅ ' + msg),
    error: (msg) => console.log('❌ ' + msg)
  };
}

const quickTemplates = [
  { id: 1, title: 'Assignment Reminder', message: 'This is a reminder that your assignment is due soon. Please submit it on time.' },
  { id: 2, title: 'Class Cancellation', message: 'Your class has been cancelled. You will be notified of the rescheduled time.' },
  { id: 3, title: 'Encouragement', message: 'Great work on your recent assignments! Keep up the excellent effort.' },
  { id: 4, title: 'Extra Help', message: 'I noticed you might need some help. I\'m available for extra support sessions after school.' },
  { id: 5, title: 'Test Announcement', message: 'We will have a test next week. Please review all materials and come prepared.' },
  { id: 6, title: 'Good Performance', message: 'Congratulations on your excellent performance! Your hard work is paying off.' },
];

export function Notifications() {
  const store = useStore();
  const notifications = store.getNotifications();
  const students = store.getStudents();
  
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [isScheduled, setIsScheduled] = useState(false);
  const [actionState, setActionState] = useState({
    type: null,
    templateId: null,
    notificationId: null,
    notificationTitle: ''
  });
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    recipients: '',
    scheduledTime: '',
  });

  // دالة مساعدة لاستخدام القوالب
  const applyTemplate = useCallback((templateId) => {
    const template = quickTemplates.find(t => t.id === templateId);
    if (template) {
      setFormData(prev => ({
        ...prev,
        title: template.title,
        message: template.message,
      }));
      setSelectedTemplate(templateId.toString());
    }
  }, []);

  const handleTemplateSelect = (templateId) => {
    applyTemplate(templateId);
    setIsComposeOpen(true);
  };

  // استخدام useEffect للتعامل مع الإجراءات
  const handleDeleteFinal = useCallback((id) => {
    store.deleteNotification(id);
    toast.success('Notification deleted successfully!');
  }, [store]);

  useEffect(() => {
    if (actionState.type === 'delete' && actionState.notificationId) {
      handleDeleteFinal(actionState.notificationId);
      setActionState({ type: null, notificationId: null, notificationTitle: '' });
    }
  }, [actionState, handleDeleteFinal]);

  const resetForm = () => {
    setFormData({
      title: '',
      message: '',
      recipients: '',
      scheduledTime: '',
    });
    setSelectedTemplate('');
    setIsScheduled(false);
  };

  const handleSend = () => {
    if (!formData.title || !formData.message || !formData.recipients) {
      toast.error('Please fill in all required fields');
      return;
    }

    const recipientData = getRecipientData(formData.recipients);
    
    if (isScheduled && formData.scheduledTime) {
      store.scheduleNotification({
        title: formData.title,
        message: formData.message,
        recipients: formData.recipients,
        recipientIds: recipientData.ids,
        totalRecipients: recipientData.count,
        sentAt: formData.scheduledTime,
      }, formData.scheduledTime);
      toast.success('Notification scheduled successfully!');
    } else {
      store.addNotification({
        title: formData.title,
        message: formData.message,
        recipients: formData.recipients,
        recipientIds: recipientData.ids,
        totalRecipients: recipientData.count,
      });
      toast.success('Notification sent successfully!');
    }

    setIsComposeOpen(false);
    resetForm();
  };

  const getRecipientData = (recipients) => {
    switch (recipients) {
      case 'all':
        return { count: students.length, ids: students.map(s => s.id) };
      case 'Grade 9A':
      case 'Grade 10A':
      case 'Grade 10B':
      case 'Grade 11A':
        const filtered = students.filter(s => s.grade === recipients);
        return { count: filtered.length, ids: filtered.map(s => s.id) };
      default:
        return { count: students.length, ids: students.map(s => s.id) };
    }
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      setActionState({
        type: 'delete',
        notificationId: id,
        notificationTitle: title
      });
    }
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="gradient-text">Notifications & Messages</h1>
          <p className="text-muted-foreground">Send reminders, announcements, and feedback to students</p>
        </div>
        <Button 
          onClick={() => {
            resetForm();
            setIsComposeOpen(true);
          }}
          className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
        >
          <Send className="h-4 w-4 mr-2" />
          Compose Message
        </Button>
      </div>

      {/* Quick Templates */}
      <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
          <CardTitle>Quick Templates</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickTemplates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleTemplateSelect(template.id)}
                className="p-4 border border-[oklch(0.92_0.04_270)] rounded-2xl hover:shadow-md hover:border-[oklch(0.6_0.25_280)] cursor-pointer transition-all duration-300 bg-gradient-to-br from-white to-[oklch(0.99_0.01_270)] text-left"
              >
                <h4>{template.title}</h4>
                <p className="text-muted-foreground mt-2 line-clamp-2">{template.message}</p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notifications List */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="rounded-xl">
          <TabsTrigger value="all" className="rounded-lg">All Notifications</TabsTrigger>
          <TabsTrigger value="sent" className="rounded-lg">Sent</TabsTrigger>
          <TabsTrigger value="scheduled" className="rounded-lg">Scheduled</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {notifications.length === 0 ? (
            <Card className="border-0 shadow-lg bg-white rounded-2xl">
              <CardContent className="p-12 text-center">
                <Bell className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="mb-2">No notifications yet</h3>
                <p className="text-muted-foreground">Send your first notification to get started</p>
              </CardContent>
            </Card>
          ) : (
            notifications.map((notification) => (
              <Card key={notification.id} className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3>{notification.title}</h3>
                        <Badge className={
                          notification.status === 'sent' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full'
                        }>
                          {notification.status === 'sent' ? (
                            <span className="flex items-center gap-1">
                              <CheckCheck className="h-3 w-3" />
                              Sent
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              Scheduled
                            </span>
                          )}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{notification.message}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(notification.id, notification.title)}
                      className="rounded-xl hover:border-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-6 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Bell className="h-4 w-4" />
                        {notification.recipients}
                      </span>
                      <span>{new Date(notification.sentAt).toLocaleString()}</span>
                      {notification.status === 'sent' && (
                        <span>
                          {notification.readCount} / {notification.totalRecipients} read
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="sent" className="space-y-4">
          {notifications.filter(n => n.status === 'sent').length === 0 ? (
            <Card className="border-0 shadow-lg bg-white rounded-2xl">
              <CardContent className="p-12 text-center">
                <CheckCheck className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="mb-2">No sent notifications</h3>
                <p className="text-muted-foreground">Sent notifications will appear here</p>
              </CardContent>
            </Card>
          ) : (
            notifications.filter(n => n.status === 'sent').map((notification) => (
              <Card key={notification.id} className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3>{notification.title}</h3>
                      <p className="text-muted-foreground mt-2">{notification.message}</p>
                      <div className="flex items-center gap-4 mt-4 text-muted-foreground">
                        <span>{notification.recipients}</span>
                        <span>{new Date(notification.sentAt).toLocaleString()}</span>
                        <span>{notification.readCount} / {notification.totalRecipients} read</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(notification.id, notification.title)}
                      className="rounded-xl hover:border-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          {notifications.filter(n => n.status === 'scheduled').length === 0 ? (
            <Card className="border-0 shadow-lg bg-white rounded-2xl">
              <CardContent className="p-12 text-center">
                <Clock className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="mb-2">No scheduled notifications</h3>
                <p className="text-muted-foreground">Scheduled notifications will appear here</p>
              </CardContent>
            </Card>
          ) : (
            notifications.filter(n => n.status === 'scheduled').map((notification) => (
              <Card key={notification.id} className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3>{notification.title}</h3>
                      <p className="text-muted-foreground mt-2">{notification.message}</p>
                      <div className="flex items-center gap-4 mt-4 text-muted-foreground">
                        <span>{notification.recipients}</span>
                        <span>Scheduled for: {new Date(notification.sentAt).toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(notification.id, notification.title)}
                        className="rounded-xl hover:border-red-300"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>

      {/* Compose Dialog */}
      <Dialog open={isComposeOpen} onOpenChange={setIsComposeOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle>Compose New Notification</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="recipients">Recipients *</Label>
              <Select value={formData.recipients} onValueChange={(value) => setFormData({...formData, recipients: value})}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select recipients" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="all">All Students</SelectItem>
                  <SelectItem value="Grade 9A">Grade 9A</SelectItem>
                  <SelectItem value="Grade 10A">Grade 10A</SelectItem>
                  <SelectItem value="Grade 10B">Grade 10B</SelectItem>
                  <SelectItem value="Grade 11A">Grade 11A</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="template">Use Template (Optional)</Label>
              <Select value={selectedTemplate} onValueChange={(value) => applyTemplate(parseInt(value))}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select a template" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {quickTemplates.map((template) => (
                    <SelectItem key={template.id} value={template.id.toString()}>
                      {template.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input 
                id="title" 
                placeholder="Enter notification title" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea 
                id="message" 
                placeholder="Enter your message..." 
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="rounded-xl"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="schedule" 
                checked={isScheduled}
                onCheckedChange={(checked) => setIsScheduled(checked === true)}
              />
              <Label htmlFor="schedule" className="cursor-pointer">
                Schedule for later
              </Label>
            </div>

            {isScheduled && (
              <div className="space-y-2">
                <Label htmlFor="scheduledTime">Scheduled Time</Label>
                <Input 
                  id="scheduledTime" 
                  type="datetime-local"
                  value={formData.scheduledTime}
                  onChange={(e) => setFormData({...formData, scheduledTime: e.target.value})}
                  className="rounded-xl"
                />
              </div>
            )}

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setIsComposeOpen(false)} className="rounded-xl">Cancel</Button>
              <Button onClick={handleSend} className="gradient-primary text-white rounded-xl">
                <Send className="h-4 w-4 mr-2" />
                {isScheduled ? 'Schedule' : 'Send Now'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}