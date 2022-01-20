import { supaClient } from './supaClient.js'

export async function getProjects() {
  const { data, error } = await supaClient
    .from('projects')
    .select('*, clients (client_name)')

  if (error) throw Error

  return data
}

export async function getProjectById(id) {
  const { data, error } = await supaClient
    .from('projects')
    .select('*, clients (client_name)')
    .match({ id })
    .single()

  if (error) throw Error

  return data
}

export async function createProject(project) {
  const { data, error } = await supaClient
    .from('projects')
    .insert(project)
 
      
  if (error) throw Error
    
  return data
}

export async function updateProject(project) {
  const { data, error } = await supaClient
    .from('projects')
    .update(project)
    .match({ title })
  
  if (error) throw Error
    
  return data
}

export async function getProjectsByClient(client_id) {
  const { data, error } = await supaClient
    .from('projects')
    .select('*')
    .eq('client_id', client_id)

  if (error) throw Error

  return data
}

