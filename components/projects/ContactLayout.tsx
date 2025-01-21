import React from "react";
import Image from "next/image";
// import { GeneralContactForm } from "../Forms/GeneralContactForm";
import largeImg from "@/public/images/services/png/construct.png";
import capImg from "@/public/images/services/png/cap.png";
import { GeneralContactForm } from "./GeneralContactForm";
// import { GeneralContactForm } from "../sections/Forms/GeneralContactForm";
// import { GeneralContactForm } from "../sections/Forms/GeneralContactForm";

export const ContactFormLayout: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6  lg:pr-[4.1rem] ">
      {/* Left Side - Large Image */}
      <div className="col-span-1 hidden lg:block h-[980px] ">
        <Image
          src={largeImg}
          alt="Construction Image"
          className="w-full object-cover h-full"
        />
      </div>

      {/* Right Side - Cap Image and Contact Form */}
      <div className="col-span-2 flex flex-col h-full px-4 sm:px-20 lg:px-36 lg:pr-44 lg:space-y-10">
        {/* Cap Image */}
        <div className="lg:flex justify-center items-center hidden">
          <Image
            src={capImg}
            alt="Cap Image"
            className="object-cover w-full h-96"
          />
        </div>

        {/* Contact Form */}
        <div className=" w-full md:max-w-[430px] flex justify-center items-center mx-auto lg:max-w-full lg:mx-0 lg:block">
          <GeneralContactForm />
        </div>
      </div>
    </section>
  );
};
