import SearchBar from '@/components/SearchBar';
import ImageGrid from '../components/ImageGrid';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Unsplash Clone</h1>
      <Navbar />
      <SearchBar />
      <ImageGrid />
    </main>
  );
}
