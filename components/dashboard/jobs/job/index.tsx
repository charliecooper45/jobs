import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Job, Skill } from "@prisma/client";
import { format } from "date-fns";
import StatusBadge from "../StatusBadge";
import EditModal from "./edit-modal";
import Heading from "./Heading";
import Links from "./links";
import ProgressBar from "./ProgressBar";
import Skills from "./Skills";

type JobProps = {
  job: Job & {
    skills: Skill[];
  };
  isLastJob?: boolean;
};

// TODO: remove unnecessary render
const Job = ({ job, isLastJob = false }: JobProps) => {
  const formattedUpdatedAt = format(
    new Date(job.updatedAt),
    "do LLL yyyy 'at' HH:mm"
  );

  return (
    <AccordionItem border="none">
      {({ isExpanded }) => {
        const iconColor = isExpanded
          ? "brand.magenta"
          : "rgba(255, 255, 255, 0.4)";
        const borderBottom =
          isLastJob && !isExpanded ? "" : "1px solid rgba(255, 255, 255, 0.1)";

        return (
          <>
            <AccordionButton p="20px 30px 0 30px" _focus={{ outline: "none" }}>
              <Flex
                alignItems="center"
                borderBottom={borderBottom}
                paddingBottom="20px"
                width="100%"
              >
                <Box flex="1.3" textAlign="left">
                  <Box lineHeight="18px">{job.title}</Box>
                  <Box
                    as="span"
                    color="rgba(255, 255, 255, 0.4)"
                    fontSize="0.75rem"
                    fontWeight="semibold"
                    letterSpacing="1px"
                    textTransform="uppercase"
                  >
                    {job.company}
                  </Box>
                </Box>
                <Flex alignItems="center" flex="1" textAlign="left">
                  {job.salary}
                </Flex>
                <Flex alignItems="center" flex="1" textAlign="left">
                  <StatusBadge status={job.status} />
                </Flex>
                <Flex alignItems="center" flex="1" textAlign="left">
                  {formattedUpdatedAt}
                </Flex>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  textAlign="left"
                  width="50px"
                >
                  <EditModal job={job} />
                  <AccordionIcon color={iconColor} width="30px" />
                </Flex>
              </Flex>
            </AccordionButton>
            <AccordionPanel p="30px">
              <Flex marginRight="20px">
                <Flex flex="2.3" flexDir="column">
                  <ProgressBar />
                  <Skills skills={job.skills} />
                  <Links job={job} />
                </Flex>
                <Flex flex="2" flexDir="column">
                  <Heading text="Notes" />
                  <Box
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    borderRadius="15px"
                    mt="15px"
                    p="15px"
                  >
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque vel quam tempor, varius dui congue, ultricies
                      nulla. In porta iaculis ligula a ullamcorper. Integer
                      gravida sapien ut dictum interdum. Nullam sed lectus sed
                      urna tristique tristique at nec tortor. Sed nisl magna,
                      rhoncus vitae magna in, congue pellentesque odio. Morbi ut
                      elit sollicitudin, ultricies est eget, accumsan libero.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </AccordionPanel>
          </>
        );
      }}
    </AccordionItem>
  );
};

export default Job;
