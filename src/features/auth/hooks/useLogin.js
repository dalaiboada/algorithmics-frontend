import { useState } from 'react';
import { authService } from '@/features/auth/services/auth.service';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const executeLogin = async (credentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await authService.login(credentials);

      // 2FA
      if (data && data.require2FA) {
        setIsLoading(false);
        return { success: true, require2FA: true, userId: data.userId };
      }

      // Sin 2FA
      setIsLoading(false);
      return { success: true, require2FA: false, user: data };
    } catch (err) {
      setIsLoading(false);

      if (err.data && err.data.message) {
        const apiMessage = err.data.message;

        if (Array.isArray(apiMessage)) {
          setError(apiMessage[0]);
        } else {
          setError(apiMessage);
        }
      } else {
        setError('No se pudo establecer conexión con el servidor.');
      }

      return { success: false };
    }
  };

  return {
    isLoading,
    error,
    executeLogin,
  };
};
