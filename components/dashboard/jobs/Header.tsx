import { Box, Flex, Spacer } from "@chakra-ui/react";

const headers = ["Title", "Salary", "Status", "Last Updated"];

const Header = () => {
  return (
    <Flex mt="20px" p="10px 30px">
      {headers.map((header, index) => (
        <Box
          key={header}
          color="brand.ultramarine"
          flex={index === 0 ? 1.3 : 1}
          fontSize=".75rem"
          fontWeight="semibold"
          letterSpacing="0.1rem"
          textAlign="left"
          textTransform="uppercase"
        >
          {header}
        </Box>
      ))}
      <Spacer maxW="50px" />
    </Flex>
  );
};

export default Header;
