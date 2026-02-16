import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Login from './components/Login';

import Contact from './components/Contact';
import Dashboard from './components/Dashboard';

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
      <Routes>
        <Route path="/login" element={
          <>
            <Login onLogin={handleLogin} />
          </>
        } />
        
        <Route path="/*" element={
          <>
            <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={
                isAuthenticated ? (
                  <Dashboard />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              } />
            </Routes>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;