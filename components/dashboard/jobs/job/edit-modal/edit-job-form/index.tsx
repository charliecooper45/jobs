import { useEditJobMutation } from "@/hooks/useEditJobMutation";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import { Job, Skill } from "@prisma/client";
import { MouseEventHandler } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Heading from "../../Heading";
import EditJobButtons from "./SaveDeleteButtons";
import EditJobInput from "./JobInput";
import Note from "./Note";
import SkillsSelector from "./SkillsSelector";
import StatusDropdown from "./StatusDropdown";
import SaveDeleteButtons from "./SaveDeleteButtons";
import GoBackButton from "./GoBackButton";

type EditJobProps = {
  job: Job & {
    skills: Skill[];
  };
  onClose: MouseEventHandler;
};

export type EditJobFormValues = {
  title: string;
  company: string;
  jobUrl: string | null;
  companyUrl: string | null;
  status: string;
};

const EditJobForm = ({ job, onClose }: EditJobProps) => {
  const { title, company, jobUrl, companyUrl, status, skills, note } = job;
  const { handleSubmit, register } = useForm<EditJobFormValues>({
    defaultValues: {
      title,
      company,
      jobUrl,
      companyUrl,
      status,
    },
  });
  const { mutate, isLoading } = useEditJobMutation();

  const handleClick: MouseEventHandler = (e) => {
    e.stopPropagation();
  };

  const onSubmit: SubmitHandler<EditJobFormValues> = (data) => {
    mutate({ id: job.id, data });
  };

  return (
    <Flex
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      onClick={handleClick}
      background="linear-gradient(133.62deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)"
      boxShadow="0px 10px 50px rgba(0, 0, 0, 0.1)"
      borderRadius="20px"
      h="90vh"
      maxW="1200px"
    >
      <Flex flex="50% 0 0" flexDir="column" p="40px 20px 40px 40px">
        <Heading color="brand.white" marginLeft="10px" text="Job Title" />
        <EditJobInput name="title" register={register} />
        <Heading color="brand.white" marginLeft="10px" text="Company" />
        <EditJobInput name="company" register={register} />
        <Heading color="brand.white" marginLeft="10px" text="Skills" />
        <SkillsSelector skills={skills} />
        <Heading color="brand.white" marginLeft="10px" text="Website" />
        <EditJobInput name="companyUrl" register={register} />
        <Heading color="brand.white" marginLeft="10px" text="Job Spec" />
        <EditJobInput name="jobUrl" register={register} />
        <Spacer flex="1" />
        <GoBackButton onClose={onClose} />
      </Flex>
      <Flex flex="1" flexDir="column" h="90vh" p="40px 40px 40px 20px">
        <Heading color="brand.white" marginLeft="10px" text="Status" />
        <StatusDropdown name="status" register={register} />
        <Heading color="brand.white" marginLeft="10px" text="Notes" />
        <Note note={note} />
        <SaveDeleteButtons isLoading={isLoading} onClose={onClose} />
      </Flex>
    </Flex>
  );
};

export default EditJobForm;
