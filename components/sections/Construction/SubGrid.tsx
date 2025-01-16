import { Button } from "@/components/ui/button";
import React from "react";
import { Timeline, TimelineItem } from "../Layouts/GridStep";
import { constructionSteps } from "@/lib/mockdata";

export const MethodStatementGrid: React.FC = () => {
  return (
    <main className="space-y-16">
      {" "}
      <section className="font-light text-black/60 space-y-12">
        <div>
          At Pearl Projects and Development, whenever we produce or present a
          Construction Method Statement, it will be to outline our approach to
          managing the construction works at a designated client site. Such a
          document once provided, will include specific text on the site and its
          establishment, the logistics of access and delivery of goods and
          services, and the process we adopt in managing the overall environment
          surrounding the property we are working on. Our produced statement
          will also describe our effort to ensure that the construction works
          undertaken cause minimum disruption to the adjacent residents,
          ensuring safe working conditions and a livable environment is
          maintained.
        </div>
        <div>
          The agreed contents from our produced Construction Method Statement
          will typically form part of the development plan submission and will
          be agreed upon with the planning authority for the Borough and/ or
          Council in which the client site resides. This Plan will constantly be
          reviewed and any changes or improvements required will be added and
          agreed on with the Council and the Plan will be revised and re-issued,
          as required.
        </div>
        <div>
          Where we produce and present a Construction Method Statement, which is
          a proposal to help third parties understand the nature of the works
          and the various construction activities associated with a development
          we are undertaking. Consequently, when a Construction Method Statement
          is produced by Parl Projects and Development, it will be subject to
          third-party approvals and therefore amendments are likely. Formal
          approvals and activity methodology approaches will be addressed in a
          detailed submission to the design team and Client. At the same time,
          we will liaise with neighbours around the site and with other
          interested parties throughout the lifecycle of the project, mainly as
          information is updated and as the project develops. Particular
          attention will be paid to ensure that neighbours adjacent to our
          client site are kept appraised of progress and future works on the
          project.
        </div>
        <div>
          Kindly note that the information being presented within this text is
          an example and format of how we will present key project activities
          for a designated client site in a Construction Method Statement.
          Generic statements herein are to be further developed into plans,
          procedures, and detailed method statements as the project develop. Any
          produced Plan will be used to disseminate information to interested
          parties. It will be used as the background for the detailed
          construction method and risk assessments, and will be included in all
          specialist trade contractor portions of the works.
        </div>
      </section>
      <section className="flex space-x-6">
        <Button className="shadow-none w-[150px] h-[50px] bg-[#2B2F84] text-white rounded-none hover:bg-[#2B2F84]/80 font-medium">
          Our Offer
        </Button>
        <Button className="shadow-none  w-[150px] h-[50px] border text-[#303030] bg-white rounded-none hover:bg-gray-50 font-medium">
          Our Offer
        </Button>
      </section>
    </main>
  );
};

export const MethodStatementRightGrid: React.FC = () => {
  return (
    <main className="space-y-12 pt-12  lg:py-0">
      <Timeline>
        {constructionSteps.map((step, index) => (
          <TimelineItem
            key={index}
            isLast={index === constructionSteps.length - 1}
          >
            <h2 className="text-2xl font-medium mb-4">{step.title}</h2>
            <p className="text-[16px] leading-relaxed text-black/60">
              {step.description}
            </p>
          </TimelineItem>
        ))}
      </Timeline>
    </main>
  );
};
