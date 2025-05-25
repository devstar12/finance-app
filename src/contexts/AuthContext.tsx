import { createContext, useContext, useState, type PropsWithChildren } from 'react';
import { type IUserProfile } from '../types/user';

interface IAuthContext {
  user: IUserProfile | null;
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
};

const defaultAuthContext: IAuthContext = {
  user: null,
  onLogin: (email, password) => console.warn('onLogin function not implemented', {password, email}),
  onLogout: () => console.warn('onLogout function not implemented'),
};

const AuthContext = createContext(defaultAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUserProfile | null>(null);

  const handleLogin = (email: string, password: string) => {
    console.log(email, password);
    setUser(null);
  }

  const handleLogout = () => {
    setUser(null);
  }

  const value = {
    user,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;