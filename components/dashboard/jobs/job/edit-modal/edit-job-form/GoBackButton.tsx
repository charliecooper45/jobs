import { Button, Flex } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

type GoBackButtonProps = {
  onClose: MouseEventHandler;
};

const GoBackButton = ({ onClose }: GoBackButtonProps) => {
  return (
    <Flex mt="30px">
      <Button
        onClick={onClose}
        backgroundColor="brand.white"
        borderRadius="65px"
        color="brand.ultramarine"
        h="40px"
        w="100px"
        _hover={{
          backgroundColor: "brand.white",
          color: "brand.magenta",
        }}
        _focus={{
          backgroundColor: "brand.white",
          color: "brand.magenta",
        }}
      >
        Go Back
      </Button>
    </Flex>
  );
};

export default GoBackButton;
