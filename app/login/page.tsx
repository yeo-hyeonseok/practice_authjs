import Link from 'next/link'
import TextInput from '@/components/TextInput'

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <form className="flex gap-2">
        <div className="flex flex-col gap-2">
          <TextInput name="id" />
          <TextInput name="password" />
        </div>
        <button className="cursor-pointer bg-gray-400 px-3">Sign in</button>
      </form>
      <Link
        className="underline"
        href="/register">
        Sign up
      </Link>
    </div>
  )
}
