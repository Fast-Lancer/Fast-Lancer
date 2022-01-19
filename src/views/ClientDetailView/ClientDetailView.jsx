import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ClientDetail from '../../components/ClientDetail/ClientDetail.jsx'
import Title from '../../components/Title/Title.jsx'
import { getClient } from '../../services/clients.js'

export default function ClientDetailView() {
  const { id } = useParams()
  const [client, setClient] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getClient(id)
      .then(setClient)
      .catch(e => console.error(e))
      .finally(() => setLoading(false))
  }, [])
  
  return (
    <div>
      {
        loading
          ? <h1>Loading...</h1>
          : <div>
            <Title pageTitle='client detail' pageHeader={client.name} />
            <ClientDetail client={client}/>
          </div>
      }
    </div>
  )
}
