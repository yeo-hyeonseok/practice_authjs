'use client'

import { useActionState } from 'react'
import { signInWithCredentials } from '@/serverActions/auth'
import TextInput from '@/components/TextInput'

export default function RegisterPage() {
  const [state, action] = useActionState(signInWithCredentials, { message: '' })

  return (
    <div className="flex flex-col items-center gap-4">
      {state.message && <p className="text-red-500">{state.message}</p>}
      <form
        className="flex flex-col items-center gap-4"
        action={action}>
        <div className="flex flex-col gap-2">
          <TextInput name="id" />
          <TextInput name="displayName" />
          <TextInput name="email" />
          <TextInput name="password" />
        </div>
        <button className="w-full cursor-pointer bg-gray-400 py-2">
          Sign up
        </button>
      </form>
    </div>
  )
}
