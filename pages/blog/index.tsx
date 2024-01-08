import {
  Avatar,
  AvatarFallbackText,
  Box,
  CircleIcon,
  HStack,
  Text,
  Divider,
  VStack,
} from "@gluestack-ui/themed";
import React from "react";
import { blogListData } from "@/utils/blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsClapping,
  faArrowUpFromBracket,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBookmark,
  faComment,
  faCirclePlay,
} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { getServerSidePropsPrivate } from "@/ssr";
const Blog = () => {
  const router = useRouter();
  const blogId = router.query.id;
  const blogObject = blogListData.find((item) => item.id == blogId);

  return (
    <HStack display="flex" justifyContent="center">
      <HStack width={700} flexDirection="column" marginTop={50}>
        <Box>
          <Text
            fontWeight="$extrabold"
            fontSize={42}
            color="black"
            lineHeight={50}
            fontFamily="arial"
          >
            {blogObject?.title}
          </Text>
        </Box>

        <HStack paddingTop={30} paddingLeft={0} marginLeft={0}>
          <VStack>
            <Avatar bgColor="$amber600" size="sm" borderRadius="$full">
              <AvatarFallbackText
                sx={{ _light: { color: "#fff" } }}
                fontSize="$xs"
              >
                {blogObject?.authorName}
              </AvatarFallbackText>
            </Avatar>
          </VStack>
          <VStack marginLeft={10}>
            <HStack flexDirection="column" display="flex">
              <HStack
                alignItems="center"
                justifyContent="space-between"
                width={180}
              >
                <Text color="$textDark900">{blogObject?.authorName}</Text>
                <CircleIcon height={4} width={4} color="$gray" />
                <Text color="green">Follow</Text>
              </HStack>
              <HStack
                alignItems="center"
                justifyContent="space-between"
                width={170}
              >
                <Text fontSize={"$sm"}>{blogObject?.readTime}</Text>
                <CircleIcon height={4} width={4} color="$gray" />
                <Text fontSize={"$sm"}>{blogObject?.date}</Text>
              </HStack>
            </HStack>
          </VStack>
        </HStack>
        <Divider marginTop={30}></Divider>
        <HStack display="flex">
          <HStack flex={1} padding={15} space="lg">
            <FontAwesomeIcon
              icon={faHandsClapping}
              style={{ color: "#525252" }}
              size="lg"
            />
            <Text fontSize={"$sm"} marginLeft={-10}>
              {blogObject?.like}
            </Text>
            <FontAwesomeIcon
              icon={faComment}
              style={{ color: "#525252" }}
              size="lg"
            />
            <Text fontSize={"$sm"} marginLeft={-10}>
              {blogObject?.comment}
            </Text>
          </HStack>
          <HStack width={170} justifyContent="space-between" padding={15}>
            <FontAwesomeIcon
              icon={faBookmark}
              style={{ color: "#525252" }}
              size="lg"
            />
            <FontAwesomeIcon
              icon={faCirclePlay}
              style={{ color: "#525252" }}
              size="lg"
            />
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              style={{ color: "#525252" }}
              size="lg"
            />
            <FontAwesomeIcon
              icon={faEllipsis}
              style={{ color: "525252" }}
              size="lg"
            />
          </HStack>
        </HStack>
        <Divider />
        <HStack marginVertical={40}>
          <Image height={467} width={700} src={blogObject?.imageUrl}></Image>
        </HStack>
        <HStack marginBottom={20}>
          <Text
            color="$black"
            fontSize="$lg"
            fontFamily="Georgia"
            lineHeight={35}
          >
            {blogObject?.content}
          </Text>
        </HStack>
      </HStack>
    </HStack>
  );
};

export const getServerSideProps = getServerSidePropsPrivate;
export default Blog;
