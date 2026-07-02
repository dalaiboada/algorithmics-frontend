import { CONFIG } from '@/config/config';

export const apiClient = async (endpoint, options = {}) => {
  const url = `${CONFIG.baseUrl}${endpoint}`;

  const defaultOptions = {
    ...options,
    credentials: 'include', // Cookies
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const response = await fetch(url, defaultOptions);

  let data = null;

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    data = await response.json();
  }

  // Error handling
  if (!response.ok) {
    const error = new Error('API Error');
    error.status = response.status;
    error.data = data || { message: 'Ocurrió un error inesperado.' };
    throw error;
  }

  return data;
};
