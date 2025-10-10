// pages/Welcome.jsx
import '../CSS/welcome.css';
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="logo-section">
          <h1 className="logo">Ruwwad</h1>
          <p className="tagline">Welcome to Ruwwad platform enjoy your learning</p>
        </div>

        <div className="auth-section">
          <h2 className="auth-title">Sign in</h2>
          
          <div className="auth-buttons">
            <button 
              className="auth-btn primary-btn"
              onClick={() => navigate("/signup")}
            >
              Create Account
            </button>
            
            <button 
              className="auth-btn secondary-btn"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}