import React from "react";
import { MethodStatementGrid, MethodStatementRightGrid } from "./SubGrid";

export const ConstructionDetailsComponent: React.FC = () => {
  return (
    <section className="space-y-12 p-4 lg:px-[6rem] lg:auto-container">
      <div className="text-[48px] text-[#4D5886] font-medium pt-12">METHOD STATEMENT</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {/* Left Column */}
        <MethodStatementGrid />
        {/* Right Column */}
        <MethodStatementRightGrid />
      </div>
    </section>
  );
};
