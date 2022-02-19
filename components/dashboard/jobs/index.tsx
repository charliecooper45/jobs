import { useJobsQuery } from "@/hooks/useJobsQuery";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import StatusBadge from "./StatusBadge";

const Jobs = () => {
  const { data: jobs } = useJobsQuery();

  if (!jobs) {
    // TODO: skeleton
    return <div>Loading...</div>;
  }

  return (
    <>
      <Flex mt="50px" pl="40px">
        <Box flex="1" textAlign="left">
          Title
        </Box>
        <Box flex="1" textAlign="left">
          Salary
        </Box>
        <Box flex="1" textAlign="left">
          Status
        </Box>
        <Box flex="1" textAlign="left">
          Last Updated
        </Box>
      </Flex>
      <Accordion allowMultiple>
        {jobs.map((job) => {
          return (
            <AccordionItem key={job.id}>
              <AccordionButton p="40px">
                <Flex width="100%">
                  <Box flex="1" textAlign="left">
                    {" "}
                    {job.title} @{" "}
                    <Box as="span" color="brand.lightBlue" fontWeight="bold">
                      {job.company}
                    </Box>
                  </Box>
                  <Box flex="1" textAlign="left">
                    {job.salary}
                  </Box>
                  <Box flex="1" textAlign="left">
                    <StatusBadge status={job.status} />
                  </Box>
                  <Box flex="1" textAlign="left">
                    {job.updatedAt}
                  </Box>
                  <AccordionIcon />
                </Flex>
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );

  // return (
  //   <Table variant="simple" size="lg" mt="50px">
  //     <Thead>
  //       <Tr>
  //         <Th>Title</Th>
  //         <Th>Salary</Th>
  //         <Th>Status</Th>
  //         <Th>Last Updated</Th>
  //       </Tr>
  //     </Thead>
  //     <Tbody>
  //       {jobs.map((job) => {
  //         return (
  //           <Tr key={job.id}>
  //             <Td>
  //               {job.title} @{" "}
  //               <Box as="span" color="brand.lightBlue" fontWeight="bold">
  //                 {job.company}
  //               </Box>
  //             </Td>
  //             <Td>{job.salary}</Td>
  //             <Td>
  //               <StatusBadge status={job.status} />
  //             </Td>
  //             <Td>{job.updatedAt}</Td>
  //           </Tr>
  //         );
  //       })}
  //     </Tbody>
  //   </Table>
  // );
};

export default Jobs;
