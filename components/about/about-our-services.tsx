"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutOurServices: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  const sections = [
    {
      id: "about",
      title: "About", // For sidebar
      contentTitle: "ABOUT OUR SERVICES", // For content title
      content: (
        <p className="text-gray-600 leading-relaxed ">
          With several years of experience across our management team, Pearl
          Projects and Development offers and provides exceptional, personalised
          and professional services to its client. We place a premium on the
          relationships we form and grow with our clients and service partners.
          This helps ensure our projects run smoothly and with minimal
          disruptions.
          <br />
          <br />
          Furthermore, we can provide an end-to-end service to our customers. At
          the client’s request, we facilitate and coordinate the design process
          and deliver the project as a turnkey development. Our project managers
          work closely with the client throughout a project, starting with the
          initial consultation process until handover shortly after completion.
          <br />
          <br />
          We aim to deliver value for money and are immensely proud of our
          heritage of exceptional craftsmanship and impeccable project insight
          provided by our team of professionals. We believe in the mantra,
          putting the customer first, and practice this in our client
          engagements. We insist that all our developments and projects are
          handled with the same level of care and importance that a client will
          ascribe to the project, prompting our client&apos;s desire to feel the
          Pearl Projects touch.
          <br />
          <br />
          Pearl Projects & Developments is active on project sites across London
          and in most regions across Greater London.
        </p>
      ),
    },
    {
      id: "vision",
      title: "Our Vision",
      contentTitle: "OUR VISION",
      content: (
        <p className="text-gray-600 leading-relaxed ">
          Delivering projects that exceed client expectations and are
          incident-free.
        </p>
      ),
    },
    {
      id: "mission",
      title: "Our Mission",
      contentTitle: "OUR MISSION",
      content: (
        <p className="text-gray-600 leading-relaxed ">
          Ensure each project undertaken is within budget and on time, embodies
          quality delivery and the client is offered our service at a fair and
          competitive price.
        </p>
      ),
    },
    {
      id: "values",
      title: "Our Values",
      contentTitle: "OUR VALUES",
      content: (
        <p className="text-gray-600 leading-relaxed ">
          We are committed to delivering a robust service and offer the
          assurance of integrity and professionalism in all we do. To our
          clients, suppliers, professional colleagues and sub-contractors, we
          make the commitment to fairness and equity in our dealings.
        </p>
      ),
    },
    {
      id: "membership",
      title: "Membership",
      contentTitle: "MEMBERSHIP",
      content: (
        <p className="text-gray-600 leading-relaxed ">
          Pearl Projects & Development is an accredited member of the Federation
          of Master Builders, whilst members of our management team are members
          of the Chartered Institute of Builders (CIOB) and Association for
          Project Management (APM).
        </p>
      ),
    },
  ];

  const handleClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <section className="w-full min-h-[60vh] flex flex-col md:flex-row my-10 px-[6.5rem]">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 md:sticky top-0 bg-white">
        <nav className="space-y-4 px-6 py-8">
          <ul className="space-y-5">
            {sections.map((section) => (
              <li
                key={section.id}
                className={`flex items-center space-x-3 cursor-pointer text-lg sm:text-xl ${
                  activeSection === section.id
                    ? "text-primary-100 font-semibold"
                    : "text-gray-600"
                }`}
                onClick={() => handleClick(section.id)}
              >
                <span
                  className={`h-8 w-0.5 ${
                    activeSection === section.id
                      ? "bg-primary-100"
                      : "bg-transparent"
                  }`}
                ></span>
                <span>{section.title}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-3/4 px-6 sm:px-8 py-8">
        <AnimatePresence mode="wait">
          {sections
            .filter((section) => section.id === activeSection)
            .map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <h2 className="text-2xl sm:text-5xl uppercase font-bold text-[#4D5886]">
                  {section.contentTitle}
                </h2>
                <p className=" text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutOurServices;
