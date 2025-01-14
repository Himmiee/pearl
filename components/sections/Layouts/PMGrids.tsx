import Image, { StaticImageData } from "next/image";
import React from "react";

interface ContentGridProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  icon?: React.ReactNode | StaticImageData;
  reverse?: boolean;
  className?: string;
}

export const ContentGrid: React.FC<ContentGridProps> = ({
  image,
  title,
  description,
  icon,
  reverse = false,
  className = "",
}) => {
  // Determine flex direction based on reverse prop
  const contentOrder = reverse ? "lg:flex-row-reverse" : "lg:flex-row";

  return (
    <div className={`w-full h-full ${className}`}>
      <div
        className={`flex flex-col ${contentOrder} items-center lg:gap-12 h-full`}
      >
        {/* Image Section */}
        <div className="w-full md:w-3/5 lg:w-[45%]">
          <Image
            src={image}
            alt={title}
            className="w-full h-auto  object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-4 flex flex-col md:justify-center md:items-center lg:text-center ">
          {icon && (
            <div className="bg-[#2B2F84] w-28 h-28 lg:flex justify-center items-center hidden">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image
                  src={icon as StaticImageData}
                  alt={title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}
          {!reverse && <h3 className="text-2xl font-medium">{title}</h3>}
          <p
            className={`${
              reverse ? "lg:pt-6" : "pt-0"
            } text-gray-600 max-w-[430px] lg:max-w-[85%] md:text-center `}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
