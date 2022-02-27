import { JobsResponse } from "@/types/index";
import axios from "axios";
import { useQuery } from "react-query";

export const JOBS_QUERY_KEY = "jobs";

const fetchJobs = async (): Promise<JobsResponse> => {
  const response = await axios.get<JobsResponse>("/api/jobs");
  return response.data;
};

export const useJobsQuery = () => useQuery([JOBS_QUERY_KEY], () => fetchJobs());
