import { getSession, updateSession } from '@/serverActions/auth'
import TextInput from '@/components/TextInput'

export default async function ProfilePage() {
  const session = await getSession()

  return (
    <div>
      <form
        className="flex flex-col items-center gap-4"
        action={updateSession}>
        <div className="flex flex-col gap-2">
          <TextInput
            name="id"
            defaultValue={session?.user?.id || ''}
          />
          <TextInput
            name="displayName"
            defaultValue={session?.user?.displayName || ''}
          />
          <TextInput
            name="email"
            defaultValue={session?.user?.email || ''}
          />
          <TextInput name="password" />
        </div>
        <button className="w-full cursor-pointer bg-gray-400 py-2">
          Update Profile
        </button>
      </form>
    </div>
  )
}
