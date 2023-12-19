// import '@/styles/globals.css';
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import type { AppProps } from "next/app";
import { AuthContext, AuthContextProvider } from "../Context/AuthContext";
import { SessionProvider } from "next-auth/react";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  // const { currentUser } = useContext(AuthContext);
  // const router = useRouter();
  // useEffect(() => {
  //   if (currentUser) {
  //     router.push("/");
  //   }
  // }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <AuthContextProvider>
        <GluestackUIProvider config={config}>
          <Component {...pageProps} />
        </GluestackUIProvider>
      </AuthContextProvider>
    </SessionProvider>
  );
}
