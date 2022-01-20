import { supaClient } from './supaClient'

export function getUser() {
  return supaClient.auth.user()
}

export function getSession() {
  return supaClient.auth.session()
}

export async function signUpUser(email, password) {
  const { user, error } = await supaClient.auth.signUp({ email, password })
  if (error) throw error
  return user
}

export async function signInUser(email, password) {
  const { user, error } = await supaClient.auth.signIn({ email, password })
  if (error) throw error
  return user
}

export async function signOutUser() {
  return supaClient.auth.signOut()
}
