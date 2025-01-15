"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactFormSchema } from "@/validators";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputFile } from "@/components/custom/fileinput";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import CustomPhonenumberInput from "@/components/custom/Inputs/CustomPhonenumberInput";
import toast from "react-hot-toast";
import { submitContactFormDetails } from "@/data/formsSubmission";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      document: null,
      message: "",
      agreement: false,
    },
  });

  const { reset } = form;

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    setIsSubmitting(true);
    try {
      // Submit the form data
      const res = await submitContactFormDetails(data);
      toast.success(res.message);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      reset();
      const fileInput = document.getElementById(
        "formDocument"
      ) as HTMLInputElement;
      fileInput.value = "";
    }
  };

  const requiredstar = "after:content-['*'] after:text-red-600 after:ml-1 after:mt-[2px]";

  return (
    <div className="max-w-[604px] mx-auto">
      <h4 className="mb-3 text-[24px] font-semibold">Send us a message</h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`text-[16px] ${requiredstar}`}>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className="h-[46px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`text-[16px] ${requiredstar}`}>Phone number</FormLabel>
                <CustomPhonenumberInput
                  value={field.value}
                  onChange={field.onChange}
                  className=""
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`text-[16px] ${requiredstar}`}>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="infojohndoe@gmail.com"
                    {...field}
                    className="h-[46px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* document */}
          <FormField
            control={form.control}
            name="document"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Document</FormLabel>
                <InputFile onChange={field.onChange} />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`text-[16px] ${requiredstar}`}>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here..."
                    {...field}
                    className="h-[100px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Agreement */}
          <FormField
            control={form.control}
            name="agreement"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms2"
                    checked={field.value} // Bind to form's state
                    onCheckedChange={(checked) => field.onChange(checked)} // Update form state
                  />
                  <label
                    htmlFor="terms2"
                    className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-[1.4rem]"
                  >
                    By continuing you agree to our{" "}
                    <strong>Terms of Service and Privacy Policy.</strong>
                  </label>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-[52px] text-[16px] bg-[#2B2F84] hover:bg-[#282b69dc] disabled:bg-[#282b69dc]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : " SUBMIT"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
