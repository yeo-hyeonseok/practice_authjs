export declare module 'next-auth' {
  interface User {
    displayName: string
  }
  interface Session {
    displayName: string
  }
}

export declare module '@auth/core/jwt' {
  interface JWT {
    displayName: string
  }
}
