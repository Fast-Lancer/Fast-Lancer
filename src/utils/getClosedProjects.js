import { getProjectsByClient } from '../services/projects.js'

// This an the getOpenProjects could be combined to reduce duplication
export const getClosedProjects = async (client_id) => {
  const projects = await getProjectsByClient(client_id)
  return projects.filter(proj => proj.completed_at !== null)
}
