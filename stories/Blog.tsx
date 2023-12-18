// import { BlogDetails } from "@/app/context/store";
import React from "react";
import {
  Box,
  Avatar,
  AvatarImage,
  AddIcon,
  RemoveIcon,
  ThreeDotsIcon,
  AvatarFallbackText,
} from "@gluestack-ui/themed";

const Blog = ({
  uri,
  title,
  description,
  localImage,
  tag,
  userID,
  name,
}: any) => {
  return (
    <Box display="flex" width={"100%"} pt={24}>
      <Box display="flex" flexDirection="row" alignItems="center" mb={5}>
        {uri ? (
          <Avatar size="sm" bgColor="#fff">
            <AvatarImage
              source={{
                uri: uri,
              }}
              sx={{ width: 28, height: 28, bgColor: "#fff" }}
              alt="author"
            />
          </Avatar>
        ) : (
          <Avatar bgColor="#00579B" size="sm" borderRadius="$full">
            <AvatarFallbackText sx={{ _light: { color: "#fff" } }}>
              {userID}
            </AvatarFallbackText>
          </Avatar>
        )}
        {/* <p className={styles.author_name}>{name ?? userID}</p>
        <p className={styles.blog_date}>. May 2</p> */}
      </Box>
    </Box>
  );
};

export default Blog;
