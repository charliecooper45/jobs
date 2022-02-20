import { useJobsQuery } from "@/hooks/useJobsQuery";
import { Accordion, Box, Flex, Spacer } from "@chakra-ui/react";
import Job from "./Job";

const Jobs = () => {
  const { data: jobs } = useJobsQuery();

  if (!jobs) {
    // TODO: skeleton
    return <div>Loading...</div>;
  }

  return (
    <>
      <Flex mt="50px" p="20px 40px">
        <Box
          color="brand.white"
          flex="1"
          textAlign="left"
          textTransform="uppercase"
        >
          Title
        </Box>
        <Box
          color="brand.white"
          flex="1"
          textAlign="left"
          textTransform="uppercase"
        >
          Salary
        </Box>
        <Box
          color="brand.white"
          flex="1"
          textAlign="left"
          textTransform="uppercase"
        >
          Status
        </Box>
        <Box
          color="brand.white"
          flex="1"
          textAlign="left"
          textTransform="uppercase"
        >
          Last Updated
        </Box>
        <Spacer maxWidth="20px" />
      </Flex>
      <Accordion allowMultiple>
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </Accordion>
    </>
  );
};

export default Jobs;
