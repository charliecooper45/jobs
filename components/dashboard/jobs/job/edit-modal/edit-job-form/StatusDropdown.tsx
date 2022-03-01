import { Select } from "@chakra-ui/react";
import { Status } from "@prisma/client";
import { UseFormRegister } from "react-hook-form";
import { EditJobFormValues } from ".";

type StatusDropdownProps = {
  register: UseFormRegister<EditJobFormValues>;
  name: "status";
};

const options: { value: Status; text: string }[] = [
  {
    value: Status.NEW,
    text: "New",
  },
  {
    value: Status.CV_SENT,
    text: "CV Sent",
  },
  {
    value: Status.INTERVIEW_ONE,
    text: "Interview One",
  },
  {
    value: Status.INTERVIEW_TWO,
    text: "Interview Two",
  },
  {
    value: Status.INTERVIEW_THREE,
    text: "Interview Three",
  },
  {
    value: Status.OFFERED,
    text: "Offered",
  },
  {
    value: Status.REJECTED,
    text: "Rejected",
  },
  {
    value: Status.ACCEPTED,
    text: "Accepted",
  },
];

const StatusDropdown = ({ register, name }: StatusDropdownProps) => {
  return (
    <Select
      id={name}
      {...register(name)}
      backgroundColor="rgba(255, 255, 255, 0.1)"
      border="none"
      borderRadius="65px"
      color="brand.white"
      focusBorderColor="brand.white"
      m="10px 0 30px 0"
    >
      {options.map(({ text, value }) => {
        return (
          <option key={value} value={value}>
            {text}
          </option>
        );
      })}
    </Select>
  );
};

export default StatusDropdown;
