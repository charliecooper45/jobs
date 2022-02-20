import { Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      minH="60px"
      p="40px"
      justifyContent="center"
      alignItems="center"
    >
      <Text>&copy; Charlie Cooper {year}</Text>
    </Flex>
  );
};

export default Footer;
