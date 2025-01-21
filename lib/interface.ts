import { StaticImageData } from "next/image";

export interface FormTextAreaProps {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  maxWords?: number;
}


export interface TimelineItemContent {
  title: string;
  description:
    | string
    | {
        text: string;
        bullets: string[];
      };
  icon?: StaticImageData;
}

export interface IContactForm {
  FullName: string;
  Email: string;
  Phone?: string;
  Subject?: string;
  Message: string;
  Asset?: string;
  From: string;
  agreeToTerms:string;
}
