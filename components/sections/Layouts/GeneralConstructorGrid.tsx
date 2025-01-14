import Image, { StaticImageData } from "next/image";

export const CustomGrid = ({
  title,
  description,
  imageSrc,
  reverse = false,
}: {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  reverse?: boolean;
}) => {
  return (
    <div
      className={`group grid lg:grid-cols-[45%_55%] gap-8 border border-gray-200 overflow-hidden transition-all duration-300 hover:bg-[#2a2f8d] ${
        reverse ? "lg:grid-cols-[55%_45%] lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Text Content */}
      <div className="flex flex-col justify-center p-6 lg:p-12 space-y-4 lg:space-y-8">
        <h2 className="text-[24px] font-semibold text-black group-hover:text-white">
          {title}
        </h2>
        <div className="lg:hidden">
          <Image src={imageSrc} alt={title} className="object-cover" />
        </div>
        <p className="text-[#303030] text-base font-normal max-w-lg group-hover:text-white leading-[1.8]">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div
        className={`${
          reverse ? "p-2 lg:pl-12" : "p-2 lg:pr-20 "
        } relative aspect-video lg:aspect-auto w-full h-full hidden lg:flex py-12`}
      >
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};
