import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router-dom'
import Button from '../../components/Button/Button.jsx'
import ProjectForm from '../../components/ProjectForm/ProjectForm.jsx'
import { getClients } from '../../services/clients.js'
import { createProject, deleteProjectById, getProjectNoClient, updateProject } from '../../services/projects.js'
import changeValue from '../../utils/changeValue.js'

export default function NewEditProject() {
  const history = useHistory()
  const location = useLocation()
  const currentLocation = location.pathname
  const isCreate = currentLocation === '/projects/new'
  const [initialValues, setInitialValues] = useState({
    date_start: '', date_end: '', hourly_rate: '', hours_worked: '', URL: '', description: '', completed_at: '', price_quoted: '', hours_quoted: '', title: '', notes: '', client_id: '', user_id: ''
  })

  const [loading, setLoading] = useState(true)
  const [clientsAvailable, setClientsAvailable] = useState([{ client_name: '', id: '' }])

  const { id } = useParams()

  const handleProject = async (form) => {
    try{
      let project
      if(isCreate) {
        project = await createProject(form)
      } else {
        project = await updateProject(form)
      }

      history.push(isCreate ? `/projects/${project[0].id}` : `/projects/${form.id}`)

    } catch(e) {
    }
  }

  const handleClick = () => {
    // setTimeout so /projects reloads with updated information after delete
    deleteProjectById(id).then(() => setTimeout(() => {history.replace('/projects')}, 100))
  }

  useEffect(() => {
    if (!isCreate) {
      getProjectNoClient(id).then(proj => changeValue(proj, '')).then(setInitialValues)
    }
    getClients().then(setClientsAvailable).finally(() => setLoading(false))
  }, [])

  return <div>
    {loading
      ? <h1>Loading...</h1>
      : <ProjectForm {...{ handleProject, clientsAvailable, initialValues }}/>
    }
    {!isCreate && <Button handleClick={handleClick} buttonText={'Delete'}/>}
  </div>
}
