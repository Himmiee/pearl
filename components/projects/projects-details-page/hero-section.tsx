import React from "react";
import homeherobg from "@/public/images/projects/project-detail-bg.jpg";
import instagramImg from "@/public/icons/instagram.svg";
import twitterImg from "@/public/icons/twitter.svg";
import facebookImg from "@/public/icons/facebook.svg";
import { HeroLayout } from "@/components/homepage/HeroLayout";

export const HeroSection: React.FC = () => {
  return (
    <HeroLayout
      backgroundImage={homeherobg}
      title="CLIENT PROJECT"
      description="Explore in more detail about the client's project, our brief received and our approach to bringing the project to life."
      socialIcons={[
        { src: twitterImg, alt: "Twitter", href: "https://twitter.com" },
        { src: facebookImg, alt: "Facebook", href: "https://facebook.com" },
        { src: instagramImg, alt: "Instagram", href: "https://instagram.com" },
      ]}
    />
  );
};
