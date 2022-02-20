import jobsLogo from "@/images/logo.svg";
import { Text } from "@chakra-ui/react";
import Image from "next/image";

const Heading = () => {
  return (
    <>
      <Image alt="Jobs Logo" priority src={jobsLogo} height="50px" />
      <Text fontSize="1.25rem" mt="40px" textAlign="center">
        Your one and only job search <br />
        organiser
      </Text>
    </>
  );
};

export default Heading;
