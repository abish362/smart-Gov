import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('smartgov_user', JSON.stringify(userData));
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('smartgov_user');
  };

  // Check if user is already logged in from localStorage
  const checkAuth = () => {
    const savedUser = localStorage.getItem('smartgov_user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setCurrentUser(user);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <UserContext.Provider value={{
      currentUser,
      isAuthenticated,
      login,
      logout,
      checkAuth
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);