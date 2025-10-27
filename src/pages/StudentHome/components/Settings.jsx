import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Input, Label, Separator, Avatar, AvatarImage, AvatarFallback } from './ui';
import { Bell, Moon, Globe, Shield, Download } from 'lucide-react';

export function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    assignments: true,
    grades: false,
  });

  const [profile, setProfile] = useState({
    name: 'Amira Hassan',
    email: 'amira.hassan@student.edu',
    grade: 'Grade 10',
    language: 'English',
  });

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings ⚙️</h1>
        <p className="text-gray-600 mt-1">Manage your account preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Profile Information</h2>
            
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amira" alt="Amira" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline" className="mb-2">
                  Change Photo
                </Button>
                <p className="text-sm text-gray-600">JPG, GIF or PNG. Max size 2MB</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="grade">Grade Level</Label>
                <Input
                  id="grade"
                  value={profile.grade}
                  onChange={(e) => setProfile({...profile, grade: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="language">Language</Label>
                <Input
                  id="language"
                  value={profile.language}
                  onChange={(e) => setProfile({...profile, language: e.target.value})}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Save Changes
              </Button>
              <Button variant="outline">
                Cancel
              </Button>
            </div>
          </Card>

          {/* Notifications */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
            </div>

            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 capitalize">
                      {key.replace(/([A-Z])/g, ' $1')} Notifications
                    </p>
                    <p className="text-sm text-gray-600">
                      Receive {key} notifications
                    </p>
                  </div>
                  <button
                    onClick={() => handleNotificationChange(key)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      value ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        value ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Preferences */}
          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Settings</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Moon className="w-5 h-5 text-gray-600" />
                <span>Dark Mode</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Globe className="w-5 h-5 text-gray-600" />
                <span>Language</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Shield className="w-5 h-5 text-gray-600" />
                <span>Privacy</span>
              </button>
            </div>
          </Card>

          {/* Data Management */}
          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Data</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-5 h-5 text-gray-600" />
                <span>Export Data</span>
              </button>
              <Button variant="outline" className="w-full text-red-600 hover:bg-red-50 hover:text-red-700">
                Delete Account
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}