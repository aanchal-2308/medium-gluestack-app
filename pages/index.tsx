import Blog from "@/stories/Blog";
import StaffPick from "@/stories/StaffPick";
import TopNavBar from "@/Components/TopNavBar";
import { Badge, Box, HStack, Text, BadgeText } from "@gluestack-ui/themed";
import React from "react";
import { tags } from "@/utils/tags";
import TagPill from "@/stories/TagPill";
import { blogListData } from "@/utils/blog";
import { staffPickData } from "@/utils/staffPick";
import { getServerSidePropsPrivate } from "@/ssr";
function index() {
  return (
    <Box>
      <HStack height="91.5vh">
        <HStack
          alignContent="center"
          flex={1}
          overflowX="scroll"
          style={{
            // @ts-ignore
            $$css: true,
            scrollbar: "scrollbarbox",
          }}
        >
          <Box
            display="flex"
            height={244}
            flex={1}
            // width={629}
            marginTop={30}
            // bgColor="$amber500"
            paddingHorizontal={120}
          >
            {blogListData.length > 0 &&
              blogListData.map((blog: any) => <Blog blog={blog}></Blog>)}
          </Box>
        </HStack>
        <HStack
          width="33%"
          borderLeftColor="$borderDark100"
          borderLeftWidth={1.25}
        >
          <Box width={350} padding={20}>
            <Text
              marginBottom={10}
              fontFamily="arial"
              fontSize={"$md"}
              fontWeight={"$medium"}
              color="$black"
              // style={{ fontFamily: "arial", fontSize: 16, fontWeight: 500 }}
            >
              Staff Picks
            </Text>
            {staffPickData.length > 0 &&
              staffPickData.map((data: any) => (
                <StaffPick data={data}></StaffPick>
              ))}
            <Text fontSize={14} color="green">
              {" "}
              See the full list
            </Text>
            <Box marginTop={20}>
              <Text fontSize="md" fontWeight={500} color="$black">
                Recommended Topics
              </Text>
              <Box display="flex" flexDirection="row" flexWrap="wrap">
                {tags.length > 0 &&
                  tags.map((tag) => (
                    <Box padding={4}>
                      <TagPill value={tag.name}></TagPill>
                    </Box>
                  ))}
              </Box>
              <Text fontSize={14} marginTop={10} color="green">
                {" "}
                See more topics
              </Text>
            </Box>
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
}

export const getServerSideProps = getServerSidePropsPrivate;

export default index;
