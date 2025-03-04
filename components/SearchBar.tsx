"use client";

import { useState } from "react";
import { useImageStore } from "@/store/useImageStore";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const { fetchImages } = useImageStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchImages(query, true); // Reset search results
  };

  return (
    <form onSubmit={handleSearch} className="mb-4 flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
        className="border rounded p-2 flex-1"
      />
      <button type="submit" className="bg-black text-white p-2 rounded">
        Search
      </button>
    </form>
  );
}
