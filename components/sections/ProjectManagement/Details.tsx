import { ContentGrid } from "../Layouts/PMGrids";
import img from "@/public/images/services/png/pm-grid.png";
import imgList from "@/public/images/services/png/project-management-list 1.png";
import imgTwo from "@/public/images/services/png/pm-grid-2.png";
import imgListTwo from "@/public/images/services/png/labour-consulting 1.png";
import { HorizontalTimeline } from "../Layouts/GridStep";
import { timelineItems } from "@/lib/mockdata";

export const PMDetailSection = () => {
  return (
    <section className="lg:h-[550px]">
      <ContentGrid
        image={img}
        title="Capability Statement"
        description="We have expertly managed projects and programmes for public, commercial and private clients carrying out property development and refurbishment/ fit-out projects. Pearl Projects PM team help our client's manage their processes and also, lead on the project to ensure that all project dynamics, aspects and issues are identified, discussed and resolved."
        icon={imgList}
        reverse={false}
        className=""
      />
    </section>
  );
};

export const PMReverseDetailSection = () => {
  return (
    <section className="lg:h-[550px]">
      <ContentGrid
        image={imgTwo}
        title="Capability Statement"
        description="We have expertly managed projects and programmes for public, commercial and private clients carrying out property development and refurbishment/ fit-out projects. Pearl Projects PM team help our client's manage their processes and also, lead on the project to ensure that all project dynamics, aspects and issues are identified, discussed and resolved."
        icon={imgListTwo}
        reverse={true}
        className=""
      />
    </section>
  );
};

export const PMTimeLineSection = () => {
  return (
    <section className="w-full  ">
      <HorizontalTimeline items={timelineItems} />
    </section>
  );
};
