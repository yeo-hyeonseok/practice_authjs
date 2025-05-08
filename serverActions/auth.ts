'use server'

import { auth, signIn, signOut } from '@/auth'

export const signInWithCredentials = async (formData: FormData) => {
  await signIn('credentials', {
    id: formData.get('id') || '',
    displayName: formData.get('displayName') || '',
    email: formData.get('email') || '',
    password: formData.get('password') || '',
    redirectTo: '/'
  })
}

export const signInWithGoogle = async () => {
  await signIn('google', {})
}

export const signOutWithForm = async () => {
  await signOut({ redirectTo: '/' })
}
export { auth as getSession }
