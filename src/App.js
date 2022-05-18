
import './App.css';
  import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  import { Route, Routes } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Home from './Pages/Home/Home';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<RequireAuth>
          <Home />
        </RequireAuth>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
