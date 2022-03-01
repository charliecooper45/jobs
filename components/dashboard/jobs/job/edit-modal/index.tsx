import { EditIcon } from "@chakra-ui/icons";
import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { Job, Skill } from "@prisma/client";
import { MouseEventHandler } from "react";
import EditJobForm from "./edit-job-form";

type EditModalProps = {
  job: Job & {
    skills: Skill[];
  };
};

const EditModal = ({ job }: EditModalProps) => {
  // TODO: lock body scroll
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEditClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onOpen();
  };

  const handleClose: MouseEventHandler = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      <IconButton
        onClick={handleEditClick}
        aria-label="Edit job"
        as="div"
        background="none"
        color="rgba(255, 255, 255, 0.4)"
        icon={<EditIcon />}
        _active={{
          background: "none",
        }}
        _focus={{
          outline: "none",
        }}
        _hover={{
          color: "brand.magenta",
        }}
      />
      {isOpen && (
        <Flex
          onClick={handleClose}
          alignItems="center"
          background="url(background.png) no-repeat center center fixed"
          backgroundSize="cover"
          h="100vh"
          justifyContent="center"
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          zIndex="1"
        >
          <EditJobForm job={job} onClose={handleClose} />
        </Flex>
      )}
    </>
  );
};

export default EditModal;
