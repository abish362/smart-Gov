import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Papa from 'papaparse';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Always available users (fallback)
  const hardcodedUsers = [
    { email: 'admin@gmail.com', password: '123456', name: 'Admin User' },
    { email: 'john@smartgov.com', password: 'password123', name: 'John Doe' },
    { email: 'sarah@smartgov.com', password: 'smith456', name: 'Sarah Smith' },
    { email: 'test@smartgov.com', password: 'test123', name: 'Test User' },
    { email: 'atonyabi@gmail.com', password: 'password', name: 'Anthony User' },
    { email: 'user1@example.com', password: 'user123', name: 'User One' },
    { email: 'user2@example.com', password: 'user456', name: 'User Two' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      console.log("Login attempt with:", email);
      
      // Always check hardcoded users first
      const user = hardcodedUsers.find(u => 
        u.email.toLowerCase() === email.toLowerCase() && 
        u.password === password
      );

      if (user) {
        console.log("Login successful for:", user.name);
        onLogin(true);
        navigate('/dashboard');
        return;
      }

      // If not found in hardcoded, try CSV
      console.log("Not in hardcoded, trying CSV...");
      const csvUsers = await loadCSVUsers();
      const csvUser = csvUsers.find(u => 
        u.email.toLowerCase() === email.toLowerCase() && 
        u.password === password
      );

      if (csvUser) {
        console.log("Login successful from CSV:", csvUser.name);
        onLogin(true);
        navigate('/dashboard');
        return;
      }

      // If we get here, credentials are invalid
      setError("Invalid email or password. Try: admin@gmail.com / 123456");
      
    } catch (err) {
      console.error("Login error:", err);
      setError("Login error. Please try again or use demo credentials.");
    } finally {
      setLoading(false);
    }
  };

  const loadCSVUsers = async () => {
    try {
      // Try multiple paths for CSV
      const paths = [
        '/data/users.csv',
        '/users.csv',
        './data/users.csv',
        './users.csv'
      ];

      for (const path of paths) {
        try {
          const response = await fetch(path);
          if (response.ok) {
            const csvText = await response.text();
            return new Promise((resolve) => {
              Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                  console.log("CSV loaded successfully:", result.data.length, "users");
                  resolve(result.data);
                },
                error: () => {
                  console.log("CSV parse error for path:", path);
                  resolve(hardcodedUsers);
                }
              });
            });
          }
        } catch (e) {
          console.log("Failed to load CSV from:", path, e);
        }
      }
      
      // If all paths fail, return hardcoded users
      return hardcodedUsers;
    } catch (error) {
      console.error("CSV loading error:", error);
      return hardcodedUsers;
    }
  };

  // Quick fill buttons
  const quickLogin = (userEmail, userPassword) => {
    setEmail(userEmail);
    setPassword(userPassword);
    // Auto-submit after 100ms
    setTimeout(() => {
      document.querySelector('button[type="submit"]').click();
    }, 100);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Smart Gov</h1>
          <p className="text-gray-600 mt-2">Government Services Portal</p>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-red-500">⚠</span>
              </div>
              <div className="ml-3">
                <p className="text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-lg transition-all duration-200 ${loading 
              ? 'bg-blue-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:scale-95'
            } text-white`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </span>
            ) : 'Login to Dashboard'}
          </button>
        </form>

        {/* Quick Login Buttons */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-3 text-center">Quick Login (Click any):</h3>
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => quickLogin('admin@gmail.com', '123456')}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-lg font-medium text-sm shadow transition"
            >
              👑 Admin User (admin@gmail.com)
            </button>
            
            <button
              type="button"
              onClick={() => quickLogin('john@smartgov.com', 'password123')}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 rounded-lg font-medium text-sm shadow transition"
            >
              👤 John Doe (john@smartgov.com)
            </button>
            
            <button
              type="button"
              onClick={() => quickLogin('atonyabi@gmail.com', 'password')}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-3 rounded-lg font-medium text-sm shadow transition"
            >
              🧑‍💼 Anthony (atonyabi@gmail.com)
            </button>
            
            <button
              type="button"
              onClick={() => quickLogin('test@smartgov.com', 'test123')}
              className="w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white p-3 rounded-lg font-medium text-sm shadow transition"
            >
              🧪 Test User (test@smartgov.com)
            </button>
          </div>
        </div>

        {/* Information */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="text-blue-500">ℹ</span>
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-blue-800">Testing Mode</h4>
              <p className="text-sm text-blue-600 mt-1">
                Using {hardcodedUsers.length} pre-configured users. 
                CSV integration is available but optional.
              </p>
            </div>
          </div>
        </div>

        {/* Debug info (remove in production) */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => console.log('Current state:', { email, password, loading, error })}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            Debug Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;