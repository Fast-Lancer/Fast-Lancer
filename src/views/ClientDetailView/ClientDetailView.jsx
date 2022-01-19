import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ClientDetail from '../../components/ClientDetail/ClientDetail.jsx'

export default function ClientDetailView() {
  const { id } = useParams() // We can use something other than id if needed

  useEffect(() => {
    // get details
  }, [])
  
  // render ClientDetail with data from state
  return (
    <div>
      ClientDetailView
      <ClientDetail />
    </div>
  )
}
