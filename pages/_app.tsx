// import '@/styles/globals.css';
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import type { AppProps } from "next/app";
import { UserProvider } from "../Context/UserContext";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <UserProvider>
        <GluestackUIProvider config={config}>
          <Component {...pageProps} />
        </GluestackUIProvider>
      </UserProvider>
    </SessionProvider>
  );
}
