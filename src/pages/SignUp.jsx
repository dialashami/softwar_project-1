/* 
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Login.jsx'

import '../CSS/Signup.css'

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    studentType: '',
    schoolGrade: '',
    universityMajor: '',
    trainingField: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }

    // Student validation
    if (formData.role === 'student' && !formData.studentType) {
      newErrors.studentType = 'Please select student type';
    }

    if (formData.role === 'student' && formData.studentType === 'school' && !formData.schoolGrade) {
      newErrors.schoolGrade = 'Please select school grade';
    }

    if (formData.role === 'student' && formData.studentType === 'university' && !formData.universityMajor) {
      newErrors.universityMajor = 'Please select university major';
    }

    // Trainee validation
    if (formData.role === 'trainee' && !formData.trainingField) {
      newErrors.trainingField = 'Please select training field';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Signup data:', formData);
        alert('Account created successfully! Please check your email for verification.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: '',
          studentType: '',
          schoolGrade: '',
          universityMajor: '',
          trainingField: ''

        });
      } catch (error) {
        console.error('Signup error:', error);
        setErrors({ submit: 'Failed to create account. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const renderRoleSpecificFields = () => {
    switch (formData.role) {
      case 'student':
        return (
          <>
            <div className="form-group">
              <label htmlFor="studentType">Student Type *</label>
              <select
                id="studentType"
                name="studentType"
                value={formData.studentType}
                onChange={handleChange}
                className={errors.studentType ? 'error' : ''}
              >
                <option value="">Select Student Type</option>
                <option value="school">School Student</option>
                <option value="university">University Student</option>
              </select>
              {errors.studentType && <span className="field-error">{errors.studentType}</span>}
            </div>

            {formData.studentType === 'school' && (
              <div className="form-group">
                <label htmlFor="schoolGrade">School Grade *</label>
                <select
                  id="schoolGrade"
                  name="schoolGrade"
                  value={formData.schoolGrade}
                  onChange={handleChange}
                  className={errors.schoolGrade ? 'error' : ''}
                >
                  <option value="">Select Grade</option>
                  <option value="grade1">Grade 1</option>
                  <option value="grade2">Grade 2</option>
                  <option value="grade3">Grade 3</option>
                  <option value="grade4">Grade 4</option>
                  <option value="grade5">Grade 5</option>
                  <option value="grade6">Grade 6</option>
                  <option value="grade7">Grade 7</option>
                  <option value="grade8">Grade 8</option>
                  <option value="grade9">Grade 9</option>
                  <option value="grade10">Grade 10</option>
                  <option value="grade11">Grade 11</option>
                  <option value="grade12">Grade 12</option>
                </select>
                {errors.schoolGrade && <span className="field-error">{errors.schoolGrade}</span>}
              </div>
            )}

            {formData.studentType === 'university' && (
              <div className="form-group">
                <label htmlFor="universityMajor">University Major *</label>
                <select
                  id="universityMajor"
                  name="universityMajor"
                  value={formData.universityMajor}
                  onChange={handleChange}
                  className={errors.universityMajor ? 'error' : ''}
                >
                  <option value="">Select Major</option>
                  <option value="engineering">Engineering</option>
                  <option value="medicine">Medicine</option>
                  <option value="law">Law</option>
                  <option value="business">Business Administration</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="arts">Arts</option>
                  <option value="science">Science</option>
                  <option value="education">Education</option>
                </select>
                {errors.universityMajor && <span className="field-error">{errors.universityMajor}</span>}
              </div>
            )}
          </>
        );

      case 'trainee':
        return (
          <div className="form-group">
            <label htmlFor="trainingField">Training Field *</label>
            <select
              id="trainingField"
              name="trainingField"
              value={formData.trainingField}
              onChange={handleChange}
              className={errors.trainingField ? 'error' : ''}
            >
              <option value="">Select Training Field</option>
              <option value="engineering">Engineering</option>
              <option value="legal">Legal</option>
              <option value="languages">Languages</option>
              <option value="it">Information Technology</option>
              <option value="business">Business</option>
              <option value="medical">Medical</option>
              <option value="education">Education</option>
            </select>
            {errors.trainingField && <span className="field-error">{errors.trainingField}</span>}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">
        
          <h2>Create your Account</h2>
          <p className="signup-subtitle">Join our platform</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          {errors.submit && (
            <div className="error-text">{errors.submit}</div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'error' : ''}
                placeholder="First name"
              />
              {errors.firstName && <span className="field-error">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? 'error' : ''}
                placeholder="Last name"
              />
              {errors.lastName && <span className="field-error">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="email@example.com"
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="role">Role *</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={errors.role ? 'error' : ''}
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
              <option value="trainee">Trainee</option>
            </select>
            {errors.role && <span className="field-error">{errors.role}</span>}
          </div>

          {renderRoleSpecificFields()}

          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              placeholder="Create password"
            />
            {errors.password && <span className="field-error">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'error' : ''}
              placeholder="Confirm password"
            />
            {errors.confirmPassword && <span className="field-error">{errors.confirmPassword}</span>}
          </div>

          <button 
            type="submit" 
            className="signup-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                Creating Account...
              </>
            ) : (
              'Create your Account'
            )}
          </button>
        </form>

        <div className="signup-footer">
          <p>
            Already have an account? <a href="/" className="login-link">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
*****************************************************************************************************
*/
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Login.jsx'
import '../CSS/Signup.css'

