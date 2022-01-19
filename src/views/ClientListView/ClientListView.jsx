import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ClientItem from '../../components/ClientItem/ClientItem.jsx'
import Title from '../../components/Title/Title.jsx'
import { getClients } from '../../services/clients.js'

export default function ClientListView() {
  const [loading, setLoading] = useState(true)
  const [clients, setClients] = useState([])

  useEffect(() => {
    getClients().then(setClients).finally(() => setLoading(false))
  }, [])

  if(loading) return <h1>Loading...</h1>

  return (
    <div>
      <Title pageTitle='clients' pageHeader='Clients' />
      {clients.map((client) => (
        <Link key={client.id} to={`/clients/${client.id}`}>
          <ClientItem key={client.id}  client={client}  />
        </Link>
      ))}
    </div>
  )
}
