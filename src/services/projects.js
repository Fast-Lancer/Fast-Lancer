import { supaClient } from './supaClient.js'

export async function getProjects() {
  const { data, error } = await supaClient
    .from('projects')
    .select('*, clients (name)')

  if (error) throw Error

  return data
}

export async function getProjectById(id) {
  const { data, error } = await supaClient
    .from('projects')
    .select('*, clients (name)')
    .match({ id })
    .single()

  if (error) throw Error

  return data
}
