import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { FormTextAreaProps } from "@/lib/interface";
import { useFormContext } from "react-hook-form";
import { InputContainer } from "./InputContainer";
import { Label } from "@/components/ui/label";
import classnames from "classnames";

interface CustomTextareaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  value,
  onChange,
  placeholder = "Type here...",
  className = "",
  rows = 4,
}) => {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
      rows={rows}
    />
  );
};

export default CustomTextarea;

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  name,
  label,
  required = false,
  placeholder = "Type your message here.",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const textareaError = errors[name]?.message;

  return (
    <InputContainer label={""} required={false} error={textareaError}>
      <Label htmlFor={name} className="">
        {label}{" "}
        {required && (
          <span className="text-red-500 text-base relative -top-[2px]">*</span>
        )}
      </Label>
      <Textarea
        id={name}
        placeholder={placeholder}
        className={classnames(
          "mt-3 border-[#484848]/30  text-sm placeholder:text-[#484848]/30",
          {
            "border-red-500": Boolean(errors[name]?.message), // Change the border color if there is an error
          }
        )}
        {...register(name)}
        rows={8}
      />
    </InputContainer>
  );
};
 