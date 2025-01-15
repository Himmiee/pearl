"use client";
import { useForm, FormProvider } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CustomInput } from "../../custom/Inputs/CustomInputs";
import { FormTextArea } from "@/components/custom/Inputs/CustomTextarea";
import { IContactForm } from "@/interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateContactForm } from "@/data/services.hooks";
import { Loader } from "lucide-react";
import { contactFormForServiceSchema } from "@/validators";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const GeneralContactForm = ({ formTitle }: { formTitle: string }) => {
  const methods = useForm<IContactForm>({
    resolver: zodResolver(contactFormForServiceSchema),
    defaultValues: {
      FullName: "",
      Email: "",
      Subject: "",
      Message: "",
      From: formTitle,
    },
    mode: "onChange",
  });

  const { handleSubmit } = methods;
  const { mutate, isPending, isError, isSuccess, data } =
    useUpdateContactForm();

  const onSubmit = (data: IContactForm) => {
    // console.log("Form Submitted:", data);
    mutate(data);
  };
  useEffect(() => {
    if (isError) {
      toast.error("An error occured");
    }
    if (isSuccess) {
      toast.success(`${data.message}`);
      methods.reset();
    }
  }, [isError, isSuccess, methods]);

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
            name="FullName"
            label=""
            required={false}
            type="text"
            placeholder="Name"
          />
          <CustomInput
            isFormInput={true}
            name="Email"
            label=""
            required={false}
            type="email"
            placeholder="Email"
          />
          <CustomInput
            isFormInput={true}
            name="Subject"
            label=""
            required={false}
            type="text"
            placeholder="Subject"
          />
          <FormTextArea
            name="Message"
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
              {isPending ? (
                <Loader className="text-lg animate-spin" />
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </section>
    </FormProvider>
  );
};
