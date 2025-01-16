
export type Testimonial = {
  ID: string;
  ClientName: string;
  ProjectName: string;
  Content: string;
};

import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export type InputContainerProps = {
  label: string;
  info?: string;
  required: boolean;
  children: React.ReactNode;
  error:
    | string
    | FieldError
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};
export type InputVariant =
  | "default"
  | "secondary"
  | "ghost"
  | "link"
  | "danger"
  | "outline";
export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  agreeToTerms: boolean;
};
