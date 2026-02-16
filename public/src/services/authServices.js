import Papa from 'papaparse';

// Hardcoded user data (fallback if CSV fails)
const fallbackUsers = [
  { email: 'admin@smartgov.com', password: '123456', name: 'Admin User', userId: 'SG-ADMIN-001', role: 'admin' },
  { email: 'john.doe@smartgov.com', password: 'password123', name: 'John Doe', userId: 'SG-USER-002', role: 'user' },
  { email: 'test@smartgov.com', password: 'test123', name: 'Test User', userId: 'SG-USER-005', role: 'user' }
];

export const authenticateUser = async (email, password) => {
  try {
    // Try to load from CSV file
    const response = await fetch('/data/users.csv');
    if (!response.ok) {
      throw new Error('CSV file not found, using fallback data');
    }
    
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const users = results.data;
          const user = users.find(u => 
            u.email === email && u.password === password
          );
          
          if (user) {
            resolve(user);
          } else {
            // Try fallback data
            const fallbackUser = fallbackUsers.find(u => 
              u.email === email && u.password === password
            );
            if (fallbackUser) {
              resolve(fallbackUser);
            } else {
              reject(new Error('Invalid credentials'));
            }
          }
        },
        error: (error) => {
          console.error('CSV parsing error:', error);
          // Use fallback data
          const fallbackUser = fallbackUsers.find(u => 
            u.email === email && u.password === password
          );
          if (fallbackUser) {
            resolve(fallbackUser);
          } else {
            reject(new Error('Invalid credentials'));
          }
        }
      });
    });
  } catch (error) {
    console.error('Error loading CSV:', error);
    // Use fallback data
    const fallbackUser = fallbackUsers.find(u => 
      u.email === email && u.password === password
    );
    if (fallbackUser) {
      return fallbackUser;
    } else {
      throw new Error('Invalid credentials');
    }
  }
};

export const getUserByEmail = async (email) => {
  try {
    const response = await fetch('/data/users.csv');
    if (!response.ok) {
      throw new Error('CSV file not found');
    }
    
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const user = results.data.find(u => u.email === email);
          if (user) {
            resolve(user);
          } else {
            reject(new Error('User not found'));
          }
        },
        error: reject
      });
    });
  } catch (error) {
    console.error('Error loading CSV:', error);
    return null;
  }
};