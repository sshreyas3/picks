export async function fetchImages(query = "nature") {
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`);
    const data = await res.json();
    return data.results;
  }
  