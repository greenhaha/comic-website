import create from 'zustand';
import axios from '../utils/axiosInstance';
import { z } from 'zod';
import { comicSchema } from '../utils/validation';

const useComicStore = create((set) => ({
  comics: [],
  fetchComics: async () => {
    try {
      const response = await axios.get('/comics');
      const comics = response.data.map((comic) => comicSchema.parse(comic));
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
}));

export { useComicStore };
