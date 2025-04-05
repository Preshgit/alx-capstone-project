"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define the type for each image object
interface ImageType {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageSliderProps {
  images: ImageType[];
  interval?: number;
  className?: string;
  height?: string;
  showDots?: boolean;
  autoPlay?: boolean;
}

const ImageSlider = ({
  images,
  interval = 4000,
  className = "",
  height = "h-80",
  showDots = true,
  autoPlay = true,
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, autoPlay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl shadow-xl ${className} ${height}`}
    >
      {/* Images */}
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          {image.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
              {image.caption}
            </div>
          )}
        </motion.div>
      ))}
      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2 transition"
        aria-label="Previous image"
      >
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2 transition"
        aria-label="Next image"
      >
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      {/* Dots Indicator */}
      {showDots && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
