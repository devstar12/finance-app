// src/api/userApi.ts
import api from './index';
import type { IUserProfile } from '../types/user';

export const getMe = async (): Promise<IUserProfile> => {
  const response = await api.get<IUserProfile>('/api/users/getMe');
  return response.data;
};
