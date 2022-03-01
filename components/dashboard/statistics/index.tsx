import { useStatisticsQuery } from "@/hooks/useStatisticsQuery";
import { Flex } from "@chakra-ui/react";
import Statistic, { StatisticField } from "./Statistic";

const statistics: {
  field: StatisticField;
  label: string;
}[] = [
  {
    field: StatisticField.CvSent,
    label: "CVs Sent",
  },
  {
    field: StatisticField.Interviews,
    label: "Interviews",
  },
  {
    field: StatisticField.Offered,
    label: "Offers",
  },
  {
    field: StatisticField.Rejected,
    label: "Rejected",
  },
  {
    field: StatisticField.Accepted,
    label: "Accepted",
  },
];

const Statistics = () => {
  const { data: statisticsData, isLoading } = useStatisticsQuery();

  return (
    <Flex
      alignItems="center"
      backgroundImage="linear-gradient(to bottom right, rgba(255,255,255,.10), rgba(255,255,255,.05));"
      borderRadius="20px"
      boxShadow="0px 10px 50px rgba(0, 0, 0, 0.1);"
      h="160px"
      mt="20px"
      p="60px 40px"
    >
      {statistics.map(({ field, label }, index) => (
        <Statistic
          key={field}
          field={field}
          isLoading={isLoading}
          label={label}
          statistics={statisticsData}
          last={index === statistics.length - 1}
        />
      ))}
    </Flex>
  );
};

export default Statistics;
