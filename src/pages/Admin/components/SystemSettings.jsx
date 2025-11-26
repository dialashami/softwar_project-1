import { useState } from 'react';
import { Save, Globe, Bell, Shield, Database, Mail, Palette, Cpu, Check } from 'lucide-react';

export function SystemSettings() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    platformName: 'Ruwwad Educational Platform',
    platformVersion: 'v2.5.0',
    defaultLanguage: 'en',
    timezone: 'Asia/Riyadh',
    adminEmail: 'admin@ruwwad.edu',
    supportEmail: 'support@ruwwad.edu',
    aiRecommendations: true,
    realTimeCommunication: true,
    autoBackup: true,
    maintenanceMode: false,
    maxUploadSize: '50',
    sessionTimeout: '30',
    twoFactorAuth: true,
    emailNotifications: true,
    smsNotifications: false,
    primaryColor: '#3b82f6',
    secondaryColor: '#8b5cf6',
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-gray-900 mb-2">System Settings</h1>
          <p className="text-gray-600">Configure platform settings and preferences</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {saved ? <Check className="w-5 h-5" /> : <Save className="w-5 h-5" />}
          {saved ? 'Saved' : 'Save Changes'}
        </button>
      </div>

      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-blue-600" />
            <h3 className="text-gray-900">General Settings</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">
                Platform Name
              </label>
              <input
                type="text"
                value={settings.platformName}
                onChange={(e) => handleChange('platformName', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Platform Version
              </label>
              <input
                type="text"
                value={settings.platformVersion}
                onChange={(e) => handleChange('platformVersion', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Default Language
              </label>
              <select
                value={settings.defaultLanguage}
                onChange={(e) => handleChange('defaultLanguage', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Timezone
              </label>
              <select
                value={settings.timezone}
                onChange={(e) => handleChange('timezone', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Asia/Riyadh">Riyadh (GMT+3)</option>
                <option value="Asia/Dubai">Dubai (GMT+4)</option>
                <option value="Africa/Cairo">Cairo (GMT+2)</option>
                <option value="Europe/London">London (GMT+0)</option>
                <option value="America/New_York">New York (GMT-5)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Email Settings */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-6 h-6 text-blue-600" />
            <h3 className="text-gray-900">Email Settings</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">
                Admin Email
              </label>
              <input
                type="email"
                value={settings.adminEmail}
                onChange={(e) => handleChange('adminEmail', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Support Email
              </label>
              <input
                type="email"
                value={settings.supportEmail}
                onChange={(e) => handleChange('supportEmail', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

       

       

        {/* Notification Settings */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-6 h-6 text-blue-600" />
            <h3 className="text-gray-900">Notification Settings</h3>
          </div>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div>
                <p className="text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-500">Send notifications via email</p>
              </div>
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div>
                <p className="text-gray-900">SMS Notifications</p>
                <p className="text-sm text-gray-500">Send notifications via text message</p>
              </div>
              <input
                type="checkbox"
                checked={settings.smsNotifications}
                onChange={(e) => handleChange('smsNotifications', e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>
        </div>

        
      </div>
    </div>
  );
}