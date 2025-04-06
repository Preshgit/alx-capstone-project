// components/ArtModal.tsx
"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArtworkType } from "../utils/types";

interface ArtModalProps {
  isOpen: boolean;
  onClose: () => void;
  artwork: ArtworkType;
}

export default function ArtModal({ isOpen, onClose, artwork }: ArtModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        // Portal container - fixed position covering entire viewport
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal container - centers content and handles scrolling */}
          <div className="relative z-50 w-full max-w-3xl max-h-[90vh] overflow-hidden mx-4">
            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden w-full"
            >
              {/* Close button */}
              <div className="absolute top-0 right-0 pt-4 pr-4 z-10">
                <button
                  type="button"
                  className="bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content layout */}
              <div className="flex flex-col sm:flex-row">
                {/* Image section */}
                <div className="sm:w-1/2">
                  <div className="relative h-72 sm:h-96">
                    <Image
                      src={artwork.imageUrl}
                      alt={artwork.title}
                      className="w-full h-full object-cover object-top"
                      width={600}
                      height={800}
                    />
                  </div>
                </div>

                {/* Details section */}
                <div className="p-6 sm:w-1/2 overflow-y-auto max-h-96 sm:max-h-[384px]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600 mb-4">by {artwork.artist}</p>

                  <div className="mb-4">
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                      {artwork.category}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-6">{artwork.description}</p>

                  <div className="flex items-center space-x-4 mb-6">
                    <button className="flex items-center text-gray-500 hover:text-indigo-600">
                      <svg
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span>Like</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-indigo-600">
                      <svg
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      <span>Share</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-indigo-600">
                      <svg
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                      <span>Comment</span>
                    </button>
                  </div>

                  <Link
                    href={`/artists/${artwork.artistSlug}`}
                    className="block w-full text-center bg-indigo-600 text-white font-medium py-2 px-4 rounded-full hover:bg-indigo-700 transition"
                  >
                    Visit Artist Profile
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

// // components/ArtModal.tsx
// "use client";

// import { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { ArtworkType } from "../utils/types";

// interface ArtModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   artwork: ArtworkType;
// }

// export default function ArtModal({ isOpen, onClose, artwork }: ArtModalProps) {
//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   // Close modal when Escape key is pressed
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };

//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//           <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 bg-black/60 backdrop-blur-sm"
//               onClick={onClose}
//             ></motion.div>

//             <span
//               className="hidden sm:inline-block sm:align-middle sm:h-screen"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.3 }}
//               className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
//             >
//               <div className="absolute top-0 right-0 pt-4 pr-4 z-10">
//                 <button
//                   type="button"
//                   className="bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   onClick={onClose}
//                 >
//                   <span className="sr-only">Close</span>
//                   <svg
//                     className="h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               <div className="sm:flex sm:items-start">
//                 <div className="sm:w-1/2">
//                   <div className="relative h-72 sm:h-96">
//                     <Image
//                       src={artwork.imageUrl}
//                       alt={artwork.title}
//                       className="w-full h-full object-cover"
//                       width={600}
//                       height={800}
//                     />
//                   </div>
//                 </div>
//                 <div className="p-6 sm:w-1/2">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                     {artwork.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4">by {artwork.artist}</p>

//                   <div className="mb-4">
//                     <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
//                       {artwork.category}
//                     </span>
//                   </div>

//                   <p className="text-gray-700 mb-6">{artwork.description}</p>

//                   <div className="flex items-center space-x-4 mb-6">
//                     <button className="flex items-center text-gray-500 hover:text-indigo-600">
//                       <svg
//                         className="h-5 w-5 mr-1"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                         />
//                       </svg>
//                       <span>Like</span>
//                     </button>
//                     <button className="flex items-center text-gray-500 hover:text-indigo-600">
//                       <svg
//                         className="h-5 w-5 mr-1"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
//                         />
//                       </svg>
//                       <span>Share</span>
//                     </button>
//                     <button className="flex items-center text-gray-500 hover:text-indigo-600">
//                       <svg
//                         className="h-5 w-5 mr-1"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
//                         />
//                       </svg>
//                       <span>Comment</span>
//                     </button>
//                   </div>

//                   <Link
//                     href={`/artists/${artwork.artistSlug}`}
//                     className="block w-full text-center bg-indigo-600 text-white font-medium py-2 px-4 rounded-full hover:bg-indigo-700 transition"
//                   >
//                     Visit Artist Profile
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }
