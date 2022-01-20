import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { updateClient, createClient, getClients } from '../../services/clients'
import Title from '../../components/Title/Title'
import NewEditForm from '../../components/NewEditForm/NewEditForm'


export default function NewEditClient({ isNew = false }) {
  // const [clients, setClients] = useState([])
  const history = useHistory()


  useEffect(() => {
    const clients = getClients()
    setClients(clients)
  }, [])

  let client

  const formSubmit = async ({ client_name, email, phone, business_name, notes, user_id }) => {
    try {
      if (isNew) {
        client = await createClient({ client_name, email, phone, business_name, notes, user_id })
        history.push(`/clients/${client[0].id}`)
      } else {
        client = await updateClient({ client_name, email, phone, business_name, notes, user_id })
        history.push(`/clients/${client.id}`)
      }
    } catch (error) {
      throw error
    }
  }

  return <div>
    <Title pageTitle='new-edit client' pageHeader='New-Edit Client'/>
    <main>
      <NewEditForm 
        formSubmit={formSubmit}
        formLabel={ isNew ? 'Add New Client' : 'Update Client' }
        // editPlaceholders={ isNew ? null : { ...clients }} 
      />
    </main>
  </div>
}
