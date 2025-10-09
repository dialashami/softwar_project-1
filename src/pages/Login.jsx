// pages/Login.jsx
import '../CSS/login.css';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/authSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isLoggedIn } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  // Redirect to home after login
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>

        {error && <p className="error-text">{error}</p>}

        <button className="signup-btn"  onClick={()=>{
            navigate("/signup");
        }}>Sign Up</button>
      </div>
    </div>
  );
}
