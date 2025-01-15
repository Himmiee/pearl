import { Input } from "../../ui/input";
import { useFormContext } from "react-hook-form";
import { InputContainer } from "./InputContainer";
import classnames from "classnames";
import { HTMLInputTypeAttribute } from "react";

export const CustomInput = ({
  isFormInput,
  name,
  label,
  required,
  placeholder,
  type,
  className,
  showError = true, // New prop to control error display
}: {
  isFormInput: boolean;
  name: string;
  label: string;
  required: boolean;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  showError?: boolean; // New prop
}) => {
  const form = useFormContext();
  const register = form?.register;
  const errors = form?.formState?.errors;

  return (
    <>
      {isFormInput ? (
        <InputContainer
          label={label}
          required={required}
          error={showError ? errors[name]?.message : undefined}
        >
          <Input
            type={type}
            className={classnames(
              "border-[#484848]/30 h-12 text-sm placeholder:text-[#484848]/30",
              {
                "border-red-500": Boolean(errors[name]?.message), // Change the border color if there is an error
              }
            )}
            placeholder={placeholder}
            {...register(name)}
          />
        </InputContainer>
      ) : (
        <InputContainer label={label} required={required} error={undefined}>
          <Input placeholder={placeholder} className={className} />
        </InputContainer>
      )}
    </>
  );
};
