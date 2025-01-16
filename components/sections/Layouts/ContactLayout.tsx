import React from "react";
import Image from "next/image";
import { GeneralContactForm } from "../Forms/GeneralContactForm";
import largeImg from "@/public/images/services/png/construct.png";
import capImg from "@/public/images/services/png/cap.png";

export const ContactFormLayout = ({ formTitle }: { formTitle: string }) => {
  return (
    <div className="pb-6 lg:pb-16 ">
      <section className="grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-0 lg:space-x-16 max-w-[1500px] ">
        {/* Left Side - Large Image */}
        <div className="col-span-1 hidden lg:block h-full">
          <Image
            src={largeImg}
            alt="Construction Image"
            className="w-full object-cover h-full"
          />
        </div>

        {/* Right Side - Cap Image and Contact Form */}
        <div className="col-span-2 flex 2xl:px-8 flex-col  h-full lg:pr-24 lg:space-y-10">
          {/* Cap Image */}
          <div className="lg:flex justify-center items-center hidden">
            <Image
              src={capImg}
              alt="Cap Image"
              className="object-cover w-full h-96"
            />
          </div>

          {/* Contact Form */}
          <div className="w-full lg:pb-2  m lg:max-w-full lg:mx-0 lg:block">
            <GeneralContactForm formTitle={formTitle} />
          </div>
        </div>
      </section>
    </div>
  );
};
