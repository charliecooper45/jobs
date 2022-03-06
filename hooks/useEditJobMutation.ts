import { EditJobFormValues } from "@/components/dashboard/jobs/job/edit-modal/edit-job-form";
import { JobResponse } from "@/types/index";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { JOBS_QUERY_KEY } from "./useJobsQuery";
import { STATISTICS_QUERY_KEY } from "./useStatisticsQuery";

type EditJobData = {
  id: string;
  data: EditJobFormValues;
  newSkills: string[];
};

const editJob = async (editJobData: EditJobData): Promise<JobResponse> => {
  const { id, data, newSkills } = editJobData;
  const response = await axios.patch<JobResponse>(`/api/jobs/${id}`, {
    data,
    newSkills,
  });
  return response.data;
};

export const useEditJobMutation = () => {
  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.invalidateQueries(JOBS_QUERY_KEY);
    queryClient.invalidateQueries(STATISTICS_QUERY_KEY);
  };

  return useMutation(
    (editJobData: EditJobData) => {
      return editJob(editJobData);
    },
    {
      // onMutate: TODO: optimistic update https://react-query.tanstack.com/guides/mutations
      onSuccess,
    }
  );
};
