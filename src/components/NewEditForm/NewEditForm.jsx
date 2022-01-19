import { useState } from 'react'

export default function NewEditForm({ formSubmit, formLabel }) {

  const [client_name, setClient_name] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [business_name, setBusiness_name] = useState()
  const [notes, setNotes] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await formSubmit(client_name, email, phone, business_name, notes)
  }
  console.log(client_name, email, phone, business_name, notes)
  return <div>
    <h2>{formLabel}</h2>
    <fieldset>
      <form onSubmit={handleSubmit}>
        <label htmlFor='client_name'>Client Name</label>
        <input 
          id='client_name'
          type='text'
          required
          onChange={(e) => setClient_name(e.target.value)} />

        <label htmlFor='client_name'>E-Mail</label>
        <input 
          id='email'
          type='email'
          required
          onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor='client_name'>Phone Number</label>
        <input 
          id='phone'
          type='number'
          required
          onChange={(e) => setPhone(e.target.value)} />

        <label htmlFor='client_name'>Business Name</label>
        <input 
          id='phone'
          type='text'
          placeholder='Optional'
          onChange={(e) => setBusiness_name(e.target.value)} />

        <label htmlFor='client_name'>Notes</label>
        <textarea
          id='notes'
          placeholder='Optional'
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type='submit'>{formLabel}</button>
      </form>
    </fieldset>
  </div>
}
