import { Box, Flex, Text } from "@chakra-ui/react";

// TODO: component, prop types and parse the actual status into the progress bar
const Marker = ({ text }: { text: string }) => {
  return (
    <Flex justifyContent="center" mb="10px" textAlign="center">
      <Text
        color="rgba(255, 255, 255, 0.4)"
        fontSize=".75rem"
        fontWeight="semibold"
        letterSpacing="0.1rem"
        textTransform="uppercase"
        w="90px"
        borderBottom="1px solid grey"
        h="20px"
      >
        {text}
      </Text>
    </Flex>
  );
};

const markers = ["NEW", "CV SENT", "INTERVIEW", "OFFER", "ACCEPTED"];

const ProgressBar = () => {
  return (
    <Flex flexDir="column" pr="40px">
      <Flex justifyContent="space-between">
        {markers.map((marker) => {
          return <Marker key={marker} text={marker} />;
        })}
      </Flex>
      <Box
        h="10px"
        background="rgba(255, 255, 255, 0.1)"
        borderRadius="30px"
        overflow="hidden"
        w="100%"
      >
        <Box
          background="linear-gradient(90deg, #6E3AFF 0%, #F009FE 100%)"
          borderRadius="30px"
          h="100%"
          w="50%"
        />
      </Box>
    </Flex>
  );
};

export default ProgressBar;
