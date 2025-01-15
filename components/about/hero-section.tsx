import React from "react";
import homeherobg from "@/public/images/about/aboutHeroBg.jpg";
import instagramImg from "@/public/icons/instagram.svg";
import twitterImg from "@/public/icons/twitter.svg";
import facebookImg from "@/public/icons/facebook.svg";
import { HeroLayout } from "../homepage/HeroLayout";

export const HeroSection: React.FC = () => {
  return (
    <HeroLayout
      backgroundImage={homeherobg}
      title="ABOUT US"
      description="Information about our company and our philosophy"
      socialIcons={[
        { src: twitterImg, alt: "Twitter", href: "https://twitter.com" },
        { src: facebookImg, alt: "Facebook", href: "https://facebook.com" },
        { src: instagramImg, alt: "Instagram", href: "https://instagram.com" },
      ]}
    />
  );
};
