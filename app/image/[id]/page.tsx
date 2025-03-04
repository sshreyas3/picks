import { useEffect, useState } from 'react';
import { useFavoritesStore } from '../../../store/useFavoritesStore';

export default function ImageDetailsPage({ params }: { params: { id: string } }) {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const [image, setImage] = useState<any>(null);

  useEffect(() => {
    async function fetchImage() {
      const res = await fetch(
        `https://api.unsplash.com/photos/${params.id}?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
      );
      const data = await res.json();
      setImage(data);
    }
    fetchImage();
  }, [params.id]);

  const isFavorited = favorites.some((fav) => fav.id === image?.id);

  return (
    <div className="container mx-auto p-4">
      <img src={image?.urls.full} alt={image?.alt_description} className="w-full rounded-lg" />
      <button
        onClick={() => (isFavorited ? removeFavorite(image.id) : addFavorite(image))}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        {isFavorited ? "Remove from Favorites" : "Save to Favorites"}
      </button>
    </div>
  );
}
