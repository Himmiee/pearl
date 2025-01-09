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
        className={`flex flex-col ${contentOrder} items-center gap-8 lg:p-6 h-full`}
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <Image
            src={image}
            alt={title}
            className="w-full h-auto  object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-4 flex flex-col lg:justify-center lg:items-center lg:text-center px-4">
          {icon && (
            <div className="bg-[#2B2F84] w-28 h-28 lg:flex justify-center items-center rounded-lg hidden">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image
                  src={icon as StaticImageData}
                  alt={title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-600 max-w-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};
