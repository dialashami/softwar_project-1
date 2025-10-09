import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>Layout Header</h1>
      <Outlet /> {/* This renders the nested routes like Login and Home */}
    </div>
  );
}

export default Layout;