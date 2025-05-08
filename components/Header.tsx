import Link from 'next/link'
import { getSession, signOutWithForm } from '@/serverActions/auth'

interface Props {
  className?: string
}

export default async function Header({ className }: Props) {
  const session = await getSession()

  return (
    <nav className={`${className} w-full`}>
      <ul className="flex justify-end gap-10 bg-gray-400 p-4 px-10 font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        {session?.user ? (
          <li>
            <form action={signOutWithForm}>
              <button className="cursor-pointer">Logout</button>
            </form>
          </li>
        ) : (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
