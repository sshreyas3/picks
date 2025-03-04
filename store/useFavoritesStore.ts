import { create } from "zustand";
import { UnsplashImage } from "@/types/image";

interface FavoritesState {
  favorites: UnsplashImage[];
  addFavorite: (image: UnsplashImage) => void;
  removeFavorite: (id: string) => void;
}

export const useFavoritesStore = create<FavoritesState>((set) => ({
  favorites: [],
  addFavorite: (image) => set((state) => ({ favorites: [...state.favorites, image] })),
  removeFavorite: (id) =>
    set((state) => ({ favorites: state.favorites.filter((image) => image.id !== id) })),
}));
