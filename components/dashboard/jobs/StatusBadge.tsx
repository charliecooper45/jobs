import { Flex } from "@chakra-ui/react";
import { Status } from "@prisma/client";
import { useMemo } from "react";

type StatusProps = {
  status: Status;
};

type BadgeOptions = {
  title: string;
  color: string;
};

const parseBadgeOptions = (status: Status): BadgeOptions => {
  switch (status) {
    case "NEW":
      return {
        title: status,
        color: "#fff",
      };
    case "CV_SENT":
      return {
        title: "CV SENT",
        color: "#fff",
      };
    case "INTERVIEW_ONE":
    case "INTERVIEW_TWO":
    case "INTERVIEW_THREE":
      return {
        title: "INTERVIEW",
        color: "#fff",
      };
    case "OFFERED":
      return {
        title: status,
        color: "#E6DC00",
      };
    case "ACCEPTED":
      return {
        title: status,
        color: "#00DC72",
      };
    case "REJECTED":
      return {
        title: status,
        color: "#F009FE",
      };
    default:
      throw new Error(`Status type ${status} not supported`);
  }
};

const StatusBadge = ({ status }: StatusProps) => {
  const { title, color } = useMemo(() => parseBadgeOptions(status), [status]);

  return (
    <Flex
      alignItems="center"
      border={`1px solid ${color}`}
      borderRadius="14px"
      color={color}
      fontSize=".75rem"
      h="20px"
      justifyContent="center"
      w="90px"
    >
      {title}
    </Flex>
  );
};

export default StatusBadge;
