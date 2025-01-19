"use client";
import Image from "next/image";
import React from "react";
import QuoteFormImage from "@/public/images/quote 2.jpeg";
import ContactImage1 from "@/public/images/contact1.jpeg";
import ContactImage2 from "@/public/images/Contacttwo.jpeg";
import ContactImage3 from "@/public/images/Contactthree.jpeg";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/modules/contact/contact-form";
import dynamic from "next/dynamic";

// Dynamic import of the Map component
const ContactMap = dynamic(() => import("@/components/modules/contact/map"), {
  ssr: false,
});



const ContactPage = () => {
  return (
    <div>
      {/* Map Section */}
      <ContactMap
        lat={51.505}
        lng={-0.09}
        zoom={13}
        location={"Pearl Projects"}
      />

      {/* cards */}
      <div className="container mx-auto my-20 ">
        <h3 className="text-[#4D5886] text-3xl font-medium ml-6 md:ml-0">CONTACT</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 md:justify-center gap-6 my-10">
          {/* First Card */}
          <div className="hover:bg-[#2B2F84] p-9 pt-12 min-h-[488px] hover:text-white transition-all duration-100">
            <Image
              src={ContactImage1}
              alt="contact image"
              className="object-cover h-[168px] w-full object-bottom mx-auto mb-12"
            />
            <div className="flex flex-col gap-9">
              <h6 className="text-lg font-bold">Head Office</h6>
              <p>+44 (0) 078 350 80705</p>
              <p>+234 (0) 080 235 178605</p>
              <p>info@pearl-projects.com</p>
            </div>
          </div>

          {/* Second Card */}
          <div className="hover:bg-[#2B2F84] p-9 pt-12 min-h-[488px] hover:text-white transition-all duration-100 ">
            <Image
              src={ContactImage2}
              alt="contact image"
              className="object-cover h-[168px] w-full object-center mx-auto mb-12"
            />
            <h6 className="my-9 text-lg font-bold">Head Office</h6>
            <p className="mb-9">
              We carry out various types of projects, from minor refurbishment
              works to completing a new build development.
            </p>
            <Button variant={"ghost"} className="font-bold text-xl">
              Open Map
            </Button>
          </div>

          {/* Third Card */}
          <div className="hover:bg-[#2B2F84] p-9 pt-12 min-h-[488px] hover:text-white transition-all duration-100 ">
            <Image
              src={ContactImage3}
              alt="contact image"
              className="object-cover h-[168px] w-full object-center mx-auto mb-12"
            />
            <h6 className="my-9 text-lg font-bold">Head Office</h6>
            <p className="mb-9">
              We carry out various types of projects, from minor refurbishment
              works to completing a new build development.
            </p>
            <Button variant={"ghost"} className="font-bold text-xl">
              Open Map
            </Button>
          </div>
        </div>
      </div>

      {/* the form */}
      <div className="flex flex-col md:flex-row my-24">
        <div className="hidden md:block w-full md:w-[40%] md:min-h-[869px]">
          <Image
            src={QuoteFormImage}
            alt="form Image"
            className="object-cover h-full w-full "
          />
        </div>

        {/* Form Section */}
        <div className="flex-grow p-6">
          <ContactForm />
        </div>
      </div>

      {/* Our Team */}
      <div className="container px-5 md:px-0 mx-auto my-20">
        <h3 className="text-[#4D5886] text-3xl font-medium">OUR TEAM</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 md:justify-center gap-6 my-10">
          {/* First Card */}
          <div className="border-l-4 border-[#2B2F84] p-9 pt-12 min-h-[241px]">
            <h3 className="text-2xl font-medium mb-4">PEARL PROJECT</h3>
            <h5 className="mb-8">Head Office</h5>
            <div
              className="font-bold text-xl cursor-pointer"
              onClick={() => alert("Open Map")}
            >
              Open Map
            </div>
          </div>

          {/* Second Card */}
          <div className="border-l-4 border-[#2B2F84] p-9 pt-12 min-h-[241px]">
            <h3 className="text-2xl font-medium mb-4">PEARL PROJECT</h3>
            <h5 className="mb-8">Head Office</h5>
            <div
              className="font-bold text-xl cursor-pointer"
              onClick={() => alert("Open Map")}
            >
              Open Map
            </div>
          </div>

          {/* Third Card */}
          <div className="border-l-4 border-[#2B2F84] p-9 pt-12 min-h-[241px]">
            <h3 className="text-2xl font-medium mb-4">PEARL PROJECT</h3>
            <h5 className="mb-8">Head Office</h5>
            <div
              className="font-bold text-xl cursor-pointer"
              onClick={() => alert("Open Map")}
            >
              Open Map
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
