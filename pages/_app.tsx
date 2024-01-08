import "@/styles/globals.css";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import type { AppProps } from "next/app";
import { AuthContext, AuthContextProvider } from "../Context/AuthContext";
import { SessionProvider } from "next-auth/react";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/Components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthContextProvider>
        <GluestackUIProvider config={config}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GluestackUIProvider>
      </AuthContextProvider>
    </SessionProvider>
  );
}
