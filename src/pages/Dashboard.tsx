import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, onLogout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="mb-6">Welcome, <strong>{user?.username}</strong>!</p>
      <button
        onClick={onLogout}
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;