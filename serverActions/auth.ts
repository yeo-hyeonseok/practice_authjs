'use server'

import { auth, signIn, signOut } from '@/auth'

export const signInWithCredentials = async (formData: FormData) => {
  await signIn('credentials', {})
}

export const signInWithGoogle = async () => {
  await signIn('google', {})
}

export const signOutWithForm = async () => {
  await signOut()
}
export { auth as getSession }
