import { supaClient } from "./supaClient.js";

export async function getProjects() {
  const { projects, error } = await supaClient
    .from("projects")
    .select("*, clients (name)");

  if (error) throw Error;

  return projects;
}
