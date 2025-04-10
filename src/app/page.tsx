"use client";
import { useState } from "react";
import ArtCard from "./components/ArtCard";
import ArtVideoCard from "./components/ArtVideoCard";
import { motion } from "framer-motion";
import { demoArtworks } from "./data/demoArtworks";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const filteredArtworks = demoArtworks.filter((artwork) =>
    artwork.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Separate video artworks (first 3) from regular artworks
  const videoArtworks = filteredArtworks.slice(0, 3);
  const regularArtworks = filteredArtworks.slice(3);

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
            Celebrating African Art
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the beauty, creativity, and innovation of African artists
            through our curated collection
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

      {/* Video Artworks Section */}
      {videoArtworks.length > 0 && (
        <section className="pt-16 pb-8 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl font-bold mb-12 text-center text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Featured Artworks
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {videoArtworks.map((artwork) => (
                <ArtVideoCard key={artwork.id} artwork={artwork} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Regular Artworks Section */}
      <section className="pb-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* <motion.h2
            className="text-3xl font-bold mb-12 text-center text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Artworks
          </motion.h2> */}

          {regularArtworks.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {regularArtworks.map((artwork) => (
                <ArtCard key={artwork.id} artwork={artwork} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">
                No additional artworks found
              </h3>
              <p className="mb-6 text-gray-600">
                Would you like to suggest an artist for our collection?
              </p>
              <a
                href="/suggestArtist"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition"
              >
                Suggest an Artist
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

// "use client";
// import { useState, useEffect } from "react";
// import ArtCard from "./components/ArtCard";
// import ArtVideoCard from "./components/ArtVideoCard";
// import { motion } from "framer-motion";
// import { demoArtworks } from "./data/demoArtworks";
// // import { customAxios } from "./axios.config";

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState("");
//   // const [featured, setFeatured] = useState([]);

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const filteredArtworks = demoArtworks.filter((artwork) =>
//     artwork.artist.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Separate video artworks (first 3) from regular artworks
//   const videoArtworks = filteredArtworks.slice(0, 3);
//   const regularArtworks = filteredArtworks.slice(3);

//   return (
//     <>
//       <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16 px-4 md:px-8">
//         <div className="max-w-6xl mx-auto">
//           <motion.h1
//             className="text-4xl md:text-6xl font-bold mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Celebrating African Art
//           </motion.h1>
//           <motion.p
//             className="text-xl md:text-2xl mb-8 max-w-3xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Discover the beauty, creativity, and innovation of African artists
//             through our curated collection
//           </motion.p>
//           <div className="relative max-w-md">
//             <input
//               type="text"
//               placeholder="Search artists..."
//               className="w-full py-3 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button className="absolute right-2 top-2 p-1 rounded-full bg-yellow-400 text-indigo-900">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Video Artworks Section */}
//       {videoArtworks.length > 0 && (
//         <section className="py-16 px-4 md:px-8 bg-gray-50">
//           <div className="max-w-6xl mx-auto">
//             <motion.h2
//               className="text-3xl font-bold mb-12 text-center text-gray-800"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               Featured Video Art
//             </motion.h2>

//             <motion.div
//               className="flex flex-col gap-16"
//               variants={container}
//               initial="hidden"
//               animate="show"
//             >
//               {videoArtworks.map((artwork) => (
//                 <ArtVideoCard key={artwork.id} artwork={artwork} />
//               ))}
//             </motion.div>
//           </div>
//         </section>
//       )}

//       {/* Regular Artworks Section */}
//       <section className="py-16 px-4 md:px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             className="text-3xl font-bold mb-12 text-center text-gray-800"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Featured Artworks
//           </motion.h2>

//           {regularArtworks.length > 0 ? (
//             <motion.div
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//               variants={container}
//               initial="hidden"
//               animate="show"
//             >
//               {regularArtworks.map((artwork) => (
//                 <ArtCard key={artwork.id} artwork={artwork} />
//               ))}
//             </motion.div>
//           ) : (
//             <div className="text-center py-16">
//               <h3 className="text-2xl font-semibold mb-4">
//                 No additional artworks found
//               </h3>
//               <p className="mb-6 text-gray-600">
//                 Would you like to suggest an artist for our collection?
//               </p>
//               <a
//                 href="/suggestArtist"
//                 className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition"
//               >
//                 Suggest an Artist
//               </a>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import ArtCard from "./components/ArtCard";
// import ArtVideoCard from "./components/ArtVideoCard";
// import { motion } from "framer-motion";
// import { demoArtworks } from "./data/demoArtworks";
// // import { customAxios } from "./axios.config";

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState("");
//   // const [featured, setFeatured] = useState([]);

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const filteredArtworks = demoArtworks.filter((artwork) =>
//     artwork.artist.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16 px-4 md:px-8">
//         <div className="max-w-6xl mx-auto">
//           <motion.h1
//             className="text-4xl md:text-6xl font-bold mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Celebrating African Art
//           </motion.h1>
//           <motion.p
//             className="text-xl md:text-2xl mb-8 max-w-3xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Discover the beauty, creativity, and innovation of African artists
//             through our curated collection
//           </motion.p>
//           <div className="relative max-w-md">
//             <input
//               type="text"
//               placeholder="Search artists..."
//               className="w-full py-3 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button className="absolute right-2 top-2 p-1 rounded-full bg-yellow-400 text-indigo-900">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 px-4 md:px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             className="text-3xl font-bold mb-12 text-center text-gray-800"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Featured Artworks
//           </motion.h2>

//           {filteredArtworks.length > 0 ? (
//             <motion.div
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//               variants={container}
//               initial="hidden"
//               animate="show"
//             >
//               {filteredArtworks.map((artwork) => (
//                 <ArtCard key={artwork.id} artwork={artwork} />
//               ))}
//             </motion.div>
//           ) : (
//             <div className="text-center py-16">
//               <h3 className="text-2xl font-semibold mb-4">No artists found</h3>
//               <p className="mb-6 text-gray-600">
//                 Would you like to suggest an artist for our collection?
//               </p>
//               <a
//                 href="/suggestArtist"
//                 className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition"
//               >
//                 Suggest an Artist
//               </a>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }
