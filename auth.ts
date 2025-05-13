import NextAuth, { User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth, unstable_update } = NextAuth({
  providers: [
    Credentials({
      authorize: async credentials => {
        const user = credentials as unknown as User

        if (user.displayName) {
          console.log('회원가입 로직')
          return user
        }

        console.log('로그인 로직')
        return user
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    },
    signIn: async () => {
      return true
    },
    jwt: async ({ token, user, trigger, session }) => {
      if (trigger === 'update' && session) {
        token.id = session.user.id
        token.displayName = session.user.displayName
        token.email = session.user.email

        return token
      }

      if (user) {
        token.id = user.id
        token.displayName = user.displayName
      }

      return token
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id as string
        session.user.displayName = token.displayName as string
      }

      return session
    }
  },
  trustHost: true
})
