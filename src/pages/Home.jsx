// pages/Home.jsx
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import '../CSS/Home.css';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // redirect to login after logout
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome!</h1>
        <p>Your User ID: <span className="userid">{userId}</span></p>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
