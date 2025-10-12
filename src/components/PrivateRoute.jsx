import { Navigate } from "react-router-dom";
//to get token form auth slcice in the store
import { useSelector } from "react-redux";


function PrivateRoute({ children }) {
  // Example check — replace this with your real auth logic
  const isAuthenticated = useSelector((state) => state.auth.token);

  // If not logged in → redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise → allow access
  return children;
}

export default PrivateRoute;
