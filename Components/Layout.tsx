import React from "react";
import TopNavBar from "./TopNavBar";
import { Box } from "@gluestack-ui/themed";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  if (router.pathname != "/login") {
    return (
      <>
        <TopNavBar></TopNavBar>
        <Box
          flex={1}
          overflow="scroll"
          style={{
            // @ts-ignore
            $$css: true,
            scrollbar: "scrollbarbox",
          }}
        >
          {children}
        </Box>
      </>
    );
  } else {
    return <>{children}</>;
  }
};

export default Layout;
