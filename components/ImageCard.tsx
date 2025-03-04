import Link from "next/link";
import { UnsplashImage } from "@/types/image";

export default function ImageCard({ image }: { image: UnsplashImage }) {
  return (
    <Link href={`/image/${image.id}`}>
      <img src={image.urls.small} alt={image.alt_description} className="w-full h-60 object-cover rounded-lg" />
    </Link>
  );
}
