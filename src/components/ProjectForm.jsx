import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useUser } from '../context/UserContext.jsx'
import { getClients } from '../services/clients.js'
import { createProject, updateProject } from '../services/projects.js'

export default function ProjectForm() {

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [hourlyRate, setHourlyRate] = useState('')
  const [hoursWorked, setHoursWorked] = useState('')
  const [URL, setURL] = useState('')
  const [description, setDescription] = useState('')
  const [completedAt, setCompletedAt] = useState('')
  const [priceQuoted, setPriceQuoted] = useState('')
  const [hoursQuoted, setHoursQuoted] = useState('')
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [clientId, setClientId] = useState('')
  const [clientsAvailable, setClientsAvailable] = useState([{ client_name: '', id: '' }])
  const { user } = useUser()
  const history = useHistory()

  useEffect(() => {
    getClients().then(setClientsAvailable)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    createProject({ date_start: startDate, date_end: endDate, hourly_rate: hourlyRate, hours_worked: hoursWorked, client_id: Number(clientId), URL, description, completed_at: completedAt, price_quoted: priceQuoted, hours_quoted: hoursQuoted, title, notes, user_id: user.id }).then(project => history.push(`/projects/${project[0].id}`))
  }

  return <form onSubmit={handleSubmit}>
    <label htmlFor='startDate'>Start Date:</label>
    <input name='startDate' value={startDate} type='date' onChange={({ target }) => setStartDate(target.value)}/>

    <label htmlFor='endDate'>End Date:</label>
    <input name='endDate' value={endDate} type='date' onChange={({ target }) => setEndDate(target.value)}/>

    <label htmlFor='hourlyRate'>Hourly Rate:</label>
    <input name='hourlyRate' value={hourlyRate} type='text' onChange={({ target }) => setHourlyRate(target.value)}/>

    <label htmlFor='hoursWorked'>Hours Worked:</label>
    <input name='hoursWorked' value={hoursWorked} type='text' onChange={({ target }) => setHoursWorked(target.value)}/>

    <label htmlFor='URL'>URL:</label>
    <input name='URL' value={URL} type='text' onChange={({ target }) => setURL(target.value)}/>

    <label htmlFor='description'>Description:</label>
    <input name='description' value={description} type='text' onChange={({ target }) => setDescription(target.value)}/>

    <label htmlFor='completedAt'>Completed At:</label>
    <input name='completedAt' value={completedAt} type='date' onChange={({ target }) => setCompletedAt(target.value)}/>
    
    <label htmlFor='priceQuoted'>Price Quoted:</label>
    <input name='priceQuoted' value={priceQuoted} type='text' onChange={({ target }) => setPriceQuoted(target.value)}/>

    <label htmlFor='hoursQuoted'>Hours Quoted:</label>
    <input name='hoursQuoted' value={hoursQuoted} type='text' onChange={({ target }) => setHoursQuoted(target.value)}/>

    <label htmlFor='title'>Title:</label>
    <input name='title' value={title} type='text' onChange={({ target }) => setTitle(target.value)}/>

    <label htmlFor='notes'>Notes:</label>
    <input name='notes' value={notes} type='text' onChange={({ target }) => setNotes(target.value)}/>

    <label htmlFor='client'>Client: </label>
    <select name='client' value={clientId} onChange={({ target }) => setClientId(target.value)}>
      {clientsAvailable.map(client => <option key={client.id} value={client?.id}>{client?.client_name}</option>)}
    </select>

    <button type="submit">Submit</button>
  </form>
}
