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
    name: "Dotun Popoola",
    profileImage: "/images/dotunPopoola.jpg",
    description:
      "Dotun Popoola is a synergetic metal sculptor renowned for his monumental works that transform trash into treasures, rubbish into rubies, and waste into wealth. Rising from a place of hopelessness, he has become a beacon of hope, using his artistic and leadership skills to serve humanity through community engagement and creative expression. He facilitates workshops for students, professionals, NGOs, healthcare institutions, and schools both locally and internationally. With several large-scale sculptures and murals in Nigeria and the U.S., Dotun continues to mentor artists and foster professional development at his studio in Southwest Nigeria.",
    website: "https://dotunpopo.com/",
    instagram: "dotundavid_popoola/",
    twitter: "dotunpopoo",
    artworks: [
      {
        id: 101,
        image: "/images/dotun/chickenAndArtist.jpg",
        title: "The Chicken Sculpture",
        likes: 12,
        comments: 1,
      },
      {
        id: 102,
        image: "/images/dotun/fela.jpg",
        title: "Fela Kuti",
        likes: 1,
        comments: 0,
      },
      {
        id: 103,
        image: "/images/dotun/theArtistDog.jpeg",
        title: "The Artist Dog",
        likes: 1,
        comments: 3,
      },
    ],
  },
  {
    id: 2,
    name: "Jonathan Imafidon",
    profileImage: "/images/jonathanImafidor.jpg",
    description:
      "Sculptor and installation artist exploring themes of cultural heritage and diaspora. His work has been featured in exhibitions across Africa, Europe, and North America.",
    instagram: "jonathanimafidor/",
    twitter: "joeimafidor",
    artworks: [
      {
        id: 201,
        image: "/images/jonathan/equineArtByJonathan.jpeg",
        title: "Equine Art",
        likes: 8,
        comments: 2,
      },
      {
        id: 202,
        image: "/images/jonathan/EfunsetaeAniwura2.jpg",
        title: "EfunsetaN Aniwu",
        likes: 6,
        comments: 4,
      },
      {
        id: 203,
        image: "/images/jonathan/mandelaByJonahthan.jpg",
        title: "Mandela",
        likes: 2,
        comments: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Ajayi Toyeeb",
    profileImage: "/images/AjayiToyeeb.jpeg",
    description:
      "Ajayi Toyeeb is a visionary Upcycling Artist and Tyre Sculptor based in Nigeria, celebrated for his ability to creatively transform discarded materials into captivating works of art. His innovative approach to upcycling challenges conventional thinking and promotes environmental sustainability. Among his many remarkable creations is the monumental masterpiece “King Kong”, a towering sculpture that currently stands proudly in Lagos at @ecobank_nigeria.",
    instagram: "toyeebajayi/",
    twitter: "ajayitoyeeb",
    artworks: [
      {
        id: 301,
        image: "/images/kingKingImage.jpeg",
        title: "Woven Memories",
        likes: 7,
        comments: 3,
      },
      {
        id: 302,
        image: "/images/godzilla.jpeg",
        title: "Color Traditions",
        likes: 12,
        comments: 19,
      },
      {
        id: 303,
        image: "/images/cowHeadTire.jpg",
        title: "Cow Head",
        likes: 11,
        comments: 4,
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
