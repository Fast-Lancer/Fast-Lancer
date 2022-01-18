import { supaClient, parseData } from './supaClient';

export async function getProfile() {
  const request = await supaClient.from('profiles').select().single();
  return parseData(request);
}

export async function updateProfile({ name, email, bio, birthday }) {
  const request = await supaClient
    .from('profiles')
    .update({ name, bio, birthday })
    .match({ email });
  return parseData(request);
}

export async function createProfile({ name, email, bio, birthday }) {
  const request = await supaClient
    .from('profiles')
    .insert({ name, email, bio, birthday });
  return parseData(request);
}
