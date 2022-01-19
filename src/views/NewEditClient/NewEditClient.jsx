import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { updateClient, createClient, getClient } from '../../services/clients'
import Title from '../../components/Title/Title'
import styles from './NewEditClient.module.css'

export default function NewEditClient({ isNew = false }) {
  const { id } = useParams()
  const [client, setClient] = useState('')
  const history = useHistory()

  // Edit Flow:
  // /clients/edit/:id
  // -getClient(id)
  // edit form w values
  // onSubmit update client

  // New Flow
  // from

  // useEffect(() => {
  //   const client = getClient(id)
  //   setClient(client)
  // }, [])
  // console.log(client)

  const formSubmit = async (name, email, phone, business_name, notes) => {
    try {
      if (isNew) {
        createClient(name, email, phone, business_name, notes)
        history.push(`/clients/${id}`)
      } else {
        updateClient(name, email, phone, business_name, notes)
        history.push(`/clients/${id}}`)
      }
    } catch (error) {
      throw error
    }
  }

  return <div>
    <Title pageTitle='new-edit client' pageHeader='New-Edit Client'/>
    <main>
    Godfather ipsum dolor sit amet. My father taught me many things here - he taught me in this room. He taught me: keep your friends close, but your enemies closer. We're both part of the same hypocrisy, senator, but never think it applies to my family. It's not personal. It's business. Vito, how do you like my little angel? Isn't she beautiful? The hotel, the casino. The Corleone Family wants to buy you out.

I'm gonna make him an offer he can't refuse. I want your answer and the money by noon tomorrow. And one more thing. Don't you contact me again, ever. From now on, you deal with Turnbull. If anything in this life is certain, if history has taught us anything, it is that you can kill anyone. What's the matter with you, huh? What am I going to do? Am I going to make that baby an orphan before he's born?
    </main>
  </div>
}
