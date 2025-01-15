import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { Axiosinstance } from "."


export const useFetchTestimonials = () => {
  return useQuery({
    queryKey: ["testimonials"], // Use an array for the query key
    queryFn: async () => {
      const response = await Axiosinstance.get("/testimonials");
      return response.data;
    },
  });
};


// Create Testimonial
export const useCreateTestimonial = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (testimonial: any) => {
      const response = await Axiosinstance.post("/testimonials", testimonial);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    },
  });
};

// Update Testimonial
export const useUpdateTestimonial = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, testimonial }: { id: string; testimonial: any }) => {
      const response = await Axiosinstance.put(`/testimonials/${id}`, testimonial);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    },
  });
};

// Delete Testimonial
export const useDeleteTestimonial = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const response = await Axiosinstance.delete(`/testimonials/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    },
  });
};
