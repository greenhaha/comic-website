import create from 'zustand';
import { z } from 'zod';
import { userSchema } from '../utils/validation';

const useUserStore = create((set) => ({
  user: {
    name: '',
    email: '',
  },
  updateUser: (userData) => {
    const parsedUser = userSchema.parse(userData);
    set({ user: parsedUser });
  },
}));

export { useUserStore };
