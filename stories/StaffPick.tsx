import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Box,
  HStack,
  VStack,
  Text,
  Divider,
} from "@gluestack-ui/themed";
import React from "react";

const StaffPick = ({ data }: any) => {
  return (
    <Box>
      <VStack>
        <Box mb={15}>
          <HStack>
            <Box>
              <Avatar
                bgColor="$amber600"
                height={20}
                width={20}
                borderRadius="$full"
              >
                <AvatarFallbackText
                  sx={{ _light: { color: "#fff" } }}
                  fontSize="$2xs"
                >
                  {data.authorName}
                </AvatarFallbackText>
              </Avatar>
            </Box>
            <Box marginLeft={8} flexDirection="row">
              <Text
                fontFamily="arial"
                fontSize={13}
                fontWeight={500}
                color="black"
              >
                {data.authorName}
              </Text>
              <Text fontFamily="arial" fontSize={13} fontWeight={500}>
                {" "}
                in
              </Text>
              <Text
                fontFamily="arial"
                fontSize={13}
                fontWeight={500}
                color="black"
              >
                {" "}
                {data.tag}
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Text
              fontFamily="arial"
              fontSize={16}
              fontWeight={700}
              color="black"
              color="black"
            >
              {data.title}
            </Text>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default StaffPick;