const SignUp = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    studentType: '',
    schoolGrade: '',
    universityMajor: '',
    trainingField: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // قراءة الـ role من query parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const roleFromUrl = searchParams.get('role');
    
    if (roleFromUrl) {
      setFormData(prev => ({
        ...prev,
        role: roleFromUrl
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }

    // Student validation
    if (formData.role === 'student' && !formData.studentType) {
      newErrors.studentType = 'Please select student type';
    }

    if (formData.role === 'student' && formData.studentType === 'school' && !formData.schoolGrade) {
      newErrors.schoolGrade = 'Please select school grade';
    }

    if (formData.role === 'student' && formData.studentType === 'university' && !formData.universityMajor) {
      newErrors.universityMajor = 'Please select university major';
    }

    // Trainee validation
    if (formData.role === 'trainee' && !formData.trainingField) {
      newErrors.trainingField = 'Please select training field';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Signup data:', formData);
        alert('Account created successfully! Please check your email for verification.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: '',
          studentType: '',
          schoolGrade: '',
          universityMajor: '',
          trainingField: ''
        });
      } catch (error) {
        console.error('Signup error:', error);
        setErrors({ submit: 'Failed to create account. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const renderRoleSpecificFields = () => {
    switch (formData.role) {
      case 'student':
        return (
          <>
            <div className="form-group">
              <label htmlFor="studentType">Student Type *</label>
              <select
                id="studentType"
                name="studentType"
                value={formData.studentType}
                onChange={handleChange}
                className={errors.studentType ? 'error' : ''}
              >
                <option value="">Select Student Type</option>
                <option value="school">School Student</option>
                <option value="university">University Student</option>
              </select>
              {errors.studentType && <span className="field-error">{errors.studentType}</span>}
            </div>

            {formData.studentType === 'school' && (
              <div className="form-group">
                <label htmlFor="schoolGrade">School Grade *</label>
                <select
                  id="schoolGrade"
                  name="schoolGrade"
                  value={formData.schoolGrade}
                  onChange={handleChange}
                  className={errors.schoolGrade ? 'error' : ''}
                >
                  <option value="">Select Grade</option>
                  <option value="grade1">Grade 1</option>
                  <option value="grade2">Grade 2</option>
                  <option value="grade3">Grade 3</option>
                  <option value="grade4">Grade 4</option>
                  <option value="grade5">Grade 5</option>
                  <option value="grade6">Grade 6</option>
                  <option value="grade7">Grade 7</option>
                  <option value="grade8">Grade 8</option>
                  <option value="grade9">Grade 9</option>
                  <option value="grade10">Grade 10</option>
                  <option value="grade11">Grade 11</option>
                  <option value="grade12">Grade 12</option>
                </select>
                {errors.schoolGrade && <span className="field-error">{errors.schoolGrade}</span>}
              </div>
            )}

            {formData.studentType === 'university' && (
              <div className="form-group">
                <label htmlFor="universityMajor">University Major *</label>
                <select
                  id="universityMajor"
                  name="universityMajor"
                  value={formData.universityMajor}
                  onChange={handleChange}
                  className={errors.universityMajor ? 'error' : ''}
                >
                  <option value="">Select Major</option>
                  <option value="engineering">Engineering</option>
                  <option value="medicine">Medicine</option>
                  <option value="law">Law</option>
                  <option value="business">Business Administration</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="arts">Arts</option>
                  <option value="science">Science</option>
                  <option value="education">Education</option>
                </select>
                {errors.universityMajor && <span className="field-error">{errors.universityMajor}</span>}
              </div>
            )}
          </>
        );

      case 'trainee':
        return (
          <div className="form-group">
            <label htmlFor="trainingField">Training Field *</label>
            <select
              id="trainingField"
              name="trainingField"
              value={formData.trainingField}
              onChange={handleChange}
              className={errors.trainingField ? 'error' : ''}
            >
              <option value="">Select Training Field</option>
              <option value="engineering">Engineering</option>
              <option value="legal">Legal</option>
              <option value="languages">Languages</option>
              <option value="it">Information Technology</option>
              <option value="business">Business</option>
              <option value="medical">Medical</option>
              <option value="education">Education</option>
            </select>
            {errors.trainingField && <span className="field-error">{errors.trainingField}</span>}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">
          <h2>Create your Account</h2>
          <p className="signup-subtitle">Join our platform</p>
          {formData.role && (
            <div className="selected-role-notice">
              <p>You're signing up as a <strong>{formData.role}</strong></p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          {errors.submit && (
            <div className="error-text">{errors.submit}</div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'error' : ''}
                placeholder="First name"
              />
              {errors.firstName && <span className="field-error">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? 'error' : ''}
                placeholder="Last name"
              />
              {errors.lastName && <span className="field-error">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="email@example.com"
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="role">Role *</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={errors.role ? 'error' : ''}
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
              <option value="trainee">Trainee</option>
            </select>
            {errors.role && <span className="field-error">{errors.role}</span>}
          </div>

          {renderRoleSpecificFields()}

          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              placeholder="Create password"
            />
            {errors.password && <span className="field-error">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'error' : ''}
              placeholder="Confirm password"
            />
            {errors.confirmPassword && <span className="field-error">{errors.confirmPassword}</span>}
          </div>

          <button 
            type="submit" 
            className="signup-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                Creating Account...
              </>
            ) : (
              'Create your Account'
            )}
          </button>
        </form>

        <div className="signup-footer">
          <p>
            Already have an account? <a href="/" className="login-link">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
