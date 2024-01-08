// import { BlogDetails } from "@/app/context/store";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faCircleMinus, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  AvatarFallbackText,
  Box,
  CircleIcon,
  Divider,
  HStack,
  Pressable,
  Text,
} from "@gluestack-ui/themed";
import Image from "next/image";
import TagPill from "./TagPill";
import { useRouter } from "next/router";
const Blog = ({ blog }: any) => {
  const router = useRouter();
  const onClickBlog = (id) => {
    router.push("/blog?id=" + id);
  };
  return (
    <Box marginTop={15}>
      <HStack display="flex" alignItems="center" mb={5} space="sm">
        <Avatar bgColor="$amber600" size="sm" borderRadius="$full">
          <AvatarFallbackText sx={{ _light: { color: "#fff" } }} fontSize="$xs">
            {blog.authorName}
          </AvatarFallbackText>
        </Avatar>

        <Text color="$black">{blog.authorName}</Text>
        <Box alignItems="center">
          <CircleIcon h="$1" w="$1"></CircleIcon>
        </Box>
        <Text>{blog.date}</Text>
      </HStack>
      <HStack display="flex" justifyContent="space-between">
        <HStack flexDirection="column">
          <Pressable
            onPress={() => {
              onClickBlog(blog.id);
            }}
          >
            <Text fontWeight="600" color="$black" fontSize={20} mt={6}>
              {blog.title}
            </Text>
            <HStack width={520} flexWrap="wrap" mt={6}>
              <Text color="$black">{blog.description}</Text>
            </HStack>
          </Pressable>

          <HStack mt={30} alignItems="center">
            <HStack width={400} height={40}>
              <TagPill value={blog.type} height={25} fontSize={12}></TagPill>
              <Text ml={6}>{blog.readTime} </Text>
            </HStack>

            <HStack width={100} height={40} justifyContent="space-between">
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ color: "#525252" }}
                size="lg"
              />
              <FontAwesomeIcon
                icon={faCircleMinus}
                style={{ color: "525252" }}
                size="lg"
              />
              <FontAwesomeIcon
                icon={faEllipsis}
                style={{ color: "525252" }}
                size="lg"
              />
            </HStack>
          </HStack>
        </HStack>
        <HStack>
          <Image
            height={100}
            width={100}
            src={blog?.imageUrl}
            alt="blog image"
          ></Image>
        </HStack>
      </HStack>
      <Divider></Divider>
    </Box>
    // </Box>
  );
};

export default Blog;
