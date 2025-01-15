import React from "react";
import homeherobg from "@/public/images/projects/projects-hero-bg.jpg";
import instagramImg from "@/public/icons/instagram.svg";
import twitterImg from "@/public/icons/twitter.svg";
import facebookImg from "@/public/icons/facebook.svg";
import { HeroLayout } from "../homepage/HeroLayout";
// import { HeroLayout } from "./HeroLayout";

export const HeroSection: React.FC = () => {
  return (
    <HeroLayout
      backgroundImage={homeherobg}
      title="PROJECTS"
      description="Let's introduce you to some of our memorable and signature projects below. Browse through our gallery of past projects and reach out for more information as you decide on your shortlist."
      socialIcons={[
        { src: twitterImg, alt: "Twitter", href: "https://twitter.com" },
        { src: facebookImg, alt: "Facebook", href: "https://facebook.com" },
        { src: instagramImg, alt: "Instagram", href: "https://instagram.com" },
      ]}
    />
  );
};
