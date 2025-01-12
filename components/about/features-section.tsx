import React from "react";
import LabourConsultingDark from "@/public/images/about/labour-consulting-dark.png";
import LabourConsultingLight from "@/public/images/about/labour-consulting-light.png";
import Image from "next/image";

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="border rounded-lg p-6 text-center md:text-left bg-white hover:bg-primary-100 transition duration-300 group">
            <div className=" mb-4">
              <Image
                src={LabourConsultingDark}
                alt="Labour Consulting Icon"
                className="w-8 h-8 group-hover:hidden"
              />
              <Image
                src={LabourConsultingLight}
                alt="Labour Consulting Icon"
                className="w-8 h-8 hidden group-hover:block"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-4">
              Experienced team
            </h3>
            <p className="text-gray-700 group-hover:text-white">
              Our professionals and craftsmen will always deliver on the
              assurances offered regarding the quality of their work; adhere to
              agreed time schedules and will conduct regular site visits and
              inspections. Plan, disseminate, and coordinate agreed tasks from
              regular checkpoint meetings held; and commit to facilitating and
              delivering effective communications and interactions throughout
              the project.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border rounded-lg p-6 text-center md:text-left bg-white hover:bg-primary-100 transition duration-300 group">
            <div className=" mb-4">
              <Image
                src={LabourConsultingDark}
                alt="Labour Consulting Icon"
                className="w-8 h-8 group-hover:hidden"
              />
              <Image
                src={LabourConsultingLight}
                alt="Labour Consulting Icon"
                className="w-8 h-8 hidden group-hover:block"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-4">
              Trusted by customers
            </h3>
            <p className="text-gray-700 group-hover:text-white">
              Our clients trust us because our teams work closely with the
              client, addressing concerns and ensuring the issued brief is
              achieved. Our teams have continually and consistently proven that
              we are an upstanding firm; and our teams have shown they have the
              needed competence, experience, and commitment to deliver a
              client’s project.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border rounded-lg p-6 text-center md:text-left bg-white hover:bg-primary-100 transition duration-300 group">
            <div className=" mb-4">
              <Image
                src={LabourConsultingDark}
                alt="Labour Consulting Icon"
                className="w-8 h-8 group-hover:hidden"
              />
              <Image
                src={LabourConsultingLight}
                alt="Labour Consulting Icon"
                className="w-8 h-8 hidden group-hover:block"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-4">
              Certified Company
            </h3>
            <p className="text-gray-700 group-hover:text-white">
              As a certified firm, we will ensure and guarantee the project
              quality; champion project adherence to building regulations and
              by-laws; offer the client competitive pricing information; and
              commit to delivering a project per agreed terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
