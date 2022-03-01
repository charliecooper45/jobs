import { Input } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";
import { EditJobFormValues } from ".";

type JobInputProps = {
  register: UseFormRegister<EditJobFormValues>;
  name: "title" | "company" | "jobUrl" | "companyUrl";
};

const JobInput = ({ register, name }: JobInputProps) => {
  return (
    <Input
      {...register(name)}
      id={name}
      backgroundColor="rgba(255, 255, 255, 0.1)"
      border="none"
      borderRadius="65px"
      color="brand.white"
      focusBorderColor="brand.white"
      minH="40px"
      m="10px 0 30px 0"
    />
  );
};

export default JobInput;
