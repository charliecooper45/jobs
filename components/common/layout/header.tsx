import logo from "@/images/logo.svg";
import { Center, Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";

const Header = () => {
  return (
    <Flex as="header" color="white" h="120px" m="auto" maxW="1200px">
      <Center w="100px">
        <Image alt="Logo" src={logo} />
      </Center>
      <Spacer />
      <Center>
        <Text>Box 3</Text>
      </Center>
    </Flex>
  );
};

export default Header;
