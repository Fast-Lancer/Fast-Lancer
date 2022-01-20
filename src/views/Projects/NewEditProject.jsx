import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router-dom'
import ProjectForm from '../../components/ProjectForm.jsx'
import { createProject, getProjectNoClient, updateProject } from '../../services/projects.js'
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

  const { id } = useParams()

  useEffect(() => {
    if (!isCreate) {
      getProjectNoClient(id).then(proj => changeValue(proj, '')).then(setInitialValues).finally(() => setLoading(false))
    }
  }, [])

  const handleProject = async (form) => {
    try{
      const updatedProject = await (isCreate ? createProject(form) : updateProject(form))

      history.push(isCreate ? `/projects/${updatedProject[0].id}` : `/projects/${form.id}`)

    } catch(error) {
      throw new Error(error)
    }
  }

  return <div>
    {loading
      ? <h1>Loading...</h1>
      : <ProjectForm {...{ handleProject, isCreate, initialValues }}/>
    }
  </div>
}
