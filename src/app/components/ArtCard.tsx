// components/ArtCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import ArtModal from "./ArtModal";
import { ArtworkType } from "../utils/types";

interface ArtCardProps {
  artwork: ArtworkType;
}

export default function ArtCard({ artwork }: ArtCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        className="bg-white rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg"
        variants={item}
        whileHover={{ y: -5 }}
      >
        <div className="relative h-64 sm:h-72 overflow-hidden">
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            width={500}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-yellow-400 text-gray-900 font-medium py-2 rounded-full hover:bg-yellow-300 transition"
              >
                View Artwork
              </button>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900 mb-1">
            {artwork.title}
          </h3>
          <p className="text-gray-600 text-sm mb-2">by {artwork.artist}</p>
          <div className="flex justify-between items-center">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
              {artwork.category}
            </span>
            <Link
              href={`/artists/${artwork.artistSlug}`}
              className="text-indigo-600 text-sm font-medium hover:text-indigo-800"
            >
              Artist Profile →
            </Link>
          </div>
        </div>
      </motion.div>

      <ArtModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        artwork={artwork}
      />
    </>
  );
}
