import { Flex } from "@chakra-ui/react";
import Statistic from "./Statistic";

const Statistics = () => {
  return (
    <Flex
      backgroundColor="brand.darkBlue"
      h="150px"
      alignItems="center"
      borderRadius="20px"
      mt="20px"
    >
      <Statistic label="CVs Sent" value={12} />
      <Statistic label="Interviews" value={3} />
      <Statistic label="Offers" value={0} />
      <Statistic label="Rejected" value={0} />
      <Statistic label="Accepted" value={0} />
    </Flex>
  );
};

export default Statistics;
