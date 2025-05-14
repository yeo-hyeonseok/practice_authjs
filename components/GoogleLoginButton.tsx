import Image from 'next/image'
import { signInWithGoogle } from '@/serverActions/auth'

interface Props {
  className?: string
}

export default function GoogleLoginButton({ className }: Props) {
  return (
    <form
      className={`${className} flex cursor-pointer items-center gap-4 rounded-full bg-white px-4 py-3`}
      action={signInWithGoogle}>
      <Image
        src="/images/google_logo.png"
        width={28}
        height={28}
        alt="google"
      />
      <button className="cursor-pointer">Sign in with Google</button>
    </form>
  )
}
