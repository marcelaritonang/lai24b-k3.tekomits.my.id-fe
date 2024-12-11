import { API_BASE_URL } from '@/config/api';

export const authService = {
  // Register
  register: async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });
      return await response.json();
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  },

  // Login
  login: async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });
      return await response.json();
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
};

export const urlService = {
  // Create short URL
  createShortUrl: async (url: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/url/shorten`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url })
      });
      return await response.json();
    } catch (error) {
      console.error('Shorten URL error:', error);
      throw error;
    }
  },

  // Get all links
  getAllLinks: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/url/links`);
      return await response.json();
    } catch (error) {
      console.error('Get links error:', error);
      throw error;
    }
  }
};