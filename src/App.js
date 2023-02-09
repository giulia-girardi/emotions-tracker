import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import UserSignupPage from './pages/UserSignupPage';
import UserLoginPage from './pages/UserLoginPage';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<UserSignupPage/>} />
        <Route path="/login" element={<UserLoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
