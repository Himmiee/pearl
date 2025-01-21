import React from "react";
import homeherobg from "@/public/images/homepage/home-hero-bg.jpg";
import instagramImg from "@/public/icons/instagram.svg";
import twitterImg from "@/public/icons/twitter.svg";
import facebookImg from "@/public/icons/facebook.svg";
import { HeroLayout } from "../homepage/HeroLayout";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <HeroLayout
      backgroundImage={homeherobg}
      title="PAGE NOT FOUND  \n\n  PLEASE GO TO THE HOME."
      socialIcons={[
        { src: twitterImg, alt: "Twitter", href: "https://twitter.com" },
        { src: instagramImg, alt: "Instagram", href: "https://instagram.com" },
        { src: facebookImg, alt: "Facebook", href: "https://facebook.com" },
      ]}
      buttons={
        <div className="flex lg:gap-0 gap-1">
          <Link href={"/"}>
            <button className="bg-primary-100 hover:opacity-90 transform transition duration-200 hover:shadow-md flex items-center justify-center gap-1.5 font-poppins w-[160px] lg:w-[800px] h-[59px] text-white -tracking-[3%] font-bold">
              GO HOME
            </button>
          </Link>
        </div>
      }
    />
  );
};
