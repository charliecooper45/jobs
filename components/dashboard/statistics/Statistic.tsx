import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

type StatisticProps = {
  label: string;
  value: number;
};

const Statistic = ({ label, value }: StatisticProps) => {
  return (
    <Stat textAlign="center">
      <StatLabel fontSize="m">{label}</StatLabel>
      <StatNumber color="brand.phlox" fontSize="3rem" fontWeight="light">
        {value}
      </StatNumber>
    </Stat>
  );
};

export default Statistic;
