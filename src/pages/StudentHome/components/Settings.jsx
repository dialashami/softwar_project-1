 import React, { useRef, useState, useEffect } from "react";
import {
  User,
  Bell,
  Lock,
  // Globe,
  Palette,
  Mail,
  Shield,
  Moon,
  Sun,
  Image as ImageIcon,
  Trash2,
  X,
} from "lucide-react";
 

export default function Settings() {
  // ===========================
  // STATE
  // ===========================
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [assignmentReminders, setAssignmentReminders] = useState(true);
  const [gradeNotifications, setGradeNotifications] = useState(true);

  // profile info
  const [firstName, setFirstName] = useState("Amira");
  const [lastName, setLastName] = useState("Hassan");
  const [email, setEmail] = useState("amira.hassan@student.ruwwad.com");
  const [gradeLevel, setGradeLevel] = useState("10");
  const [bio, setBio] = useState("Passionate about science and mathematics");

  // avatar state
  const [avatarUrl, setAvatarUrl] = useState(
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Amira"
  );
  const fileInputRef = useRef(null);

  // save feedback
  const [saveSuccess, setSaveSuccess] = useState(false);

  // modal state
  const [modalType, setModalType] = useState(null); // 'password', '2fa', 'delete'
  const [showModal, setShowModal] = useState(false);

  // password temp form (for modal)
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);

  // ===========================
  // EFFECTS
  // ===========================
  // handle dark mode body class toggle
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-active");
    } else {
      document.body.classList.remove("dark-active");
    }
  }, [darkMode]);

  // auto-clear save success after a bit
  useEffect(() => {
    if (saveSuccess) {
      const t = setTimeout(() => setSaveSuccess(false), 2500);
      return () => clearTimeout(t);
    }
  }, [saveSuccess]);

  // ===========================
  // HANDLERS
  // ===========================
  const handleAvatarClick = () => {
    // simulate clicking hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleAvatarFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // preview locally
    const url = URL.createObjectURL(file);
    setAvatarUrl(url);
  };

  const handleRemoveAvatar = () => {
    // reset to fallback (remove img)
    setAvatarUrl(null);
  };

  const handleSaveChanges = () => {
    // here you'd send to backend
    setSaveSuccess(true);
  };

  const handleOpenModal = (type) => {
    setModalType(type); // 'password' | '2fa' | 'delete'
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalType(null);
    setCurrentPass("");
    setNewPass("");
  };

  const handleConfirmAction = () => {
    if (modalType === "password") {
      // change password logic
      console.log("Changing password:", { currentPass, newPass });
    } else if (modalType === "2fa") {
      // toggle 2fa
      setTwoFAEnabled((prev) => !prev);
    } else if (modalType === "delete") {
      // delete account logic
      console.log("Account deleted.");
    }
    handleCloseModal();
  };

  return (
    <div className="settings-page">
      {/* Header */}
      <div className="settings-header">
        <h1 className="settings-title">
          Settings
        </h1>
        <p className="settings-subtitle">
          Manage your account and preferences
        </p>
      </div>

      <div className="settings-grid">
        {/* LEFT NAV / SIDEBAR */}
        <div className="settings-nav-wrapper">
          <div className="settings-card settings-sticky-card">
            <nav className="settings-nav-list">
              {[
                { icon: User, label: "Profile", id: "profile" },
                { icon: Bell, label: "Notifications", id: "notifications" },
                { icon: Lock, label: "Privacy", id: "privacy" },
                { icon: Palette, label: "Appearance", id: "appearance" },
               
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    className="settings-nav-btn"
                    // ممكن تحوّليها مستقبلاً للـscroll to section أو routing
                    onClick={() => {
                      // placeholder scroll-to-behavior
                      const el = document.querySelector(
                        `[data-section="${item.id}"]`
                      );
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                  >
                    <Icon className="settings-nav-icon" />
                    <span className="settings-nav-label">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="settings-main-col">
          {/* PROFILE SETTINGS */}
          <div className="settings-card" data-section="profile">
            <div className="settings-card-head">
              <User className="settings-card-head-icon" />
              <h2 className="settings-card-head-title">Profile Information</h2>
            </div>

            {/* Profile Picture Row */}
            <div className="settings-avatar-row">
              <div className="settings-avatar-circle">
                {avatarUrl ? (
                  <img
                    className="settings-avatar-img"
                    src={avatarUrl}
                    alt="avatar"
                  />
                ) : (
                  <div className="settings-avatar-fallback">AM</div>
                )}
              </div>

              <div>
                <h3 className="settings-avatar-name">Amira Hassan</h3>
                <div className="settings-avatar-actions">
                  <button
                    className="btn-gradient-primary btn-sm"
                    onClick={handleAvatarClick}
                  >
                    <ImageIcon size={16} />
                    <span>Change Photo</span>
                  </button>

                  <button
                    className="btn-outline btn-sm"
                    onClick={handleRemoveAvatar}
                  >
                    <Trash2 size={16} />
                    <span>Remove</span>
                  </button>

                  {/* hidden file input */}
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleAvatarFileChange}
                  />
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="settings-section-fields">
              <div className="settings-two-col">
                <div className="settings-field">
                  <label className="settings-label" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="settings-input"
                  />
                </div>

                <div className="settings-field">
                  <label className="settings-label" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="settings-input"
                  />
                </div>
              </div>

              <div className="settings-field">
                <label className="settings-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="settings-input"
                />
              </div>

              <div className="settings-field">
                <label className="settings-label" htmlFor="grade">
                  Grade Level
                </label>
                <div className="select-wrapper">
                  <select
                    id="grade"
                    value={gradeLevel}
                    onChange={(e) => setGradeLevel(e.target.value)}
                    className="settings-select"
                  >
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </select>
                </div>
              </div>

              <div className="settings-field">
                <label className="settings-label" htmlFor="bio">
                  Bio
                </label>
                <input
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="settings-input"
                />
              </div>

              <div className="settings-save-row">
                <button
                  className="btn-gradient-primary btn-lg w-full-mobile"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>

                {saveSuccess && (
                  <div className="save-toast">
                    <span className="save-toast-dot" />
                    <span>Saved</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* NOTIFICATION SETTINGS */}
          <div className="settings-card" data-section="notifications">
            <div className="settings-card-head">
              <Bell className="settings-card-head-icon" />
              <h2 className="settings-card-head-title">
                Notification Preferences
              </h2>
            </div>

            <div className="settings-toggles-list">
              {/* Email Notifications */}
              <div className="settings-toggle-row">
                <div className="settings-toggle-left">
                  <Mail className="settings-toggle-icon" />
                  <div>
                    <p className="settings-toggle-title">Email Notifications</p>
                    <p className="settings-toggle-desc">
                      Receive email updates about your courses
                    </p>
                  </div>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={(e) => setEmailNotifications(e.target.checked)}
                  />
                  <span className="slider" />
                </label>
              </div>

              {/* Push Notifications */}
              <div className="settings-toggle-row">
                <div className="settings-toggle-left">
                  <Bell className="settings-toggle-icon" />
                  <div>
                    <p className="settings-toggle-title">Push Notifications</p>
                    <p className="settings-toggle-desc">
                      Get push notifications on your device
                    </p>
                  </div>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={pushNotifications}
                    onChange={(e) => setPushNotifications(e.target.checked)}
                  />
                  <span className="slider" />
                </label>
              </div>

              <div className="settings-separator" />

              {/* Assignment Reminders */}
              <div className="settings-toggle-row">
                <div>
                  <p className="settings-toggle-title">Assignment Reminders</p>
                  <p className="settings-toggle-desc">
                    Get reminded about upcoming deadlines
                  </p>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={assignmentReminders}
                    onChange={(e) =>
                      setAssignmentReminders(e.target.checked)
                    }
                  />
                  <span className="slider" />
                </label>
              </div>

              {/* Grade Notifications */}
              <div className="settings-toggle-row">
                <div>
                  <p className="settings-toggle-title">Grade Notifications</p>
                  <p className="settings-toggle-desc">
                    Be notified when grades are posted
                  </p>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={gradeNotifications}
                    onChange={(e) =>
                      setGradeNotifications(e.target.checked)
                    }
                  />
                  <span className="slider" />
                </label>
              </div>
            </div>
          </div>

          {/* APPEARANCE */}
          <div className="settings-card" data-section="appearance">
            <div className="settings-card-head">
              <Palette className="settings-card-head-icon" />
              <h2 className="settings-card-head-title">Appearance</h2>
            </div>

            <div className="settings-toggles-list">
              {/* Dark Mode */}
              <div className="settings-toggle-row">
                <div className="settings-toggle-left">
                  {darkMode ? (
                    <Moon className="settings-toggle-icon" />
                  ) : (
                    <Sun className="settings-toggle-icon" />
                  )}
                  <div>
                    <p className="settings-toggle-title">Dark Mode</p>
                    <p className="settings-toggle-desc">
                      Switch to dark theme for comfortable viewing
                    </p>
                  </div>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                  />
                  <span className="slider" />
                </label>
              </div>

              
            </div>
          </div>

          {/* PRIVACY & SECURITY */}
          <div className="settings-card" data-section="privacy">
            <div className="settings-card-head">
              <Shield className="settings-card-head-icon" />
              <h2 className="settings-card-head-title">
                Privacy &amp; Security
              </h2>
            </div>

            <div className="settings-privacy-list">
              <button
                className="btn-outline w-full justify-start"
                onClick={() => handleOpenModal("password")}
              >
                <Lock className="btn-outline-icon" />
                <span>Change Password</span>
              </button>

              <button
                className="btn-outline w-full justify-start"
                onClick={() => handleOpenModal("2fa")}
              >
                <Shield className="btn-outline-icon" />
                <span>Two-Factor Authentication</span>
                {twoFAEnabled && (
                  <span className="badge-active">ON</span>
                )}
              </button>

              <button
                className="btn-outline btn-danger w-full justify-start"
                onClick={() => handleOpenModal("delete")}
              >
                <Shield className="btn-outline-icon" />
                <span>Delete Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="settings-modal-overlay" onClick={handleCloseModal}>
          <div
            className={`settings-modal-card ${
              modalType === "delete" ? "settings-modal-danger" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="settings-modal-header">
              <div className="settings-modal-header-left">
                {modalType === "password" && (
                  <>
                    <Lock className="settings-modal-icon" />
                    <div className="settings-modal-title">
                      Change Password
                    </div>
                  </>
                )}

                {modalType === "2fa" && (
                  <>
                    <Shield className="settings-modal-icon" />
                    <div className="settings-modal-title">
                      Two-Factor Authentication
                    </div>
                  </>
                )}

                {modalType === "delete" && (
                  <>
                    <Shield className="settings-modal-icon danger" />
                    <div className="settings-modal-title danger">
                      Delete Account
                    </div>
                  </>
                )}
              </div>

              <button
                className="settings-modal-close"
                onClick={handleCloseModal}
              >
                <X size={18} />
              </button>
            </div>

            <div className="settings-modal-body">
              {modalType === "password" && (
                <>
                  <div className="settings-field">
                    <label className="settings-label">
                      Current Password
                    </label>
                    <input
                      className="settings-input"
                      type="password"
                      value={currentPass}
                      onChange={(e) => setCurrentPass(e.target.value)}
                    />
                  </div>

                  <div className="settings-field">
                    <label className="settings-label">
                      New Password
                    </label>
                    <input
                      className="settings-input"
                      type="password"
                      value={newPass}
                      onChange={(e) => setNewPass(e.target.value)}
                    />
                  </div>
                </>
              )}

              {modalType === "2fa" && (
                <>
                  <p className="settings-modal-text">
                    Two-factor authentication adds an extra layer of security
                    to your account. You will be asked for a verification code
                    when you sign in.
                  </p>

                  <div className="settings-toggle-row modal-inline-toggle">
                    <div className="settings-toggle-left">
                      <Shield className="settings-toggle-icon" />
                      <div>
                        <p className="settings-toggle-title">
                          Enable 2FA
                        </p>
                        <p className="settings-toggle-desc">
                          Require a code on sign in
                        </p>
                      </div>
                    </div>

                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={twoFAEnabled}
                        onChange={() =>
                          setTwoFAEnabled((prev) => !prev)
                        }
                      />
                      <span className="slider" />
                    </label>
                  </div>
                </>
              )}

              {modalType === "delete" && (
                <>
                  <p className="settings-modal-text danger">
                    This will permanently delete your account and all
                    associated data. This action cannot be undone.
                  </p>
                </>
              )}
            </div>

            <div className="settings-modal-footer">
              <button
                className="btn-outline modal-cancel-btn"
                onClick={handleCloseModal}
              >
                Cancel
              </button>

              <button
                className={`btn-gradient-primary modal-confirm-btn ${
                  modalType === "delete" ? "modal-confirm-danger" : ""
                }`}
                onClick={handleConfirmAction}
              >
                {modalType === "delete"
                  ? "Yes, Delete"
                  : modalType === "password"
                  ? "Save Password"
                  : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
