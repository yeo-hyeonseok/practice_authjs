import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

interface User {
  id?: string
  displayName?: string
  email?: string
  password?: string
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async credentials => {
        const { id, displayName, email, password } = credentials as User
        const user = { id, displayName, email, password }

        if (displayName) {
          //  <--- 회원가입 시 로직 --->
          return user
        }

        // <--- 로그인 시 로직 --->
        return user
      }
    })
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    }
  },
  trustHost: true
})
