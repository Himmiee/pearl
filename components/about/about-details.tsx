"use client";

import { useState, useRef } from "react";

const menuItems = [
  { id: "about", label: "About" },
  { id: "vision", label: "Our Vision" },
  { id: "mission", label: "Our Mission" },
  { id: "values", label: "Our Values" },
  { id: "membership", label: "Membership" },
];

export default function AboutDetails() {
  const [activeItem, setActiveItem] = useState("about");
  const sectionRefs = {
    about: useRef<HTMLElement>(null),
    vision: useRef<HTMLElement>(null),
    mission: useRef<HTMLElement>(null),
    values: useRef<HTMLElement>(null),
    membership: useRef<HTMLElement>(null),
  };

  const scrollToSection = (id: string) => {
    setActiveItem(id);
    const section = sectionRefs[id as keyof typeof sectionRefs].current;
    if (section) {
      const offset = 80; // Sticky header height
      const top = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-white px-[6.5rem] w-full lg:space-x-40 space-x-0 mt-40 mb-10 relative">
      {/* this is Sidebar */}
      <nav className="w-64  p-6 lg:space-y-20 space-y-0 lg:flex lg:flex-col hidden text-xl">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                // onClick={() => setActiveItem(item.id)}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2  transition-colors ${
                  activeItem === item.id
                    ? "border-l-2 border-primary-100 text-primary-100 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl">
        <div className="space-y-12">
          <section ref={sectionRefs.about} className="about-details">
            {/* <h1 className=" text-4xl font-semibold text-primary-80 mb-8">
              ABOUT OUR SERVICES
            </h1> */}
            <h1 className="lg:text-5xl text-4xl font-semibold text-primary-80 mb-8 ">
              <span className="block absolute left-32 lg:-top-14 -top-5 transform -translate-y-1/2 ">
                ABOUT OUR SERVICES
              </span>
            </h1>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                With several years of experience across our management team,
                Pearl Projects and Development offers and provides exceptional,
                personalised and professional services to its client. We place a
                premium on the relationships we form and grow with our clients
                and service partners. Our placing a premium on our interaction
                with clients and service partners helps us build mutual trust
                for all parties. This helps ensure our projects can run smoothly
                and with minimal disruptions.
              </p>
              <p>
                Also, given the combination of our architectural and project
                management expertise and experience, we can deliver bespoke
                services that are tailored to our client&apos;s needs. We
                achieve this by directing our energies towards delivering
                residential and commercial property developments with the
                outstanding in quality and standard.
              </p>
              <p>
                Furthermore, we can provide an end-to-end service to our
                customers. At the client&apos;s request, we facilitate and
                coordinate the design process and deliver the project as a
                turnkey development. Our project managers work closely with the
                client throughout a project, starting with the initial
                consultation process until handover shortly after completion.
              </p>
              <p>
                We aim to deliver value for money and are immensely proud of our
                heritage of exceptional craftsmanship and impeccable project
                insight provided by our team of professionals. We believe in the
                mantra, &apos;putting the customer first&apos;, and practice
                this in our client engagements. We insist that all our
                developments and projects are handled with the same level of
                care and importance that a client will ascribe to the project,
                prompting our client&apos;s desire to feel the Pearl
                Projects&apos; touch.
              </p>
              <p>
                Pearl Projects & Developments is active on project sites across
                London and in most regions across Greater London.
              </p>
            </div>
          </section>

          <section ref={sectionRefs.vision} className="about-details">
            <h2 className="text-4xl font-semibold text-primary-80 mb-4">
              OUR VISION
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Delivering projects that exceed client expectations and are
              incident-free.
            </p>
          </section>

          <section ref={sectionRefs.mission} className="about-details">
            <h2 className="text-4xl font-semibold text-primary-80 mb-4">
              OUR MISSION
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Ensure that project completion is within budget and on time,
              producing quality delivery and the client is offered our services
              at a fair and competitive price.
            </p>
          </section>

          <section ref={sectionRefs.values} className="about-details">
            <h2 className="text-4xl font-semibold text-primary-80 mb-4">
              OUR VALUE
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are committed to delivering a robust service and offer the
              assurance of integrity and professionalism in all we do. To our
              clients, suppliers, professional colleagues and sub-contractors,
              we make the commitment to fairness and equity in our dealings. On
              every project, we will be effective by mindfully applying time
              management, quality management and cost management principles in
              all we do. Most importantly, we are proud of our effort to be an
              equal opportunities organisation.
            </p>
          </section>

          <section ref={sectionRefs.membership} className="about-details">
            <h2 className="text-4xl font-semibold text-primary-80 mb-4">
              MEMBERSHIP
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Pearl Projects & Development is an accredited member of the
              Federation of Master Builders, whilst members of our management
              team are members of the Chartered Institute of Building (CIOB) and
              Association for Project Management (APM).
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
