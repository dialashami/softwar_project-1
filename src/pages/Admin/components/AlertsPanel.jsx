import { AlertCircle, AlertTriangle, Info, CheckCircle } from 'lucide-react';

export function AlertsPanel() {
  const alerts = [
    {
      type: 'warning',
      icon: AlertTriangle,
      message: 'Server maintenance scheduled',
      time: 'Tomorrow at 2:00 AM',
    },
    {
      type: 'info',
      icon: Info,
      message: 'New feature release next week',
      time: 'Nov 30, 2025',
    },
    {
      type: 'success',
      icon: CheckCircle,
      message: 'Backup completed successfully',
      time: '2 hours ago',
    },
    {
      type: 'error',
      icon: AlertCircle,
      message: '3 failed login attempts detected',
      time: '30 minutes ago',
    },
  ];

  const colorClasses = {
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
  };

  const iconColorClasses = {
    warning: 'text-yellow-600',
    info: 'text-blue-600',
    success: 'text-green-600',
    error: 'text-red-600',
  };

  // return (
  //   // <div className="bg-white rounded-lg border border-gray-200 p-6">
  //   //   <h3 className="text-gray-900 mb-4">System Alerts</h3>
  //   //   <div className="space-y-3">
  //   //     {alerts.map((alert, index) => {
  //   //       const Icon = alert.icon;
  //   //       return (
  //   //         <div
  //   //           key={index}
  //   //           className={`p-3 rounded-lg border ${colorClasses[alert.type]}`}
  //   //         >
  //   //           <div className="flex gap-3">
  //   //             <Icon className={`w-5 h-5 flex-shrink-0 ${iconColorClasses[alert.type]}`} />
  //   //             <div>
  //   //               <p className="text-sm">{alert.message}</p>
  //   //               <p className="text-xs opacity-70 mt-1">{alert.time}</p>
  //   //             </div>
  //   //           </div>
  //   //         </div>
  //   //       );
  //   //     })}
  //   //   </div>
  //   // </div>
  // );
}