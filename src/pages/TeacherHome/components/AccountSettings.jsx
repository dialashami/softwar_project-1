import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import { User, Mail, Phone, BookOpen, Lock, Trash2, Save } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { toast } from 'sonner';

export function AccountSettings() {
  const { user, updateProfile, changePassword, deleteAccount, logout } = useAuth();
  
  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    subject: user?.subject || '',
    bio: user?.bio || '',
  });

  const [passwordForm, setPasswordForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [isLoadingPassword, setIsLoadingPassword] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsLoadingProfile(true);

    setTimeout(() => {
      const result = updateProfile(profileForm);
      if (result.success) {
        toast.success('Profile updated successfully!');
      } else {
        toast.error(result.error || 'Failed to update profile');
      }
      setIsLoadingProfile(false);
    }, 500);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!passwordForm.oldPassword || !passwordForm.newPassword || !passwordForm.confirmPassword) {
      toast.error('Please fill in all password fields');
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }

    if (passwordForm.newPassword.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setIsLoadingPassword(true);

    setTimeout(() => {
      const result = changePassword(passwordForm.oldPassword, passwordForm.newPassword);
      if (result.success) {
        toast.success('Password changed successfully!');
        setPasswordForm({ oldPassword: '', newPassword: '', confirmPassword: '' });
      } else {
        toast.error(result.error || 'Failed to change password');
      }
      setIsLoadingPassword(false);
    }, 500);
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      if (window.confirm('This will permanently delete all your data. Are you absolutely sure?')) {
        const result = deleteAccount();
        if (result.success) {
          toast.success('Account deleted successfully');
        } else {
          toast.error(result.error || 'Failed to delete account');
        }
      }
    }
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="p-8 space-y-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="gradient-text">Account Settings</h1>
        <p className="text-muted-foreground">Manage your account information and preferences</p>
      </div>

      {/* Profile Header */}
      <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24 rounded-2xl gradient-primary shadow-lg">
              <AvatarFallback className="text-white text-2xl bg-transparent">
                {user ? getInitials(user.name) : 'U'}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2>{user?.name}</h2>
              <p className="text-muted-foreground">{user?.email}</p>
              <p className="text-muted-foreground capitalize">{user?.role} • {user?.subject}</p>
            </div>
            <Button
              variant="outline"
              onClick={logout}
              className="rounded-xl border-[oklch(0.92_0.04_270)] hover:bg-gradient-to-r hover:from-[oklch(0.98_0.02_280)] hover:to-[oklch(0.98_0.02_260)] transition-all"
            >
              Sign Out
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Settings Tabs */}
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="rounded-xl">
          <TabsTrigger value="profile" className="rounded-lg">Profile</TabsTrigger>
          <TabsTrigger value="security" className="rounded-lg">Security</TabsTrigger>
          <TabsTrigger value="preferences" className="rounded-lg">Preferences</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleUpdateProfile} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="name"
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        className="pl-10 rounded-xl border-[oklch(0.92_0.04_270)]"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        value={user?.email}
                        disabled
                        className="pl-10 rounded-xl bg-muted cursor-not-allowed"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">Email cannot be changed</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        value={profileForm.phone}
                        onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                        className="pl-10 rounded-xl border-[oklch(0.92_0.04_270)]"
                        placeholder="+966 50 123 4567"
                      />
                    </div>
                  </div>

                  {user?.role === 'teacher' && (
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <div className="relative">
                        <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="subject"
                          value={profileForm.subject}
                          onChange={(e) => setProfileForm({ ...profileForm, subject: e.target.value })}
                          className="pl-10 rounded-xl border-[oklch(0.92_0.04_270)]"
                          placeholder="Mathematics"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profileForm.bio}
                    onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                    className="rounded-xl border-[oklch(0.92_0.04_270)] min-h-[100px]"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="gradient-primary text-white rounded-xl"
                    disabled={isLoadingProfile}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {isLoadingProfile ? 'Saving...' : 'Save Changes'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {/* Change Password */}
              <div>
                <h3 className="mb-4">Change Password</h3>
                <form onSubmit={handleChangePassword} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="oldPassword">Current Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="oldPassword"
                        type="password"
                        value={passwordForm.oldPassword}
                        onChange={(e) => setPasswordForm({ ...passwordForm, oldPassword: e.target.value })}
                        className="pl-10 rounded-xl border-[oklch(0.92_0.04_270)]"
                        placeholder="Enter current password"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="newPassword"
                        type="password"
                        value={passwordForm.newPassword}
                        onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                        className="pl-10 rounded-xl border-[oklch(0.92_0.04_270)]"
                        placeholder="Enter new password"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={passwordForm.confirmPassword}
                        onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                        className="pl-10 rounded-xl border-[oklch(0.92_0.04_270)]"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="gradient-primary text-white rounded-xl"
                      disabled={isLoadingPassword}
                    >
                      {isLoadingPassword ? 'Updating...' : 'Update Password'}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Delete Account */}
              <div className="border-t border-[oklch(0.92_0.04_270)] pt-8">
                <h3 className="mb-2 text-red-600">Danger Zone</h3>
                <p className="text-muted-foreground mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <Button
                  variant="outline"
                  onClick={handleDeleteAccount}
                  className="rounded-xl border-red-300 text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences">
          <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
              <CardTitle>Preferences</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.99_0.01_260)]">
                  <div>
                    <h4>Email Notifications</h4>
                    <p className="text-muted-foreground">Receive email updates about your activity</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded border-[oklch(0.92_0.04_270)]" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.99_0.01_260)]">
                  <div>
                    <h4>Push Notifications</h4>
                    <p className="text-muted-foreground">Get notified about important updates</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded border-[oklch(0.92_0.04_270)]" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.99_0.01_260)]">
                  <div>
                    <h4>Weekly Reports</h4>
                    <p className="text-muted-foreground">Receive weekly summary of your activity</p>
                  </div>
                  <input type="checkbox" className="rounded border-[oklch(0.92_0.04_270)]" />
                </div>

                <div className="flex justify-end pt-4">
                  <Button className="gradient-primary text-white rounded-xl">
                    <Save className="h-4 w-4 mr-2" />
                    Save Preferences
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
