// "use client";
// import React from "react";
// import { usePathname } from "next/navigation";
// import homeherobg from "@/public/assets/images/homepage/home-hero-bg.jpg";
// import instagramImg from "@/public/assets/icons/instagram.svg";
// import { HeroLayout } from "./HeroLayout";

// export const HeroSection: React.FC = () => {
//   const pathname = usePathname();

//   return (
//     <HeroLayout
//       backgroundImage={homeherobg}
//       title="WE PROVIDE SERVICES THAT HELP BRING YOUR IDEAS TO LIFE"
//       description="Details for our construction services"
//       socialIcons={[
//         { src: instagramImg, alt: "Instagram" },
//         { src: instagramImg, alt: "Instagram" },
//         { src: instagramImg, alt: "Instagram" },
//       ]}
//       showButtons={pathname === "/"} // Show buttons only on the homepage
//     />
//   );
// };

"use client";
import React from "react";
import homeherobg from "@/public/images/homepage/home-hero-bg.jpg";
import instagramImg from "@/public/icons/instagram.svg";
import twitterImg from "@/public/icons/twitter.svg";
import facebookImg from "@/public/icons/facebook.svg";
import { HeroLayout } from "./HeroLayout";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <HeroLayout
      backgroundImage={homeherobg}
      title="WE PROVIDE SERVICES  THAT  \n\n HELP BRING YOUR IDEAS TO LIFE"
      // description="Details for our construction services"
      socialIcons={[
        { src: twitterImg, alt: "Twitter", href: "https://twitter.com" },
        { src: facebookImg, alt: "Facebook", href: "https://facebook.com" },
        { src: instagramImg, alt: "Instagram", href: "https://instagram.com" },
      ]}
      buttons={
        <div className="flex lg:gap-0 gap-1">
          <Link href={"/request-a-quote"}>
            <button className="bg-primary-100 hover:opacity-90 uppercase transition duration-200 hover:shadow-md flex items-center justify-center gap-1.5 font-poppins w-[160px] lg:w-[363px] h-[59px] text-white tracking-wide font-bold">
              Request a Quote
            </button>
          </Link>
          <Link href={"/contact"}>
            <button className="bg-transparent border border-white text-white uppercase font-semibold py-2 px-6 hover:bg-white hover:text-black transition w-[160px] lg:w-[363px] h-[59px]">
              Contact
            </button>
          </Link>
        </div>
      }
    />
  );
};
