import React from "react";
import Image from "next/image";
import constructionImg from "@/public/images/services/png/construct-img.png";
import laboutImg from "@/public/images/services/png/labour-consulting 1.png";
import pmListImg from "@/public/images/services/png/project-management-list 1.png";

export const AchievementLayout = () => {
  return (
    <section className="w-full  ">
      <div className=" w-full ">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center  w-full ">
          {/* Purple Box */}
          <div className="bg-[#2B2F84]  text-white h-64 flex items-center justify-center space-x-4  md:space-x-36">
            <h3 className="text-xl font-medium mb-4">Experienced team</h3>
            {/* White Border Box with 200+ */}
            <div className="border-[24px] p-6 border-l-0 border-white   text-center text-4xl font-bold">
              200 +
            </div>
          </div>

          {/* Images Section */}
          <div className="flex gap-24 lg:gap-48  lg:w-full items-center h-44 justify-center">
            <div className="bg-[#2B2F84] w-32 h-32 lg:h-full lg:w-44 flex items-center justify-center">
              <Image
                src={pmListImg}
                alt="Project Management"
                width={48}
                height={48}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="bg-[#2B2F84] w-32 h-32 lg:h-full lg:w-44  flex items-center justify-center">
              <Image
                src={laboutImg}
                alt="Labor Consulting"
                width={48}
                height={48}
                className="w-[72px] h-[72px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export const AchievementBottomLayout = () => {
  return (
    <section className="w-full lg:pb-6 ">
      <div className="container mx-auto px-4 w-full">
        {/* Mobile-first grid that switches to 4 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8 items-center">
          {/* Left Column - Text */}
          <div className="lg:col-span-1 text-center md:text-left mb-6 md:mb-0">
            <div className="relative hidden lg:block">
              <h2 className="text-4xl  md:text-5xl lg:text-5xl font-bold text-gray-900">
                20 YEARS
              </h2>
              {/* Dotted Line - Hidden on mobile, shown on desktop */}
              <div className="hidden md:block w-full border-t border-dotted border-white my-4" />
              {/* On mobile, reduce spacing */}
              <div className="md:hidden w-full my-2" />
              <h3 className="text-4xl md:text-5xl lg:text-5xl text-gray-800">
                IN ACTION
              </h3>
            </div>
          </div>

          {/* Middle Column - Image */}
          <div className="lg:col-span-2 mb-6 md:mb-0 w-full flex justify-center items-center lg:flex">
            <div className="relative aspect-video w-full md:w-3/5 lg:w-full ">
              <Image
                src={constructionImg}
                alt="Construction Worker in Action"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="lg:col-span-1 mb-6 md:mb-0">
            <p className="text-gray-600 md:text-center text-base md:text-lg md:max-w-[430px] lg:max-w-[300px] md:mx-auto lg:ml-auto">
              Given our robust history, experience, and expertise, each client
              is guaranteed peace of mind on their projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
