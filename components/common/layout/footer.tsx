import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" h="120px" maxW="1200px" m="auto" backgroundColor="red">
      <Box w="100px">Charlie Cooper</Box>
    </Flex>
  );
};

export default Footer;
