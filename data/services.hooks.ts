/* eslint-disable @typescript-eslint/no-explicit-any */

import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { Axiosinstance } from ".";

// Fetch Services
export const useFetchServices = () => {
  return useQuery({
    queryKey: ["services"], // Use an array for the query key
    queryFn: async () => {
      const response = await Axiosinstance.get("/services");
      return response.data;
    },
  });
};

// Create Service
export const useCreateServices = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (service: any) => {
      const response = await Axiosinstance.post("/services", service);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] }); // Correct key
    },
  });
};
