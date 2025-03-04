import Link from "next/link";
import { UnsplashImage } from "@/types/image";

export default function ImageCard({ image }: { image: UnsplashImage }) {
  return (
    <Link className="group relative block overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl dark:shadow-gray-800" href={`/image/${image.id}`}>
      <img className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" src={image.urls.small} alt={image.alt_description} />
      {/* Subtle Overlay on Hover */}
      <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-20"></div>
    </Link>
  );
}
