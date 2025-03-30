// This file should be placed in a suitable location e.g., src/data/artists-data.ts

export interface Artwork {
  id: number;
  image: string;
  title: string;
  likes: number;
  comments: number;
}

export interface Artist {
  id: number;
  name: string;
  profileImage: string;
  description: string;
  website?: string;
  instagram?: string;
  twitter?: string;
  artworks: Artwork[];
}

export const artists: Artist[] = [
  {
    id: 1,
    name: "Aisha Tanaka",
    profileImage: "/images/artist1.jpg",
    description:
      "Contemporary artist mixing traditional African symbolism with modern abstract techniques. Based in Lagos, Nigeria with over 15 years of experience in various mediums.",
    website: "https://aishatanaka.com",
    instagram: "aisha_tanaka_art",
    twitter: "AishaTanakaArt",
    artworks: [
      {
        id: 101,
        image: "/images/artwork1.jpg",
        title: "Spirit Dance",
        likes: 124,
        comments: 18,
      },
      {
        id: 102,
        image: "/images/artwork2.jpg",
        title: "Urban Masks",
        likes: 89,
        comments: 7,
      },
      {
        id: 103,
        image: "/images/artwork3.jpg",
        title: "Ancestral Whispers",
        likes: 145,
        comments: 23,
      },
    ],
  },
  {
    id: 2,
    name: "Kwame Osei",
    profileImage: "/images/artist2.jpg",
    description:
      "Sculptor and installation artist exploring themes of cultural heritage and diaspora. His work has been featured in exhibitions across Africa, Europe, and North America.",
    website: "https://kwameosei.art",
    instagram: "kwame_creates",
    twitter: "KwameOseiArt",
    artworks: [
      {
        id: 201,
        image: "/images/artwork4.jpg",
        title: "Bronze Heritage",
        likes: 98,
        comments: 12,
      },
      {
        id: 202,
        image: "/images/artwork5.jpg",
        title: "Rhythmic Forms",
        likes: 156,
        comments: 24,
      },
    ],
  },
  {
    id: 3,
    name: "Zainab El-Mahdi",
    profileImage: "/images/artist3.jpg",
    description:
      "Textile artist and designer who combines traditional West African weaving techniques with contemporary patterns and applications.",
    website: "https://zainabdesigns.com",
    instagram: "zainab_textiles",
    artworks: [
      {
        id: 301,
        image: "/images/artwork6.jpg",
        title: "Woven Memories",
        likes: 187,
        comments: 31,
      },
      {
        id: 302,
        image: "/images/artwork7.jpg",
        title: "Color Traditions",
        likes: 142,
        comments: 19,
      },
      {
        id: 303,
        image: "/images/artwork8.jpg",
        title: "Threaded Stories",
        likes: 112,
        comments: 14,
      },
    ],
  },
];

export const getArtistById = (id: number): Artist | undefined => {
  return artists.find((artist) => artist.id === id);
};

export const getArtworkById = (
  id: number
): { artwork: Artwork; artist: Artist } | undefined => {
  for (const artist of artists) {
    const artwork = artist.artworks.find((artwork) => artwork.id === id);
    if (artwork) {
      return { artwork, artist };
    }
  }
  return undefined;
};
