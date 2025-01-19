import { contactFormSchema, qouteFormSchema } from "@/validators";
import { Axiosinstance } from ".";
import { z } from "zod";
import { format } from "date-fns";

// sumit a file to an endpoint
export const submitFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await Axiosinstance.post("uploads/single", formData);
  return response.data;
};

export type ContactFormResponse = {
  status_code: number;
  message: string;
  data: {
    InsertedID: string;
  };
};

export type RequestQuoteResponse = {
  status_code: number;
  message: string;
  data: {
    id: string;
    type: string;
    full_name: string;
    email: string;
    phone: string;
    message: string;
    desired_start_date: string; // ISO date string
    country_code: string;
    country_name: string;
    currency: string;
    attachment: string; // URL of the attachment
    country: string;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
  };
};

export const submitContactFormDetails = async (
  data: z.infer<typeof contactFormSchema>
) => {
  const datatosubmit = {
    FullName: data.name,
    Email: data.email,
    Phone: data.phone,
    Subject: "",
    Message: data.message,
    Asset: "",
    From: "CONTACT",
  };

  // if the file is uploaded, add the file url to the data
  if (data.document) {
    const file = await submitFile(data.document);
    datatosubmit.Asset = file.data.url;
  }

  const response = await Axiosinstance.post("contact-forms", datatosubmit);
  return response.data as ContactFormResponse;
};



export const submitQuoteFormDetails = async (
  data: z.infer<typeof qouteFormSchema>
) => {
  const datatosubmit = {
    FullName: data.name,
    Email: data.email,
    Phone: data.phone,
    Message: data.message,
    Country: data.country,
    Attachment: "",
    ProjectType: data.project_type,
    EstimatedBudget: data.estimated_budget,
    Currency: data.currency,
    DesiredStartDate: format(data.desired_start_date, "yyyy-MM-dd HH:mm:ss"), // Use date-fns to format the date
  };
  
  
  // if the file is uploaded, add the file url to the data
  if (data.attachment) {
    const file = await submitFile(data.attachment);
    datatosubmit.Attachment = file.data.url;
  }
  console.log(datatosubmit);

  const response = await Axiosinstance.post("request_quote_form", datatosubmit);
  return response.data as RequestQuoteResponse;
};
