import { UnsplashImage } from "@/types/image";
import { create } from "zustand";

interface ImageState {
  images: UnsplashImage[];
  page: number;
  fetchImages: (query?: string, reset?: boolean) => void;
}

export const useImageStore = create<ImageState>((set, get) => ({
  images: [],
  page: 1,
  fetchImages: async (query = "nature", reset = false) => {
    const page = reset ? 1 : get().page;
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=15&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
    );
    const data = await res.json();
    set({ 
      images: reset ? data.results : [...get().images, ...data.results], 
      page: page + 1 
    });
  },
}));
