import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { IContactForm } from "./interface";
import { z } from "zod";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const ContactFormFunction = async (data: IContactForm) => {
  const res = await axios.post(`${apiUrl}${Appurls.CONTACT_FORM_URL}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

export const Appurls = {
  CONTACT_FORM_URL: "contact-forms",
};

export const useUpdateContactForm = () => {
  return useMutation({
    mutationKey: ["contact-form"],
    mutationFn: ContactFormFunction,
  });
};

export const contactFormSchema = z.object({
  FullName: z
    .string()
    .min(1, "Full Name is required")
    .max(100, "Full Name is too long"),
  Email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  Subject: z
    .string()
    .min(1, "Subject is required")
    .max(150, "Subject is too long"),
  Message: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message is too long"),
  From: z.string().optional(),
});
