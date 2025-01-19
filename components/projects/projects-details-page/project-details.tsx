"use client";

import { useEffect, useState } from "react";

interface ProjectDetailsProps {
  projects_details: {
    service_tag: string;
    project_name: string;
    location: string;
    project_brief: string;
    project_delivery: string;
  };
}
export default function ProjectDetails({
  projects_details,
}: ProjectDetailsProps) {
  const services = [
    { id: "refurbishment", label: "Refurbishment" },
    { id: "conversion", label: "Conversion" },
    { id: "extension", label: "Extension" },
    { id: "design", label: "Design" },
  ];
  // Ensure the initial active service matches an available service
  const [activeService, setActiveService] = useState<string | null>(null);

  // Set the active service based on the service_tag if it matches
  useEffect(() => {
    if (
      services.some((service) => service.id === projects_details.service_tag)
    ) {
      setActiveService(projects_details.service_tag);
    } else {
      setActiveService(services[0].id); // Default to the first service if no match
    }
  }, [projects_details.service_tag]);

  return (
    <div className="flex min-h-screen bg-white auto-container lg:px-[5rem] lg:space-x-40 space-x-0">
      {/* Sidebar */}
      <nav className="w-64  p-6 lg:space-y-20 space-y-0 lg:flex lg:flex-col hidden ">
        <ul className="space-y-2">
          {services.map((service) => (
            <li key={service.id}>
              <button
                onClick={() => setActiveService(service.id)}
                className={`w-full text-left px-4 py-2  transition-colors ${
                  activeService === service.id
                    ? "border-l-2 border-primary-100 text-primary-100 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {service.label}
              </button>
            </li>
          ))}
        </ul>
        {/* <ul className="space-y-2">
          {services.map((service) => (
            <li key={service.id}>
              <button
                onClick={() => setActiveService(service.id)}
                className={`w-full text-left px-4 py-2  transition-colors ${
                  activeService === service.id
                    ? "border-l-2 border-primary-100 text-primary-100 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {service.label}
              </button>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {services.map((service) => (
            <li key={service.id}>
              <button
                onClick={() => setActiveService(service.id)}
                className={`w-full text-left px-4 py-2  transition-colors ${
                  activeService === service.id
                    ? " border-l-2 border-primary-100 text-primary-100 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {service.label}
              </button>
            </li>
          ))}
        </ul> */}
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl">
        <div className="space-y-12">
          <section>
            <h1 className="text-4xl font-bold text-primary-80 mb-2">
              CLIENT NAME
            </h1>
            <p className="text-gray-600">{projects_details.project_name}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-80 mb-4">
              LOCATION
            </h2>
            <p className="text-gray-600 leading-relaxed capitalize">
              {projects_details.location}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-80 mb-4">
              PROJECT BRIEF
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {projects_details.project_brief}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-80 mb-4">
              OUR DELIVERY
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                {projects_details.project_delivery}

                {/* We are accredited members of the following bodies. Consequently,
                our work is continually vetted and regularly checked to be of a
                high standard. */}
              </p>
              {/* <p className="text-gray-600 leading-relaxed">
                With 20 years experience across our management team, Pearl
                Projects and Development offers and provides exceptional,
                personalised and professional services to its client. We place a
                premium on the relationships we form and grow with our clients
                and service partners. Our placing a premium on our interaction
                with clients and service partnerships us build mutual trust
                across all parties, enabling our projects run smoothly and with
                minimal deviations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Given the combination of our architectural and project
                management expertise and experience, we deliver bespoke services
                that are tailored directly towards our clients needs. To achieve
                this, we have directed our energies towards delivering
                residential and commercial developments and works, providing
                outstanding quality and standards.
              </p> */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
