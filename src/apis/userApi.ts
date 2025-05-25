// src/api/userApi.ts
import api from './index';
import type { IUserProfile } from '../types/user';

export const register = async (): Promise<IUserProfile> => {
  const response = await api.post<IUserProfile>('/api/users/register');
  return response.data;
};

export const getMe = async (): Promise<IUserProfile> => {
  const response = await api.get<IUserProfile>('/api/users/getMe');
  return response.data;
};
