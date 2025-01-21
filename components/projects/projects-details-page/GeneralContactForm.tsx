import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { CustomInput } from "@/components/custom/Inputs/CustomInputs";
import { FormTextArea } from "@/components/custom/Inputs/CustomTextarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useSubmitProjectForm } from "@/data/projects.hooks";

export const GeneralContactForm: React.FC = () => {
  const { mutate, isPending, isError, isSuccess, error } =
    useSubmitProjectForm();

  const [termsError, setTermsError] = useState<string | null>(null);

  const methods = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
      agreeToTerms: false, // Initialize as false
    },
  });

  const { handleSubmit, watch, setValue, reset } = methods;
  const agreeToTerms = watch("agreeToTerms");

  const onSubmit = (data: {
    name: string;
    email: string;
    message: string;
    subject: string;
    agreeToTerms: boolean;
  }) => {
    console.log("Checkbox state:", agreeToTerms);

    if (!agreeToTerms) {
      setTermsError("You must agree to the terms before submitting.");
      return;
    }

    setTermsError(null); // Clear the error when checkbox is checked

    // Call mutate to submit form data
    // mutate({
    //   name: data.name,
    //   email: data.email,
    //   message: data.message,
    //   subject: data.subject,
    // });
    mutate(data, {
      onSuccess: () => {
        reset(); // Clear form inputs on successful submission
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <section className="space-y-6">
        <div className="text-[#303030] font-semibold text-xl">
          Are you planning a similar project? <br />
          Contact us via this form.
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <CustomInput
            isFormInput={true}
            name="name"
            label=""
            required={false}
            type="text"
            placeholder="Name"
          />

          {/* Email Input */}
          <CustomInput
            isFormInput={true}
            name="email"
            label=""
            required={false}
            type="email"
            placeholder="Email"
          />

          {/* Subject Input */}
          <CustomInput
            isFormInput={true}
            name="subject"
            label=""
            required={false}
            type="text"
            placeholder="Subject"
          />

          {/* Message Text Area */}
          <FormTextArea name="message" label="" placeholder="Message" />

          {/* Terms Agreement */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={agreeToTerms}
                onCheckedChange={(value: boolean) => {
                  setValue("agreeToTerms", value);
                }}
                id="agreeToTerms"
              />
              <label htmlFor="agreeToTerms">
                By continuing, you agree to our Terms of Service and Privacy
                Policy.
              </label>
            </div>
            {termsError && <div className="text-red-500">{termsError}</div>}
          </div>

          {/* Error Message */}
          {isError && (
            <div className="text-red-500">
              {error instanceof Error ? error.message : "An error occurred."}
            </div>
          )}

          {/* Success Message */}
          {isSuccess && (
            <div className="text-green-500">Form submitted successfully!</div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-[52px] text-[16px] bg-[#2B2F84] hover:bg-[#282b69dc] disabled:bg-[#282b69dc]"
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </section>
    </FormProvider>
  );
};
