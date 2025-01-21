import BannerWithOverlay from "@/components/custom/banner-with-overlay";
import TestimonialAccordion from "@/components/modules/testimonial/testimonial-accordion";
import React from "react";
import TestimonialBackdropImage from "@/public/images/testimonials.jpeg";

const TestimonialPages = () => {
  return (
    <div>
      <BannerWithOverlay
        imageSrc={TestimonialBackdropImage}
        title="TESTIMONIALS"
        description="We carry out various types of projects, from minor refurbishment works to completing a new build development."
      />

      <div className="my-20">
        <TestimonialAccordion />
      </div>
    </div>
  );
};

export default TestimonialPages;
