import { X, Mail, Phone, Calendar, Award, BookOpen, TrendingUp } from 'lucide-react';

export function UserDetailsModal({ user, type, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-gray-900">User Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          {/* Profile Header */}
          <div className="flex items-start gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl">
              {user.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-2">{user.name}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {user.email}
                </div>
                {user.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {user.phone}
                  </div>
                )}
              </div>
              <div className="mt-3">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                    user.status === 'active'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-gray-50 text-gray-700'
                  }`}
                >
                  {user.status === 'active' ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {type === 'students' && (
              <>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Grade Level</div>
                  <div className="text-gray-900">{user.grade}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Parent</div>
                  <div className="text-gray-900">{user.parent}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Enrollment Date</div>
                  <div className="text-gray-900">{user.enrollDate}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Enrolled Courses</div>
                  <div className="text-gray-900">{user.courses} courses</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Average Score</div>
                  <div className="text-gray-900 flex items-center gap-2">
                    {user.avgScore}%
                    <span className="text-xs text-green-600">Excellent</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Last Active</div>
                  <div className="text-gray-900">{user.lastActive}</div>
                </div>
              </>
            )}

            {type === 'teachers' && (
              <>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Subject</div>
                  <div className="text-gray-900">{user.subject}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Department</div>
                  <div className="text-gray-900">{user.department}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Number of Students</div>
                  <div className="text-gray-900">{user.students} students</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Experience</div>
                  <div className="text-gray-900">{user.experience}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Rating</div>
                  <div className="text-gray-900 flex items-center gap-2">
                    {user.rating} ⭐
                    <span className="text-xs text-green-600">Excellent</span>
                  </div>
                </div>
              </>
            )}

            {type === 'parents' && (
              <>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Number of Children</div>
                  <div className="text-gray-900">{user.children}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Occupation</div>
                  <div className="text-gray-900">{user.occupation}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Last Login</div>
                  <div className="text-gray-900">{user.lastLogin}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg col-span-2">
                  <div className="text-sm text-gray-600 mb-1">Children Names</div>
                  <div className="text-gray-900">{user.childrenNames?.join(' • ')}</div>
                </div>
              </>
            )}
          </div>

          {/* Performance Stats for Students */}
          {type === 'students' && (
            <div className="mb-8">
              <h3 className="text-gray-900 mb-4">Academic Performance</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900 mb-1">8</div>
                  <div className="text-sm text-gray-600">Active Courses</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900 mb-1">12</div>
                  <div className="text-sm text-gray-600">Achievements</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900 mb-1">+5%</div>
                  <div className="text-sm text-gray-600">This Month</div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
            <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Send Message
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}