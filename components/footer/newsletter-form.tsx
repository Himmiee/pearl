"use client";

import { useState } from "react";
import Image from "next/image";
import { useSubscribeNewsletter } from "@/data/projects.hooks";
// import { useSubscribeNewsletter } from "@/hooks/apiHooks";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const {
    mutate: subscribeNewsletter,
    isPending,
    isSuccess,
    isError,
  } = useSubscribeNewsletter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribeNewsletter(email, {
        onSuccess: () => {
          setEmail(""); // Clear the input field
        },
      });
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="bg-primary-60 py-16 px-4 sm:px-8 my-10">
      <div className="max-w-4xl mx-auto">
        <div className=" flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">NEWSLETTER</h3>
            <p className="text-sm text-gray-600">Stay Up-to-Date</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="relative flex items-center w-full max-w-[600px]"
          >
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full sm:w-[700px] h-12 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary-100 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
              disabled={isPending}
            >
              {isPending ? (
                <span className="loader"></span>
              ) : (
                <Image
                  src={"/icons/newsletter-logo.svg"}
                  height={20}
                  width={20}
                  alt="newsletter logo"
                />
              )}
            </button>
          </form>
        </div>
        {isSuccess && (
          <p className="text-green-500 mt-2">Subscription successful!</p>
        )}
        {isError && (
          <p className="text-red-500 mt-2">Failed to subscribe. Try again.</p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
