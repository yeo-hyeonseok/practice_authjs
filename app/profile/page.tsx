import TextInput from '@/components/TextInput'

export default function ProfilePage() {
  return (
    <div>
      <form className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2">
          <TextInput name="id" />
          <TextInput name="displayName" />
          <TextInput name="email" />
          <TextInput name="password" />
        </div>
        <button className="w-full cursor-pointer bg-gray-400 py-2">
          Update Profile
        </button>
      </form>
    </div>
  )
}
