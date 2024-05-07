import NextAuth from 'next-auth';
import github from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/db';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error('Missing github oauth credentials');
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(db),
  providers: [
    github({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to the correct URL after sign-in
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    //geralmente n é necessário mas bug temporário do nextauth
    async session({ session, user }: any) {
      if (session && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
