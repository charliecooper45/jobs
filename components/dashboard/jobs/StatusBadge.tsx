import { Badge } from "@chakra-ui/react";
import { Status } from "@prisma/client";
import { ThemeTypings } from "@chakra-ui/styled-system";

type StatusProps = {
  status: Status;
};

type BadgeOptions = {
  title: string;
  variant: "outline" | "solid" | "subtle";
  colorScheme: ThemeTypings["colorSchemes"];
};

const parseBadgeOptions = (status: Status): BadgeOptions => {
  switch (status) {
    case "NEW":
      return {
        title: status,
        colorScheme: "gray",
        variant: "outline",
      };
    case "CV_SENT":
      return {
        title: status,
        colorScheme: "purple",
        variant: "outline",
      };
    case "REJECTED":
      return {
        title: status,
        colorScheme: "red",
        variant: "solid",
      };
    default:
      return {
        title: status,
        colorScheme: "green",
        variant: "outline",
      };
  }
};

const StatusBadge = ({ status }: StatusProps) => {
  const { title, variant, colorScheme } = parseBadgeOptions(status);

  return (
    <Badge colorScheme={colorScheme} variant={variant}>
      {title}
    </Badge>
  );
};

export default StatusBadge;
