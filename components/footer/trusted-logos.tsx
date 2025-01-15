import Image from "next/image";

const LOGOS = [
  {
    src: "/logos/master_logo.png",
    alt: "Federation of Master Builders",
  },
  {
    src: "/logos/Trustatrader_Logo.png",
    alt: "Certification Logo",
  },
  {
    src: "/logos/Rate_People_Logo.png",
    alt: "Rated People",
  },
] as const;

export function TrustedLogos() {
  return (
    <div className="flex flex-row  lg:gap-3 gap-4 justify-center lg:justify-start">
      {LOGOS.map(({ src, alt }) => (
        <Image
          key={alt}
          src={src}
          alt={alt}
          width={120}
          height={40}
          className=" object-contain"
        />
      ))}
    </div>
  );
}
