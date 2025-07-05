import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { User } from '../models/User';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const MOCK_USER = {
  id: '1001',
  name: 'Gabriel Barboza',
  email: 'a',
  password: 'a',
  //email: 'gbarb@mymovienhos.com',
  //password: '123456',
  avatarUrl: 'fakePath',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 800));
    if (email === MOCK_USER.email && password === '123456') {
      setUser(MOCK_USER);
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 800));
    setUser({ ...MOCK_USER, name, email, password });
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
