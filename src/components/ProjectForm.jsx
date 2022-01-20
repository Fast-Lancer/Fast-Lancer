import { useEffect, useState } from 'react'
import { getClients } from '../services/clients.js'

export default function ProjectForm() {

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [hourlyRate, setHourlyRate] = useState(null)
  const [hoursWorked, setHoursWorked] = useState(null)
  const [URL, setURL] = useState(null)
  const [description, setDescription] = useState(null)
  const [completedAt, setCompletedAt] = useState(null)
  const [priceQuoted, setPriceQuoted] = useState(null)
  const [hoursQuoted, setHoursQuoted] = useState(null)
  const [title, setTitle] = useState(null)
  const [notes, setNotes] = useState(null)
  const [client, setClient] = useState(null)
  const [clientsAvailable, setClientsAvailable] = useState([{ client_name: '', id: '' }])

  useEffect(() => {
    getClients().then(setClientsAvailable)
  }, [])

  const handleSubmit = () => {
    console.log({ startDate, endDate, hourlyRate, hoursWorked, completedAt, URL, description, priceQuoted, hoursQuoted, title, notes, client })
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
    <select name='client' value={client} onChange={({ target }) => setClient(target.value)}>
      <option value={null}>Unspecified</option>
      {clientsAvailable.map(client => <option key={client.id} value={client?.id}>{client?.client_name}</option>)}
    </select>

    <button type="submit">Submit</button>
  </form>
}
