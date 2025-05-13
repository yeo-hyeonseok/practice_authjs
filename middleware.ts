export { auth as middleware } from '@/auth'

// 기존에 사용하는 미들웨어가 있거나 세부적인 코드 작성이 필요한 경우
// export default auth((req) => {})

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|$|login|register).*)'
  ]
}
