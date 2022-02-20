import { JobsResponse } from "@/types/index";
import axios from "axios";
import { useQuery } from "react-query";

const fetchJobs = async (): Promise<JobsResponse> => {
  const response = await axios.get<JobsResponse>("/api/jobs");
  return response.data;
};

export const useJobsQuery = () => useQuery(["jobs"], () => fetchJobs());
