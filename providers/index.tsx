"use client";
import React from "react";
import QueryProvider from "./react-query";
// import { Toaster } from "@/components/ui/toaster";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryProvider>
      {children}
      {/* <Toaster /> */}
    </QueryProvider>
  );
};

export default Providers;
