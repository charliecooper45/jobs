import { Text } from "@chakra-ui/react";

type HeadingProps = {
  text: string;
  color?: string;
  marginLeft?: string;
};

const Heading = ({ text, color, marginLeft = "0" }: HeadingProps) => {
  return (
    <Text
      color={color ?? "rgba(255, 255, 255, 0.4)"}
      fontSize=".75rem"
      fontWeight="semibold"
      letterSpacing="0.1rem"
      marginLeft={marginLeft}
      textTransform="uppercase"
    >
      {text}
    </Text>
  );
};

export default Heading;
