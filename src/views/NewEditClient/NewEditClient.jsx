import { useHistory } from 'react-router-dom'
import { updateClient, createClient } from '../../services/clients'
import Title from '../../components/Title/Title'
import EditClientForm from '../../components/ClientNewEditForm/EditClientForm'
import NewClientForm from '../../components/ClientNewEditForm/NewClientForm'


export default function NewEditClient({ isNew = false }) {
  const history = useHistory()
  let client

  const formSubmit = async ({ client_name, email, phone, business_name, notes, user_id, id }) => {
    try {
      if (isNew) {
        client = await createClient({ client_name, email, phone, business_name, notes, user_id })
        history.push(`/clients/${client.id}`)
      } else {
        client = await updateClient({ client_name, email, phone, business_name, notes, user_id, id })
        history.push(`/clients/${id}`)
      }
    } catch (error) {
      throw error
    }
  }

  return <div>
    <Title pageTitle='new-edit client' pageHeader={ isNew ? 'Create New Client' : 'Update Client'}/>
    <main>
      { isNew ? <NewClientForm formSubmit={formSubmit} /> : <EditClientForm formSubmit={formSubmit}/>}
    </main>
  </div>
}
