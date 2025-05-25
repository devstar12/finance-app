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

export const register = async (data: RegisterPayload): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/api/users/register', data);
  return response.data;
};

export const login = async (data: LoginPayload): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/api/users/login', data);
  return response.data;
};

export const getMe = async (): Promise<IUserProfile> => {
  const response = await api.get<IUserProfile>('/api/users/getMe');
  return response.data;
};
