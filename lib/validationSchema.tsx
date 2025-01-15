import { z } from "zod";

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
  From: z.string().optional(), // Optional field
});
