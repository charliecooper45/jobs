import { LinkIcon } from "@chakra-ui/icons";
import { Link as ChakraLink } from "@chakra-ui/react";

type LinkProps = {
  url: string;
  text: string;
};

const Link = ({ url, text }: LinkProps) => {
  return (
    <ChakraLink
      alignSelf="baseline"
      href={url}
      isExternal
      _hover={{ textDecoration: "none" }}
      _focus={{ outline: "none" }}
    >
      <LinkIcon mr="5px" /> {text}
    </ChakraLink>
  );
};

export default Link;
