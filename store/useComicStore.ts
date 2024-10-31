import create from 'zustand';
import { z } from 'zod';
import { comicSchema } from '../utils/validation';

const useComicStore = create((set) => ({
  comics: [],
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
