import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { setCookie } from "nookies";

const authOptions = (req: any, res: any) => ({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: { jwt: true },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // async redirect({ url, baseUrl }: any) {
    //   // Allows relative callback URLs
    //   // if (url.startsWith("/")) {
    //   //   console.log(" i am dgefrde");

    //   //   return `${baseUrl}${url}`;
    //   // }
    //   // // Allows callback URLs on the same origin
    //   // else if (new URL(url).origin === baseUrl) {
    //   //   console.log(" i am dgefrde 2");
    //   //   return url;
    //   // }
    //   return baseUrl;
    // },

    async jwt({ token, user, account }: any) {
      if (account) {
        token.accessToken = account.access_token;
        token.user = user;
      }
      return token;
    },
    async session({ session, token, user }: any) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      setCookie({ res }, "medium_login_session", token.accessToken, {
        maxAge: token.exp,
        path: "/",
        httpOnly: true,
      });
      return session;
    },
  },
  // ...add more providers here
});

export default (req: any, res: any) => {
  return NextAuth(req, res, authOptions(req, res));
};
