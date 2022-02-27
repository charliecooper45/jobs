import axios from "axios";
import { useQuery } from "react-query";
import { Statistics } from "@/types/index";

export const STATISTICS_QUERY_KEY = "statistics";

const fetchStatistics = async (): Promise<Statistics> => {
  const response = await axios.get<Statistics>("/api/statistics");
  return response.data;
};

export const useStatisticsQuery = () =>
  useQuery([STATISTICS_QUERY_KEY], () => fetchStatistics());
