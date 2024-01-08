import { getServerSidePropsPublic } from "@/ssr";
import {
  Button,
  ButtonText,
  HStack,
  Box,
  Spinner,
  Text,
} from "@gluestack-ui/themed";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status == "authenticated") {
      router.push("/");
    }
  }, [status]);

  return (
    <>
      {status === "unauthenticated" ? (
        <HStack
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          bgColor="$backgroundLight100"
        >
          <Box>
            <Image
              alt="Medium"
              src="https://miro.medium.com/v2/resize:fit:1200/1*jfdwtvU6V6g99q3G7gq7dQ.png"
              height={150}
              width={300}
            ></Image>
          </Box>

          <HStack alignItems="center" marginBottom={80}>
            <Button
              size="lg"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              bgColor="$black"
              onPress={() => signIn("google", { redirect: false })}
            >
              <ButtonText p={10}>Login with Google</ButtonText>

              <Image
                alt="google icon"
                height={20}
                width={20}
                src="data:image/png;base64,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"
              />
            </Button>
          </HStack>
        </HStack>
      ) : (
        <HStack
          space="sm"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          bgColor="$backgroundLight100"
        >
          <Spinner size="large" color={"black"} />
          <Text size="md">Please Wait</Text>
        </HStack>
      )}
    </>
  );
};
export default Login;
export const getServerSideProps = getServerSidePropsPublic;
