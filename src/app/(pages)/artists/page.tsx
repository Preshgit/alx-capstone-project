"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { artists } from "../../data/artistsData";
import Link from "next/link";
import Image from "next/image";

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
                  <Link
                    href={`/artists/${artist.id}`}
                    className="md:w-1/3 h-64 md:h-auto relative"
                  >
                    <Image
                      src={artist.profileImage}
                      alt={artist.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Link>
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                        </a>
                      )}
                      {artist.instagram && (
                        <a
                          href={`https://instagram.com/${artist.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-800"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                            <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                            <circle cx="18.406" cy="5.594" r="1.44" />
                          </svg>
                        </a>
                      )}
                      {artist.twitter && (
                        <a
                          href={`https://twitter.com/${artist.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.159 1.207 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                          </svg>
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
