import { getProjectsByClient } from '../services/projects.js'

export const getOpenProjects = async (client_id) => {
  const projects = await getProjectsByClient(client_id)
  return projects.filter(proj => proj.completed_at !== null)
}
