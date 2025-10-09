
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route "/" shows Login */}
        <Route path="/" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
        {/* Home page uses Layout */}
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

