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
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function login() {
  const session = useSession();
  const router = useRouter();
  const { login, currentUser } = useContext(AuthContext);

  if (session?.data?.user && !currentUser) {
    login(session?.data?.user?.name);
    router.push("/");
  }

  return (
    <Box
      //   bgColor="blue"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack space="md" display="flex" alignItems="center">
        {/* <Text fontSize={20} fontWeight="600" color="$black" mb={30}>
          Login
        </Text> */}
        {/* <Input
          variant="outline"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder="Enter user name" />
        </Input> */}

        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          bgColor="$black"
          onPress={() => signIn("google")}
        >
          <ButtonText>Login with Google</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
