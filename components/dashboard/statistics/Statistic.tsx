import { Statistics } from "@/types/index";
import {
  Flex,
  SkeletonCircle,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

export enum StatisticField {
  CvSent = "cvSent",
  Interviews = "interviews",
  Offered = "offered",
  Rejected = "rejected",
  Accepted = "accepted",
}

type StatisticProps = {
  label: string;
  field: StatisticField;
  last?: boolean;
  isLoading: boolean;
  statistics?: Statistics;
};

const parseValue = (
  isLoading: boolean,
  field: StatisticField,
  statistics?: Statistics
) => {
  if (isLoading || !statistics) {
    return null;
  }

  if (field === StatisticField.Interviews) {
    const { interviewOne, interviewTwo, interviewThree } = statistics;
    return interviewOne + interviewTwo + interviewThree;
  }

  return statistics[field];
};

const Statistic = ({
  label,
  field,
  last,
  isLoading,
  statistics,
}: StatisticProps) => {
  const borderRight = last ? "" : "1px solid rgba(255, 255, 255, 0.1)";

  const value = parseValue(isLoading, field, statistics);

  return (
    <Stat borderRight={borderRight} textAlign="center">
      <StatLabel fontSize="1rem">{label}</StatLabel>
      <StatNumber color="brand.magenta" fontSize="3rem" fontWeight="light">
        {isLoading ? (
          <Flex alignItems="center" h="72px" justifyContent="center">
            <SkeletonCircle
              endColor="brand.magenta"
              m="10px"
              size="5"
              startColor="brand.violet"
            />
          </Flex>
        ) : (
          value
        )}
      </StatNumber>
    </Stat>
  );
};

export default Statistic;
