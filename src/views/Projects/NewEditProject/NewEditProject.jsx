import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router-dom'
import ProjectForm from '../../../components/ProjectForm/ProjectForm.jsx'
import Title from '../../../components/Title/Title.jsx'
import { getClients } from '../../../services/clients.js'
import { createProject, deleteProjectById, getProjectById,  updateProject } from '../../../services/projects.js'
import changeValue from '../../../utils/changeValue.js'

export default function NewEditProject() {
  const history = useHistory()
  const location = useLocation()
  const currentLocation = location.pathname
  const isCreate = currentLocation === '/projects/new'
  const [initialValues, setInitialValues] = useState({
    date_start: '', date_end: '', hourly_rate: '', hours_worked: '', URL: '', description: '', completed_at: '', price_quoted: '', hours_quoted: '', title: '', notes: '', client_id: '', user_id: ''
  })
  const title = isCreate ? 'New Project' : 'Edit Project'

  const [loading, setLoading] = useState(true)
  const [clientsAvailable, setClientsAvailable] = useState([{ client_name: '', id: '' }])

  const { id } = useParams()

  const handleProject = async (form) => {
    try{
      const project = await(isCreate ? createProject(form) : updateProject(form))

      history.push(isCreate ? `/projects/${project[0].id}` : `/projects/${form.id}`)

    } catch(err) {
      throw new Error(err)
    }
  }

  const handleDelete = () => {
    // setTimeout so /projects reloads with updated information after delete
    deleteProjectById(id).then(() => setTimeout(() => {history.replace('/projects')}, 100))
  }


  useEffect(() => {
    if (!isCreate) {
      getProjectById(id).then(proj => changeValue(proj, '')).then(setInitialValues).then(() => getClients()).then(setClientsAvailable).finally(() => setLoading(false))
    } else {
      getClients().then(setClientsAvailable).finally(() => setLoading(false))
    }
  }, [])

  return <div>
    <Title pageTitle={'new-edit project'} pageHeader={title}/> 
    {loading
      ? <h1>Loading...</h1>
      : <ProjectForm {...{ handleProject, clientsAvailable, initialValues, isCreate, handleDelete }}/>
    }
  </div>
}
