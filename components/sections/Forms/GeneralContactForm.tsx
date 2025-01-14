"use client";
import { useForm, FormProvider } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CustomInput } from "../../custom/Inputs/CustomInputs";
import { FormTextArea } from "@/components/custom/Inputs/CustomTextarea";
import { FormData } from "@/lib/types";

export const GeneralContactForm: React.FC = () => {
  const methods = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      agreeToTerms: false,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <FormProvider {...methods}>
      <section className="space-y-6">
        <div className="text-[#303030] font-medium text-[22px] lg:text-[24px] ">
          Are you interested in a similar service? <br /> Contact us via this
          form.
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          <CustomInput
            isFormInput={true}
            name="name"
            label=""
            required={false}
            type="text"
            placeholder="Name"
          />
          <CustomInput
            isFormInput={true}
            name="email"
            label=""
            required={false}
            type="email"
            placeholder="Email"
          />
          <CustomInput
            isFormInput={true}
            name="subject"
            label=""
            required={false}
            type="text"
            placeholder="Subject"
          />
          <FormTextArea
            name="message"
            label=""
            required={false}
            placeholder="Message"
          />
          <div className="space-y-8">
            {" "}
            <div className="flex gap-3 items-center">
              <Checkbox />
              By continuing you agree to our Terms of Service and Privacy
              Policy.
            </div>
            <Button
              type="submit"
              className="w-full bg-[#2B2F84] h-[58px]  hover:bg-[#2B2F84]/90 text-white "
            >
              Submit
            </Button>
          </div>
        </form>
      </section>
    </FormProvider>
  );
};
