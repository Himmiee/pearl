import React from "react";
import Image from "next/image";
import ratedPeopleLogo from "@/public/images/about/Rate_People.png";
import masterBuildersLogo from "@/public/images/about/ab3.png";
import toppsTilesLogo from "@/public/images/about/Topps_Tiles.png";
import ironmongeryLogo from "@/public/images/about/Ironmongery-Direct.png";
import screwfixLogo from "@/public/images/about/screw_fix.png";
import duluxLogo from "@/public/images/about/Dulux.png";
import trustatraderLogo from "@/public/images/about/Trustatrader.png";
import howdensLogo from "@/public/images/about/howdens.png";

const TrustedSuppliers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div className=" mb-8 mt-16 ">
        <h2 className="auto-container text-3xl md:text-5xl font-semibold text-gray-800">
          TRUSTED SUPPLIERS
        </h2>
      </div>
      <div className=" bg-[#2B2F841A] ">
        <section className="w-full lg:py-32 py-8 lg:mb-16 mb-8 auto-container">
          {/* Suppliers Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-x-10 lg:gap-y-10 gap-10  mx-auto lg:px-4 px-10">
            {/* Supplier 1 */}
            <div className="flex justify-center items-center">
              <Image
                src={ratedPeopleLogo}
                alt="Rated People Logo"
                className="w-auto h-16 object-contain"
              />
            </div>

            {/* Supplier 2 */}
            <div className="flex justify-center items-center">
              <Image
                src={masterBuildersLogo}
                alt="Federation of Master Builders Logo"
                className="w-auto h-24 object-contain"
              />
            </div>

            {/* Supplier 3 */}
            <div className="flex justify-center items-center">
              <Image
                src={toppsTilesLogo}
                alt="Topps Tiles Logo"
                className="w-auto h-16 object-contain"
              />
            </div>

            {/* Supplier 4 */}
            <div className="flex justify-center items-center">
              <Image
                src={ironmongeryLogo}
                alt="Ironmongery Direct Logo"
                className="w-auto h-16 object-contain"
              />
            </div>

            {/* Supplier 5 */}
            <div className="flex justify-center items-center">
              <Image
                src={screwfixLogo}
                alt="Screwfix Logo"
                className="w-auto h-16 object-contain"
              />
            </div>

            {/* Supplier 6 */}
            <div className="flex justify-center items-center">
              <Image
                src={duluxLogo}
                alt="Dulux Logo"
                className="w-auto h-16 object-contain"
              />
            </div>

            {/* Supplier 7 */}
            <div className="flex justify-center items-center">
              <Image
                src={trustatraderLogo}
                alt="Trust A Trader Logo"
                className="w-auto h-16 object-contain"
              />
            </div>

            {/* Supplier 8 */}
            <div className="flex justify-center items-center">
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
