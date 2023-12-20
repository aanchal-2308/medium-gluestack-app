import TopNavBar from "@/stories/TopNavBar";
import { Box, HStack } from "@gluestack-ui/themed";
import React from "react";

function index() {
  return (
    <Box>
      <TopNavBar></TopNavBar>
      <HStack height="91.5vh">
        <HStack flex={1}> </HStack>
        <HStack
          width="33%"
          borderLeftColor="$borderDark100"
          borderLeftWidth={1.25}
        ></HStack>
      </HStack>
    </Box>
  );
}

export default index;
