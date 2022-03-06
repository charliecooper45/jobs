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
      focusBorderColor="brand.white"
      outline="none"
      flex="1"
      mt="15px"
      resize="none"
      _focus={{
        outline: "none",
        border: "1px solid",
      }}
    />
  );
};

export default NoteTextarea;
