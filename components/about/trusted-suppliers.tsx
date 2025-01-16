import React from "react";
import Image from "next/image";
import toppsTilesLogo from "@/public/images/about/Topps_Tiles.png";
import ironmongeryLogo from "@/public/images/about/Ironmongery-Direct.png";
import screwfixLogo from "@/public/images/about/screw_fix.png";
import duluxLogo from "@/public/images/about/Dulux.png";
import howdensLogo from "@/public/images/about/howdens.png";

const TrustedSuppliers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div className="mb-8 mt-16">
        <h2 className="auto-container pl-28 text-3xl md:text-5xl font-semibold text-gray-800">
          TRUSTED SUPPLIERS
        </h2>
      </div>
      <div className="bg-[#2B2F841A]">
        <section className="w-full lg:py-32 py-8 lg:mb-16 mb-8 lg:px-[11rem]">
          {/* Suppliers Grid */}
          <div className="grid grid-cols-3 gap-10 mx-auto lg:px-4 px-10">
            {/* Top Row */}
            <div className="flex justify-center items-center transition-transform transform hover:scale-105 hover:opacity-90">
              <Image
                src={toppsTilesLogo}
                alt="Topps Tiles Logo"
                className="w-auto h-16 object-contain"
              />
            </div>

            <div className="flex justify-center items-center transition-transform transform hover:scale-105 hover:opacity-90">
              <Image
                src={ironmongeryLogo}
                alt="Ironmongery Direct Logo"
                className="w-auto h-16 object-contain"
              />
            </div>

            <div className="flex justify-center items-center transition-transform transform hover:scale-105 hover:opacity-90">
              <Image
                src={screwfixLogo}
                alt="Screwfix Logo"
                className="w-auto h-16 object-contain"
              />
            </div>

            {/* Bottom Row */}
            <div className="col-span-1 flex justify-center items-center transition-transform transform hover:scale-105 hover:opacity-90">
              <Image
                src={duluxLogo}
                alt="Dulux Logo"
                className="w-auto h-16 object-contain"
              />
            </div>

            <div className="col-span-1 flex justify-center items-center transition-transform transform hover:scale-105 hover:opacity-90">
              <Image
                src={howdensLogo}
                alt="Howdens Logo"
                className="w-auto h-16 object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TrustedSuppliers;
