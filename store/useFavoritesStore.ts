import { create } from "zustand";

interface FavoritesState {
  favorites: any[];
  addFavorite: (image: any) => void;
  removeFavorite: (id: string) => void;
}

export const useFavoritesStore = create<FavoritesState>((set) => ({
  favorites: [],
  addFavorite: (image) => set((state) => ({ favorites: [...state.favorites, image] })),
  removeFavorite: (id) =>
    set((state) => ({ favorites: state.favorites.filter((image) => image.id !== id) })),
}));
