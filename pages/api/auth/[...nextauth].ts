import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
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
    //   console.log(url, 'url')
    //   console.log(baseUrl, 'baseUrl')

    //   // Allows relative callback URLs
    //   if (url.startsWith('/')) {
    //     console.log(' i am dgefrde')

    //     return `${baseUrl}${url}`
    //   }
    //   // Allows callback URLs on the same origin
    //   else if (new URL(url).origin === baseUrl) {
    //     console.log(' i am dgefrde 2')
    //     return url
    //   }
    //   return baseUrl
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
      return session;
    },
  },
  // ...add more providers here
};
export default NextAuth(authOptions);
