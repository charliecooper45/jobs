import logo from "@/images/logo.svg";
import { Button, Center, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";

const Header = () => {
  return (
    <Flex as="header" color="white" minH="120px">
      <Center w="100px">
        <Image alt="Logo" src={logo} />
      </Center>
      <Spacer />
      <Center>
        <Button
          backgroundColor="brand.white"
          borderRadius="65px"
          color="brand.ultramarine"
          height="40px"
          _hover={{
            backgroundColor: "brand.white",
            color: "brand.magenta",
          }}
          _focus={{
            backgroundColor: "brand.white",
            color: "brand.magenta",
          }}
        >
          Logout
        </Button>
      </Center>
    </Flex>
  );
};

export default Header;
