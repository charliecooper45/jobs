import { Flex } from "@chakra-ui/react";
import { Job } from "@prisma/client";
import Heading from "../Heading";
import Link from "./Link";

type LinksProps = {
  job: Job;
};

const Links = ({ job }: LinksProps) => {
  const { jobUrl, companyUrl } = job;

  return (
    <Flex flexDir="column" mt="30px">
      <Heading text="links" />
      <Flex flexDir="column" mt="10px">
        {jobUrl && <Link text={`${job.company} Website`} url={jobUrl} />}
        {companyUrl && <Link text="Job Spec" url={companyUrl} />}
      </Flex>
    </Flex>
  );
};

export default Links;
