"use client";

import { ContactFormLayout } from "@/components/projects/projects-details-page/ContactLayout";
import { HeroSection } from "@/components/projects/projects-details-page/hero-section";
import ProcessGallery from "@/components/projects/projects-details-page/process-gallery";
import ProjectDetails from "@/components/projects/projects-details-page/project-details";
// import { Skeleton } from "@/components/ui/skeleton";
import { useFetchProject } from "@/data/projects.hooks";
import { useParams } from "next/navigation";

export default function ProjectsPage() {
  const { id } = useParams();
  console.log("Project ID:", id);
  const projectId = Array.isArray(id) ? id[0] : id;
  console.log("Project ID:", projectId);
  const { data, isLoading } = useFetchProject(projectId as string);
  const projects_details = data?.data;
  console.log("Project Details:", projects_details);

  if (isLoading) {
    return (
      <>
        <div className="auto-container space-y-10 animate-pulse">
          {/* Hero Section Skeleton */}
          <div className="h-60 w-full bg-gray-200 rounded-md"></div>

          {/* Process Gallery Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-40 w-full bg-gray-200 rounded-md"></div>
            <div className="h-40 w-full bg-gray-200 rounded-md"></div>
            <div className="h-40 w-full bg-gray-200 rounded-md"></div>
            <div className="h-40 w-full bg-gray-200 rounded-md"></div>
            <div className="h-40 w-full bg-gray-200 rounded-md"></div>
            <div className="h-40 w-full bg-gray-200 rounded-md"></div>
          </div>

          {/* Project Details Skeleton */}
          <div className="space-y-6">
            <div className="h-6 w-2/5 bg-gray-200 rounded-md"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded-md"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded-md"></div>
          </div>

          {/* Contact Form Skeleton */}
          <div className="h-40 w-full bg-gray-200 rounded-md"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <HeroSection />
      <div className="auto-container">
        <ProcessGallery images={projects_details?.images || []} />
      </div>

      <ProjectDetails projects_details={projects_details || {}} />
      <ContactFormLayout />
    </>
  );
}
