"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArtworkType } from "../utils/types";

interface ArtVideoCardProps {
  artwork: ArtworkType;
}

export default function ArtVideoCard({ artwork }: ArtVideoCardProps) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg h-full"
      variants={item}
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden">
        <video
          src={artwork.videoUrl || artwork.imageUrl}
          poster={artwork.imageUrl}
          className="w-full h-full object-cover"
          controls
          autoPlay
          muted
          loop
        />
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
            href={`/artists/${artwork.id}`}
            className="text-indigo-600 text-sm font-medium hover:text-indigo-800"
          >
            Artist Profile →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import ArtModal from "./ArtModal";
// import { ArtworkType } from "../utils/types";

// interface ArtVideoCardProps {
//   artwork: ArtworkType;
// }

// export default function ArtVideoCard({ artwork }: ArtVideoCardProps) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   };

//   return (
//     <>
//       <motion.div
//         className="bg-white rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg w-full max-w-4xl mx-auto"
//         variants={item}
//         whileHover={{ y: -5 }}
//       >
//         <div className="relative h-96 sm:h-128 overflow-hidden">
//           <video
//             src={artwork.videoUrl || artwork.imageUrl}
//             poster={artwork.imageUrl}
//             className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
//             controls
//             autoPlay
//             muted
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//             <div className="p-4 w-full">
//               <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="w-full bg-yellow-400 text-gray-900 font-medium py-2 rounded-full hover:bg-yellow-300 transition"
//               >
//                 View Artwork
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="p-6">
//           <h3 className="font-bold text-xl text-gray-900 mb-2">
//             {artwork.title}
//           </h3>
//           <p className="text-gray-600 text-base mb-3">by {artwork.artist}</p>
//           <div className="flex justify-between items-center">
//             <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
//               {artwork.category}
//             </span>
//             <Link
//               href={`/artists/${artwork.id}`}
//               className="text-indigo-600 text-base font-medium hover:text-indigo-800"
//             >
//               Artist Profile →
//             </Link>
//           </div>
//         </div>
//       </motion.div>

//       <ArtModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         artwork={artwork}
//       />
//     </>
//   );
// }
