import React from "react";
import Image from "next/image";
import logoImg from "@/public/logos/grid-section-logo.svg"; // Replace with your logo path
import documentsImg from "@/public/images/homepage/grid-section-1.jpg"; // Replace with your documents image path
import teamImg from "@/public/images/homepage/grid-section-2.jpg"; // Replace with your team image path
import projectImg from "@/public/images/homepage/20years.png"; // Replace with additional image paths

const GridSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-6 sm:grid-rows-3 lg:grid-rows-2 h-auto">
        {/* Top-Left: Logo Section */}
        <div className="bg-[#2B2F84] flex flex-col items-center justify-center text-white h-48 lg:h-auto">
          <Image
            src={logoImg}
            alt="Logo"
            className="lg:w-40 lg:h-40 w-28 h-28"
          />
        </div>

        {/* Top-Middle: Documents Image */}
        <div className="relative h-48 lg:h-auto">
          <Image
            src={documentsImg}
            alt="Documents"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top-Right: "20 Years in Action" */}
        <div className="relative h-48 lg:h-auto">
          <Image
            src={projectImg}
            alt="Project"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom-Left: Team Image */}
        <div className="relative h-48 lg:h-auto">
          <Image
            src={teamImg}
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom-Middle: Project Image */}
        <div className="relative h-48 lg:h-auto">
          <Image
            src={projectImg}
            alt="Project"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom-Right: "20 Years in Action" */}
        <div className="bg-[#2B2F84] flex items-center justify-center h-48 lg:h-auto">
          <div className="text-center space-y-5">
            <h2 className="text-white text-3xl lg:text-5xl font-bold">
              20 YEARS
            </h2>
            <p className="text-white text-3xl lg:text-6xl mt-2">IN ACTION</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
