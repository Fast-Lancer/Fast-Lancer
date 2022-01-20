import {  useState } from 'react'
import { useUser } from '../../context/UserContext.jsx'

import changeValue from '../../utils/changeValue.js'

export default function ProjectForm({ handleProject, clientsAvailable, initialValues }) {
  const [form, setForm] = useState(initialValues)
  const { user } = useUser()
  
  const handleSubmit = (e) => {
    e.preventDefault()

    // replace empty strings with null in form object without mutation by creating a two dimensional array to iterate through, then make it back into object
    const nullifiedForm = changeValue(form, null)

    handleProject({ ...nullifiedForm, user_id: user.id })
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm(prev => ({ ...prev, [name]: value }))
  }

  return <form onSubmit={handleSubmit}>
    <label htmlFor='date_start'>Start Date:</label>
    <input name='date_start' value={form.date_start} type='date' onChange={handleChange}/>

    <label htmlFor='date_end'>End Date:</label>
    <input name='date_end' value={form.date_end} type='date' onChange={handleChange}/>

    <label htmlFor='hourly_rate'>Hourly Rate:</label>
    <input name='hourly_rate' value={form.hourly_rate} type='text' onChange={handleChange}/>

    <label htmlFor='hours_worked'>Hours Worked:</label>
    <input name='hours_worked' value={form.hours_worked} type='text' onChange={handleChange}/>

    <label htmlFor='URL'>URL:</label>
    <input name='URL' value={form.URL} type='text' onChange={handleChange}/>

    <label htmlFor='description'>Description:</label>
    <input name='description' value={form.description} type='text' onChange={handleChange}/>

    <label htmlFor='completed_at'>Completed At:</label>
    <input name='completed_at' value={form.completed_at} type='date' onChange={handleChange}/>
    
    <label htmlFor='price_quoted'>Price Quoted:</label>
    <input name='price_quoted' value={form.price_quoted} type='text' onChange={handleChange}/>

    <label htmlFor='hours_quoted'>Hours Quoted:</label>
    <input name='hours_quoted' value={form.hours_quoted} type='text' onChange={handleChange}/>

    <label htmlFor='title'>Title:</label>
    <input name='title' value={form.title} type='text' onChange={handleChange}/>

    <label htmlFor='notes'>Notes:</label>
    <input name='notes' value={form.notes} type='text' onChange={handleChange}/>

    <label htmlFor='client_id'>Client: </label>
    <select name='client_id' value={form.client_id} onChange={handleChange}>
      <option value={''}>required</option>
      {clientsAvailable.map(client => <option key={client.id} value={client?.id}>{client?.client_name}</option>)}
    </select>

    <button type="submit">Submit</button>
  </form>
}
