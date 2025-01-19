"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { qouteFormSchema as formSchema } from "@/validators";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Countries, ProjectType } from "@/data";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { InputFile } from "@/components/custom/fileinput";
import CountrySelect from "@/components/custom/country-select";
import CustomPhonenumberInput from "@/components/custom/Inputs/CustomPhonenumberInput";
import { submitQuoteFormDetails } from "@/data/formsSubmission";
import toast from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea";

const QouteForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      project_type: "Construction",
      estimated_budget: 0.0,
      currency: "GBP",
      desired_start_date: new Date(),
      attachment: null,
      message: "",
    },
  });

  const { reset } = form;

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Submit the form data
      // console.log(data);
      setIsSubmitting(true);
      const res = await submitQuoteFormDetails(data);
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
      <h4 className="mb-3 text-[24px] font-semibold">
        Contact you as soon as possible.
      </h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`text-[16px] ${requiredstar}`}>Your name</FormLabel>
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
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* country select */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`text-[16px] ${requiredstar}`}>Country</FormLabel>
                <CountrySelect
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  countries={Countries} // Pass your countries array here
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-wrap gap-4">
            {/* Project Type */}
            <div className="flex-1 min-w-[200px]">
              <FormField
                control={form.control}
                name="project_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={`text-[16px] ${requiredstar}`}>Project Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-[46px]">
                          <SelectValue placeholder="Construction" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ProjectType.map((project, index) => (
                          <SelectItem
                            className="cursor-pointer"
                            key={index}
                            value={project}
                          >
                            {project}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Currency */}
            <div className="flex-1 min-w-[150px]">
              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={`text-[16px] ${requiredstar}`}>Currency</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-[46px]">
                          <SelectValue placeholder="GBP" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {["USD", "EUR", "GBP", "JPY"].map((currency, index) => (
                          <SelectItem
                            className="cursor-pointer"
                            key={index}
                            value={currency}
                          >
                            {currency}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Estimated Budget */}
            <div className="flex-1 min-w-[200px]">
              <FormField
                control={form.control}
                name="estimated_budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={`text-[16px] ${requiredstar}`}>Estimated Budget</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0.00"
                        {...field}
                        className="h-[46px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* desired start date */}
          <FormField
            control={form.control}
            name="desired_start_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className={`text-[16px] ${requiredstar}`}>Desired Start Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "h-[46px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date.getDay() === 0
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* attachment */}
          <FormField
            control={form.control}
            name="attachment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Attachment</FormLabel>
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
                <FormLabel className="text-[16px]">Message</FormLabel>
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

          <Button
            type="submit"
            className="w-full h-[52px] text-[16px] bg-[#2B2F84] hover:bg-[#282b69dc] disabled:bg-[#282b69dc]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "REQUEST A QUOTE"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default QouteForm;
