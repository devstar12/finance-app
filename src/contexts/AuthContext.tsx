import { createContext, useContext, useState, type PropsWithChildren } from 'react';
import { type IUserProfile } from '../types/user';
import { register as registerApi, login as loginApi } from '../apis/userApi';

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
  const [token, setToken] = useState<string | null>(null);

  const handleRegister = async (fullName: string, email: string, password: string) => {
    const response = await registerApi({ fullName, email, password });
    setUser(response.user);
    setToken(response.token);
  };

  const handleLogin = async (email: string, password: string) => {
    const response = await loginApi({ email, password });
    setUser(response.user);
    setToken(response.token);
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
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