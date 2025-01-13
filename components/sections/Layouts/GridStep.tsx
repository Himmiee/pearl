import Image, { StaticImageData } from "next/image";
import React from "react";

interface TimelineItemProps {
  children: React.ReactNode;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  isLast = false,
}) => {
  return (
    <div className="flex gap-6">
      {/* Timeline */}
      <div className=" flex-col items-center hidden lg:flex">
        {/* Square */}
        <div className="w-12 h-12 rounded bg-[#2B2F84] shrink-0"></div>
        {/* Line */}
        {!isLast && (
          <div className="w-2 border-t-0 border-b-0 h-[calc(100%-3rem)] border-[#2B2F84] bg-white border"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 lg:pb-20 lg:px-12">{children}</div>
    </div>
  );
};

interface TimelineProps {
  children: React.ReactNode;
}

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="w-full max-w-4xl mx-auto lg:pl-32 relative">{children}</div>
  );
};


interface HorizontalTimelineItemProps {
  title: string;
  description: string;
  icon?: StaticImageData;
  isLast?: boolean;
}

export const HorizontalTimelineItem: React.FC<HorizontalTimelineItemProps> = ({
  title,
  description,
  icon,
  // isLast = false,
}) => {
  return (
    <div className="flex flex-col items-start md:items-center lg:items-start w-full">
      {/* Icon Container */}
      <div className="relative flex items-center md:justify-center lg:justify-start w-full">
        <div className="w-16 h-16 bg-[#2B2F84] flex justify-center rounded items-center z-10">
          {icon && (
            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src={icon}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>
        {/* Horizontal Line */}
        {/* {!isLast && ( */}
          <div className="hidden lg:block absolute left-16 right-0 h-2 bg-white border-[1px] border-l-0 border-[#2B2F84]" />
        {/* )} */}
      </div>

      {/* Content */}
      <div className="mt-6 max-w-sm md:max-w-[430px] lg:max-w-sm md:text-center lg:text-start">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

interface HorizontalTimelineProps {
  items: Array<{
    title: string;
    description: string;
    icon?: StaticImageData;
  }>;
}

export const HorizontalTimeline: React.FC<HorizontalTimelineProps> = ({
  items,
}) => {
  return (
    <div className="w-full mx-auto px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
        {items.map((item, index) => (
          <HorizontalTimelineItem
            key={index}
            {...item}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalTimeline;