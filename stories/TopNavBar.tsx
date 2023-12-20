import {
  Avatar,
  AvatarBadge,
  AvatarImage,
  BellIcon,
  Box,
  HStack,
  Input,
  InputField,
  SearchIcon,
  Text,
} from "@gluestack-ui/themed";
import Image from "next/image";
import React from "react";

function TopNavBar() {
  return (
    <HStack
      borderBottomColor="$borderDark100"
      borderBottomWidth={1.5}
      display="flex"
      p={10}
      marginHorizontal={15}
      //   marginVertical={10}

      alignItems="center"
    >
      <HStack flex={1} space="md" alignItems="center">
        <Image
          height={54}
          width={54}
          src="/images/medium_logo1.png"
          alt="Medium Logo"
          priority={false}
        ></Image>

        <Input
          bgColor="$borderDark50"
          variant="outline"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          borderRadius={23}
          height={45}
          width={300}
        >
          <SearchIcon p={10} h={24} w={24} color="$borderDark600"></SearchIcon>
          <InputField placeholder="Search" />
        </Input>
      </HStack>
      <HStack width="13%" justifyContent="space-between" alignItems="center">
        <HStack>
          <Image
            src="/images/write_icon.png"
            alt="write to us"
            height={20}
            width={20}
          />
          <Text ml={6}>Write</Text>
        </HStack>

        <BellIcon h={20} w={20}></BellIcon>
        <Avatar size="md" bgColor="$lightBlue600">
          <Text fontFamily="$body" color="$white">
            A
          </Text>
        </Avatar>
      </HStack>
    </HStack>
  );
}

export default TopNavBar;
