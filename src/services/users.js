import { supaClient } from './supaClient'

export function getUser() {
  return supaClient.auth.user()
}

export function getSession() {
  return supaClient.auth.session()
}

export async function signUpUser(username, password) {
  const { user, error } = await supaClient.auth.signUp({ username, password })
  if (error) throw error
  return user
}

export async function signInUser(username, password) {
  const { user, error } = await supaClient.auth.signIn({ username, password })
  if (error) throw error
  return user
}

export async function signOutUser() {
  return supaClient.auth.signOut()
}
