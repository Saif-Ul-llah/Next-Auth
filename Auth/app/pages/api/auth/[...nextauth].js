// next-auth.js
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // Add custom configurations and callbacks if needed
})
 