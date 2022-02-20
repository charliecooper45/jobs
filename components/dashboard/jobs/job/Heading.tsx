import { Text } from "@chakra-ui/react";

type HeadingProps = {
  text: string;
};

const Heading = ({ text }: HeadingProps) => {
  return (
    <Text
      color="rgba(255, 255, 255, 0.4)"
      fontSize=".75rem"
      fontWeight="semibold"
      letterSpacing="0.1rem"
      textTransform="uppercase"
    >
      {text}
    </Text>
  );
};

export default Heading;
