'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { signInWithCredentials } from '@/serverActions/auth'
import TextInput from '@/components/TextInput'

export default function LoginPage() {
  const [state, action] = useActionState(signInWithCredentials, { message: '' })

  return (
    <div className="flex flex-col items-center gap-4">
      {state.message && <p className="text-red-500">{state.message}</p>}
      <form
        className="flex gap-2"
        action={action}>
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
