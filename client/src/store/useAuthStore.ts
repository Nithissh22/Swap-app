import { create } from 'zustand';
import { api } from '../lib/axios';

interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  trustScore?: number;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  checkAuth: () => Promise<void>;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  checkAuth: async () => {
    try {
      set({ isLoading: true });
      const { data } = await api.get('/auth/me');
      set({ user: data, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
