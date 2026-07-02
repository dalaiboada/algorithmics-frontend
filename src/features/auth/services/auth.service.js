import { apiClient } from '@/api/api.client.js';

export const authService = {
  async login(email, password) {
    const response = await apiClient('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    return response;
  },

  /* async register(email, password, name) {
    const response = await apiClient('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
    return response;
  },

  async logout() {
    const response = await apiClient('/auth/logout', {
      method: 'POST',
    });
    return response;
  },

  async getProfile() {
    const response = await apiClient('/auth/profile', {
      method: 'GET',
    });
    return response;
  }, */
};
