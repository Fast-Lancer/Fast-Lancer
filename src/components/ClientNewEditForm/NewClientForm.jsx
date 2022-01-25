import { useState } from 'react'
import { useUser } from '../../context/UserContext'

export default function NewClientForm({ formSubmit }) {
  const { user } = useUser()
  const [client_name, setClient_name] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [business_name, setBusiness_name] = useState('')
  const [notes, setNotes] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await formSubmit({ client_name, email, phone, business_name, notes, user_id: user.id })
    } catch (err) {
      'err'
    }
  }

  return <div>
    <h2>Client Details</h2>
    <fieldset>
      <form onSubmit={handleSubmit}>
        <label htmlFor='client_name'>Client Name</label>
        <input
          id='client_name'
          type='text'
          value={client_name}
          required
          onChange={(e) => setClient_name(e.target.value)} />

        <label htmlFor='email'>E-Mail</label>
        <input
          id='email'
          type='email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor='phone'>Phone Number</label>
        <input
          id='phone'
          type='number'
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)} />

        <label htmlFor='business_name'>Business Name</label>
        <input
          id='business_name'
          type='text'
          value={business_name}
          placeholder='Optional'
          onChange={(e) => setBusiness_name(e.target.value)} />

        <label htmlFor='notes'>Notes</label>
        <textarea
          id='notes'
          placeholder='Optional'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type='submit'>Save</button>
      </form>
    </fieldset>
  </div>
}
