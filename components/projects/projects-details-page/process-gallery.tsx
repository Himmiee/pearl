"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import lockIcon from "@/public/icons/camera.png";

interface ProcessGalleryProps {
  images: { _id: string; image: string }[];
}

const ProcessGallery: React.FC<ProcessGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index); // Store the index of the selected image
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handleNextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex !== null && prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex !== null && prevIndex > 0 ? prevIndex - 1 : images.length - 1
      );
    }
  };

  return (
    <section className="w-full py-16 lg:px-[7.5rem]">
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-4xl font-medium text-primary-80">THE PROCESS</h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {images.slice(0, 6).map((image, index) => (
          <div
            key={image._id}
            className="relative group bg-gray-100 overflow-hidden w-full h-[200px] md:h-[250px] lg:h-[270px]"
          >
            <Image
              src={image.image}
              alt={image._id}
              width={350}
              height={300}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              onClick={() => handleImageClick(index)} // Pass the index
            >
              <Image src={lockIcon} alt="Locked" className="w-10 h-10" />
            </div>
          </div>
        ))}
        {images.length > 6 && (
          <div className="relative group bg-gray-100 overflow-hidden w-full h-[200px] md:h-[250px] lg:h-[270px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-700">
                +{images.length - 6} More
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Full Image Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative bg-white rounded-lg shadow-lg overflow-hidden w-[95%] max-w-6xl h-[80vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images[selectedIndex].image} // Use the current image URL
                alt="Full Process Image"
                layout="fill"
                className="w-full h-full object-contain"
              />
              <button
                className="absolute w-10 h-10 top-4 right-4 text-white bg-black/50 rounded-full p-2"
                onClick={handleCloseModal}
              >
                ✕
              </button>
              {/* Left Arrow */}
              <button
                className="absolute left-4  top-1/2 transform -translate-y-1/2 text-white bg-black/50 h-10 w-10  rounded-full p-2 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
              >
                ◀
              </button>
              {/* Right Arrow */}
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white h-10 w-10 bg-black/50 rounded-full p-2 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
              >
                ▶
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProcessGallery;
