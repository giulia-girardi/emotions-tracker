import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import UserSignupPage from "./pages/UserSignupPage";
import UserLoginPage from "./pages/UserLoginPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import IsPrivate from "./components/IsPrivate";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<UserSignupPage />} />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/dashboard" element={<IsPrivate><Dashboard /></IsPrivate>} />
      </Routes>
      <div className="w-full h-10 bottom-0 bg-light-gray">
        <Footer />
      </div>
    </div>
  );
}

export default App;
