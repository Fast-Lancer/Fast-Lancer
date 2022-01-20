import { supaClient, parseData } from './supaClient'

export async function getClients() {
  const request = await supaClient.from('clients').select('*')
  return parseData(request)
}

export async function getClient(id) {
  const request = await supaClient.from('clients').select().match({ id }).single()
  return parseData(request)
}

export async function updateClient({ client_name, email, phone, business_name, notes }) {
  const request = await supaClient
    .from('clients')
    .update({ client_name, email, phone, business_name, notes })
    .match({ email })
  return parseData(request)
}

export async function createClient({ client_name, email, phone, business_name, notes, user_id }) {
  const request = await supaClient
    .from('clients')
    .insert([{ client_name, email, phone, business_name, notes, user_id }])
  return parseData(request)
}
