export interface UnsplashImage {
    id: string;
    urls: {
      small: string;
      full: string;
    };
    alt_description: string;
    description?: string;
  }
  