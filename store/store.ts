import create from 'zustand';
import { z } from 'zod';
import { comicSchema, userSchema } from '../utils/validation';
import { fetchComics } from '../services/comicService';
import { fetchUserData } from '../services/userService';

const useStore = create<{
  comics: Array<{ id: string; title: string; description: string }>;
  user: { name: string; email: string };
  fetchComics: () => Promise<void>;
  addComic: (comic: { id: string; title: string; description: string }) => void;
  updateComic: (updatedComic: { id: string; title: string; description: string }) => void;
  deleteComic: (comicId: string) => void;
  fetchUserData: () => Promise<void>;
  updateUser: (userData: { name: string; email: string }) => void;
}>((set) => ({
  comics: [],
  user: {
    name: '',
    email: '',
  },
  fetchComics: async () => {
    try {
      const comics = await fetchComics();
      set({ comics });
    } catch (error) {
      console.error('Failed to fetch comics:', error);
    }
  },
  addComic: (comic) => set((state) => ({ comics: [...state.comics, comic] })),
  updateComic: (updatedComic) =>
    set((state) => ({
      comics: state.comics.map((comic) =>
        comic.id === updatedComic.id ? updatedComic : comic
      ),
    })),
  deleteComic: (comicId) =>
    set((state) => ({
      comics: state.comics.filter((comic) => comic.id !== comicId),
    })),
  fetchUserData: async () => {
    try {
      const userData = await fetchUserData();
      const parsedUser = userSchema.parse(userData);
      set({ user: { name: parsedUser.name || '', email: parsedUser.email || '' } });
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  },
  updateUser: (userData) => {
    const parsedUser = userSchema.parse(userData);
    set({ user: { name: parsedUser.name || '', email: parsedUser.email || '' } });
  },
}));

export { useStore };
