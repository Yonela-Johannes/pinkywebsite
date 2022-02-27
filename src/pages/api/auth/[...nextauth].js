import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "21402435076-csgjc2b7ji8c77dmgblo97emmgp5aor4.apps.googleusercontent.com",
      clientSecret: "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",
      NEXTAUTH_URL: "http://localhost:3000"
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.tag = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
});