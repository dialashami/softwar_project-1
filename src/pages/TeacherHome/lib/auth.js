// Authentication and user management

const AUTH_KEY = 'ruwwad_auth_user';
const USERS_KEY = 'ruwwad_users';

// Helper functions
function loadFromStorage(key, defaultValue) {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function saveToStorage(key, value) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

// Default demo user
const demoUser = {
  id: 1,
  name: 'Sarah Johnson',
  email: 'sarah.johnson@ruwwad.edu',
  role: 'teacher',
  subject: 'Mathematics',
  phone: '+966 50 123 4567',
  bio: 'Passionate mathematics teacher with 8 years of experience in secondary education.',
  createdAt: new Date().toISOString(),
};

class AuthManager {
  constructor() {
    this.listeners = new Set();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(listener => listener());
  }

  // Get all registered users
  getUsers() {
    return loadFromStorage(USERS_KEY, [demoUser]);
  }

  // Save users
  saveUsers(users) {
    saveToStorage(USERS_KEY, users);
  }

  // Get current authenticated user
  getCurrentUser() {
    return loadFromStorage(AUTH_KEY, null);
  }

  // Check if user is authenticated
  isAuthenticated() {
    return this.getCurrentUser() !== null;
  }

  // Login
  login(email, password) {
    const users = this.getUsers();
    
    // Find user by email
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (!user) {
      return { success: false, error: 'Invalid email or password' };
    }

    // In a real app, you would verify the password hash
    // For demo purposes, we'll accept any password for existing users
    
    // Save authenticated user
    saveToStorage(AUTH_KEY, user);
    this.notify();
    
    return { success: true, user };
  }

  // Register new user
  register(data) {
    const users = this.getUsers();
    
    // Check if email already exists
    if (users.some(u => u.email.toLowerCase() === data.email.toLowerCase())) {
      return { success: false, error: 'Email already registered' };
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      role: data.role,
      subject: data.subject,
      createdAt: new Date().toISOString(),
    };

    // Save to users list
    users.push(newUser);
    this.saveUsers(users);

    // Auto-login the new user
    saveToStorage(AUTH_KEY, newUser);
    this.notify();

    return { success: true, user: newUser };
  }

  // Logout
  logout() {
    localStorage.removeItem(AUTH_KEY);
    this.notify();
  }

  // Update user profile
  updateProfile(updates) {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return { success: false, error: 'Not authenticated' };
    }

    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex === -1) {
      return { success: false, error: 'User not found' };
    }

    // Update user
    const updatedUser = { ...users[userIndex], ...updates };
    users[userIndex] = updatedUser;
    
    // Save updates
    this.saveUsers(users);
    saveToStorage(AUTH_KEY, updatedUser);
    this.notify();

    return { success: true };
  }

  // Change password (demo - in real app would verify old password)
  changePassword(oldPassword, newPassword) {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return { success: false, error: 'Not authenticated' };
    }

    // In a real app, you would:
    // 1. Verify the old password
    // 2. Hash the new password
    // 3. Update the password in the database

    return { success: true };
  }

  // Delete account
  deleteAccount() {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return { success: false, error: 'Not authenticated' };
    }

    const users = this.getUsers();
    const filteredUsers = users.filter(u => u.id !== currentUser.id);
    
    this.saveUsers(filteredUsers);
    this.logout();

    return { success: true };
  }
}

export const authManager = new AuthManager();
