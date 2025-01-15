import BannerWithOverlay from "@/components/custom/banner-with-overlay";
import QouteForm from "@/components/modules/quote/qoute-form";
import QuoteFormImage from "@/public/images/quote 2.jpeg";
import Image from "next/image";
import React from "react";
import QouteBackdropImage from "@/public/images/qoute 1.jpeg";

const RequestQuote = () => {
  return (
    <div>
      <BannerWithOverlay
        imageSrc={QouteBackdropImage}
        title="Request a Quote"
        description="We carry out various types of projects, from minor refurbishment works to completing a new build development."
      />
      <div className="flex flex-col md:flex-row my-20">
        {/* Left Image Section */}
        <div className="hidden md:block w-full md:w-[40%] h-[400px] md:h-[1169px]">
          <Image
            src={QuoteFormImage}
            alt="form Image"
            className="object-cover h-full w-full"
          />
        </div>

      

        {/* Form Section */}
        <div className="flex-grow p-4">
          <QouteForm />
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
