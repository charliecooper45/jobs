import { Textarea } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";
import { EditJobFormValues } from ".";

type NoteTextareaProps = {
  register: UseFormRegister<EditJobFormValues>;
};

const NoteTextarea = ({ register }: NoteTextareaProps) => {
  return (
    <Textarea
      {...register("note")}
      backgroundColor="rgba(255, 255, 255, 0.1)"
      border="1px solid rgba(255, 255, 255, 0)"
      borderRadius="15px"
      borderColor="none"
      outline="none"
      flex="1"
      mt="15px"
      resize="none"
      _focus={{
        borderColor: "brand.white",
        outline: "none",
      }}
      _hover={{
        borderColor: "none",
      }}
    />
  );
};

export default NoteTextarea;
