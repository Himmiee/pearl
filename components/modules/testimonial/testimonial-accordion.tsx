"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  useFetchTestimonials,
} from "@/data/testimonials.hooks";
import { Testimonial } from "@/types";
import { LiaSpinnerSolid } from "react-icons/lia";

const TestimonialAccordion = () => {
  const [currentItem, setCurrentItem] = useState<string | undefined>("item-0");
  const { data, isLoading } = useFetchTestimonials();
  const testimonials: Testimonial[] = data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <LiaSpinnerSolid className="animate-spin text-[#2B2F84] text-5xl" />
      </div>
    );
  }


  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={currentItem}
        onValueChange={(value) => setCurrentItem(value)}
      >
        {testimonials?.map((testimonial, index) => (
          <AccordionItem key={testimonial.ID} value={`item-${index}`}>
            <AccordionTrigger
              className={`flex md:grid grid-cols-3 items-center justify-between gap-3 py-4 px-5 md:px-20 text-sm font-medium transition-all text-left min-h-[190px] ${
                currentItem === `item-${index}`
                  ? "bg-[#2B2F841A] text-[#2B2F84]"
                  : "bg-white text-black"
              }`}
            >
              <div className="hidden md:block text-center font-medium text-xl">
                {testimonial.ClientName}
              </div>

              <div className="hidden md:block text-end text-lg">
                {testimonial.ProjectName}
              </div>

              {/* for small device */}
              <div className="block md:hidden grow text-center">
                <div className="font-semibold text-xl mb-2">
                  {testimonial.ClientName}
                </div>
                <div className="text-lg">{testimonial.ProjectName}</div>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <p className="max-w-[750px] px-3 md:px-0 mx-auto text-center text-base py-14 font-light">
                {testimonial.Content}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default TestimonialAccordion;
