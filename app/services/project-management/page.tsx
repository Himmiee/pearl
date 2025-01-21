import {
  AchievementLayout,
  AchievementBottomLayout,
} from "@/components/sections/Layouts/AchievementsLayouts";
import { ContactFormLayout } from "@/components/sections/Layouts/ContactLayout";
import {
  PMDetailSection,
  PMReverseDetailSection,
  PMTimeLineSection,
} from "@/components/sections/ProjectManagement/Details";
import { ProjectManangementHeroSection } from "@/components/sections/ProjectManagement/Hero";

const ProjectManagementPage: React.FC = () => {
  return (
    <section className="space-y-8 md:space-y-24 ">
      <ProjectManangementHeroSection />
      <section className=" space-y-8 md:space-y-24 ">
        <section className="space-y-8 md:space-y-24 p-4 lg:auto-container lg:px-[6rem] lg:auto-container ">
          <PMDetailSection />
          <PMTimeLineSection />
          <PMReverseDetailSection />
        </section>
        <section className="lg:px-[6rem] lg:auto-container ">
          <AchievementLayout />
          <AchievementBottomLayout />
        </section>
      </section>
      <ContactFormLayout formTitle="Project Management" />
    </section>
  );
};

export default ProjectManagementPage;
