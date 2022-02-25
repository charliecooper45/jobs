import { Flex, Text } from "@chakra-ui/react";

type MarkerProps = {
  isActive: boolean;
  text: string;
};

const Marker = ({ isActive, text }: MarkerProps) => {
  return (
    <Flex justify="center" mb="10px" w="20%">
      <Text
        color={isActive ? "brand.white" : "rgba(255, 255, 255, 0.4)"}
        fontSize=".75rem"
        fontWeight="semibold"
        letterSpacing="0.1rem"
        textTransform="uppercase"
        h="20px"
      >
        {text}
      </Text>
    </Flex>
  );
};

export default Marker;
