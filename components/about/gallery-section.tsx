import React from "react";
import Image from "next/image";
import galleryImg1 from "@/public/images/about/gallery-1.jpg";
import galleryImg2 from "@/public/images/about/gallery-2.jpg";
import galleryImg3 from "@/public/images/about/gallery-3.jpg";
import galleryImg4 from "@/public/images/about/gallery-4.jpg";

const GallerySection: React.FC = () => {
  return (
    <section className="w-full py-16 lg:px-[6.5rem]">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-80 mb-5">
          GALLERY
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base lg:w-[40%] w-full mx-auto">
          We carry out various types of projects, from minor refurbishment works
          to completing a new build development.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6  mx-auto ">
        {/* Image 1 */}
        <div className="relative h-64 md:h-80 group">
          <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#D0802B] transition-all duration-300"></div>
          <Image
            src={galleryImg1}
            alt="Gallery Image 1"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 2 */}
        <div className="relative h-64 md:h-80 group">
          <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#D0802B] transition-all duration-300"></div>
          <Image
            src={galleryImg2}
            alt="Gallery Image 2"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 3 */}
        <div className="relative h-64 md:h-80 group">
          <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#D0802B] transition-all duration-300"></div>
          <Image
            src={galleryImg3}
            alt="Gallery Image 3"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 4 */}
        <div className="relative h-64 md:h-80 group">
          <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#D0802B] transition-all duration-300"></div>
          <Image
            src={galleryImg4}
            alt="Gallery Image 4"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
