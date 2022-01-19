import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { updateClient, createClient, getClients } from '../../services/clients'
import Title from '../../components/Title/Title'
import NewEditForm from '../../components/NewEditForm/NewEditForm'
import styles from './NewEditClient.module.css'

export default function NewEditClient({ isNew = false }) {
  const { id } = useParams()
  const [clients, setClients] = useState([])
  const history = useHistory()

  // Edit Flow:
  // /clients/edit/:id
  // -getClient(id)
  // edit form w values
  // onSubmit updateClient

  // New Flow
  // /clients/new
  // create client form
  // onSubmit createClient

  // edited form, label and input rules in app.css

  // moved a rules to line 22 with other global settings

  useEffect(() => {
    const clients = getClients()
    setClients(clients)
  }, [])
  console.log(clients)

  const formSubmit = async (client_name, email, phone, business_name, notes) => {
    try {
      if (isNew) {
        createClient(client_name, email, phone, business_name, notes)
        history.push(`/clients/${id}`)
      } else {
        updateClient(client_name, email, phone, business_name, notes)
        history.push(`/clients/${id}`)
      }
    } catch (error) {
      throw error
    }
  }

  return <div>
    <Title pageTitle='new-edit client' pageHeader='New-Edit Client'/>
    <main>
      <NewEditForm formSubmit={formSubmit}
        formLabel={ isNew ? 'Add New Client' : 'Update Client' }/>
      <br /><br />
    Godfather ipsum dolor sit amet. My father taught me many things here - he taught me in this room. He taught me: keep your friends close, but your enemies closer. We're both part of the same hypocrisy, senator, but never think it applies to my family. It's not personal. It's business. Vito, how do you like my little angel? Isn't she beautiful? The hotel, the casino. The Corleone Family wants to buy you out.

    </main>
  </div>
}
