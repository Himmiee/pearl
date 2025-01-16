import Image, { StaticImageData } from "next/image";
import React from "react";

interface SocialIcon {
  src: string | StaticImageData;
  alt: string;
}

interface HeroLayoutProps {
  backgroundImage: string | StaticImageData;
  title: string;
  description: string;
  socialIcons?: SocialIcon[];
}

export const HeroLayout: React.FC<HeroLayoutProps> = ({
  backgroundImage,
  title,
  description,
  socialIcons = [],
}) => {
  return (
    <main className="min-h-[400px] h-screen max-h-[600px] relative w-full">
      <section className="relative w-full h-full flex justify-center items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={backgroundImage}
              alt={`${title} Hero Background`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col lg:flex-row items-center justify-center lg:justify-start text-white lg:w-[70%]">

          {/* Social Icons */}
          {socialIcons.length > 0 && (
            <div className="flex lg:flex-col gap-6 lg:gap-12 lg:space-y-16 mb-6 lg:mb-0 lg:border-r-4 py-4 lg:pr-20">
              {socialIcons.map((icon, index) => (
                <div key={index} className="">
                  <Image src={icon.src} alt={icon.alt} />
                </div>
              ))}
            </div>
          )}

          {/* Text Content */}
          <div className="flex flex-col lg:flex-row items-center text-center lg:gap-20 lg:text-left lg:px-20">
            <h1 className="text-[48px] font-medium max-w-sm ">
              {title}
            </h1>

            <p className="max-w-xl text-lg text-white/90 mt-4  ">
              {description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
