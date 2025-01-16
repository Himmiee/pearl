/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/services.tsx
"use client";
import { useFetchServices } from "@/data/services.hooks";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

// import { useState } from "react";

// const services = [
//   {
//     title: "Building Extension",
//     description:
//       "On every extension project, our team of professionals and craftsmen work tirelessly and mindfully to achieve our client’s vision outlined in their brief and then bring it to life with its related aesthetics.",
//     image: "/images/homepage/services-1.jpg", // Replace with your image path
//   },
//   {
//     title: "Building Refurbishment",
//     description:
//       "On all of our refurbishment projects, we ensure our craftsmen deliver high-quality workmanship to the client’s satisfaction. Some refurbishment projects include remodelling a kitchen, rejuvenating internal spaces, and updating wooden doors and related joinery.",
//     image: "/images/homepage/services-2.jpg", // Replace with your image path
//   },
//   {
//     title: "Building Conversion",
//     description:
//       "Our specialist teams responsible for conversion projects have a wealth of experience working through and resolving challenges typically faced when converting the use and layout of a given space.",
//     image: "/images/homepage/services-3.jpg", // Replace with your image path
//   },
//   {
//     title: "New Development",
//     description:
//       "Our offer and delivery of building management services for owners and operators of private and commercial properties guarantee that our client’s mind can remain at ease whilst our team of professionals and craftsmen address the day-to-day property needs.",
//     image: "/images/homepage/services-4.jpg", // Replace with your image path
//   },
// ];

const Services = () => {
  // const [currentItem, setCurrentItem] = useState<string | undefined>("item-0");
  const { data, isLoading } = useFetchServices();
  const services = data?.data;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14 lg:px-[6.5rem] ">
        {/* Render skeleton loaders */}
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="relative h-96 overflow-hidden shadow-lg bg-gray-200/80 "
          >
            {/* Skeleton for Image */}
            <Skeleton className="absolute inset-0 w-full h-full" />

            {/* Skeleton for Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-10"></div>

            {/* Skeleton for Text */}
            <div className="absolute bottom-5 left-6 right-6">
              <Skeleton className="w-3/4 h-6 mb-2" /> {/* Title Skeleton */}
              <Skeleton className="w-1/2 h-4" /> {/* Description Skeleton */}
            </div>
          </div>
        ))}
      </div>
    );
  }
  console.log(services);

  return (
    <section className=" my-14 lg:px-[6.5rem] ">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
        <div className="lg:w-1/2 lg:px-0 px-4">
          <h2 className="text-4xl font-semibold uppercase text-primary-80">
            Our Main Services
          </h2>
          <p className="text-gray-600 mt-8">
            Our team of qualified craftsmen and professionals always deliver to
            our customer’s satisfaction, achieving an aesthetically pleasing
            project.
          </p>
        </div>
        <button
          type="button"
          className="bg-primary-100 lg:-mt-20 mt-7 hover:opacity-90 transform transition duration-200 uppercase hover:shadow-md flex items-center justify-center gap-1.5 font-poppins w-[150px] h-[50px] text-white -tracking-[3%] font-bold"
        >
          Our Offer
        </button>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services?.map((service: any) => (
          <div
            key={service.id}
            className="relative h-96  overflow-hidden shadow-lg group"
          >
            {/* Background Image */}
            <Image
              src={service.cover_image}
              alt={service.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>

            {/* Text Content */}
            <div className="absolute bottom-5 left-6 right-6 text-white">
              <h3 className="text-xl font-bold uppercase">{service.title}</h3>
              <p className="text-sm mt-2 font-semibold">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
