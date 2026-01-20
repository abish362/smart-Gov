import { Link } from 'react-router-dom';

function Header({ isAuthenticated, onLogout }) {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="text-2xl font-bold">
            Smart Gov
          </Link>
        </div>
        
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          
          
        </nav>
      </div>
    </header>
  );
}

export default Header;