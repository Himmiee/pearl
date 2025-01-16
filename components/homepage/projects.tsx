/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/projects.tsx

"use client";

import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchProjects } from "@/data/projects.hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
// const projects = [
//   {
//     title: "Farringdon",
//     tag1: "Complete Refurbishment ",
//     tag2: "Interior Design",

//     image: "/images/homepage/project-1.jpg", // Replace with your image path
//   },
//   {
//     title: "Finsbury Park",
//     tag1: "Garage Conversion ",
//     tag2: "Interior Design",
//     image: "/images/homepage/project-2.jpg", // Replace with your image path
//   },
// ];

const Projects = () => {
  const { data, isLoading } = useFetchProjects();
  const projects = data?.data;

  const pathname = usePathname();

  if (isLoading) {
    return (
      <div className="lg:px-[6.5rem]">
        <Skeleton className="w-full  h-[18rem] my-10 " />;
      </div>
    );
  }
  console.log(projects);

  return (
    <section className=" my-10 lg:px-[6.5rem]">
      {/* Header Section */}

      {pathname !== "/projects" && (
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="lg:w-1/2 lg:px-0 px-4">
            <h2 className="text-4xl font-semibold uppercase text-primary-80">
              Projects
            </h2>
            <p className="text-gray-600 mt-8 lg:mb-0 mb-5">
              With every project, we explore the introduction of a healthy mix
              of soft and hard landscaping. We believe this is essential for the
              delivery of a well-designed and delivered space that fosters
              positive mental health and wellbeing.
            </p>
          </div>
          <Link href={"/projects"}>
            <button
              type="button"
              className="bg-primary-100 lg:-mt-20 mt-7 hover:opacity-90 transform transition duration-200 uppercase hover:shadow-md flex items-center justify-center gap-1.5 font-poppins w-[150px] h-[50px] text-white -tracking-[3%] font-bold"
            >
              All Projects
            </button>
          </Link>
        </div>
      )}

      {/* Projects Cards */}
      <div className="space-y-8">
        {projects?.map((project: any) => (
          <div
            key={project._id}
            className="relative h-96  overflow-hidden shadow-lg group"
          >
            {/* Background Image */}
            <Image
              src={project.first_image.image}
              alt={project.project_name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="absolute inset-0 flex lg:flex-row flex-col items-center lg:justify-between justify-center px-6">
              {/* Left: Title */}

              <Link
                href={`/projects/${project._id}`}
                className=" bg-white/60  flex  lg:w-[50%] w-full mb-5 lg:mb-0  h-16 items-center justify-between px-5 py-3"
              >
                <div className=" text-xl font-bold">{project.project_name}</div>

                <div className="text-xl">
                  <span className="flex items-center justify-center w-10 h-10 ">
                    →
                  </span>
                </div>
              </Link>

              {/* Right: Description */}
              <div className="text-white lg:text-xl text-lg flex  lg:pl-20 space-x-10 lg:w-[50%] w-full">
                <p className="font-bold">{project.service_tag}</p>

                <p className="font-bold">{project.tag2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
