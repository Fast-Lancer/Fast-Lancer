import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ClientDetail from '../../components/ClientDetail/ClientDetail.jsx'
import Title from '../../components/Title/Title.jsx'
import { getClient, getClients } from '../../services/clients.js'
import { getProjectsByClient } from '../../services/projects.js'

export default function ClientDetailView() {
  const { id } = useParams()
  const [client, setClient] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getClient(id), getProjectsByClient(id)])
      .then(([client, projects]) => {
        projects = projects ?? []
        setClient({ ...client, projects })
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      {
        loading
          ? <h1>Loading...</h1>
          : <div>
            <Title pageTitle='client detail' pageHeader={client.client_name} />
            <ClientDetail client={client} />
          </div>
      }
    </div>
  )
}
