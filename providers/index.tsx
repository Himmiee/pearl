"use client";
import React from "react";
import QueryProvider from "./react-query";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryProvider>
      {children}
    </QueryProvider>
  );
};

export default Providers;
