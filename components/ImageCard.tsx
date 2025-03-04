import Link from "next/link";

export default function ImageCard({ image }: { image: any }) {
  return (
    <Link href={`/image/${image.id}`}>
      <img src={image.urls.small} alt={image.alt_description} className="w-full h-60 object-cover rounded-lg" />
    </Link>
  );
}
