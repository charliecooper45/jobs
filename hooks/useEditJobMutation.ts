import { EditJobFormValues } from "@/components/dashboard/jobs/job/edit-modal/EditJobForm";
import { JobResponse } from "@/types/index";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { JOBS_QUERY_KEY } from "./useJobsQuery";
import { STATISTICS_QUERY_KEY } from "./useStatisticsQuery";

const editJob = async (
  id: string,
  data: EditJobFormValues
): Promise<JobResponse> => {
  const response = await axios.patch<JobResponse>(`/api/jobs/${id}`, data);
  return response.data;
};

export const useEditJobMutation = () => {
  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.invalidateQueries(JOBS_QUERY_KEY);
    queryClient.invalidateQueries(STATISTICS_QUERY_KEY);
  };

  return useMutation(
    ({ id, data }: { id: string; data: EditJobFormValues }) => {
      return editJob(id, data);
    },
    {
      // onMutate: TODO: optimistic update https://react-query.tanstack.com/guides/mutations
      onSuccess,
    }
  );
};
