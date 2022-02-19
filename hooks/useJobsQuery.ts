import { Job } from "@prisma/client";
import axios from "axios";
import { useQuery } from "react-query";

const fetchJobs = async (): Promise<Job[]> => {
  const response = await axios.get<Job[]>("/api/jobs");
  return response.data;
};

export const useJobsQuery = () => useQuery(["jobs"], () => fetchJobs());
