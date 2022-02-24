import { useJobsQuery } from "@/hooks/useJobsQuery";
import { Accordion, Flex, Spinner } from "@chakra-ui/react";
import Header from "./Header";
import Job from "./job";

const Jobs = () => {
  const { data: jobs, isLoading } = useJobsQuery();

  const content =
    !isLoading && jobs ? (
      jobs.map((job, index) => {
        const isLastJob = index === jobs.length - 1;
        return <Job key={job.id} job={job} isLastJob={isLastJob} />;
      })
    ) : (
      <Flex alignItems="center" h="331px" justifyContent="center">
        <Spinner size="xl" speed="0.8s" />
      </Flex>
    );

  return (
    <>
      <Header />
      <Flex
        background="linear-gradient(133.62deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
        boxShadow="0px 10px 50px rgba(0, 0, 0, 0.1)"
        borderRadius="20px"
        flexDir="column"
      >
        <Accordion allowMultiple padding="5px 0">
          {content}
        </Accordion>
      </Flex>
    </>
  );
};

export default Jobs;
