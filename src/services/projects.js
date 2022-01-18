import { supaClient } from './supaClient.js'

export async function getProjects() {
  const { projects, error } = await supaClient
    .from('projects')
    .select('*, clients (name)')

  if (error) throw Error

  return projects
}

export async function getProjectById(id) {
  const { project, error } = await supaClient
    .from('projects')
    .select('*, clients (name)')
    .match({ id })
    .single()

  if (error) throw Error

  return project
}
