import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../library/db";
import { userData } from "../../../../library/Model/users";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const authOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        const { email, password } = credentials;
        console.log(email)

        try {
          await connectMongoDB();
          const user = await userData.findOne({ email });
          if (!user) {
            throw new Error("No user found");
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) {
            throw new Error("Password is incorrect");
          }

         
          user.loginType = "credentials";
          await user.save();

          return {
            id: user._id, 
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      console.log(user)
      if (user) {
      
        token.userId = user.id;
        token.email = user.email;
        token.name = user.name;

        
        if (account?.provider) {
          token.loginType = account.provider; 
        } else {
          token.loginType = "credentials";  
        }
      }
      console.log("JWT Token:", token); 
      return token;
    },
  
    async session({ session, token }) {
      session.user.id = token.userId;
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.loginType = token.loginType || "credentials";  

      console.log("Session Data:", session); 
      return session;
    },
  
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
