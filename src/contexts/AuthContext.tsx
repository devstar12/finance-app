import { createContext, useContext, useState, useEffect, type PropsWithChildren } from 'react';
import { type IUserProfile } from '../types/user';
import { register as registerApi, login as loginApi, getMe } from '../apis/userApi';

interface IAuthContext {
  user: IUserProfile | null;
  token: string | null;
  onRegister: (fullName: string, email: string, password: string) => Promise<void>;
  onLogin: (email: string, password: string) => Promise<void>;
  onLogout: () => void;
}

const defaultAuthContext: IAuthContext = {
  user: null,
  token: null,
  onRegister: async () => console.warn('onRegister function not implemented'),
  onLogin: async () => console.warn('onLogin function not implemented'),
  onLogout: () => console.warn('onLogout function not implemented'),
};

const AuthContext = createContext(defaultAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUserProfile | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));

  // Save token to localStorage whenever it changes
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  // Fetch user profile if token exists
  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const userProfile = await getMe();
          setUser(userProfile);
        } catch (error) {
          console.error('Failed to fetch user profile:', error);
          setToken(null);
          setUser(null);
        }
      }
    };
    fetchUser();
  }, [token]);

  const handleRegister = async (fullName: string, email: string, password: string) => {
    try {
      const response = await registerApi({ fullName, email, password });
      setUser(response.user);
      setToken(response.token);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await loginApi({ email, password });
      setUser(response.user);
      setToken(response.token);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  const value = {
    user,
    token,
    onRegister: handleRegister,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;