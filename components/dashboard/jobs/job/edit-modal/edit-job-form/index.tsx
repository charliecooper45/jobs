import { useEditJobMutation } from "@/hooks/useEditJobMutation";
import { Flex, Spacer } from "@chakra-ui/react";
import { Job, Skill } from "@prisma/client";
import { MouseEventHandler, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Heading from "../../Heading";
import GoBackButton from "./GoBackButton";
import EditJobInput from "./JobInput";
import NoteTextarea from "./NoteTextarea";
import SaveDeleteButtons from "./SaveDeleteButtons";
import SkillsSelector from "./SkillsSelector";
import StatusDropdown from "./StatusDropdown";

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
  note: string | null;
};

const EditJobForm = ({ job, onClose }: EditJobProps) => {
  const { title, company, jobUrl, companyUrl, status, skills, note } = job;
  const [newSkills, setNewSkills] = useState(() =>
    skills.map((skill) => skill.name)
  );
  const { handleSubmit, register } = useForm<EditJobFormValues>({
    defaultValues: {
      title,
      company,
      jobUrl,
      companyUrl,
      status,
      note,
    },
  });
  const { mutate, isLoading } = useEditJobMutation();

  const handleClick: MouseEventHandler = (e) => {
    e.stopPropagation();
  };

  const handleAddSkill = (newSkill: string) => {
    setNewSkills([...newSkills, newSkill]);
  };

  const onSubmit: SubmitHandler<EditJobFormValues> = (data) => {
    mutate({ id: job.id, data, newSkills });
  };

  return (
    <Flex
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      onClick={handleClick}
      background="linear-gradient(133.62deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)"
      boxShadow="0px 10px 50px rgba(0, 0, 0, 0.1)"
      borderRadius="20px"
      flex="1"
      h="90vh"
      maxW="1200px"
    >
      <Flex flex="50% 0 0" flexDir="column" p="40px 20px 40px 40px">
        <Heading color="brand.white" marginLeft="10px" text="Job Title" />
        <EditJobInput name="title" register={register} />
        <Heading color="brand.white" marginLeft="10px" text="Company" />
        <EditJobInput name="company" register={register} />
        <Heading color="brand.white" marginLeft="10px" text="Skills" />
        <SkillsSelector newSkills={newSkills} onAddSkill={handleAddSkill} />
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
        <NoteTextarea register={register} />
        <SaveDeleteButtons isLoading={isLoading} onClose={onClose} />
      </Flex>
    </Flex>
  );
};

export default EditJobForm;
