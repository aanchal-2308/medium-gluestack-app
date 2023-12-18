import {
  Box,
  Button,
  ButtonText,
  HStack,
  Input,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import React from "react";
import { useUserContext } from "../../Context/UserContext";
import { signIn, useSession } from "next-auth/react";

export default function login() {
  const session = useSession();

  const { login, user } = useUserContext();
  if (session?.data?.user) login(session?.data?.user?.name);

  console.log(user, "user");

  return (
    <Box
      //   bgColor="blue"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack space="md">
        <Text fontSize={20} fontWeight="600" color="$black">
          Login with User Name
        </Text>
        <Input
          variant="outline"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder="Enter user name" />
        </Input>

        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          bgColor="$black"
          onPress={() => signIn("google")}
        >
          <ButtonText>Login </ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
