import React from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { PiFacebookLogoFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { StaticImageData } from "next/image";

interface BannerWithOverlayProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  socialIcons?: boolean;
}
const BannerWithOverlay = ({
  imageSrc,
  title,
  description,
  socialIcons = true,
}: BannerWithOverlayProps) => {
  return (
    <div className="relative w-full h-[604px]">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="banner"
        quality={100}
        className="object-cover object-center w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-[60%]"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center text-white px-4 gap-14">

        {/* Social icons for large Screen */}
        {socialIcons && (
          <div className="hidden md:flex flex-row gap-12">
            <div className="flex flex-col justify-between py-4">
              <FaTwitter className="text-2xl" />
              <PiFacebookLogoFill className="text-2xl" />
              <RiInstagramFill className="text-2xl" />
            </div>
            <div className="w-[4px] h-[241px] bg-white mr-9"></div>
          </div>
        )}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <h1 className="text-5xl font-medium md:mr-9 text-center md:text-start">{title}</h1>
          <p className="mt-4 text-lg max-w-[427px] text-center md:text-start">
            {description}
          </p>
        </div>

        {/* Social icons for Small Screen */}
        {socialIcons && (
          <div className="flex md:hidden flex-col gap-12">
            {/* <div className="w-[241px] h-[4px] bg-white"></div> */}
            <div className="flex flex-row justify-between gap-10">
              <FaTwitter className="text-3xl" />
              <PiFacebookLogoFill className="text-3xl" />
              <RiInstagramFill className="text-3xl" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BannerWithOverlay;
