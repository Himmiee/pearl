import { z } from "zod";
import { E164Number, parsePhoneNumberWithError } from "libphonenumber-js";
import { parsePhoneNumberFromString, isValidNumber } from "libphonenumber-js";

export const qouteFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z
    .string()
    .refine(
      (value) => {
        // Parse the phone number
        const phoneNumber = parsePhoneNumberFromString(value || "", "US"); // Replace "US" with your preferred default region
        // Ensure the phone number is valid and matches the region
        return phoneNumber?.isValid() || false;
      },
      { message: "Invalid phone number. Please enter a valid E.164 number." }
    )
    .transform((value) => {
      const phoneNumber = parsePhoneNumberFromString(value || "", "US");
      return phoneNumber?.number as E164Number; // Transform to E164Number
    }),
  country: z.string().min(2, {
    message: "Invalid country.",
  }),
  project_type: z.string().min(2, {
    message: "Invalid project type.",
  }),
  estimated_budget: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)), {
      message: "Estimated budget must be a valid number.",
    })
    .transform((val) => parseFloat(val)) // Convert string to number
    .refine((val) => val > 0, {
      message: "Estimated budget must be a positive number.",
    })
    .refine((val) => val >= 0.01, {
      message: "Estimated budget must be greater than 0.",
    }),

  currency: z
    .string()
    .min(3, {
      message: "Currency code must be at least 3 characters (e.g., USD).",
    })
    .refine(
      (value) => ["USD", "EUR", "GBP", "JPY"].includes(value),
      "Invalid currency. Please select a valid option."
    ),
  desired_start_date: z.date({
    message: "Invalid date.",
  }),
  attachment: z
    .custom<File>((value) => value instanceof File, {
      message: "Please upload a valid file.",
    })
    .nullable(),
  message: z.string().optional(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),

  phone: z
    .string()
    .refine(
      (value) => {
        // Parse the phone number
        const phoneNumber = parsePhoneNumberFromString(value || "", "US"); // Replace "US" with your preferred default region
        // Ensure the phone number is valid and matches the region
        return phoneNumber?.isValid() || false;
      },
      { message: "Invalid phone number. Please enter a valid E.164 number." }
    )
    .transform((value) => {
      const phoneNumber = parsePhoneNumberFromString(value || "", "US");
      return phoneNumber?.number as E164Number; // Transform to E164Number
    }),

  email: z.string().email({
    message: "Invalid email address.",
  }),
  document: z
    .custom<File | null>((value) => value === null || value instanceof File, {
      message: "Please upload a valid file.",
    })
    .nullable(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  agreement: z.boolean().refine((value) => value, {
    message: "Please agree to the terms and conditions.",
  }),
});

export const testimonialSchema = z.object({
  clientName: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  projectType: z.string().min(2, {
    message: "Invalid project type.",
  }),
  details: z.string().min(10, {
    message: "Details must be at least 10 characters.",
  }),
});
