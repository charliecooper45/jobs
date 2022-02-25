import { Box, Flex } from "@chakra-ui/react";
import { Status } from "@prisma/client";
import { useMemo } from "react";
import { ActiveIndexes, Widths } from "./constants";
import Marker from "./Marker";

type StatusBarProps = {
  status: Status;
};

type Markers = { isActive: boolean; text: string }[];

const parseMarkers = (status: Status): Markers => {
  const activeIndex = ActiveIndexes[status] ?? 0;

  const markerTexts = ["NEW", "CV SENT", "INTERVIEW", "OFFER", "ACCEPTED"];
  return markerTexts.map((text, index) => {
    return {
      text,
      isActive: index < activeIndex,
    };
  });
};

const StatusBar = ({ status }: StatusBarProps) => {
  const markers = useMemo(() => parseMarkers(status), [status]);
  const width = Widths[status];

  return (
    <Flex flexDir="column" pr="40px">
      <Flex>
        {markers.map(({ text, isActive }) => (
          <Marker key={text} isActive={isActive} text={text} />
        ))}
      </Flex>
      <Box
        h="10px"
        background="rgba(255, 255, 255, 0.1)"
        borderRadius="30px"
        overflow="hidden"
        w="100%"
      >
        <Box
          background="linear-gradient(90deg, #6E3AFF 0%, #F009FE 100%)"
          borderRadius="30px"
          h="100%"
          w={width}
        />
      </Box>
    </Flex>
  );
};

export default StatusBar;
