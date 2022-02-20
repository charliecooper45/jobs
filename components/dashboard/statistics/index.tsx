import { useStatisticsQuery } from "@/hooks/useStatisticsQuery";
import { Flex } from "@chakra-ui/react";
import Statistic from "./Statistic";

const Statistics = () => {
  const { data: statistics } = useStatisticsQuery();

  if (!statistics) {
    // TODO: loading
    return <div>loading</div>;
  }

  const {
    cvSent,
    interviewOne,
    interviewTwo,
    interviewThree,
    offered,
    rejected,
    accepted,
  } = statistics;
  const interviews = interviewOne + interviewTwo + interviewThree;

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
      <Statistic label="CVs Sent" value={cvSent} />
      <Statistic label="Interviews" value={interviews} />
      <Statistic label="Offers" value={offered} />
      <Statistic label="Rejected" value={rejected} />
      <Statistic label="Accepted" value={accepted} last />
    </Flex>
  );
};

export default Statistics;
