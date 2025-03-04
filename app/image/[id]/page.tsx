"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // ✅ Import useParams
import { useFavoritesStore } from "../../../store/useFavoritesStore";
import { UnsplashImage } from "../../../types/image";

export default function ImageDetailsPage() {
  const params = useParams(); // ✅ Correct way to access params in Next.js 14+
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const [image, setImage] = useState<UnsplashImage | null>(null);

  useEffect(() => {
    async function fetchImage() {
      if (!params.id) return; // ✅ Ensure id exists before fetching

      const res = await fetch(
        `https://api.unsplash.com/photos/${params.id}?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
      );

      const data: UnsplashImage = await res.json();
      setImage(data);
    }

    fetchImage();
  }, [params.id]);

  const isFavorited = favorites.some((fav) => fav.id === image?.id);

  return (
    <div className="container mx-auto p-4">
      {image ? (
        <>
          <img
            src={image.urls.full}
            alt={image.alt_description || "Unsplash Image"}
            className="w-full rounded-lg"
          />
          <button
            onClick={() => {
              if (isFavorited) {
                removeFavorite(image.id);
              } else {
                addFavorite(image);
              }
            }}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            {isFavorited ? "Remove from Favorites" : "Save to Favorites"}
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
