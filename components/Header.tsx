import Link from 'next/link'

interface Props {
  className?: string
}

export default function Header({ className }: Props) {
  const links = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/login',
      label: 'Login'
    },
    {
      href: '/profile',
      label: 'Profile'
    }
  ]

  return (
    <nav className={`${className} w-full`}>
      <ul className="flex justify-end gap-10 bg-gray-400 p-4 px-10 font-medium">
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
