import { services } from "@/lib/mockdata";
import { CustomGrid } from "../Layouts/GeneralConstructorGrid";

export const GMServices = () => {
  return (
    <div className="w-full  mx-auto p-4 lg:px-8">
      <div className="grid grid-cols-1 gap-6">
        {services.map((service, index) => (
          <CustomGrid
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            reverse={index % 2 == 0}
          />
        ))}
      </div>
    </div>
  );
};
