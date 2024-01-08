import {
  Avatar,
  AvatarFallbackText,
  BellIcon,
  Button,
  ButtonText,
  HStack,
  Input,
  InputField,
  Pressable,
  SearchIcon,
  Text,
} from "@gluestack-ui/themed";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import ComposeModal from "./ComposeModal";
import { signOut } from "next-auth/react";
import { POST } from "@/http/api";
import ConfirmationModal from "./ConfirmationModal";

function TopNavBar() {
  const router = useRouter();
  const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false);
  const [composeModalIsOpen, setComposeModalIsOpen] = useState(false);
  const onPressWrite = () => {
    setComposeModalIsOpen(true);
  };
  const closeComposeModal = () => {
    setComposeModalIsOpen(false);
  };
  const homeButtonClick = () => {
    router.push("/");
  };

  const confirmLogout = () => {
    setConfirmationModalIsOpen(true);
  };

  const closeConfirmationModal = () => {
    setConfirmationModalIsOpen(false);
  };
  const logoutClick = async () => {
    console.log("i am here");

    const data = await POST("/api/logout", {});

    if (data.success) {
      signOut({ callbackUrl: "/login" });
    }
  };
  return (
    <>
      <HStack
        borderBottomColor="$borderDark100"
        borderBottomWidth={1.5}
        display="flex"
        p={4}
        marginHorizontal={15}
        alignItems="center"
      >
        <HStack flex={1} space="md" alignItems="center">
          <Pressable onPress={homeButtonClick}>
            <Image
              height={44}
              width={44}
              src="/images/medium_logo1.png"
              alt="Medium Logo"
              priority={false}
            ></Image>
          </Pressable>

          <Input
            bgColor="$borderDark50"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            borderRadius={23}
            height={35}
            width={300}
            borderWidth={0}
          >
            <SearchIcon p={7} h={20} w={20} color="$borderDark600"></SearchIcon>
            <InputField placeholder="Search" />
          </Input>
        </HStack>
        <HStack width="18%" justifyContent="space-between" alignItems="center">
          {/* <HStack> */}
          <Pressable flexDirection="row" onPress={onPressWrite}>
            <Image
              src="/images/write_icon.png"
              alt="write to us"
              height={20}
              width={20}
            />
            <Text ml={6}>Write</Text>
          </Pressable>
          {/* </HStack> */}

          <BellIcon h={20} w={20}></BellIcon>
          <Avatar size="sm" bgColor="$lightBlue600">
            <AvatarFallbackText>A</AvatarFallbackText>
          </Avatar>
          <Button bgColor="$black" size="xs" onPress={confirmLogout}>
            <ButtonText>Sign out</ButtonText>
          </Button>
        </HStack>
      </HStack>
      <ComposeModal
        isOpen={composeModalIsOpen}
        onClose={closeComposeModal}
      ></ComposeModal>
      <ConfirmationModal
        isOpen={confirmationModalIsOpen}
        onClose={closeConfirmationModal}
        onConfirm={logoutClick}
      />
    </>
  );
}

export default TopNavBar;
