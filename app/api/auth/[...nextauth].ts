import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "example@gmail.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*********",
        },
      },
      async authorize(credentials) {
        const temp_creds = {
          email: "ms@gmail.com",
          password: "abc123",
          id: 1,
          name: "msk",
        };

        if (!(credentials?.email && credentials.password)) return null;
        if (
          credentials.password !== temp_creds.password &&
          credentials.email !== temp_creds.email
        ) {
          return { error: "Invalid email or password" };
        }
        return {
          email: temp_creds.email,
          name: temp_creds.name,
          id: temp_creds.id,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        if (token.email && token.name && token.role && token._id) {
          session.user.email = token.email;
          session.user.name = token.name;
        }
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
