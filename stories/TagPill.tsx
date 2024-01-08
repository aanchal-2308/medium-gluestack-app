import { Box, Text } from "@gluestack-ui/themed";
import React from "react";

const TagPill = ({ value, height = 40, fontSize = 14 }: any) => {
  return (
    <Box
      borderRadius={20}
      bgColor="#F2F2F2"
      display="flex"
      justifyContent="center"
      minWidth={100}
      height={height}
      alignItems="center"
    >
      <Text fontSize={fontSize} color="#242424">
        {value}
      </Text>
    </Box>
  );
};

export default TagPill;
