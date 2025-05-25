// src/api/userApi.ts
import api from './index';
import type { IUserProfile } from '../types/user';

interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: IUserProfile;
}

// Register API call
export const register = async (data: RegisterPayload): Promise<AuthResponse> => {
  try {
    const response = await api.post<AuthResponse>('/api/users/register', data);
    return response.data;
  } catch (error) {
    console.error('Register API error:', error);
    throw error;
  }
};

// Login API call
export const login = async (data: LoginPayload): Promise<AuthResponse> => {
  try {
    const response = await api.post<AuthResponse>('/api/users/login', data);
    return response.data;
  } catch (error) {
    console.error('Login API error:', error);
    throw error;
  }
};

// Get current user profile
export const getMe = async (): Promise<IUserProfile> => {
  try {
    const response = await api.get<IUserProfile>('/api/users/me');
    return response.data;
  } catch (error) {
    console.error('GetMe API error:', error);
    throw error;
  }
};
