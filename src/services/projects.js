import { supaClient } from './supaClient.js'

export async function getProjects() {
  const { data, error } = await supaClient
    .from('projects')
    .select('*, clients (client_name)')

  if (error) throw new Error(error)

  return data
}

export async function getProjectById(id) {
  const { data, error } = await supaClient
    .from('projects')
    .select('*, clients (client_name)')
    .match({ id })
    .single()

  if (error) throw new Error(error)

  return data
}

export async function createProject(project) {
  const { data, error } = await supaClient
    .from('projects')
    .insert(project)
      
  if (error) throw new Error(error)
    
  return data
}

export async function updateProject({
  id, date_start, date_end, hourly_rate, hours_worked, URL, description, completed_at, price_quoted, hours_quoted, title, notes, client_id, user_id
}) {
  const { data, error } = await supaClient
    .from('projects')
    .update({
      date_start, date_end, hourly_rate, hours_worked, URL, description, completed_at, price_quoted, hours_quoted, title, notes, client_id, user_id
    })
    .match({ id })
  
  if (error) throw new Error(error)
    
  return data
}

export async function deleteProjectById(id) {
  const { data, error } = await supaClient
    .from('projects')
    .delete()
    .match({ id })

  if (error) throw new Error(error)

  return data
}

export async function getProjectsByClient(client_id) {
  const { data, error } = await supaClient
    .from('projects')
    .select('*')
    .eq('client_id', client_id)

  if (error) throw new Error(error)

  return data
}

