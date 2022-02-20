import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

type StatisticProps = {
  label: string;
  value: number;
  last?: boolean;
};

const Statistic = ({ label, value, last }: StatisticProps) => {
  const borderRight = last ? "" : "1px solid rgba(255, 255, 255, 0.1)";

  return (
    <Stat borderRight={borderRight} textAlign="center">
      <StatLabel fontSize="1rem">{label}</StatLabel>
      <StatNumber color="brand.magenta" fontSize="3rem" fontWeight="light">
        {value}
      </StatNumber>
    </Stat>
  );
};

export default Statistic;
