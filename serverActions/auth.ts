'use server'

import { redirect } from 'next/navigation'
import { auth, signIn, signOut } from '@/auth'

export const signInWithCredentials = async (
  initialState: { message: string },
  formData: FormData
) => {
  try {
    await signIn('credentials', {
      id: formData.get('id') || '',
      displayName: formData.get('displayName') || '',
      email: formData.get('email') || '',
      password: formData.get('password') || '',
      redirect: false
    })
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message }
    }

    return { message: 'An unexpected error occurred' }
  }

  redirect('/')
}

export const signInWithGoogle = async () => {
  await signIn('google', {})
}

export const signOutWithForm = async () => {
  await signOut({ redirectTo: '/' })
}
export { auth as getSession }
