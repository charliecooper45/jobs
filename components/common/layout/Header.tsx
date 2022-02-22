import logo from "@/images/logo.svg";
import { Button, Center, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogoutClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  return (
    <Flex as="header" color="white" minH="120px">
      <Center w="100px">
        <Image alt="Logo" src={logo} />
      </Center>
      <Spacer />
      <Center>
        <Button
          onClick={handleLogoutClick}
          backgroundColor="brand.white"
          borderRadius="65px"
          color="brand.ultramarine"
          h="40px"
          isLoading={isLoading}
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
