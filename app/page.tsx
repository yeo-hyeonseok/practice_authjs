import { getSession } from '@/serverActions/auth'

export default async function Home() {
  const session = await getSession()

  return (
    <div className="text-black">
      {session?.user ? `welcome ${session.user.id}` : 'main'}
    </div>
  )
}
