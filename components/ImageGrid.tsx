"use client";

import { useEffect } from "react";
import { useImageStore } from "@/store/useImageStore";
import ImageCard from "./ImageCard";

export default function ImageGrid() {
  const { images, fetchImages } = useImageStore();

  useEffect(() => {
    fetchImages();
  }, []);

  // Infinite scrolling with debouncing
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        if (
          window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
        ) {
          fetchImages();
        }
      }, 200); // Debounce to prevent excessive API calls
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Remove duplicate images before rendering
  const uniqueImages = Array.from(new Map(images.map((img) => [img.id, img])).values());

  return (
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {uniqueImages.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
    </div>
  );
}
