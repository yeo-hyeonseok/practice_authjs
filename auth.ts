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
        const user = credentials as User

        if (user.displayName) {
          console.log('회원가입 로직')
          return user
        }

        console.log('로그인 로직')
        return user
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24
  },
  callbacks: {
    signIn: async () => {
      return true
    },
    jwt: async ({ token }) => {
      return token
    },
    session: async ({ session }) => {
      return session
    }
  },
  trustHost: true
})
