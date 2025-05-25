import type { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;