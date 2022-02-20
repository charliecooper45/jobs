import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Job } from "@prisma/client";
import StatusBadge from "./StatusBadge";

type JobProps = {
  job: Job;
};

const Job = ({ job }: JobProps) => {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
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
              <AccordionIcon width="20px" />
            </Flex>
          </AccordionButton>
          <AccordionPanel pb={4}>
            {isExpanded
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
              : null}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default Job;
