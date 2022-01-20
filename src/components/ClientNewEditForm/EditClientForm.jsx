import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { deleteClient, getClient } from '../../services/clients'
import { useUser } from '../../context/UserContext'
import styles from './ClientForms.css'

export default function EditClientForm({ formSubmit }) {

  const { user } = useUser()
  const { id } = useParams()
  const history = useHistory()
  const [client, setClient] = useState('')

  useEffect(() => {
    try {
      getClient(id)
        .then (setClient)
    } catch (err){
      'err'
    }
  }, [])


  const [client_name, setClient_name] = useState(client.client_name)
  const [email, setEmail] = useState(client.email)
  const [phone, setPhone] = useState(client.phone)
  const [business_name, setBusiness_name] = useState(client.business_name)
  const [notes, setNotes] = useState(client.notes)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await formSubmit({ client_name, email, phone, business_name, notes, user_id: user.id, id: client.id })
  }

  const handleDelete = async (e) => {
    try { await deleteClient(id)
      history.push('/clients')
    } catch (error){
      alert('This Client cannot be deleted with open projects! Delete open projects before removing client. Open projects can be found on the client detail page.')
    }}

  return <div className={styles.editForm}>
    <h2>Edit Client</h2>
    <fieldset>
      <form onSubmit={handleSubmit}>
        <label htmlFor='client_name'>Client Name</label>
        <input 
          id='client_name'
          type='text'
          defaultValue={client.client_name}
          required
          onChange={(e) => setClient_name(e.target.value)} />

        <label htmlFor='email'>E-Mail</label>
        <input 
          id='email'
          type='email'
          defaultValue={client.email}
          required
          onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor='phone'>Phone Number</label>
        <input 
          id='phone'
          type='text'
          defaultValue={client.phone}
          required
          onChange={(e) => setPhone(e.target.value)} />

        <label htmlFor='business_name'>Business Name</label>
        <input 
          id='business_name'
          type='text'
          defaultValue={client.business_name}
          placeholder='Optional'
          onChange={(e) => setBusiness_name(e.target.value)} />

        <label htmlFor='notes'>Notes</label>
        <textarea
          id='notes'
          placeholder='Optional'
          defaultValue={client.notes ? client.notes : undefined}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type='submit'>Save</button>
      </form>  
      <section className={styles.deleteContainer}>
        <button className={styles.deleteButton} onClick={(e) => handleDelete(id)}>DELETE CLIENT</button>
      </section>
    </fieldset>
  </div>
}
