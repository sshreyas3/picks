"use client";

import { useEffect } from "react";
import { useImageStore } from "@/store/useImageStore";
import ImageCard from "./ImageCard";

export default function ImageGrid() {
  const { images, fetchImages } = useImageStore();

  useEffect(() => {
    fetchImages();
  }, []);

  // Infinite scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
      ) {
        fetchImages();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}
