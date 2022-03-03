import { Box, Text } from "@chakra-ui/react";

type NoteProps = {
  note: string | null;
};

const Note = ({ note }: NoteProps) => {
  return (
    <Box
      border="1px solid rgba(255, 255, 255, 0.1)"
      borderRadius="15px"
      flex="1"
      overflow="auto"
      mt="15px"
      p="15px"
    >
      <Text>{note}</Text>
    </Box>
  );
};

export default Note;
