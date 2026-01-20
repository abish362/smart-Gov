import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;