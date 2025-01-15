"use client";
import { useForm, FormProvider } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
// import { CustomInput } from "../../custom/Inputs/CustomInputs";
import { FormTextArea } from "@/components/custom/Inputs/CustomTextarea";
import { FormData } from "@/lib/types";
import { CustomInput } from "@/components/custom/Inputs/CustomInputs";
// import { CustomInput } from "../custom/Inputs/CustomInputs";

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
        <div className="text-[#303030] font-semibold text-xl">
          Are you planing for a similar project? <br />
          Contact us via this form.
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <CustomInput
            isFormInput={true}
            name="name"
            label="Name"
            required={false}
            type="text"
            placeholder="Enter your name"
          />
          <CustomInput
            isFormInput={true}
            name="email"
            label="Email"
            required={false}
            type="email"
            placeholder="Enter your email"
          />
          <CustomInput
            isFormInput={true}
            name="subject"
            label="Subject"
            required={false}
            type="text"
            placeholder="Enter the subject"
          />
          <FormTextArea
            name="message"
            label="Message"
            required={false}
            placeholder="Type your message here."
          />
          <div className="flex gap-3 items-center">
            <Checkbox />
            By continuing you agree to our Terms of Service and Privacy Policy.
          </div>
          <Button
            type="submit"
            className="w-full bg-[#2B2F84] hover:bg-[#373b91] text-white rounded-none"
          >
            Submit
          </Button>
        </form>
      </section>
    </FormProvider>
  );
};
