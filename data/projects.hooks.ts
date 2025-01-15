/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { Axiosinstance } from ".";

// Fetch All Projects
export const useFetchProjects = () => {
  return useQuery({
    queryKey: ["projects"], // Query key for all projects
    queryFn: async () => {
      const response = await Axiosinstance.get("/projects");
      return response.data;
    },
  });
};

// Fetch One Project
export const useFetchProject = (id: string) => {
  return useQuery({
    queryKey: ["project", id], // Query key for a specific project
    queryFn: async () => {
      const response = await Axiosinstance.get(`/projects/${id}`);
      return response.data;
    },
    enabled: !!id, // Ensure the query only runs if an ID is provided
  });
};

// Add A Project
export const useCreateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (project: any) => {
      const response = await Axiosinstance.post("/projects", project);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] }); // Invalidate "projects" query to refresh data
    },
  });
};

// Edit Project
export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, project }: { id: string; project: any }) => {
      const response = await Axiosinstance.put(`/projects/${id}`, project);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] }); // Invalidate "projects" query to refresh data
      // queryClient.invalidateQueries({ queryKey: ["project", id] }); // Invalidate specific project query
    },
  });
};

// Delete Project
export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const response = await Axiosinstance.delete(`/projects/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] }); // Invalidate "projects" query to refresh data
    },
  });
};
