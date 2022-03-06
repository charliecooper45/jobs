import { Textarea } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";
import { EditJobFormValues } from ".";

type NoteProps = {
  register: UseFormRegister<EditJobFormValues>;
};

const Note = ({ register }: NoteProps) => {
  return (
    <Textarea
      {...register("note")}
      backgroundColor="rgba(255, 255, 255, 0.1)"
      border="none"
      borderRadius="15px"
      focusBorderColor="brand.white"
      outline="none"
      flex="1"
      mt="15px"
      _focus={{
        outline: "none",
        border: "1px solid",
      }}
    />
  );
};

export default Note;
