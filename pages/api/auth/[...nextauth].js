import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "../../../src/microservices/auth";

import NextAuth from "next-auth/next";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentialsff",

      authorize: async ({ email, password }) => {
        try {
          const res = await login({ email, password });
          if (res.status === 200) {
            return res.data;
          }

          return null;
        } catch (err) {
          console.log(err);
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (user) {
        return {
          accessToken: user.token,
          user: user.user,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user = {
        accessToken: token.accessToken,
        ...token.user,
      };
      return session;
    },
  },
});
