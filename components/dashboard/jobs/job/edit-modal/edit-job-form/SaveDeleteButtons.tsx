import { Button, Flex } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

type SaveDeleteButtonsProps = {
  isLoading: boolean;
  onClose: MouseEventHandler;
};

const SaveDeleteButtons = ({ isLoading, onClose }: SaveDeleteButtonsProps) => {
  return (
    <Flex flexDir="row-reverse" mt="30px">
      <Button
        background="linear-gradient(90deg, #6E3AFF 0%, #F009FE 100%)"
        borderRadius="65px"
        color="brand.white"
        h="40px"
        isLoading={isLoading}
        mr="10px"
        type="submit"
        w="100px"
        _hover={{
          background: "linear-gradient(90deg, #D509FB 0%, #F009FE 100%)",
        }}
        _focus={{
          background: "linear-gradient(90deg, #D509FB 0%, #F009FE 100%);",
        }}
      >
        Save
      </Button>
      <Button
        onClick={onClose}
        backgroundColor="brand.white"
        borderRadius="65px"
        color="brand.ultramarine"
        disabled={isLoading}
        h="40px"
        mr="10px"
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
        Delete
      </Button>
    </Flex>
  );
};

export default SaveDeleteButtons;
