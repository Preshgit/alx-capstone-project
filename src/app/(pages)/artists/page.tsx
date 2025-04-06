"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { artists } from "../../data/artistsData";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

export default function Artists() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Artists
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Meet the talented creators behind our beautiful collection of
            African art
          </motion.p>
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search artists..."
              className="w-full py-3 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 top-2 p-1 rounded-full bg-yellow-400 text-indigo-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our African Artists
          </motion.h2>

          {filteredArtists.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filteredArtists.map((artist) => (
                <motion.div
                  key={artist.id}
                  variants={item}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row cursor-pointer hover:shadow-lg transition"
                >
                  {/* Image container - Fixed aspect ratio on mobile */}
                  <div className="md:w-1/3 relative w-full aspect-square md:aspect-auto">
                    <Link
                      href={`/artists/${artist.id}`}
                      className="block h-full"
                    >
                      <Image
                        src={artist.profileImage}
                        alt={artist.name}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </Link>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <Link href={`/artists/${artist.id}`}>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {artist.name}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {artist.description}
                    </p>

                    <div className="flex space-x-3">
                      {artist.website && (
                        <a
                          href={artist.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          <TbWorld className="h-6 w-6" />
                        </a>
                      )}
                      {artist.instagram && (
                        <a
                          href={`https://instagram.com/${artist.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-800"
                        >
                          <FaInstagram className="h-6 w-6" />
                        </a>
                      )}
                      {artist.twitter && (
                        <a
                          href={`https://twitter.com/${artist.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <FaSquareXTwitter className="h-6 w-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No artists found</h3>
              <p className="mb-6 text-gray-600">
                Would you like to suggest an artist for our collection?
              </p>
              <Link
                href="/suggestArtist"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition"
              >
                Suggest an Artist
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
