// hooks/useHealth.js
import { useState, useCallback } from 'react';
import { authService } from '../services/auth.service';

export const useHealth = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkHealth = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await authService.health();
      console.log('useHealth', response);

      if (!response) {
        throw new Error('No encontrado');
      }

      setData(response);
      console.log('seteado: ', response);
      return response;
    } catch (err) {
      const errorMsg = err.message || 'Error al verificar salud';
      setError(errorMsg);
      console.error('Error al verificar salud:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error,
    checkHealth,
  };
};
