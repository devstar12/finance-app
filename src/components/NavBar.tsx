import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, onLogout } = useAuth();

  return (
    <nav className="fixed top-0 right-0 left-0 bg-white border-b shadow p-4 flex justify-between items-center">
      <div className="space-x-4">
        <Link to="/" className="text-blue-600 font-semibold">Home</Link>
        {user && (
          <Link to="/dashboard" className="text-blue-600 font-semibold">Dashboard</Link>
        )}
      </div>
      <div>
        {user ? (
          <button
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;