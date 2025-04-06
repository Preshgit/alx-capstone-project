// types.ts
export interface ArtworkType {
  id: string;
  title: string;
  artist: string;
  artistSlug: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  category: string;
  year?: number;
  location?: string;
  social?: {
    website?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface VideoArtworkType {
  id: string;
  title: string;
  artist: string;
  artistSlug: string;
  description: string;
  videoUrl?: string;
  category: string;
  year?: number;
  location?: string;
}

export interface ArtistType {
  id: string;
  name: string;
  slug: string;
  bio: string;
  imageUrl: string;
  location: string;
  specialties: string[];
  social?: {
    website?: string;
    instagram?: string;
    twitter?: string;
  };
}
