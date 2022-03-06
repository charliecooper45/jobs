import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import { Job, Skill } from "@prisma/client";
import { format } from "date-fns";
import StatusBadge from "../StatusBadge";
import EditModal from "./edit-modal";
import Heading from "./Heading";
import Links from "./links";
import Skills from "./Skills";
import StatusBar from "./status-bar";

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
            <AccordionButton
              as="div"
              cursor="pointer"
              p="20px 30px 0 30px"
              _focus={{ outline: "none" }}
            >
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
                  <StatusBar status={job.status} />
                  <Skills skills={job.skills} />
                  <Links job={job} />
                </Flex>
                <Flex flex="2" flexDir="column">
                  <Heading text="Notes" />
                  <Textarea
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    borderColor="none"
                    borderRadius="15px"
                    cursor="default"
                    flex="1"
                    mt="15px"
                    p="15px"
                    readOnly
                    resize="none"
                    _focus={{
                      outline: "none",
                    }}
                    _hover={{
                      borderColor: "none",
                    }}
                  >
                    {job.note}
                  </Textarea>
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
